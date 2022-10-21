function setup() {
    $("#btnChildren").click(children);
    $("#btnDescendant").click(descendants);
    $("#btnParent").click(parent);
    $("#btnSibling").click(siblings);
    $("#btnAncestor").click(ancestor);

    $('input[type=radio][name=elementRadio]').change(function() {
        if (this.value == '#body') {
            $("#btnParent").prop("disabled", true);
            $("#btnSibling").prop("disabled", true);
            $("#btnAncestor").prop("disabled", true);
        }
        else {
            $("#btnParent").prop("disabled", false);
            $("#btnSibling").prop("disabled", false);
            $("#btnAncestor").prop("disabled", false);
        }

        resetColors();
        setElementSelected();
    });
    resetColors();
    setElementSelected();
}

function ancestor(){
    resetColors();
    setElementSelected();
    $(findSelectedElement()).parents().css({"color": "red", "border": "2px solid red"});
    $("#neverColors").children().css({"color": "black", "border": "0px"});
    $("#neverColors").parents().css({"border": "0px"});
};

function siblings(){
    resetColors();
    setElementSelected();
    $(findSelectedElement()).siblings().css({"color": "red", "border": "2px solid red"});
};

function children(){
    resetColors();
    setElementSelected();
    $(findSelectedElement()).children().css({"color": "red", "border": "2px solid red"});
};

function parent(){
    resetColors();
    setElementSelected();
    $(findSelectedElement()).parent().css({"color": "red", "border": "2px solid red"});
};

function descendants(){
    resetColors();
    setElementSelected();
    $(findSelectedElement()).find("*").css({"color": "red", "border": "2px solid red"});
}

function resetColors(){
    $("#body").find("*").css({"color":"lightgrey", "border": "2px solid lightgrey"});
    $("#body").css({"color":"lightgrey", "border": "2px solid lightgrey"});
}

function setElementSelected(){
    $(findSelectedElement()).css({"color":"orange", "border": "2px solid orange"});
}

function findSelectedElement(){
    return $('input[name=elementRadio]:checked', '#myForm').val();
}

window.addEventListener("load", setup);