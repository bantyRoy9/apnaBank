export const hideAlert =()=>{
    // const load = document.querySelector('.loading')
    const el = document.querySelector('.alert');
    if(el) el.parentElement.removeChild(el);
    const el1 = document.querySelector('.loading');
    if(el1) el1.parentElement.removeChild(el1);
};

export const showAlert = (type,msg)=>{
    hideAlert();
    const markup = `<div className="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin',markup)
    window.setTimeout(hideAlert,5000);
};

export const transferAlert= (type,msg,amt)=>{
    hideAlert()
    const success = `<div className = "alert alert--${type}">${msg} &rarr; ${amt}</div>`
    document.querySelector('body').insertAdjacentHTML('afterbegin',success)
    window.setTimeout(hideAlert,4000)
}

export const loader = () =>{
    hideAlert();
    const loa = `
    <div className = "loading">
        <div className= "ball"></div>
        <div className= "ball"></div>
        <div className = "ball"></div>
        <span>Loading... </span>
    </div> 
    `
    document.querySelector('body').insertAdjacentHTML('afterbegin',loa)
    window.setTimeout(hideAlert,5000)
}