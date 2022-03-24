import AddButton from "../AddButton/AddButton";
import CleanFilter from "../CleanFilter/CleanFilter";
import Filter from "../Filter/Filter";
import FilterByActivity from "../Filter/FilterByActivity";
import OrderBtn from "../OrderBtn/OrderBtn";
import Search from "../Search/Search";
import s from "./NavBar.module.css";



function NavBar(){
    return(
        <div className={s.navContainer}>
            <Search></Search>
            <Filter></Filter>
            <FilterByActivity></FilterByActivity>
            <OrderBtn></OrderBtn>
            <CleanFilter></CleanFilter>
            <AddButton></AddButton>
        </div>
    )
}

export default NavBar;