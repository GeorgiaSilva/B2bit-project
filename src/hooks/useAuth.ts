import { useState, useEffect } from 'react';
import { loginRequest, ProfileRequest } from '@/api/b2bitApi';

interface UserProfile {
    email: string;
    name: string;
    avatar: string;
}

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(
localStorage.getItem('token'));
    const [profile, setProfile] = useState<UserProfile | null>(JSON.parse(localStorage.getItem('profile') || 'null'));

    useEffect(() => {
    if (token) {
        getprofile();
    }
    }, [token]);

    const login = async (username: string, password: string) => {
        try {
            const res = await loginRequest(username, password);
            const accessToken = res.data.tokens.access;
            setToken(accessToken);
            localStorage.setItem('token', accessToken);
            return accessToken;
        } catch (error) {
            throw new Error('Invalid email or password');
        }
    };

    const getprofile = async () => {
        if (!token) return;
        const res = await ProfileRequest(token);
        const { email, name, avatar } = res.data;
        const userProfile: UserProfile = { 
            email, 
            name, 
            avatar: avatar.high 
        };
        setProfile(userProfile);
        localStorage.setItem('profile', JSON.stringify(userProfile));
    };

    const logout = () => {
        setToken(null);
        setProfile(null);
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
    };

  return { token, profile, login, getprofile, logout };
};