import React from 'react'
import SignUpFormTypes from '@/app/types/SignUpForm_types';

const SignUp = async (_state: any,FormData:SignUpFormTypes) => {

    // validation
    const validation = SignUpFormSchema.safeParse({
        name: FormData.name,
        email: FormData.email,
        password: FormData.password

    })
    if (!validation.success){
        return {
            errors: validation.error.flatten().fieldErrors,
        }
    }
}

export default SignUp