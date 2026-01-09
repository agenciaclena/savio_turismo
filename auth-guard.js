const sb = supabase.createClient(
  "https://ghkfeobnrfvqwzuliqfz.supabase.co",
  "sb_publishable_R-eenS9xurRgnrqDR9kz0Q_kJonEi7t"
);

(async()=>{
  const { data:{session} } = await sb.auth.getSession();
  if(!session){
    location.replace("login.html");
  }
})();
