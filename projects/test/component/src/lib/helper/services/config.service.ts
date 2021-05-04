import { Injectable } from "@angular/core";
import { ObjHelper } from "../models/obj-helper";


@Injectable({
				providedIn: "root"
			})
export class ConfigService<T=any>
{
	private settings: T;

	constructor(){ }

	public getSettingsObject(): T
	{
		return ObjHelper.CloneDeep(this.settings);
	}

	public setSettings(x: T)
	{
		this.settings = x;
	}
}
