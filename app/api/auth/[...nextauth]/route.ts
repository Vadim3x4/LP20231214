import NextAuth from 'next-auth';

import { authConfig } from '@/configs/auth';
console.log('>>> 1');
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
