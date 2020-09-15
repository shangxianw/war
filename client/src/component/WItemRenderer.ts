class WItemRenderer extends UIBase implements eui.IItemRenderer
{
    public initData()
    {
        eui.registerBindable(eui.ItemRenderer.prototype, "data");
    }

    protected dataChanged(): void
	{

	}

    public destroy()
    {
        
    }

    // ---------------------------------------------------------------------- systems code
    private _data: any = null;
	public get data(): any {
        return this._data;
    }

    public set data(value: any) {
        this._data = value;
        eui.PropertyEvent.dispatchPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "data");
        this.dataChanged();
    }

	private _selected: boolean = false;
	public get selected(): boolean {
        return this._selected;
    }

    public set selected(value: boolean) {
        if (this._selected == value)
            return;
        this._selected = value;
        this.invalidateState();
    }

	public itemIndex: number = -1;
}