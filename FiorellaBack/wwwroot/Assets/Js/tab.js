$(document).ready(function () {

    let prevActiveTabOption1HeaderDataId = 1;
    let prevActiveTabOption2HeaderDataId = 1;
    let prevActiveTabOption3HeaderDataId = 1;
    let prevActiveTabOption4HeaderDataId = 1;

    $('.tab1 .header').click(function () {
        let tabClicked1 = $(this).data("id");
        $('.tab1 .header').each(function () {
            if ($(this).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $(this).addClass("active-header1");
        if (tabClicked1 != prevActiveTabOption1HeaderDataId) {
            $('.tab1 .context').each(function () {
                if ($(this).data("id") == tabClicked1) {
                    $('.tab1 .context').hide();
                    $(this).show();
                    prevActiveTabOption1HeaderDataId = $(this).data("id");
                }
            });
        }
    });

    $('.tab2 .header').click(function () {
        let tabClicked2 = $(this).data("id");
        $('.tab2 .header').each(function () {
            if ($(this).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $(this).addClass("active-header1");
        if (tabClicked2 != prevActiveTabOption2HeaderDataId) {
            $('.tab2 .context').each(function () {
                if ($(this).data("id") == tabClicked2) {
                    $('.tab2 .context').hide();
                    $(this).show();
                    prevActiveTabOption2HeaderDataId = $(this).data("id");
                }
            });
        }
    });

    $('.tab3 .header').click(function () {
        let tabClicked3 = $(this).data("id");
        $('.tab3 .header').each(function () {
            if ($(this).hasClass("active-header2")) {
                $(this).removeClass("active-header2");
            }
        });
        $(this).addClass("active-header2");
        if (tabClicked3 != prevActiveTabOption3HeaderDataId) {
            $('.tab3 .context').each(function () {
                if ($(this).data("id") == tabClicked3) {
                    $('.tab3 .context').hide();
                    $(this).show();
                    prevActiveTabOption3HeaderDataId = $(this).data("id");
                }
            });
        }
    });

    $('.tab4 .header').click(function () {
        let tabClicked4 = $(this).data("id");
        $('.tab4 .header').each(function () {
            if ($(this).hasClass("active-header1")) {
                $(this).removeClass("active-header1");
            }
        });
        $(this).addClass("active-header1");
        if (tabClicked4 != prevActiveTabOption4HeaderDataId) {
            $('.tab4 .context').each(function () {
                if ($(this).data("id") == tabClicked4) {
                    $('.tab4 .context').hide();
                    $(this).show();
                    prevActiveTabOption4HeaderDataId = $(this).data("id");
                }
            });
        }


    })
})