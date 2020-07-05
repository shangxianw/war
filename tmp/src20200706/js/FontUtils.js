function FontUtils()
{
	let str = "local('main_font'),url('./resource/common/font/main_font.ttf') format('ttf'),url('./resource/common/font/main_font.ttf')"
    let fontObj = new FontFace("main_font", str);
    console.log(fontObj);
    fontObj.load().then(function(loadedFontFace) {
        document.fonts.add(loadedFontFace);
        that.canvasDemo.updateTextFontFamily(fontFamily);
    });
}