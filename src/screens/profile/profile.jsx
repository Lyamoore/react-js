import { Checkbox } from "@material-ui/core";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { toggleUserNameAction } from "../../store/components-store/profile/actions";
import {
  showUserNameSelector,
  userNameSelector,
} from "../../store/components-store/profile/selectors";

export const Profile = () => {
  const userName = useSelector(userNameSelector, shallowEqual);
  const showUserName = useSelector(showUserNameSelector, shallowEqual);

  const dispatch = useDispatch();

  const handleToggleUserName = useCallback(() => {
    dispatch(toggleUserNameAction);
  }, [dispatch]);

  return (
    <div>
      <Checkbox
        checked={showUserName}
        onChange={handleToggleUserName}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {showUserName && <div className="showUserName-box">{userName}</div>}
    </div>
  );
};
