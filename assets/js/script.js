function useForm(useIt){
    let form = document.getElementById("form");
    let social = document.getElementById("social");

    let useForm = document.getElementById("useForm");
    let useSocial = document.getElementById("useSocial");
    if (useIt){
        social.classList.remove("active");
        form.classList.add("active");

        useForm.classList.remove("active");
        useSocial.classList.add("active");
        
    }else{
        form.classList.remove("active");
        social.classList.add("active");

        useSocial.classList.remove("active");
        useForm.classList.add("active");
    }
}
