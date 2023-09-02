//Written by Samuel Albanese circa 2018
//To clarify, this program was written completely indepenently

//Global variables\\

var hp;
var stm;
var ftg;
var ftgMax;
var statStr;
var statAgi;
var statAcc;
var statChr;
var statFtg;
var statLck;
var worDiff;
var worEcon;
var worWtr;
var worHmr;
var areaBlock = 1;

//Global Variables\\


onEvent("button1", "click", function() 
{
  pickStats();
});
onEvent("doneBtn", "click", function() 
{
  startTheMachine();
});
onEvent("northBtn", "click", function() 
{
  if (getValidDir("north", areaBlock) == "valid") 
  {
    move(0, -70);
    areaBlock = areaBlock - 1;
    getSurround(areaBlock);
    setText("playerStatus_gameLabel", "You went north.");
  } else 
  {
    setText("playerStatus_gameLabel", "I can't move north from here.");
    getSurround(areaBlock);
  }
  
});
onEvent("southBtn", "click", function() 
{
  if (getValidDir("south", areaBlock) == "valid") 
  {
    move(0, 70);
    areaBlock = areaBlock + 1;
    getSurround(areaBlock);
    setText("playerStatus_gameLabel", "You went south.");
  } else 
  {
    setText("playerStatus_gameLabel", "I can't move south from here.");
    getSurround(areaBlock);
  }
});
onEvent("eastBtn", "click", function() 
{
  if (getValidDir("east", areaBlock) == "valid") 
  {
    move(80, 0);
    areaBlock = areaBlock + 4;
    getSurround(areaBlock);
    setText("playerStatus_gameLabel", "You went east.");
  } else 
  {
    setText("playerStatus_gameLabel", "I can't move east from here.");
    getSurround(areaBlock);
  }
});
onEvent("westBtn", "click", function() 
{
  if (getValidDir("west", areaBlock) == "valid") 
  {
    move(-80, 0);
    areaBlock = areaBlock - 4;
    getSurround(areaBlock);
    setText("playerStatus_gameLabel", "You went west.");
  } else 
  {
    setText("playerStatus_gameLabel", "I can't move west from here.");
    getSurround(areaBlock);
  }
});

