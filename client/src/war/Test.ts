// // 目标
// 				if(entity.hasCom(COMPONENT.PATH) == true && entity.hasCom(COMPONENT.SPEED) == true && entity.hasCom(COMPONENT.ACTION) == true)
// 				{
// 					let pCom:PathCom = entity.getCom(COMPONENT.PATH);
// 					let sCom:SpeedCom = entity.getCom(COMPONENT.SPEED);
// 					let actCom:ActionCom = entity.getCom(COMPONENT.ACTION);
// 					let currTar:astar.NodeItem = pCom.nextTar();
// 					if(currTar != null)
// 					{
// 						let localX = warData.grid.startX + warData.grid.space * currTar.x;
// 						let localY = warData.grid.startY + warData.grid.space * currTar.y;

// 						let xOK = false;
// 						let yOK = false;
// 						if(entity.x < localX)
// 						{
// 							sCom.speedX = Math.abs(sCom.speedX);
// 						}
// 						else if(entity.x > localX)
// 						{
// 							sCom.speedX = -Math.abs(sCom.speedX);
// 						}
// 						else
// 						{
// 							xOK = true;
// 						}

// 						if(entity.y < localY)
// 						{
// 							sCom.speedY = Math.abs(sCom.speedY);
// 						}
// 						else if(entity.y > localY)
// 						{
// 							sCom.speedY = -Math.abs(sCom.speedY);
// 						}
// 						else
// 						{
// 							yOK = true;
// 						}
// 						if(xOK == true && yOK == true)
// 							pCom.toTarget();
// 						else
// 						{
// 							entity.x += sCom.speedX;
// 							entity.y += sCom.speedY;

// 							if(sCom.speedX < 0)
// 							{
// 								if(entity.x < localX)
// 									entity.x = localX;
// 							}
// 							else if(sCom.speedY > 0)
// 							{
// 								if(entity.x > localX)
// 									entity.x = localX
// 							}

// 							if(sCom.speedY < 0)
// 							{
// 								if(entity.y < localY)
// 									entity.y = localY;
// 							}
// 							else if(sCom.speedY > 0)
// 							{
// 								if(entity.y > localY)
// 									entity.y = localY;
// 							}

// 							if(entity.x == localX && entity.y == localY)
// 							{
// 								currTar = pCom.nextNextTar();
// 								if(currTar != null)
// 								{
// 									localX = warData.grid.startX + warData.grid.space * currTar.x;
// 									localY = warData.grid.startY + warData.grid.space * currTar.y;
// 									if(entity.x == localX && entity.y == localY)
// 										actCom.setDirByXY(DIRECTION.NONE, DIRECTION.NONE);
// 									if(entity.x < localX && entity.y == localY)
// 										actCom.setDirByXY(DIRECTION.RIGHT, DIRECTION.NONE);
// 									else if(entity.x > localX && entity.y == localY)
// 										actCom.setDirByXY(DIRECTION.LEFT, DIRECTION.NONE);
// 									else if(entity.x == localX && entity.y < localY)
// 										actCom.setDirByXY(DIRECTION.NONE, DIRECTION.DOWN);
// 									else if(entity.x == localX && entity.y > localY)
// 										actCom.setDirByXY(DIRECTION.RIGHT, DIRECTION.UP);
// 									else if(entity.x < localX && entity.y < localY)
// 										actCom.setDirByXY(DIRECTION.RIGHT, DIRECTION.DOWN);
// 									else if(entity.x < localX && entity.y > localY)
// 										actCom.setDirByXY(DIRECTION.RIGHT, DIRECTION.UP);
// 									else if(entity.x > localX && entity.y < localY)
// 										actCom.setDirByXY(DIRECTION.LEFT, DIRECTION.DOWN);
// 									else if(entity.x > localX && entity.y > localY)
// 										actCom.setDirByXY(DIRECTION.LEFT, DIRECTION.UP);
// 								}
// 							}
// 						}
// 					}
// 				}