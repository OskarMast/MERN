import authSelectors from 'src/modules/auth/authSelectors';
import { useSelector } from 'react-redux';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import internal from 'stream';

export default function Header(props) {
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );

  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );

  const loading = useSelector(authSelectors.selectLoading);

  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );

  return <></>;
}
