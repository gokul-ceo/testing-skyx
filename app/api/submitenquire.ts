'use server'

export async function submitenquire(formData:FormData){
    const formObject:any = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log("Data submitted: ",formObject)
}