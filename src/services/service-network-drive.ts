import {injectable} from "tsyringe";
import Config from "../stuff/config";
const FileSystem = require('fs-extra');

@injectable()
export default class NetworkDriveService{

    private __CustomerBaseDirectory : string ;

    public constructor( _Config : Config ) {
        this.__CustomerBaseDirectory = _Config.CustomerBaseDirectory;
    }

    /**
     * Scans the CustomerBaseDirectory for new Customers
     */
    public async ScanForNewCustomers():Promise<void>{
        return null;
    }

    /**
     * Checks if the network drive is available
     * @constructor
     */
    public async IsAvailable():Promise<boolean>{
        return new Promise<boolean>(
            ( _Resolve ,_Reject )=>{
                FileSystem.pathExists(this.__CustomerBaseDirectory)
                    .then(
                        (_PathExists: boolean) => {
                            if (_PathExists) {
                                FileSystem.access(this.__CustomerBaseDirectory)
                                    .then(
                                        (_CanAccess)=>{

                                        }
                                    )
                                    .catch(
                                        (_Reason: any) => {
                                            _Reject();
                                        }
                                    )
                            } else {
                                return _Resolve(false);
                            }
                        }
                    )
                    .catch(
                        (_Reason: any) => {
                            _Reject();
                        }
                    );
            }
        );

    }
}