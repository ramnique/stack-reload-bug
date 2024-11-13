'use server';
import { stackServerApp } from '@/stack';

export async function getUserDisplayName() {
    const user = await stackServerApp.getUser();
    if (!user) {
        throw new Error('User not found');
    }

    return {
        displayName: user.displayName,
    };
}