function pickStats() 
{
  var points = 12;
  function setStats() 
  {
    setNumber("str_num", getNumber("slider1"));
    statStr = getNumber("slider1");
    setNumber("acc_num", getNumber("slider2"));
    statAcc = getNumber("slider2");
    setNumber("agi_num", getNumber("slider3"));
    statAgi = getNumber("slider3");
    setNumber("chr_num", getNumber("slider4"));
    statChr = getNumber("slider4");
    setNumber("lck_num", getNumber("slider5"));
    statLck = getNumber("slider5");
    setNumber("ftg_num", getNumber("slider6"));
    statFtg = getNumber("slider6");
    points = 42 - ((getNumber("slider1"))+(getNumber("slider2"))+(getNumber("slider3"))+(getNumber("slider4"))+(getNumber("slider5"))+(getNumber("slider6")));
    setText("pts_label", "Points Left:"+points);
    if (getNumber("slider7") == 1) 
    {
      setText("diff_num", "Cakewalk");
      worDiff = 1;
    } else 
    {
      if (getNumber("slider7") == 2)
      {
        setText("diff_num", "Casual");
        worDiff = 2;
      } else 
      {
        if (getNumber("slider7") == 3) 
        {
          setText("diff_num", "Kinda Hard");
          worDiff = 3;
        } else 
        {
          setText("diff_num", "What am I doing with my life");
          worDiff = 4;
        }
      }
    }
    
    if (getNumber("slider8") == 1) 
    {
      setText("wtr_num", "Snowy");
      worWtr = 1;
    } else 
    {
      if (getNumber("slider8") == 2)
      {
        setText("wtr_num", "Heavy Storm");
        worWtr = 2;
      } else 
      {
        if (getNumber("slider8") == 3) 
        {
          setText("wtr_num", "Light Rain");
          worWtr = 3;
        } else 
        {
          setText("wtr_num", "Clear");
          worWtr = 4;
        }
      }
    }
    
    if (getNumber("slider9") == 1) 
    {
      setText("econ_num", "Poverty");
      worEcon = 1;
    } else 
    {
      if (getNumber("slider9") == 2)
      {
        setText("econ_num", "Poor");
        worEcon = 2;
      } else 
      {
        if (getNumber("slider9") == 3) 
        {
          setText("econ_num", "Middle-Class");
          worEcon = 3;
        } else 
        {
          setText("econ_num", "Rich");
          worEcon = 4;
        }
      }
    }
    
    if (getNumber("slider10") == 1) 
    {
      setText("hmr_num", "On");
      worHmr = 1;
    } else 
    {
      setText("hmr_num", "Off(Lame Mode)");
      worHmr = 2;
    }
    if (points < 0) 
    {
      var randStat = randomNumber(1,6);
      if (randStat == 1) 
      {
        setNumber("slider1", (getNumber("slider1")+ points));
        setNumber("str_num", getNumber("slider1"));
        setStats();
      } else 
      {
        if (randStat == 2)
        {
          setNumber("slider2", (getNumber("slider2")+ points));
          setNumber("acc_num", getNumber("slider2"));
          setStats();
        } else 
        {
          if (randStat == 3) 
          {
            setNumber("slider3", (getNumber("slider3")+ points));
            setNumber("agi_num", getNumber("slider3"));
            setStats();
          } else 
          {
            if (randStat == 4) 
            {
              setNumber("slider4", (getNumber("slider4")+ points));
              setNumber("chr_num", getNumber("slider4"));
              setStats();
            } else 
            {
              if (randStat == 5)
              {
                setNumber("slider5", (getNumber("slider5")+ points));
                setNumber("lck_num", getNumber("slider5"));
                setStats();
              } else 
              {
                setNumber("slider6", (getNumber("slider6")+ points));
                setNumber("ftg_num", getNumber("slider6"));
                setStats();
              }
              
            }
            
          }
          
        }
        
      }
      
    }
    
    
    
  }  
  
  

  setScreen("pickStatsScreen");
  setStats();
  onEvent("slider1", "change", function() 
  {
    setStats();
  });
  onEvent("slider2", "change", function() 
  {
    setStats();
  });
  onEvent("slider3", "change", function() 
  {
    setStats();
  });
  onEvent("slider4", "change", function() 
  {
    setStats();
  });
  onEvent("slider5", "change", function() 
  {
    setStats();
  });
  onEvent("slider6", "change", function() 
  {
    setStats();
  });
  onEvent("slider7", "change", function() 
  {
    setStats();
  });
  onEvent("slider8", "change", function() 
  {
    setStats();
  });
  onEvent("slider9", "change", function() 
  {
    setStats();
  });
  onEvent("slider10", "change", function() 
  {
    setStats();
  });
  onEvent("button2", "click", function() 
  {
    var slide = 0;
    var x = 0;
    for (var i = 0; i < 6; i++) 
    {
      slide = slide + 1;
      x = randomNumber(1,10);
      setNumber("slider"+slide, x);
      setStats();
    }
    for (i = 0; i < 3; i++) 
    {
      slide = slide + 1;
      x = randomNumber(1,4);
      setNumber("slider"+slide, x);
      setStats();
    }
    
    
    
  });

  
   
  
}

