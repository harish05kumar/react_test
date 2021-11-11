import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

const Home = ()=> {

    

    
    return (
        <div>
        <Header/>
        <div className="container">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Harish</td>
                        <td>harishkumar@hotmail.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Harish</td>
                        <td>rajat@hotmail.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pratk</td>
                        <td>pratik@hotmail.com</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>neeraj</td>
                        <td>neeraj@hotmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Footer/>
    </div>
    );
    
}

export default Home;