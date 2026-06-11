# Litigation Learning & Case Review Management System

An enterprise-grade SaaS platform for legal professionals, law students, and litigation support teams to study all major types of litigation through real-world cases, court rulings, supporting evidence, and legal analysis.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENTS                                  │
│         Browser / Mobile / Desktop                               │
└────────────────────────┬────────────────────────────────────────┘
                         │ HTTPS / TLS 1.3
┌────────────────────────▼────────────────────────────────────────┐
│                      FRONTEND                                    │
│              Next.js 14 (App Router)                             │
│         TypeScript · Tailwind CSS · Zustand                      │
│                  Port 3000                                       │
└────────────────────────┬────────────────────────────────────────┘
                         │ REST API
┌────────────────────────▼────────────────────────────────────────┐
│                      BACKEND                                     │
│                  NestJS + TypeScript                             │
│         JWT Auth · RBAC · Rate Limiting · Swagger               │
│                  Port 3001                                       │
└────┬──────────────┬──────────────┬──────────────┬───────────────┘
     │              │              │              │
┌────▼────┐  ┌──────▼─────┐ ┌────▼────┐ ┌───────▼──────┐
│PostgreSQL│  │   Redis     │ │Elastic  │ │ Anthropic AI │
│ (Prisma) │  │(Cache/Sess) │ │ Search  │ │  (Claude)    │
│ Port 5432│  │ Port 6379   │ │Port 9200│ │   API        │
└──────────┘  └────────────┘ └─────────┘ └──────────────┘
```

---

## Features

### Core Platform
- **35 Litigation Types** — Complete coverage from Civil to Cybersecurity
- **175+ Landmark Cases** — 5 real-world cases per litigation category
- **Court Ruling Analysis** — Judicial reasoning, evidence analysis, alternative outcomes
- **Quiz & Assessment Engine** — 5 quiz types including AI-generated quizzes
- **Advanced Search** — Full-text search across all content with filters
- **Analytics Dashboard** — Progress tracking, score trends, activity heatmaps
- **Document Management** — Upload, categorize, and control access to court documents
- **AI Integration** — Claude-powered case summaries, quiz generation, ruling explanations

### Security
- JWT + Refresh token authentication
- Multi-Factor Authentication (TOTP)
- OAuth 2.0 (Google, Microsoft)
- Role-Based Access Control (RBAC)
- AES-256 encryption at rest, TLS 1.3 in transit
- Rate limiting, CSRF, XSS, and SQL injection protection
- Complete audit logging
- Document watermarking and download controls

### User Roles
| Role | Capabilities |
|------|-------------|
| Super Admin | Full platform access, system configuration |
| Admin | Content management, user management, reports |
| Reviewer | Access all materials, complete quizzes, add notes |
| Student | Read materials, take quizzes |

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React 18, TypeScript, Tailwind CSS |
| State Management | Zustand |
| Backend | NestJS, TypeScript |
| ORM | Prisma |
| Database | PostgreSQL 15 |
| Cache / Sessions | Redis 7 |
| Search | Elasticsearch 8 |
| AI | Anthropic Claude API |
| Auth | JWT, Passport.js, Speakeasy (TOTP) |
| API Documentation | Swagger / OpenAPI 3.0 |
| Containerization | Docker + Docker Compose |

---

## Prerequisites

- Node.js >= 20.x
- npm >= 10.x
- Docker & Docker Compose
- PostgreSQL 15 (or use Docker)
- Redis 7 (or use Docker)

---

## Quick Start

### 1. Clone the repository
```bash
git clone <repository-url>
cd litigation-platform
```

### 2. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your actual values
```

### 3. Start infrastructure services
```bash
docker-compose up -d postgres redis elasticsearch
```

### 4. Backend setup
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
npm run start:dev
# Backend runs on http://localhost:3001
# Swagger docs: http://localhost:3001/api/docs
```

### 5. Frontend setup
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:3000
```