function startTheMachine()
{
  hp = (statStr * 5) + 20;
  setText("hp_gameVal", hp);
  stm = (statAgi * 2) + 5;
  setText("stm_gameVal", stm);
  ftg = 0;
  ftgMax = (statFtg * 2)+ 20;
  setText("ftg_gameVal", ftg,ftgMax);
  setText("str_gameVal", statStr);
  setText("agi_gameVal", statAgi);
  setText("chr_gameVal", statChr);
  setText("acc_gameVal", statAcc);
  setText("lck_gameVal", statLck);
  setText("diff_gameVal", getText("diff_num"));
  if (worHmr == 1) 
  {
    setText("humor_gameVal", "is *on*");
    
  } else 
  {
    setText("humor_gameVal", "is *off*");
  }
  
  if (worEcon == 1) 
  {
    setText("econ_gameVal", "Poverty");
    setText("gold_gameLabel","You have " + randomNumber(5, 50) + " gold coins.");
    
  } else 
  {
    if (worEcon == 2) 
    {
      setText("econ_gameVal", "Poor");
      setText("gold_gameLabel","You have " + randomNumber(30, 110) + " gold coins.");
    } else 
    {
      if (worEcon == 3)
      {
        setText("econ_gameVal", "Middle-Class");
        setText("gold_gameLabel","You have " + randomNumber(100, 200) + " gold coins.");
      }else
      {
        setText("econ_gameVal", "Rich");
        setText("gold_gameLabel","You have " + randomNumber(500, 1000) + " gold coins.");
      }
    }
  }
  
  setText("playerStatus_gameLabel", "You feel fresh, as if you were being born again.");
  getSurround(areaBlock);
  gameRun();
}
function gameRun()
{
  var x = 0;
  for (var i = 0; i < 12; i++) 
  {
    x = x + 1;
    setArea(x);
  }
  setScreen("mainScreen");
  penUp();
  moveTo(125, 105);
}
function setArea(area)
{
  var y = randomNumber(1,4);
  if (y == 1) 
  {
    setProperty("area" + area, "background-color", "green");
  } else 
  {
    if (y == 2) 
    {
      setProperty("area" + area, "background-color", "green");
    } else 
    {
      if (y == 3) 
      {
        setProperty("area" + area, "background-color", "red");
      } else 
      {
        setProperty("area" + area, "background-color", "blue");
      }
      
    }
    
  }
  
  
}
function getValidDir(dir)
{
  if (dir == "north") 
        {
          if (("area" + areaBlock) == "area1")
        {
          return "invalid";
        } else 
        {
          if (("area" + areaBlock) == "area4") 
          {
            return "invalid";
          } else 
          {
            if (("area" + areaBlock) == "area5")
          {
              return "invalid";
            } else 
              {
                if (("area" + areaBlock) == "area6")
              {
                return "invalid";
              } else
                {
                  if (("area" + areaBlock) == "area9")
                {
                  return "invalid";
                } else
                {
                  return "valid";
                }
              }
            }
          }
        }
      }else 
  {
    if (dir == "east") 
        {
          if (("area" + areaBlock) == "area1")
        {
          return "invalid";
        } else 
        {
          if (("area" + areaBlock) == "area8") 
          {
            return "invalid";
          } else 
          {
            if (("area" + areaBlock) == "area9")
          {
              return "invalid";
            } else 
              {
                if (("area" + areaBlock) == "area10")
              {
                return "invalid";
              } else
                {
                  if (("area" + areaBlock) == "area11")
                {
                  return "invalid";
                } else
                {
                  if (("area" + areaBlock) == "area12")
                  {
                    return "invalid";
                  }else
                    {
                      return "valid";
                    }
               }
              }
            }
          }
        }
      }else 
    {
      if (dir == "south") 
      {
        if (("area" + areaBlock) == "area3")
        {
          return "invalid";
        } else 
        {
          if (("area" + areaBlock) == "area4") 
          {
            return "invalid";
          } else 
          {
            if (("area" + areaBlock) == "area5")
          {
              return "invalid";
            } else 
              {
                if (("area" + areaBlock) == "area8")
              {
                return "invalid";
              } else
                {
                  if (("area" + areaBlock) == "area12")
                {
                  return "invalid";
                } else
                {
                  return "valid";
                }
              }
            }
          }
        }
      } else 
      {
        if (dir == "west") 
        {
          if (("area" + areaBlock) == "area1")
        {
          return "invalid";
        } else 
        {
          if (("area" + areaBlock) == "area2") 
          {
            return "invalid";
          } else 
          {
            if (("area" + areaBlock) == "area3")
          {
              return "invalid";
            } else 
              {
                if (("area" + areaBlock) == "area4")
              {
                return "invalid";
              } else
                {
                  if (("area" + areaBlock) == "area5")
                {
                  return "invalid";
                } else
                  {
                    if (("area" + areaBlock) == "area12")
                  {
                    return "invalid";
                  }else
                    {
                      return "valid";
                    }
               }
              }
            }
          }
        }
      }else 
        {
          return "valid";
        }
      }
    }
  }
  
}
function getSurround(area) 
{
    if (getProperty(("area" + area), "background-color") == "green") 
    {
      setText("surr_gameLabel", "The grass and weather in this region is almost artistic.");
    } else 
    {
      if (getProperty(("area" + area), "background-color") == "blue") 
      {
        setText("surr_gameLabel", "For some reason of which you aren't concerned, the weather in this region is really cold!");
      } else 
      {
        setText("surr_gameLabel", "For some reason of which you aren't concerned, the weather in this region is really hot!");
      }
      
    }
    
  }
