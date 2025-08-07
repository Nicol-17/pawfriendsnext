import { supabase } from "@/lib/supabaseClient";


export async function signup(credentials: Record<string, string>) {
  const { fullname, email, phone, birthdate, country, password } = credentials;

 
  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  
    
  });
   const {error: userError} = await supabase.from('profiles').insert({
    id: signupData.user?.id,
    fullname,
    phone,
    birthdate,
    country
   })

  if (userError) {
    throw new Error(userError.message);
  }

  if (signupError) {
    throw new Error(signupError.message);
  }

  if (!signupData.user) {
    throw new Error("User data is missing after signup.");
  }
  

  return { message: "User created successfully", user: signupData.user };
}


export async function loginUser(credentials: Record<string, string>) {
  const { email, password } = credentials;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return {
    message: "Login successful",
    session: data.session,
    user: data.user
  };

}

export async function logoutUser() {
  const {error} = await supabase.auth.signOut()
  if(error) {
    throw new Error(error.message); 
  }
  
}