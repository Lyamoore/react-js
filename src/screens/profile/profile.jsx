import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeNameAction,
  toggleUserNameAction,
} from "../../store/profile/actions";
import {
  userNameSelector,
  showUserNameSelector,
} from "../../store/profile/selectors";
import { Profile } from "../../components/profile";

import "./profile.css";

export const ProfileContainer = () => {
  const [name, setName] = useState("");

  const userName = useSelector(userNameSelector);
  const showUserName = useSelector(showUserNameSelector);

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCheckbox = useCallback(() => {
    dispatch(toggleUserNameAction());
  }, [dispatch]);

  const handleClick = useCallback(() => {
    dispatch(changeNameAction({ name }));
    setName("");
  }, [dispatch, name]);

  return (
    <div className="App-main App-profile">
      <Profile
        name={name}
        showName={showUserName}
        userName={userName}
        handleChangeName={handleChangeName}
        handleChangeCheckbox={handleChangeCheckbox}
        handleClick={handleClick}
      />
    </div>
  );
};