### 6. Access the application
- **App**: http://localhost:3000
- **API Docs**: http://localhost:3001/api/docs
- **Default Admin**: admin@litilearn.com / Admin123!

---

## Full Docker Deployment

```bash
# Build and start all services
docker-compose up --build

# Stop services
docker-compose down

# Reset database
docker-compose down -v && docker-compose up --build
```

---

## Database Schema

### Core Models

```
User ──── UserProgress ──── LitigationType ──── Case
  │              │                                 │
  │         QuizAttempt ──── Quiz ─── Question     │
  │                                                │
  ├── Bookmark ────────────────────────────────────┘
  ├── Note ────────────────────────────────────────┘
  └── AuditLog                     └── Document
                                       └── Party
```

### User Roles
- `SUPER_ADMIN` — System administrator
- `ADMIN` — Content and user management
- `REVIEWER` — Review materials and assessments
- `STUDENT` — Learning access

---

## API Endpoints

### Authentication (`/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | Login with email/password |
| POST | `/auth/refresh` | Refresh access token |
| POST | `/auth/logout` | Logout and invalidate token |
| POST | `/auth/mfa/setup` | Setup MFA |
| POST | `/auth/mfa/verify` | Verify MFA token |

### Litigation Types (`/litigation`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/litigation` | List all litigation types |
| GET | `/litigation/:slug` | Get litigation type by slug |
| POST | `/litigation` | Create (Admin) |
| PATCH | `/litigation/:id` | Update (Admin) |

### Cases (`/cases`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cases` | List cases (paginated, filterable) |
| GET | `/cases/:id` | Get case details |
| POST | `/cases` | Create case (Admin) |
| PATCH | `/cases/:id` | Update case (Admin) |
| POST | `/cases/:id/bookmark` | Toggle bookmark |
| POST | `/cases/:id/notes` | Save note |

### Quizzes (`/quiz`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/quiz` | List quizzes |
| GET | `/quiz/:id` | Get quiz with questions |
| POST | `/quiz` | Create quiz (Admin) |
| POST | `/quiz/:id/attempt` | Submit quiz attempt |
| GET | `/quiz/attempts/my` | Get my quiz history |

### AI (`/ai`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/ai/summarize-case` | Generate case summary |
| POST | `/ai/explain-ruling` | Explain court ruling |
| POST | `/ai/generate-quiz` | Generate quiz questions |
| POST | `/ai/recommend-cases` | Get case recommendations |

### Analytics (`/analytics`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/analytics/dashboard` | User dashboard stats |
| GET | `/analytics/progress` | Detailed progress by category |
| GET | `/analytics/admin` | Platform-wide stats (Admin) |

---

## Security Architecture

```
Request → Rate Limiter → CORS → Helmet Headers → JWT Guard
                                                      │
                                              RBAC Guard
                                                      │
                                          Audit Log Interceptor
                                                      │
                                              Controller
                                                      │
                                               Service
                                                      │
                                         Prisma (parameterized queries)
```

### Security Measures
- **Rate Limiting**: 100 req/min per IP, 10 req/min for auth endpoints
- **JWT**: 15-minute access tokens, 7-day refresh tokens (stored in Redis)
- **MFA**: TOTP-based two-factor authentication
- **Password**: bcrypt with 12 salt rounds
- **Headers**: Helmet sets CSP, HSTS, X-Frame-Options, etc.
- **Validation**: class-validator on all input DTOs
- **SQL Injection**: Prisma's parameterized queries
- **XSS**: Input sanitization + Content Security Policy
- **Audit Trail**: Every write operation logged to AuditLog table

---

## Litigation Types Covered

