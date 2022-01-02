
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

    async getCustomerById(id){

        try{
            const rez = await this.api(`http://localhost:3000/api/customers/${id}`);

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){

            console.log(e);

        }
        
    }

    async getRentailsByCustomerId(id){

        try{
            const rez = await this.api(`http://localhost:3000/api/rentals/by-customer-id/${id}`);

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){

            console.log(e);

        }
        
    }

    async getAllCustomers(){

        try{
            const rez = await this.api('http://localhost:3000/api/customers');

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){

            console.log(e);

        }
        
    }

    async getAllAssociation(){

        try{
            const rez = await this.api('http://localhost:3000/api/rentals/join');

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){

            console.log(e);

        }
        
    }

    async createCustomer(newCustomer){

        try{
            const response = await this.api(`http://localhost:3000/api/customers/add`,'POST', newCustomer);
            
            if(response.status==200){
                return response.json();

            }else{

                return null;
            }

         }catch(e){

            console.log(e);

         }
    }


    async getCarsSort(sort){

        try{
            const rez = await this.api(`http://localhost:3000/api/cars/sort/${sort}`);

            if(rez.status == 200){
                return rez.json();
            }else{
                return null;
            }

        }catch(e){

            console.log(e);

        }
        
    }

    async updatePassword(newPassword,id){

        try{
            const rez = await this.api(`http://localhost:3000/api/customers/${id}`,'PUT', newPassword);

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