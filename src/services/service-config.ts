import Config from "../stuff/config";
import {injectable} from "tsyringe";
import {Constants} from "../stuff/constants";
const FileSystem = require('fs-extra');

@injectable()
export default class ConfigService{
    private __Config : Config;

    public get Config():Config{
        if( this.__Config ){
            return this.__Config;
        } else {
            throw new Error('NO CONFIG LOADED');
        }
    }

    private async ReadFromFile():Promise<void>{
        FileSystem.readJson(Constants.CONFIG_FILE)
            .then();
    }
}