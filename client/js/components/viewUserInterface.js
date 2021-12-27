import viewHome from "./viewHome.js";
import Data from "../data.js";

export default  class viewUserInterface{
    constructor(name){
        this.customerNam = name;
        this.body = document.querySelector('body');
        this.header();
        this.main();
        this.footer();
        this.mainContainer = document.querySelector('main');

        this.userBtn = document.querySelector('.user-link');
        this.logOutBtn = document.querySelector('.logout-link');

        this.userBtn.addEventListener('click',this.handleUserBtn);
        this.logOutBtn.addEventListener('click',this.handleLogOutBtn);

        this.allCards();
        this.cardsContainer = document.querySelector('.cards-container');

        this.data = new Data();
        this.asyncHandler();

        this.table = document.querySelector('.tbody');
    }


    asyncHandler =async()=>{
        try{
            await this.insertTableData();
            await this.insertAllCards();

        }catch(e){
            console.log(e);
        }
    }

    header=()=>{
        this.body.innerHTML = '';
        this.body.innerHTML += 
        `
        <header>
            <section class="header-container">
                <a href="#" class="brand"><h2>Parc Auto</h2></a>

                <nav>
                    <a href="#" class="user-link"><i class="far fa-user"></i></a>
                    <a href="#" class="logout-link"><i class="fas fa-sign-out-alt"></i></a>
                </nav>
            </section>
        </header>
        `
    }

    main=()=>{
        this.body.innerHTML +=
        `
        <main>
            <section class="inchirieri">
                <h1>Ultimele 5 inchirieri</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nr:</th>
                            <th>Client</th>
                            <th>Marca</th>
                            <th>Pret</th>
                            <th>Perioada</th>
                        </tr>
                    </thead>
                    <tbody class ="tbody">
                    </tbody>
                </table>
            </section>
        </main>
        `;
    }

    footer=()=>{
        this.body.innerHTML +=
        `
        <footer>
            <p>Made by <a href="#">Oancea Ilie</a></p>
        </footer>
        `;
    }

    allCards=()=>{
        this.mainContainer.innerHTML +=
        `
        <section class="all-cards">
            <section class="title">
                <h1>Portofoliu Masini</h1>
                <select>
                    <option>Populare</option>
                    <option>An</option>
                    <option>Pret</option>
                    <option>Marca</option>
                </select>
            </section>

            <section class="cards-container">

            </section>
        </section>
        `;
        
    }

    insertAllCards= async (obj)=>{

        this.cardsContainer.innerHTML = '';
        let cars = await this.data.getAllCars();

        if(cars){
            for( let e of cars){

                this.createCard(e);
            }
        }
        
    }

    insertTableData = async()=>{
        
        let obj = await this.data.getAllAssociation();
        let nr= 1;

        if(obj){
            for(let e of obj){
                this.createTableTr(e,nr);
                nr++;
            }
        }

    }
    
    createTableTr=(obj, nr)=>{
        this.table.innerHTML +=
        `
        <tr>
            <td>${nr}</td>
            <td>${obj.CustomersAssociation.name}</td>
            <td>${obj.CarsAssociation.marca}</td>
            <td>${obj.CarsAssociation.pret}$</td>
            <td>${obj.perioada} luni</td>
        </tr>
        `
    } 

    createCard=(obj)=>{
        this.cardsContainer.innerHTML +=
        `
        <section class="card">
            <img src="img/bmw.jpg" alt="">
            <section class="marca">
                <img src="img/volan.png"> 
                <span>${obj.marca}</span>
            </section>
            <section class="model">
                <img src="img/key.png">
                <span>${obj.model}</span>
            </section>
            <section class="an">
                <img src="img/an.png">
                <span>${obj.an}</span>
            </section>
            <section class="pret">
                <img src="img/pret.png">
                <span>${obj.pret}</span>
            </section>
            <select class="perioada-inchiriere">
                <option>1 luna</option>
                <option>3 luni</option>
                <option>6 luni</option>
            </select>
            <section class="card-btns">
                <a href="#" class="descriere-btn">Descriere</a>
                <a href="#" class="inchiriere-btn">Inchiriere</a>
            </section>
        </section>
        `
    }


    handleUserBtn=()=>{
        console.log('NEIMPLEMENTAT INCA ');
    }

    handleLogOutBtn=()=>{
        let nou = new viewHome();
    }

}