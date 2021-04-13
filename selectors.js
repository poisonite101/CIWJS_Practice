const move = (event) => {
  // Find the position of the field
  const field = document.getElementById('field');
  let fieldCoords = field.getBoundingClientRect();

  // Changes the posiion of the field, relative to the position of the field. This helps the ball to not go outside of the field bounds
  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  // prevent crossing the top field boundary
  if (ballCoords.top < 0) ballCoords.top = 0;

  // prevent crossing the left field boundary
  if (ballCoords.left < 0) ballCoords.left = 0;

  // // prevent crossing the right field boundary
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  // prevent crossing the bottom field boundary
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  // Formats the ball's position to match the text based format that's parsed by the DOM
  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
};
