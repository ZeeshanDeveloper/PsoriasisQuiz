//main

let lastBox = false;

let score = 0;

// Checking button status ( wether or not next/previous and
// submit should be displayed )
const checkButtons = (activeStep, stepsCount) => {
    const prevBtn = $("#wizard-prev");
    const nextBtn = $("#wizard-next");
    const submBtn = $("#wizard-subm");

    switch (activeStep / stepsCount) {
        case 0: // First Step
            prevBtn.hide();
            submBtn.hide();
            nextBtn.show();
            break;
        case 1: // Last Step
            nextBtn.hide();
            prevBtn.hide();
            submBtn.hide();
            lastBox = true;
            document.getElementById("score").innerHTML = score;
            break;
        default:
            submBtn.hide();
            prevBtn.show();
            nextBtn.show();
            lastBox = false;
    }
};

// Scrolling the form to the middle of the screen if the form
// is taller than the viewHeight
const scrollWindow = (activeStepHeight, viewHeight) => {
    if (viewHeight < activeStepHeight) {
        $(window).scrollTop($(steps[activeStep]).offset().top - viewHeight / 2);
    }
};

// Setting the wizard body height, this is needed because
// the steps inside of the body have position: absolute
const setWizardHeight = activeStepHeight => {
    $(".wizard-body").height(activeStepHeight);
};

// Form step counter (little cirecles at the top of the form)
const wizardSteps = $(".wizard-header .wizard-step");
// Form steps (actual steps)
const steps = $(".wizard-body .step");
// Number of steps (counting from 0)
const stepsCount = steps.length - 1;
// Screen Height
const viewHeight = $(window).height();
// Current step being shown (counting from 0)
let activeStep = 0;
// Height of the current step
let activeStepHeight = $(steps[activeStep]).height();

checkButtons(activeStep, stepsCount);
setWizardHeight(activeStepHeight);

$(function () {
    // Resizing wizard body when the viewport changes
    setWizardHeight($(steps[activeStep]).height());
    $(window).resize(function () {
        setWizardHeight($(steps[activeStep]).height());
    });
});


// Previous button handler
function prevBtnF() {
    // Sliding out current step
    $(steps[activeStep]).removeClass("active");
    $(wizardSteps[activeStep]).removeClass("active");

    activeStep--;

    // Sliding in previous Step
    $(steps[activeStep]).removeClass("off").addClass("active");
    $(wizardSteps[activeStep]).addClass("active");

    activeStepHeight = $(steps[activeStep]).height();
    setWizardHeight(activeStepHeight);
    checkButtons(activeStep, stepsCount);
};

// Next button handler
function nextBtnF() {

    if (lastBox === false) {
        // Sliding out current step
        $(steps[activeStep]).removeClass("inital").addClass("off").removeClass("active");
        //$(wizardSteps[activeStep]).removeClass("active");

        // Next step
        activeStep++;

        // Sliding in next step
        $(steps[activeStep]).addClass("active");
        $(wizardSteps[activeStep]).addClass("active");

        activeStepHeight = $(steps[activeStep]).height();
        setWizardHeight(activeStepHeight);
        checkButtons(activeStep, stepsCount);
    }
    else {
        console.log('last')
    }
};

let QNosA = []

function yesF(qNo) {
    QNosA[qNo] = 'yes';
    score = score + 20;
    nextBtnF()
}
function noF(qNo) {
    QNosA[qNo] = 'no';
    nextBtnF()
}
function skip(qNo) {
    QNosA[activeStep] = 'skip';
    nextBtnF()
}


var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 960;

var background = new Image();
background.src = "img.jpg";
ctx.fillStyle = "white";
ctx.textAlign = "center";

var tick1 = new Image();
tick1.src = "tick.png";

var tick2 = new Image();
tick2.src = "tick.png";

var tick3 = new Image();
tick3.src = "tick.png";

var tick4 = new Image();
tick4.src = "tick.png";

var tick5 = new Image();
tick5.src = "tick.png";


// Make sure the image is loaded first otherwise nothing will draw.

background.onload = function () {
    //generateTicks()
}

function generateTicks() {
    ctx.drawImage(background, 0, 0);
    if (QNosA[0] === 'no') {
        ctx.drawImage(tick1, 767, 275, 30, 30)
    } else if (QNosA[0] === 'skip') { }
    else {
        ctx.drawImage(tick1, 710, 275, 30, 30)
    }
    if (QNosA[1] === 'no') {
        ctx.drawImage(tick2, 767, 406, 30, 30)
    } else if (QNosA[1] === 'skip') { }
    else {
        ctx.drawImage(tick2, 710, 406, 30, 30)
    }
    if (QNosA[2] === 'no') {
        ctx.drawImage(tick3, 767, 540, 30, 30)
    } else if (QNosA[2] === 'skip') { }
    else {
        ctx.drawImage(tick3, 710, 540, 30, 30)
    }
    if (QNosA[3] === 'no') {
        ctx.drawImage(tick4, 767, 668, 30, 30)
    } else if (QNosA[3] === 'skip') { }
    else {
        ctx.drawImage(tick4, 710, 668, 30, 30)
    }
    if (QNosA[4] === 'no') {
        ctx.drawImage(tick5, 767, 810, 30, 30)
    } else if (QNosA[4] === 'skip') { }
    else {
        ctx.drawImage(tick5, 710, 810, 30, 30)
    }
}

function to_image() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    generateTicks()

    var link = document.getElementById('link');
    link.setAttribute('download', 'result.png');
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    img.crossOrigin = "anonymous";
}





