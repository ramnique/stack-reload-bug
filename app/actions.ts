'use server';
import { stackServerApp } from '@/stack';

export async function getUserName() {
    const user = await stackServerApp.getUser();
    if (!user) {
        throw new Error('User not found');
    }

    return {
        userEmail: user.displayName,
    };
}