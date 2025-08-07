'use client';

import { useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { useTranslations } from 'next-intl';
import { deleteCookie } from 'cookies-next';
import {logoutUser} from '@/Services/auth';

function LogoutButton() {
     const t = useTranslations("dashboard");
    const router = useRouter();

    const handleLogout = async() => {
        try{
            await logoutUser();
            deleteCookie('authToken');
            router.push('/Login'); 
    
        }catch (error){
            console.error("Failed to log out:", error);
            
        }        
        
    };

    return(
        <Button onClick={handleLogout} className='text-red-500'>
           {t('buttonNavDashboard')}

        </Button>
    )
}

export default LogoutButton;