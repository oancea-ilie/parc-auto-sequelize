
export default class Data{
    constructor(){

    }

    api(path, method ='GET', body= null){
        let url = path;

        const options={
            method,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            }
        };

        if(body !=null){
            options.body = JSON.stringify(body);
        }

        return fetch(url,options);

    }

    async getAllCars(){

        try{
            const rez = await this.api('http://localhost:3000/api/cars');

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){

            console.log(e);

        }
        
    }
}