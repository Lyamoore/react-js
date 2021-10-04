import {
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { nameSelector, showNameSelector } from "../../store/profile/selectors";
import { exitFirebaseThunkAction } from "../../store/authenticated/action";
import { uidSelector } from "../../store/authenticated/selectors";
import {
  changeNameWithFirebase,
  initNameTracking,
  toggleNameAction,
} from "../../store/profile/actions";

import "./profile.css";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(nameSelector);
  const showName = useSelector(showNameSelector);
  const uid = useSelector(uidSelector);

  useEffect(() => {
    dispatch(initNameTracking(uid));
  }, [dispatch, uid]);

  const handleToggleName = useCallback(() => {
    dispatch(toggleNameAction());
  }, [dispatch]);

  const handleChangeName = (e) => {
    const changeName = e.target.value;
    dispatch(changeNameWithFirebase({ changeName, uid }));
  };

  return (
    <>
      <div className="profile">
        <div className="profile__top">
          <TextField
            label="Name"
            placeholder="Enter a name"
            variant="outlined"
            onChange={handleChangeName}
            autoFocus
          />
          <div className="profile__checkbox">
            <FormControlLabel
              control={
                <Checkbox
                  checked={showName}
                  onChange={handleToggleName}
                  color="primary"
                />
              }
              label="Show your name"
            />
          </div>
          {showName && <h2 className="profile__name">{name}</h2>}
        </div>
        <div className="profile__under">
          <span>Do you want to sign out or change your account?</span>
        </div>
      </div>
    </>
  );
};
