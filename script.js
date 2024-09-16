const canvas = document.getElementById('drawingCanvas');
    const pen = canvas.getContext('2d');

    canvas.width = 800; 
    canvas.height = 600;

    let mouseClick = false;

    function startPosition(e) {
    mouseClick = true;
    draw(e);
    }

    function endPosition() {
    mouseClick = false;
    pen.beginPath()
    }

    function draw(e) {
    if (!mouseClick) return;

    pen.lineWidth = 4;
    pen.lineCap = 'round';
    pen.strokeStyle = 'black';

    pen.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    pen.stroke();
    pen.beginPath();
    pen.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    
    
    function downloadImage(format) {
    const link = document.createElement('a');
    link.download = `drawing.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
    }

    document.getElementById('downloadPNG').addEventListener('click', () => downloadImage('png'));
