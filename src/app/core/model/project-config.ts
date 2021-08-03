import { BackendConfig } from './backend-config';

export class ProjectConfig {

	 projectName :string = "generated";
	 groupId :string = "zs";
	 domain :string = "ma";
	 bean :string = "bean";
	 dao :string = "dao";
	 service :string = "service";
	 serviceFacade :string = "facade";
	 serviceFacadeSuffix :string = "facade";

	 serviceImpl :string = "impl";
	 serviceImplSuffix  :string = "impl";
	 serviceUtil :string = "util";
	 ws :string = "ws";
	 rest :string = "rest";
	 provided :string = "provided";
	 restFacade :string = "facade";
	 vo :string = "vo";
	 restFacadeSuffix :string = "Facade";
	 voSuffix :string = "Vo";
	 daoSuffix:string="Dao";
   converter :string = "converter";
   converterSuffix :string = "Converter";

   swagger:boolean =true ;
   flyWayDb :boolean = true;
   security:boolean;
   backend :BackendConfig = new BackendConfig();

}
