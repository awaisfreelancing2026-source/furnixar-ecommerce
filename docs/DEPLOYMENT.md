# Furnixar E-Commerce - Deployment Guide

## 🚀 Vercel Deployment (Frontend)

### Prerequisites
1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Integration**: Connect your GitHub account

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy Frontend
```bash
cd frontend
vercel --prod
```

### Step 4: Configure Build Settings
When prompted, configure:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 5: Set Environment Variables (Optional)
```bash
vercel env add REACT_APP_API_URL
# Enter: https://your-backend-url.com/api
```

## 🔧 Backend Deployment (Railway/Render)

### Option 1: Railway (Recommended)
1. Sign up at [railway.app](https://railway.app)
2. Connect GitHub repository
3. Add MongoDB database
4. Set environment variables from `.env.example`
5. Deploy automatically

### Option 2: Render
1. Sign up at [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start:prod`
5. Add MongoDB database
6. Set environment variables

## 📊 Environment Variables Setup

### Frontend (.env.local)
```env
REACT_APP_API_URL=https://your-backend-url.com/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-key
```

### Backend (.env)
```env
NODE_ENV=production
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-production-jwt-secret
STRIPE_SECRET_KEY=sk_live_your-stripe-secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🔄 CI/CD Pipeline

GitHub Actions will automatically deploy your frontend when you push to the main branch.

### Manual Deployment
```bash
# Frontend
npm run deploy:frontend

# Backend (after Railway setup)
git push origin main
```

## 🌐 Domain Setup

1. **Vercel**: Add custom domain in Vercel dashboard
2. **Backend**: Configure domain in Railway/Render
3. **Update Frontend**: Set `REACT_APP_API_URL` to production backend URL

## 📈 Monitoring

- **Vercel Analytics**: Built-in analytics for frontend
- **Railway/Render Logs**: Check deployment logs
- **MongoDB Atlas**: Monitor database performance

## 🆘 Troubleshooting

### Common Issues:
1. **Build Fails**: Check Node.js version (18+)
2. **Environment Variables**: Ensure all required vars are set
3. **CORS Issues**: Update `FRONTEND_URL` in backend
4. **Database Connection**: Verify MongoDB URI format