import DashboardImporter from '../../services/dashboard/dashboardImporter';
import PermissionChecker from '../../services/dashboard/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';

export default async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.dashboardImport,
    );
    console.log(req.body);
    await new DashboardImporter(req).import(
      req.body.data,
      req.body.importHash,
    );

    const payload = true;

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