| # | Type | Category |
|---|------|----------|
| 1 | Civil Litigation | Civil |
| 2 | Commercial Litigation | Commercial |
| 3 | Contract Litigation | Civil |
| 4 | Employment Litigation | Employment |
| 5 | Labor Litigation | Employment |
| 6 | IP Litigation | Intellectual Property |
| 7 | Patent Litigation | Intellectual Property |
| 8 | Trademark Litigation | Intellectual Property |
| 9 | Copyright Litigation | Intellectual Property |
| 10 | Product Liability | Civil |
| 11 | Securities Litigation | Commercial |
| 12 | Antitrust Litigation | Commercial |
| 13 | Environmental Litigation | Regulatory |
| 14 | Construction Litigation | Commercial |
| 15 | Real Estate Litigation | Civil |
| 16 | Insurance Litigation | Civil |
| 17 | Tax Litigation | Regulatory |
| 18 | Bankruptcy Litigation | Commercial |
| 19 | Probate Litigation | Civil |
| 20 | Family Litigation | Civil |
| 21 | Medical Malpractice | Civil |
| 22 | Personal Injury | Civil |
| 23 | Class Action Litigation | Civil |
| 24 | Mass Tort Litigation | Civil |
| 25 | Criminal Litigation | Criminal |
| 26 | Constitutional Litigation | Constitutional |
| 27 | Human Rights Litigation | Constitutional |
| 28 | International Litigation | Commercial |
| 29 | Regulatory Litigation | Regulatory |
| 30 | Government Investigations | Criminal |
| 31 | White Collar Crime | Criminal |
| 32 | Cybersecurity Litigation | Regulatory |
| 33 | Privacy Litigation | Regulatory |
| 34 | Data Protection Litigation | Regulatory |
| 35 | Consumer Protection | Other |

---

## Development Roadmap

### Phase 1 — MVP (Months 1-3)
- [x] Core backend with authentication and RBAC
- [x] Litigation library with 35 categories
- [x] 175 seeded landmark cases
- [x] Basic quiz engine
- [x] Dashboard and analytics

### Phase 2 — Enhancement (Months 4-6)
- [ ] AI-powered quiz generation (Claude integration)
- [ ] Document upload and management
- [ ] Advanced search with Elasticsearch
- [ ] Team/organization management
- [ ] Learning paths

### Phase 3 — Enterprise (Months 7-9)
- [ ] SSO/SAML integration
- [ ] Compliance reporting (MCLE tracking)
- [ ] Mobile app (React Native)
- [ ] Video/audio materials support
- [ ] API for external integrations

### Phase 4 — Scale (Months 10-12)
- [ ] Multi-tenant architecture
- [ ] Custom white-labeling
- [ ] Advanced AI features (case prediction, argument analysis)
- [ ] Integration with legal research platforms

---

## Cloud Infrastructure (Production)

```
Route 53 → CloudFront CDN → ALB
                              │
              ┌───────────────┼───────────────┐
              │               │               │
         ECS (Frontend)  ECS (Backend)   ECS (Workers)
              │               │               │
         RDS PostgreSQL    ElastiCache    OpenSearch
         (Multi-AZ)        Redis           Service
                               │
                          S3 (Documents)
                          KMS (Encryption)
```

### Estimated Monthly Costs (AWS, production, 1000 users)
| Service | Cost |
|---------|------|
| RDS PostgreSQL (db.t3.medium, Multi-AZ) | $150 |
| ECS Fargate (2 services) | $120 |
| ElastiCache Redis (cache.t3.micro) | $25 |
| OpenSearch (t3.small) | $50 |
| CloudFront + ALB | $30 |
| S3 (document storage) | $20 |
| **Total** | **~$395/month** |

---

## Scalability Plan

- **Horizontal scaling**: ECS auto-scaling based on CPU/memory
- **Database read replicas**: For analytics queries
- **Redis caching**: Litigation types and popular cases cached
- **CDN**: Static assets and documents via CloudFront
- **Background jobs**: Bull queues for AI generation and email
- **Target**: 10,000 concurrent users, 10M documents

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m 'Add my feature'`
4. Push to branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## License

Proprietary — All rights reserved.

---

## Support

For technical support or feature requests, please open an issue in the repository.
