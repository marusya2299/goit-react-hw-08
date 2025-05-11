import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';
import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}
