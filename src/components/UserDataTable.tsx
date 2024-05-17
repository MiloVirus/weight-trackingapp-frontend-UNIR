import { useSelector } from "react-redux";
import { RootState } from "../store";
import "../styles/UserDataTable.css";
import { useAppDispatch } from "../hooks/reduxHooks";
import { deleteUserData } from "../store/UserDataSlice";

const UserDataTable = () => {

const dispatch = useAppDispatch()
const userData = useSelector((state: RootState) => state.userData.data);

const handleDeleteData = (data:number) => 
    {
        dispatch(deleteUserData(data))
    }


  return (
    <div className="tableContainer">
      <table className="tableContainer__table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight(kg)</th>
            <th>BMI</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.date}</td>
                <td>
                  <b>{element.weight}</b>(kg)
                </td>
                <td>21.60</td>
                <td>
                  <button onClick={()=>handleDeleteData(element.id)} className="tableContainer__button">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
