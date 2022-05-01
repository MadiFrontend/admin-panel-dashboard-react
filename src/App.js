//Components

import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//Styles
import "./app.css";

function App() {
    return (
        <BrowserRouter>
            <TopBar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="users" element={<UserList />}></Route>
                    <Route path="user/:userId" element={<User/>}></Route>
                    <Route path="/newUser" element={<NewUser/>}></Route>

                    <Route path="products" element={<ProductList />}></Route>
                    <Route path="product/:productId" element={<Product/>}></Route>
                    <Route path="/newproduct" element={<NewProduct/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
