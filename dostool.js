goto chushihua
剪湫样剩氱呌晌劳倱儳湇歌愰椴代吹栲汴儰晃焊畒敍橊爰橒桤捎楌
汎煢慇佳猵湬搳汏物啵汏捎乡洱呮漹煍畤猳獨畏灦猷昹渶洳椷杪灭
兰捡儵漊敌桳朸搹照猱休捒儷瀰畃汬呏浢挶却丹搰挶攊椸桰爷煇搸
獆愲灇敉氰爷瑌杧樴挵慪剥猰慇桰敦敒晕吴朲剨爸潯啦湁汭呆略挶
佑焱攲瑔汰焱特栵版整剈獑椴挴晔浕漶欹攳氹煈扮渹晵橪潃畉剃浈
樰樹樴獯朵摨汵猷乇晡挰唱戸杨漳刴湔爲灈洊潑欸代副愱佪灣桴摓
桃灤桌焸爷椷瀱併佦摰扊灤慳浡制漰橓椱晅瑡楈戸吴丹卂儳杆匵樊
唷栶匴匶瑊挵住汯呱略牪朳愸瀴昱何瑒执啎爊昷獭汉浇卅估昷渳灆
剪湫样剩氱呌晌劳倱儳湇歌愰椴代吹栲汴儰晃焊畒敍橊爰橒桤捎楌
汎煢慇佳猵湬搳汏物啵汏捎乡洱呮漹煍畤猳獨畏灦猷昹渶洳椷杪灭
兰捡儵漊敌桳朸搹照猱休捒儷瀰畃汬呏浢挶却丹搰挶攊椸桰爷煇搸
獆愲灇敉氰爷瑌杧樴挵慪剥猰慇桰敦敒晕吴朲剨爸潯啦湁汭呆略挶
佑焱攲瑔汰焱特栵版整剈獑椴挴晔浕漶欹攳氹煈扮渹晵橪潃畉剃浈
樰樹樴獯朵摨汵猷乇晡挰唱戸杨漳刴湔爲灈洊潑欸代副愱佪灣桴摓
桃灤桌焸爷椷瀱併佦摰扊灤慳浡制漰橓椱晅瑡楈戸吴丹卂儳杆匵樊
唷栶匴匶瑊挵住汯呱略牪朳愸瀴昱何瑒执啎爊昷獭汉浇卅估昷渳灆
:chushihua
cls
@echo off
if /i "%1"=="-ks" goto ks
fltmc 1>nul 2>nul
if %errorlevel%==0 goto ks
if /i "%systemdrive%" equ "x:" goto ks
verify on
start cmd /c mshta vbscript:createobject("shell.application").shellexecute(""%0"","-ks",,"runas",1)(window.close)
set xzflag1=
set xzflag=::
if exist %systemroot%\system32\curl.exe (set xzflag1=::&set xzflag=)
%xzflag%cd /d %temp%
%xzflag%start /min cmd /c curl -# -o dostoolupdate https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js
%xzflag1%powershell -w hidden -c (new-object System.Net.WebClient).DownloadFile( 'https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js','%temp%\dostoolupdate')
exit
::if %errorlevel% neq 0 (echo Set UAC = CreateObject^("Shell.Application"^)>"%temp%\tmp.vbs"
::echo UAC.ShellExecute %0,"","","runas",^1>>"%temp%\tmp.vbs"
::"%temp%\tmp.vbs"&exit)
::echo;>%systemdrive%\windows\system32\dos.tmp
::if not exist %systemdrive%\windows\system32\dos.tmp (echo Set UAC = CreateObject^("Shell.Application"^)>"%temp%\tmp.vbs"
::echo UAC.ShellExecute %0,"","","runas",^1>>"%temp%\tmp.vbs"
::"%temp%\tmp.vbs"&exit) else (del/f/q %systemdrive%\windows\system32\dos.tmp)
:ks
set dosqssj=%time%
title 　
color f1
setlocal enabledelayedexpansion
chcp 936>nul
goto qidongjs
set qidongjd=0
set qidongbz=█████████████████
:qidong
cls
echo 正在加载环境变量...
echo                                当前进度:%qidongjd%%%
echo  ----------------------------------------------------------------------------
echo │%qidongbz%│
echo  ----------------------------------------------------------------------------
set qidongbz=%qidongbz%█
set/a qidongjd+=5
if "%qidongjd%"=="105" goto qidongjs
goto qidong
:qidongjs
for /f "delims=" %%a in ('"reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders" /v desktop"') do (set zmlj=%%a)
if "%zmlj:~0,1%%zmlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %zmlj%"') do (set %zmlj%="%%~a")
set weizhi=%0
for /f "delims=" %%a in ("%weizhi%") do set daxiao=%%~za
for /f "delims=" %%a in ("%weizhi%") do set disk=%%~da
for /f "delims=" %%a in ('hostname') do set hostname=%%a
cd/d "%disk%\"
set cishu=3
set ver=20220228
set versize=186253
set gxflag=
for /f "tokens=3 delims=." %%a in ('"ver"') do set build=%%a
set build|findstr "\<[0-9]*\>">nul
if !errorlevel! equ 0 (if !build! lss 10586 (set winv=1) else (set winv=0)) else (set winv=0)
set baidu=start https://www.baidu.com/s?wd=
set google=start https://www.google.com.hk/search?q=
for /f "delims=" %%a in ('"wmic os get caption"') do cls&echo %%a|find /i "Microsoft"&&Set system=%%a
if /i "%system%"=="Microsoft Windows XP Home  " set system=Windows XP 家庭版
if /i "%system%"=="Microsoft Windows XP Professional  " set system=Windows XP 专业版
if /i "%system%"=="Microsoft Windows 7 Ultimate  " set system=Windows 7 旗舰版
if /i "%system%"=="Microsoft Windows 7 Home Basic  " set system=Windows 7 家庭普通版
if /i "%system%"=="Microsoft Windows 7 Home Premium  " set system=Windows 7 家庭高级版
if /i "%system%"=="Microsoft Windows 7 Professional  " set system=Windows 7 专业版
if /i "%system%"=="Microsoft Windows 7 Enterprise  " set system=Windows 7 企业版
if /i "%system%"=="Microsoft Windows 8 Pro  " set system=Windows 8 专业版
if /i "%system%"=="Microsoft Windows 8 China  " set system=Windows 8 中国版
if /i "%system%"=="Microsoft Windows 8 Enterprise  " set system=Windows 8 企业版
if /i "%system%"=="Microsoft Windows 8.1 Pro  " set system=Windows 8.1 专业版
if /i "%system%"=="Microsoft Windows 8.1 China  " set system=Windows 8.1 中国版
if /i "%system%"=="Microsoft Windows 8.1 Enterprise  " set system=Windows 8.1 企业版
if /i "%system%"=="Microsoft Windows 10 Home  " set system=Windows 10 家庭版
if /i "%system%"=="Microsoft Windows 10 Professional  " set system=Windows 10 专业版
if /i "%system%"=="Microsoft Windows 10 Education  " set system=Windows 10 教育版
if /i "%system%"=="Microsoft Windows 10 Enterprise  " set system=Windows 10 企业版
if /i "%date:~11,2%"=="周一" set xingqi=星期一
if /i "%date:~11,2%"=="周二" set xingqi=星期二
if /i "%date:~11,2%"=="周三" set xingqi=星期三
if /i "%date:~11,2%"=="周四" set xingqi=星期四
if /i "%date:~11,2%"=="周五" set xingqi=星期五
if /i "%date:~11,2%"=="周六" set xingqi=星期六
if /i "%date:~11,2%"=="周日" set xingqi=星期天
if /i "%date:~11,3%"=="星期一" set xingqi=星期一
if /i "%date:~11,3%"=="星期二" set xingqi=星期二
if /i "%date:~11,3%"=="星期三" set xingqi=星期三
if /i "%date:~11,3%"=="星期四" set xingqi=星期四
if /i "%date:~11,3%"=="星期五" set xingqi=星期五
if /i "%date:~11,3%"=="星期六" set xingqi=星期六
if /i "%date:~11,3%"=="星期日" set xingqi=星期天
set nx1=[+]下一页&set nx=[-]上一页   [+]下一页&set nx7=[-]上一页
for /f "tokens=2 delims=={}" %%a in ('wmic PATH Win32_SystemEnclosure get ChassisTypes/value') do (
if %%a==8 set nx1=[S]下一页&set nx=[A]上一页   [S]下一页&set nx7=[A]上一页
if %%a==9 set nx1=[S]下一页&set nx=[A]上一页   [S]下一页&set nx7=[A]上一页
if %%a==10 set nx1=[S]下一页&set nx=[A]上一页   [S]下一页&set nx7=[A]上一页)
set sc=delasd123
set scw=rdasd123
set ad=
for /f "tokens=1,2 delims=#" %%a in ('"prompt #$h#$e# & echo on & for %%b in (1) do rem"') do (set cswz=%%b[&set cswz1=%%a)
call :list
if /i "%processor_architecture%"=="x86" (set bit=32) else (set bit=64)
if "!system:~8,2!"=="XP" (set zmlj=%zmlj:~19%\) else (set zmlj=%zmlj:~25%\)
if "%zmlj:~0,1%%zmlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %zmlj%"') do (set %zmlj%="%%~a")
if /i "%2" neq "" goto chanshu2
fltmc 1>nul 2>nul
if %errorlevel% neq 0 (echo 部分功能无法正常使用，请以管理员身份运行
echo _______________________________________________________________________________
echo 按任意键继续运行&pause>nul)
forfiles /p %~dp0 /m %~nx0 /c "cmd /c echo 0x070x07"
cls
goto memuv2
for /f "delims=" %%a in ('"wmic cpu get processorid|find /i /v "processorid""') do (for /f "delims=" %%b in ('"echo %%a|find /i /v "echo""') do (set a=%%b))
for /f "delims=" %%a in ('"wmic bios get smbiosbiosversion|find /i /v "smbiosbiosversion""') do (for /f "delims=" %%b in ('"echo %%a|find /i /v "echo""') do (set b=%%b))
set jqm=%a: =%%b: =%
for /l %%a in (1,1,1000) do (if "!jqm:~%%a,1!"=="" set ws=%%a&goto jqmzh)
:jqmzh
set cs=0
set/a ws=%ws%-1
:zhcl
set/a zjzcm=0x!jqm:~%cs%,1!*2+3>nul 2>nul
set zh=%zh%%zjzcm%
set/a cs=%cs%+1
if %cs%==%ws% goto zcm
goto zhcl
:zcm
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\System\DOS工具箱 /v 机器码 2>nul|find "机器码""') do (set sfzc=%%a)
set sfzc=%sfzc:~21%
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\System\DOS工具箱 /v 注册码 2>nul|find "注册码""') do (set sfzcm=%%a)
set sfzcm=%sfzcm:~21%
if /i %sfzc%==%jqm% if /i %sfzcm%==%zh% goto a
:ks
color f1
title 注册码验证 - %system%
cls
echo                                     菜单
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo 机器码:%jqm%
set mima=
set/p mima=请输入注册码:
if /i "!mima!"=="!zh!" goto yes
echo 注册码错误
ping/n 2 0.0>nul
goto ks
:yes
cls
echo                                     菜单
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
reg add HKEY_CURRENT_USER\System\DOS工具箱 /v 机器码 /d %jqm% /f>nul 2>nul
reg add HKEY_CURRENT_USER\System\DOS工具箱 /v 注册码 /d %mima% /f>nul 2>nul
echo 注册成功
ping/n 2 0.0>nul
goto a
:mima
color f1
title 密码验证 - %system%
cls
echo                                     菜单
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
set mima=
set/p mima=请输入密码:
set /p ="!mima!"<nul>%temp%\mima.tmp
call :hash %temp%\mima.tmp
del /f /q %temp%\mima.tmp
if /i "%hash%"=="DCA9A6E6D000573FDC4DF6FEBA6035B87A8CE07C" goto mima1
set/a cishu-=1
echo 密码错误！你还有%cishu%次机会
ping/n 2 0.0>nul
if %cishu%==0 goto 00
goto mima
:mima1
cls
echo                                     菜单
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo 密码正确！
ping/n 2 0.0>nul
goto a
:chanshu2
if /i "%2" neq "" goto %2
:memuv2
if !start! lss 1 set start=1
set /a memuys=!start!/9+1
if not defined a!start! set /a !start!=!start!-9
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
set fy=!cswz!!ysbak:~0,3!91m_!cswz!!ysbak!!cswz!!ysbak:~0,3!92m_!cswz!!ysbak!!cswz!!ysbak:~0,3!93m_!cswz!!ysbak!
set fy1=___
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
if !winv! equ 0 (echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m!memuys!!cswz!!ysbak!页) else (
set /p =!cswz1!　　　　　　　　　　　　　　　　　　菜单 - 第<nul
call :colortxt a !memuys!
set /p =页<nul
echo;)
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
if !winv! equ 0 (for /l %%a in (1,1,26) do (if %%a lss 26 (set /p =!fy!<nul) else (echo !fy!))) else (for /l %%a in (1,1,26) do (if %%a lss 26 (set /p =!fy1!<nul) else (echo !fy1!)))
set /a end=!start!+8
set xx=0
for /l %%a in (!start!,1,!end!) do (if defined a%%a (set /a xx=!xx!+1&echo [!xx!]!a%%a!&set xz!xx!=%%a))
set /a pd=!end!+1
if !winv! equ 0 (if not defined a!pd! (echo [0]退出                                             !cswz!42;97m%nx7%!cswz!!ysbak!)) else (
if not defined a!pd! (
set /p =[0]退出<nul
set /p =!cswz1!　　　　　　　　　　　　　　　　　　　　<nul
call :colortxt 2f %nx7%
echo;))
set /a pd1=!start!-1
if !winv! equ 0 (if !pd1! lss 1 (echo [0]退出                                                         !cswz!42;97m%nx1%!cswz!!ysbak!)) else (
if !pd1! lss 1 (
set /p =[0]退出<nul
set /p =!cswz1!　　　　　　　　　　　　　　　　　　　　<nul
call :colortxt 2f %nx1%
echo;))
if !winv! equ 0 (if defined a!pd! (if not !pd1! lss 1 echo [0]退出                                             !cswz!42;97m%nx1%   %nx7%!cswz!!ysbak!)) else (
if defined a!pd! (
if not !pd1! lss 1 (
set /p =[0]退出<nul
set /p =!cswz1!　　　　　　　　　　　　　　　　　　　　<nul
call :colortxt 2f %nx1%
set /p =!cswz1!　　　<nul
call :colortxt 2f %nx7%
echo;)))
::if !start! equ 1 (echo [0]退出                                                         !cswz!42;97m%nx1%!cswz!!ysbak!) else (if !start! equ 64 (echo [0]退出                                                      !cswz!42;97m%nx7%!cswz!!ysbak!) else (echo [0]退出                                             !cswz!42;97m%nx%!cswz!!ysbak!))
if !winv! equ 0 (for /l %%a in (1,1,26) do (if %%a lss 26 (set /p =!fy!<nul) else (echo !fy!))) else (for /l %%a in (1,1,26) do (if %%a lss 26 (set /p =!fy1!<nul) else (echo !fy1!)))
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!" equ "1" if !xz1! lss 10 (goto 0!xz1!) else (goto !xz1!)
if "!caidan!" equ "2" if !xz2! lss 10 (goto 0!xz2!) else (goto !xz2!)
if "!caidan!" equ "3" if !xz3! lss 10 (goto 0!xz3!) else (goto !xz3!)
if "!caidan!" equ "4" if !xz4! lss 10 (goto 0!xz4!) else (goto !xz4!)
if "!caidan!" equ "5" if !xz5! lss 10 (goto 0!xz5!) else (goto !xz5!)
if "!caidan!" equ "6" if !xz6! lss 10 (goto 0!xz6!) else (goto !xz6!)
if "!caidan!" equ "7" if !xz7! lss 10 (goto 0!xz7!) else (goto !xz7!)
if "!caidan!" equ "8" if !xz8! lss 10 (goto 0!xz8!) else (goto !xz8!)
if "!caidan!" equ "9" if !xz9! lss 10 (goto 0!xz9!) else (goto !xz9!)
if "!caidan!" equ "0" exit
if "!caidan!" equ "-" (set /a pd=!start!-1&if not !pd! lss 1 set /a start=!start!-9&goto memuv2)
if "!caidan!" equ "+" (set /a pd=!end!+1&if defined a!pd! set /a start=!start!+9&goto memuv2)
if /i "!caidan!" equ "a" (set /a pd=!start!-1&if not !pd! lss 1 set /a start=!start!-9&goto memuv2)
if /i "!caidan!" equ "s" (set /a pd=!end!+1&if defined a!pd! set /a start=!start!+9&goto memuv2)
if /i "!caidan!" equ "vbsjsq" set tzwz=!start!&goto vbsjsq
if /i "!caidan!" equ "guanji" set tzwz=!start!&goto guanji
if "!caidan!" equ "BATJIAMI" set tzwz=!start!&goto batjiami
if /i "!caidan!" equ "guanyu" set tzwz=!start!&goto guanyu
if /i "!caidan!" equ "csh" goto chushihua
if /i "!caidan!" equ "kcd" set tzwz=!start!&goto kcd
if /i "!caidan!" equ "gcd" set tzwz=!start!&goto gcd
if /i "!caidan!" equ "xz" set tzwz=!start!&goto xz
if /i "!caidan!" equ "js" set tzwz=!start!&goto 49
if /i "!caidan!" equ "gx" set tzwz=!start!&goto update
if /i "!caidan!" equ "go1" set start=1&goto memuv2
if /i "!caidan!" equ "go2" set start=10&goto memuv2
if /i "!caidan!" equ "go3" set start=19&goto memuv2
if /i "!caidan!" equ "go4" set start=28&goto memuv2
if /i "!caidan!" equ "go5" set start=37&goto memuv2
if /i "!caidan!" equ "go6" set start=46&goto memuv2
if /i "!caidan!" equ "go7" set start=55&goto memuv2
if /i "!caidan!" equ "go8" set start=64&goto memuv2
echo 请输入正确的选项！
timeout /t 2 /nobreak>nul
goto memuv2
:a
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m1!cswz!!ysbak!页
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]清除U盘里的lpk.dll病毒
echo [2]清除U盘里的jwgkvsq.vmx病毒，并免疫该病毒
echo [3]清理系统垃圾
echo [4]显示系统信息
echo [5]解除任务管理器被禁用
echo [6]显示被隐藏文件(中了该类病毒后)
echo [7]解除注册表被禁用
echo [8]计算开平方
echo [9]切换到命令提示符
echo [0]退出                                                         !cswz!42;97m%nx1%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!"=="1" goto 01
if "!caidan!"=="2" goto 02
if "!caidan!"=="3" goto 03
if "!caidan!"=="4" goto 04
if "!caidan!"=="5" goto 05
if "!caidan!"=="6" goto 06
if "!caidan!"=="7" goto 07
if "!caidan!"=="8" goto 08
if "!caidan!"=="9" goto 09
if "!caidan!"=="0" goto 00
if "!caidan!"=="+" goto b
if /i "!caidan!"=="s" goto b
if /i "!caidan!"=="vbsjsq" set tzwz=a&goto vbsjsq
if /i "!caidan!"=="guanji" set tzwz=a&goto guanji
if "!caidan!"=="BATJIAMI" set tzwz=a&goto batjiami
if /i "!caidan!"=="guanyu" set tzwz=a&goto guanyu
if /i "!caidan!"=="csh" goto chushihua
if /i "!caidan!"=="kcd" set tzwz=a&goto kcd
if /i "!caidan!"=="gcd" set tzwz=a&goto gcd
if /i "!caidan!"=="xz" set tzwz=a&goto xz
if /i "!caidan!"=="js" set tzwz=a&goto 49
if /i "!caidan!"=="gx" set tzwz=a&goto update
if /i "!caidan!"=="go1" goto a
if /i "!caidan!"=="go2" goto b
if /i "!caidan!"=="go3" goto c
if /i "!caidan!"=="go4" goto d
if /i "!caidan!"=="go5" goto e
if /i "!caidan!"=="go6" goto f
if /i "!caidan!"=="go7" goto g
if /i "!caidan!"=="go8" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto a
:b
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m2!cswz!!ysbak!页
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]将磁盘格式转换为NTFS
echo [2]磁盘错误修复
echo [3]格式化
echo [4]DOS计算器
echo [5]解除命令提示符被禁用
echo [6]随机数生成器
echo [7]清除KHATRA病毒
echo [8]打开注册表
echo [9]打开控制面板
echo [0]退出                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!"=="1" goto 10
if "!caidan!"=="2" goto 11
if "!caidan!"=="3" goto 12
if "!caidan!"=="4" goto 13
if "!caidan!"=="5" goto 14
if "!caidan!"=="6" goto 15
if "!caidan!"=="7" goto 16
if "!caidan!"=="8" goto 17
if "!caidan!"=="9" goto 18
if "!caidan!"=="0" goto 00
if "!caidan!"=="-" goto a
if "!caidan!"=="+" goto c
if /i "!caidan!"=="a" goto a
if /i "!caidan!"=="s" goto c
if /i "!caidan!"=="vbsjsq" set tzwz=b&goto vbsjsq
if /i "!caidan!"=="guanji" set tzwz=b&goto guanji
if "!caidan!"=="BATJIAMI" set tzwz=b&goto batjiami
if /i "!caidan!"=="guanyu" set tzwz=b&goto guanyu
if /i "!caidan!"=="csh" goto chushihua
if /i "!caidan!"=="kcd" set tzwz=b&goto kcd
if /i "!caidan!"=="gcd" set tzwz=b&goto gcd
if /i "!caidan!"=="xz" set tzwz=b&goto xz
if /i "!caidan!"=="js" set tzwz=b&goto 49
if /i "!caidan!"=="gx" set tzwz=a&goto update
if /i "!caidan!"=="go1" goto a
if /i "!caidan!"=="go2" goto b
if /i "!caidan!"=="go3" goto c
if /i "!caidan!"=="go4" goto d
if /i "!caidan!"=="go5" goto e
if /i "!caidan!"=="go6" goto f
if /i "!caidan!"=="go7" goto g
if /i "!caidan!"=="go8" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto b
:c
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m3!cswz!!ysbak!页
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]打开DirectX诊断工具
echo [2]打开计算机管理
echo [3]用户管理
echo [4]打开组策略
echo [5]DOS任务管理器
echo [6]文件系统信息查询
echo [7]创建指定大小的文件
echo [8]免疫U盘病毒
echo [9]磁盘碎片整理
echo [0]退出                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!"=="1" goto 19
if "!caidan!"=="2" goto 20
if "!caidan!"=="3" goto 21
if "!caidan!"=="4" goto 22
if "!caidan!"=="5" goto 23
if "!caidan!"=="6" goto 24
if "!caidan!"=="7" goto 25
if "!caidan!"=="8" goto 26
if "!caidan!"=="9" goto 27
if "!caidan!"=="0" goto 00
if "!caidan!"=="-" goto b
if "!caidan!"=="+" goto d
if /i "!caidan!"=="a" goto b
if /i "!caidan!"=="s" goto d
if /i "!caidan!"=="vbsjsq" set tzwz=c&goto vbsjsq
if /i "!caidan!"=="guanji" set tzwz=c&goto guanji
if "!caidan!"=="BATJIAMI" set tzwz=c&goto batjiami
if /i "!caidan!"=="guanyu" set tzwz=c&goto guanyu
if /i "!caidan!"=="csh" goto chushihua
if /i "!caidan!"=="kcd" set tzwz=c&goto kcd
if /i "!caidan!"=="gcd" set tzwz=c&goto gcd
if /i "!caidan!"=="xz" set tzwz=c&goto xz
if /i "!caidan!"=="js" set tzwz=c&goto 49
if /i "!caidan!"=="gx" set tzwz=c&goto update
if /i "!caidan!"=="go1" goto a
if /i "!caidan!"=="go2" goto b
if /i "!caidan!"=="go3" goto c
if /i "!caidan!"=="go4" goto d
if /i "!caidan!"=="go5" goto e
if /i "!caidan!"=="go6" goto f
if /i "!caidan!"=="go7" goto g
if /i "!caidan!"=="go8" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto c
:d
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m4!cswz!!ysbak!页
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]一键删除空文件夹
echo [2]ping测试网络延迟
echo [3]硬件检测
echo [4]读心术
echo [5]DOS闹钟
echo [6]计时器
echo [7]随机密码生成器
echo [8]删除每个盘符下的System Volume Information文件夹
echo [9]二进制转换器
echo [0]退出                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!"=="1" goto 28
if "!caidan!"=="2" goto 29
if "!caidan!"=="3" goto 30
if "!caidan!"=="4" goto 31
if "!caidan!"=="5" goto 32
if "!caidan!"=="6" goto 33
if "!caidan!"=="7" goto 34
if "!caidan!"=="8" goto 35
if "!caidan!"=="9" goto 36
if "!caidan!"=="0" goto 00
if "!caidan!"=="-" goto c
if "!caidan!"=="+" goto e
if /i "!caidan!"=="a" goto c
if /i "!caidan!"=="s" goto e
if /i "!caidan!"=="vbsjsq" set tzwz=d&goto vbsjsq
if /i "!caidan!"=="guanji" set tzwz=d&goto guanji
if "!caidan!"=="BATJIAMI" set tzwz=d&goto batjiami
if /i "!caidan!"=="guanyu" set tzwz=d&goto guanyu
if /i "!caidan!"=="csh" goto chushihua
if /i "!caidan!"=="kcd" set tzwz=d&goto kcd
if /i "!caidan!"=="gcd" set tzwz=d&goto gcd
if /i "!caidan!"=="xz" set tzwz=d&goto xz
if /i "!caidan!"=="js" set tzwz=d&goto 49
if /i "!caidan!"=="gx" set tzwz=d&goto update
if /i "!caidan!"=="go1" goto a
if /i "!caidan!"=="go2" goto b
if /i "!caidan!"=="go3" goto c
if /i "!caidan!"=="go4" goto d
if /i "!caidan!"=="go5" goto e
if /i "!caidan!"=="go6" goto f
if /i "!caidan!"=="go7" goto g
if /i "!caidan!"=="go8" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto d
:e
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m5!cswz!!ysbak!页
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]文本浏览
echo [2]显示计算机与用户的设置
echo [3]NTFS压缩
echo [4]修改文件权限
echo [5]显示开机启动项
echo [6]语音阅读器
echo [7]批处理文件风险分析
echo [8]文件搜索
echo [9]修复已损坏的文件
echo [0]退出                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!"=="1" goto 37
if "!caidan!"=="2" goto 38
if "!caidan!"=="3" goto 39
if "!caidan!"=="4" goto 40
if "!caidan!"=="5" goto 41
if "!caidan!"=="6" goto 42
if "!caidan!"=="7" goto 43
if "!caidan!"=="8" goto 44
if "!caidan!"=="9" goto 45
if "!caidan!"=="0" goto 00
if "!caidan!"=="-" goto d
if "!caidan!"=="+" goto f
if /i "!caidan!"=="a" goto d
if /i "!caidan!"=="s" goto f
if /i "!caidan!"=="vbsjsq" set tzwz=e&goto vbsjsq
if /i "!caidan!"=="guanji" set tzwz=e&goto guanji
if "!caidan!"=="BATJIAMI" set tzwz=e&goto batjiami
if /i "!caidan!"=="guanyu" set tzwz=e&goto guanyu
if /i "!caidan!"=="csh" goto chushihua
if /i "!caidan!"=="kcd" set tzwz=e&goto kcd
if /i "!caidan!"=="gcd" set tzwz=e&goto gcd
if /i "!caidan!"=="xz" set tzwz=e&goto xz
if /i "!caidan!"=="js" set tzwz=e&goto 49
if /i "!caidan!"=="gx" set tzwz=e&goto update
if /i "!caidan!"=="go1" goto a
if /i "!caidan!"=="go2" goto b
if /i "!caidan!"=="go3" goto c
if /i "!caidan!"=="go4" goto d
if /i "!caidan!"=="go5" goto e
if /i "!caidan!"=="go6" goto f
if /i "!caidan!"=="go7" goto g
if /i "!caidan!"=="go8" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto e
:f
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m6!cswz!!ysbak!页
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]暴力破解压缩包密码
echo [2]Wifi热点
echo [3]反编译chm文件
echo [4]关闭无响应进程
echo [5]文件比较器
echo [6]将文字写入剪切板
echo [7]打开系统服务设置
echo [8]已知年月日计算星期
echo [9]查询系统激活状态
echo [0]退出                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!"=="1" goto 46
if "!caidan!"=="2" goto 47
if "!caidan!"=="3" goto 48
if "!caidan!"=="4" set tzwz=f&goto 49
if "!caidan!"=="5" goto 50
if "!caidan!"=="6" goto 51
if "!caidan!"=="7" goto 52
if "!caidan!"=="8" goto 53
if "!caidan!"=="9" goto 54
if "!caidan!"=="0" goto 00
if "!caidan!"=="-" goto e
if "!caidan!"=="+" goto g
if /i "!caidan!"=="a" goto e
if /i "!caidan!"=="s" goto g
if /i "!caidan!"=="vbsjsq" set tzwz=f&goto vbsjsq
if /i "!caidan!"=="guanji" set tzwz=f&goto guanji
if "!caidan!"=="BATJIAMI" set tzwz=f&goto batjiami
if /i "!caidan!"=="guanyu" set tzwz=f&goto guanyu
if /i "!caidan!"=="csh" goto chushihua
if /i "!caidan!"=="kcd" set tzwz=f&goto kcd
if /i "!caidan!"=="gcd" set tzwz=f&goto gcd
if /i "!caidan!"=="xz" set tzwz=f&goto xz
if /i "!caidan!"=="js" set tzwz=f&goto 49
if /i "!caidan!"=="gx" set tzwz=f&goto update
if /i "!caidan!"=="go1" goto a
if /i "!caidan!"=="go2" goto b
if /i "!caidan!"=="go3" goto c
if /i "!caidan!"=="go4" goto d
if /i "!caidan!"=="go5" goto e
if /i "!caidan!"=="go6" goto f
if /i !caidna!=="go7" goto g
if /i "!caidan!"=="go8" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto f
:g
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m7!cswz!!ysbak!页
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]创建指定文件的快捷方式到桌面
echo [2]打开系统配置
echo [3]字数统计
echo [4]创建符号链接
echo [5]打开管理控制台
echo [6]解除Streams文件锁定
echo [7]创建、删除或列出卷装入点
echo [8]注册表搜索
echo [9]Base64编解码
echo [0]退出                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!"=="1" goto 55
if "!caidan!"=="2" goto 56
if "!caidan!"=="3" goto 57
if "!caidan!"=="4" goto 58
if "!caidan!"=="5" goto 59
if "!caidan!"=="6" goto 60
if "!caidan!"=="7" goto 61
if "!caidan!"=="8" goto 62
if "!caidan!"=="9" goto 63
if "!caidan!"=="0" goto 00
if "!caidan!"=="-" goto f
if "!caidan!"=="+" goto h
if /i "!caidan!"=="a" goto f
if /i "!caidan!"=="s" goto h
if /i "!caidan!"=="vbsjsq" set tzwz=g&goto vbsjsq
if /i "!caidan!"=="guanji" set tzwz=g&goto guanji
if "!caidan!"=="BATJIAMI" set tzwz=g&goto batjiami
if /i "!caidan!"=="guanyu" set tzwz=g&goto guanyu
if /i "!caidan!"=="csh" goto chushihua
if /i "!caidan!"=="kcd" set tzwz=g&goto kcd
if /i "!caidan!"=="gcd" set tzwz=g&goto gcd
if /i "!caidan!"=="xz" set tzwz=g&goto xz
if /i "!caidan!"=="js" set tzwz=g&goto 49
if /i "!caidan!"=="gx" set tzwz=g&goto update
if /i "!caidan!"=="go1" goto a
if /i "!caidan!"=="go2" goto b
if /i "!caidan!"=="go3" goto c
if /i "!caidan!"=="go4" goto d
if /i "!caidan!"=="go5" goto e
if /i "!caidan!"=="go6" goto f
if /i "!caidan!"=="go7" goto g
if /i "!caidan!"=="go8" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto g
:h
set color=
set color1=f
set/a color=%random%%%5
if %color%==0 set ysbak=40;97m
if %color%==1 set ysbak=44;97m
if %color%==2 set color=5&set ysbak=45;97m
if %color%==3 set ysbak=46;97m
if %color%==4 set color=7&set color1=8&set ysbak=47;90m
color %color%%color1%
if exist %temp%\dostoolupdate (
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set gxflag= - 检查到更新版本: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS工具箱 - %system%%gxflag%
cls
echo                                     菜单 - 第!cswz!!ysbak:~0,3!92m8!cswz!!ysbak!页
echo 现在是%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]8.3短文件名管理
echo [2]智能NTFS压缩
echo [3]计算文件哈希值
echo [4]显示货币汇率
echo [5]创建虚拟盘符
echo [6]解压msi安装文件
echo [7]生成CMD控制台色彩表
echo [8]KMS激活Windows 10
echo [0]退出                                                      !cswz!42;97m%nx7%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=请输入你的选择:
if "!caidan!"=="1" goto 64
if "!caidan!"=="2" goto 65
if "!caidan!"=="3" goto 66
if "!caidan!"=="4" goto 67
if "!caidan!"=="5" goto 68
if "!caidan!"=="6" goto 69
if "!caidan!"=="7" goto 70
if "!caidan!"=="8" goto 71
if "!caidan!"=="0" goto 00
if "!caidan!"=="-" goto g
if /i "!caidan!"=="a" goto g
if /i "!caidan!"=="vbsjsq" set tzwz=h&goto vbsjsq
if /i "!caidan!"=="guanji" set tzwz=h&goto guanji
if "!caidan!"=="BATJIAMI" set tzwz=h&goto batjiami
if /i "!caidan!"=="guanyu" set tzwz=h&goto guanyu
if /i "!caidan!"=="csh" goto chushihua
if /i "!caidan!"=="kcd" set tzwz=h&goto kcd
if /i "!caidan!"=="gcd" set tzwz=h&goto gcd
if /i "!caidan!"=="xz" set tzwz=h&goto xz
if /i "!caidan!"=="js" set tzwz=h&goto 49
if /i "!caidan!"=="gx" set tzwz=a&goto update
if /i "!caidan!"=="go1" goto a
if /i "!caidan!"=="go2" goto b
if /i "!caidan!"=="go3" goto c
if /i "!caidan!"=="go4" goto d
if /i "!caidan!"=="go5" goto e
if /i "!caidan!"=="go6" goto f
if /i "!caidan!"=="go7" goto g
if /i !caidna!=="go8" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto h
:01
title 清除U盘里的lpk.dll病毒 - %system%
cls
echo 按任意键开始清除lpl.dll病毒&pause>nul
cls
echo 正在搜索可移动磁盘...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%h in (%sypf%) do (
fsutil fsinfo drivetype %%h|find /i "可移动驱动器"&&goto 01-1)
cls
echo 没有找到可移动磁盘
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto a
:01-1
cls
echo 正在清除lpk.dll病毒...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%h in (%sypf%) do fsutil fsinfo drivetype %%h|find /i "可移动驱动器"&&for /f "delims=" %%i in ('"dir/a/s/b %%hlpk.dll"') do if %%~zi==44032 attrib -s -h -r "%%i"|del/f/q "%%i"|echo 已删除%%i
echo _______________________________________________________________________________
echo 清除完成
echo 按任意键返回菜单&pause>nul
goto a
:02
title 清除U盘里的jwgkvsq.vmx病毒，并免疫该病毒 - %system%
cls
echo 按任意键开始清除jwgkvsq.vmx病毒&pause>nul
cls
echo 正在搜索可移动磁盘...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%j in (%sypf%) do (
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&goto 02-1)
cls
echo 没有找到可移动磁盘
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto a
:02-1
cls
echo 正在清除jwgkvsq.vmx病毒...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%j in (%sypf%) do (
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&takeown/f "%%jautorun.inf"
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&echo y|cacls "%%jautorun.inf" /t /c /p everyone:f
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&takeown/f "%%jRECYLER"
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&echo y|cacls "%%jRECYCLER" /t /c /p everyone:f
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&attrib -s -h -r "%%jautorun.inf"
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&del/f/q "%%jautorun.inf"
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&rd/s/q "%%jRECYCLER"
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&del/f/q "%%jRECYCLER"
fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&echo jwgkvsq.vmx病毒免疫文件，请勿删除！>"%%jRECYCLER")
echo _______________________________________________________________________________
echo 清除完成
echo 按任意键返回菜单&pause>nul
goto a
:03
title 清理系统垃圾 - %system%
cls
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.tm%ad%p
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*._mp
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\~*.*
goto 03(1)
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.syd
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.spc
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.cdr_
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.#res
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.---
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.$$$
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.@@@
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.??$
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.??~
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.~*
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\mscreate.dir
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\chklist.*
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.ftg
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.fts
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.err
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.prv
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.ms
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.wbk
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.xlk
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.diz
:03(1)
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*log.txt
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.dmp
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.log
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.gid
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.chk
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.old
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\recycled\*.*
%sc:~0,3%/f%ad%/s/%ad%q %windir%\*.bak
%sc:~0,3%/f%ad%/s/%ad%q %windir%\prefetch\*.*
%scw:~0,2%/s/q %windir%\temp & md %windir%\temp
%sc:~0,3%/f%ad%/s/%ad%q/f/q %userprofile%\cookies\*.*
%sc:~0,3%/f%ad%/s/%ad%q "%userprofile%\Local Settings\Temporary Internet Files\*.*"
%sc:~0,3%/f%ad%/s/%ad%q "%userprofile%\Local Settings\Temp\*.*"
%sc:~0,3%/f%ad%/s/%ad%q "%userprofile%\recent\*.*"
echo _______________________________________________________________________________
echo 清理完成
echo 按任意键返回菜单&pause>nul
goto a
:04
title 显示系统信息 - %system%
cls
systeminfo
mode
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto a
:05
title 解除任务管理器被禁用 - %system%
cls
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskmgr /t reg_dword /d 00000000 /f
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto a
:06
title 显示被隐藏文件(中了该类病毒后) - %system%
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto a
:07
title 解除注册表被禁用 - %system%
cls
echo [Version]>%systemdrive%\windows\temp\reg.inf
echo Signature="$CHICAGO$">>%systemdrive%\windows\temp\reg.inf
echo [DefaultInstall]>>%systemdrive%\windows\temp\reg.inf
echo DelReg=del>>%systemdrive%\windows\temp\reg.inf
echo [del]>>%systemdrive%\windows\temp\reg.inf
echo HKCU,Software\Microsoft\Windows\CurrentVersion\Policies\System,Disableregistrytools>>%systemdrive%\windows\temp\reg.inf
rundll32 syssetup,SetupInfObjectInstallAction DefaultInstall 128 %systemdrive%\windows\temp\reg.inf
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableRegistryTools /t reg_dword /d 00000000 /f
del/f/q %systemdrive%\windows\temp\reg.inf
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto a
:08
title 计算开平方 - %system%
cls
setlocal enabledelayedexpansion
set w=0
set s=0
set/p s=请输入被开平方的数:
set s=%s:|=%
for /f "delims=0123456789" %%a in ('echo %s%') do goto kpfcw
set/p w=精确到小数点后几位数:
set w=%w:|=%
for /f "delims=0123456789" %%a in ('echo %w%') do goto xswscw
set wbak=%w%
set sbak=%s%
if defined W (for /l %%i in (1 1 %W%) do set "s=!s!00") else set W=0
set p=!s!&set /a len=N=0
for %%i in (4096 2048 1024 512 256 128 64 32 16 8 4 2 1) do IF "!p:~%%i!" NEQ "" set/a len+=%%i&set "p=!p:~%%i!"
set /a "N-=~(len%%2)"
set M=!s:~,%N%!
for /l %%i in (1 1 9) do set/a Mx=%%i*%%i&if !Mx! leq !M! set/a "i=%%i,j=100+M-Mx"
set /a "len-=1,Len_i=_N=i/5+1,p=i*20"
set j=!j:~-%_N%!&set p=0!p!&set kl=0000000
set /a _N=8-_N
for /l %%i in (%N% 2 !len!) do (
set "j=!j!!s:~%%i,2!"
if "!j:0=!" neq "" (
set /a Ln_i=Len_i+=2
if "!p!" lss "!j!" (
set d=Z&set in=!kl!!P!&set /a Ln_i+=7
for /l %%j in (9 -1 2) do (
if "!d!" gtr "!j!" (
set "x=%%j"
set d=&set /a "b=x*x"
for /l %%k in (8 8 !Ln_i!) do (
set /a "b=1!in:~-%%k,8!*%%j+b"
set d=!b:~-8!!d!&set /a "b=!b:~,-8!-%%j"
)
set d=!b!!d!
for %%k in (!Len_i!) do set "d=!d:~-%%k!"
)
)
if "!d!" gtr "!j!" (set d=!in!&set x=1&set b=1) else set d=!kl!!d!&set b=0
set j=!kl!!j!&set "t="
for /l %%j in (8 8 !Ln_i!) do (
set /a "b=3!j:~-%%j,8!-1!d:~-%%j,8!-!b:~,1!%%2"
set "t=!b:~1!!t!"
)
for %%j in (!Len_i!) do set "j=!t:~-%%j!"
set "j=!j:~1!" ) else set "x=0"
set /a "Len_i-=1"
if "!x!" neq "0" (
if "!x!" geq "5" (
set p=&set b=0&set "in=!kl!!i!!x!"
set /a "Ln_i=Len_i+_N"
for /l %%j in (8 8 !Ln_i!) do (
set /a "b=1!in:~-%%j,8!*2+!b:~,1!%%2"
set p=!b:~1!!p!
)
set /a "b=!b:~,1!%%2"
for %%j in (!Len_i!) do set "p=!b:1=01!!p:~-%%j!0"
) else set /a t=x*2&set "p=!p:~,-1!!t!0"
) else set p=!p!0&set "j=!j:~1!"
) else set j=!j:~1!&set p=!p!0&set /a "Len_i+=1,x=0"
set i=!i!!x!
)
for /f "tokens=* delims=." %%i in ("!i:~,-%W%!.!i:~-%W%!") do set sqrt=%%i
cls
echo %sbak%的开平方结果是(精确到小数点后%wbak%位):
echo %sqrt%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto a
:kpfcw
echo 不是有效数字!
ping/n 2 0.0>nul
goto 08
:xswscw
echo 不是有效数字!
ping/n 2 0.0>nul
goto 08
:09
title 命令提示符 - %system%
cls
ver
if !winv! equ 0 (cmd /k prompt !cswz!!ysbak:~0,3!92m%username%!cswz!!ysbak!@%hostname%:$p#$s) else (cmd /k prompt %username%@%hostname%:$p#$s)
goto a
:10
title 将磁盘格式转换为NTFS - %system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
echo 如果不能正常转换，请使用磁盘错误修复
set zhuanhuancipan=
set/p zhuanhuancipan=请输入需要转换的盘符:
cls
convert %zhuanhuancipan%:/fs:ntfs
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto b
:11
title 磁盘修复 - %system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set cipanxioufu=
set/p cipanxioufu=请输入需要修复的盘符:
cls
fsutil fsinfo ntfsinfo %cipanxioufu%:>nul 2>nul
if "%errorlevel%"=="0" (chkdsk /x /f /sdcleanup %cipanxioufu%:) else (chkdsk /f /x %cipanxioufu%:)
echo _______________________________________________________________________________
echo 修复完成
echo 按任意键返回菜单&pause>nul
goto b
:12
color cf
title 格式化 - %system%
echo 
cls
set geshihuaxuanxiang=
set/p geshihuaxuanxiang=格式化有一定的危险性，是否继续(y/n):
set geshihuaxuanxiang="%geshihuaxuanxiang:|=%"
if /i !geshihuaxuanxiang!=="y" goto 12(1)
if /i !geshihuaxuanxiang!=="n" goto b
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 12
:12(1)
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set geshihua=
set/p geshihua=请输入需要格式化的盘符:
cls
label %geshihua%: format
format %geshihua%:/x/q/v:format/y
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto b
:batjiami
color 0a
title bat加密 - %system%
cls
echo 此工具只可以用于纯文本文件加密
echo _______________________________________________________________________________
echo [1]文件加密(方法1)
echo [2]文件解密
echo [3]文件加密(方法2)(推荐使用)
echo [0]返回菜单
echo _______________________________________________________________________________
set batjmxx=
set/p batjmxx=请输入你的选择:
if "!batjmxx!"=="1" goto batjiami(1)
if "!batjmxx!"=="2" goto batjiami(2)
if "!batjmxx!"=="3" goto batjiami(3)
if "!batjmxx!"=="0" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto batjiami
:batjiami(1)
title 文件加密(方法1) - %system%
del/f/q %systemdrive%linshiwenjian.tmp>nul
cls
echo 文件加密(方法1)
echo _______________________________________________________________________________
echo 加密文件会在桌面生成(e=返回):
echo _______________________________________________________________________________
set jiami=
set/p jiami=拖动需要加密的文件到此窗口:
if /i "!jiami!"=="e" goto batjiami
if "!jiami:~0,1!!jiami:~-1!" neq """" for /f "delims=" %%a in ('"echo !jiami!"') do (set !jiami!="%%~a")
:batpd
cls
for /f "delims=" %%a in ("!jiami!") do set jmdx=%%~za
set/a batpdjg=!jmdx!%%2
if "!batpdjg!"=="1" goto jiamipause
if "!batpdjg!"=="0" goto beiyongjiamipause
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto batjiami(1)
:jiamipause
for /f "delims=" %%e in ("!jiami!") do if %%~xe==.bat set geshi=bat&set wjm=%%~ne&goto batjiami(1)(1)
for /f "delims=" %%e in ("!jiami!") do if %%~xe==.txt set geshi=txt&set wjm=%%~ne&goto batjiami(1)(1)
for /f "delims=" %%e in ("!jiami!") do if %%~xe==.log set geshi=log&set wjm=%%~ne&goto batjiami(1)(1)
for /f "delims=" %%e in ("!jiami!") do if %%~xe==.inf set geshi=inf&set wjm=%%~ne&goto batjiami(1)(1)
for /f "delims=" %%e in ("!jiami!") do if %%~xe==.cmd set geshi=cmd&set wjm=%%~ne&goto batjiami(1)(1)
for /f "delims=" %%e in ("!jiami!") do if %%~xe==.ini set geshi=ini&set wjm=%%~ne&goto batjiami(1)(1)
for /f "delims=" %%e in ("!jiami!") do if %%~xe==.lrc set geshi=lrc&set wjm=%%~ne&goto batjiami(1)(1)
echo 无效的文件格式！
ping/n 2 0.0>nul
goto batjiami(1)
:batjiami(1)(1)
copy/y "!jiami!" %systemdrive%linshiwenjian.tmp
echo %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a >%systemdrive%1.tmp
echo cls>%systemdrive%2.tmp
copy/b %systemdrive%1.tmp+%systemdrive%2.tmp+%systemdrive%linshiwenjian.tmp "%zmlj%已加密的%wjm%.%geshi%"
del/f/q %systemdrive%1.tmp
del/f/q %systemdrive%2.tmp
del/f/q %systemdrive%linshiwenjian.tmp
cls
echo _______________________________________________________________________________
echo 加密完成
ping/n 2 0.0>nul
goto batjiami
:batjiami(2)
title 文件解密 - %system%
del/f/q %systemdrive%linshiwenjian.tmp>nul
cls
echo 文件解密
echo _______________________________________________________________________________
echo 解密文件会在桌面生成(e=返回)
echo _______________________________________________________________________________
set jiemi=
set/p jiemi=拖动需要解密的文件到此窗口:
if /i "!jiemi!"=="e" goto batjiami
if "!jiemi:~0,1!!jiemi:-1!" neq """" for /f "delims=" %%a in ('"echo !jiemi!"') do (set !jiemi!="%%~a")
:jiemipause
for /f "delims=" %%f in ("!jiemi!") do if %%~xf==.bat set geshi=bat&set wjm=%%~nf&goto batjiami(2)(1)
for /f "delims=" %%f in ("!jiemi!") do if %%~xf==.txt set geshi=txt&set wjm=%%~nf&goto batjiami(2)(1)
for /f "delims=" %%f in ("!jiemi!") do if %%~xf==.log set geshi=log&set wjm=%%~nf&goto batjiami(2)(1)
for /f "delims=" %%f in ("!jiemi!") do if %%~xf==.inf set geshi=inf&set wjm=%%~nf&goto batjiami(2)(1)
for /f "delims=" %%f in ("!jiemi!") do if %%~xf==.cmd set geshi=cmd&set wjm=%%~nf&goto batjiami(2)(1)
for /f "delims=" %%f in ("!jiemi!") do if %%~xf==.ini set geshi=ini&set wjm=%%~nf&goto batjiami(2)(1)
for /f "delims=" %%f in ("!jiemi!") do if %%~xf==.lrc set geshi=lrc&set wjm=%%~nf&goto batjiami(2)(1)
echo 无效的文件格式！
ping/n 2 0.0>nul
goto batjiami(2)
:batjiami(2)(1)
copy/y "!jiemi!" %systemdrive%linshiwenjian.tmp
echo;>%systemdrive%3.tmp
copy/b %systemdrive%3.tmp+%systemdrive%linshiwenjian.tmp "%zmlj%已解密的%wjm%.%geshi%"
del/f/q 3.tmp
del/f/q %systemdrive%linshiwenjian.tmp
cls
echo _______________________________________________________________________________
echo 解密完成
ping/n 2 0.0>nul
goto batjiami
:beiyongjiamipause
del/f/q %systemdrive%linshiwenjian.tmp>nul
for /f "delims=" %%g in ("!jiami!") do if %%~xg==.bat set geshi=bat&set wjm=%%~ng&goto beiyongjiami(1)
for /f "delims=" %%g in ("!jiami!") do if %%~xg==.txt set geshi=txt&set wjm=%%~ng&goto beiyongjiami(1)
for /f "delims=" %%g in ("!jiami!") do if %%~xg==.log set geshi=log&set wjm=%%~ng&goto beiyongjiami(1)
for /f "delims=" %%g in ("!jiami!") do if %%~xg==.inf set geshi=inf&set wjm=%%~ng&goto beiyongjiami(1)
for /f "delims=" %%g in ("!jiami!") do if %%~xg==.cmd set geshi=cmd&set wjm=%%~ng&goto beiyongjiami(1)
for /f "delims=" %%g in ("!jiami!") do if %%~xg==.ini set geshi=ini&set wjm=%%~ng&goto beiyongjiami(1)
for /f "delims=" %%g in ("!jiami!") do if %%~xg==.lrc set geshi=lrc&set wjm=%%~ng&goto beiyongjiami(1)
echo 无效的文件格式！
ping/n 2 0.0>nul
goto batjiami(1)
:beiyongjiami(1)
copy/y "!jiami!" %systemdrive%linshiwenjian.tmp
echo %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a>%systemdrive%4.tmp
echo cls>%systemdrive%5.tmp
copy/b %systemdrive%4.tmp+%systemdrive%5.tmp+%systemdrive%linshiwenjian.tmp "%zmlj%已加密的%wjm%.%geshi%"
del/f/q %systemdrive%4.tmp
del/f/q %systemdrive%5.tmp
del/f/q %systemdrive%linshiwenjian.tmp
cls
echo _______________________________________________________________________________
echo 加密完成
ping/n 2 0.0>nul
goto batjiami
:batjiami(3)
cls
title 文件加密(方法2) - %system%
echo 文件加密(方法2)
echo _______________________________________________________________________________
echo 加密文件会在桌面生成(e=返回)
echo _______________________________________________________________________________
set jiami2=
set/p jiami2=拖动需要加密的文件到此窗口:
if /i "!jiami2!"=="e" goto batjiami
if "!jiami2:~0,1!!jiami2:-1!" neq """" for /f "delims=" %%a in ('"echo !jiami2!"') do (set !jiami2!="%%~a")
:jiami2pause
for /f "delims=" %%g in ("!jiami2!") do if %%~xg==.bat set geshi=bat&set wjm=%%~ng&goto jiami2(1)
for /f "delims=" %%g in ("!jiami2!") do if %%~xg==.txt set geshi=txt&set wjm=%%~ng&goto jiami2(1)
for /f "delims=" %%g in ("!jiami2!") do if %%~xg==.log set geshi=log&set wjm=%%~ng&goto jiami2(1)
for /f "delims=" %%g in ("!jiami2!") do if %%~xg==.inf set geshi=inf&set wjm=%%~ng&goto jiami2(1)
for /f "delims=" %%g in ("!jiami2!") do if %%~xg==.cmd set geshi=cmd&set wjm=%%~ng&goto jiami2(1)
for /f "delims=" %%g in ("!jiami2!") do if %%~xg==.ini set geshi=ini&set wjm=%%~ng&goto jiami2(1)
for /f "delims=" %%g in ("!jiami2!") do if %%~xg==.lrc set geshi=lrc&set wjm=%%~ng&goto jiami2(1)
echo 无效的文件格式！
ping/n 2 0.0>nul
goto batjiami(3)
:jiami2(1)
cls
verify on
copy/y "!jiami2!" %systemdrive%temp.0
set /p =//4NCg==<nul>%temp%\tmpcode
certutil -decode -f %temp%\tmpcode %systemdrive%temp>nul
copy/b %systemdrive%temp+%systendrive%temp.0 "%zmlj%已加密的%wjm%.%geshi%"
del/f/q %systemdrive%temp
del/f/q %systemdrive%temp.0
cls
echo _______________________________________________________________________________
echo 加密完成
ping/n 2 0.0>nul
goto batjiami
:13
title DOS计算器 - %system%
cls
echo _______________________________________________________________________________
echo 注意:DOS计算只能进行整数运算，计算结果只能精确到整数
echo 有效数值范围(-2147483648至2147483647)(c=清屏 e=返回)
echo _______________________________________________________________________________
:13(1)
set biaodashi=
set/p biaodashi=请输入表达式:
set biaodashi="%biaodashi:|=%"
if /i !biaodashi!=="c" goto 13
if /i !biaodashi!=="e" goto b
:13(2)
set/a jieguo=%biaodashi%
echo 计算结果:%biaodashi%=%jieguo%
echo _______________________________________________________________________________
goto 13(1)
:14
title 解除命令提示符被禁用 - %system%
cls
reg add "HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\System" /v DisableCMD /t reg_dword /d 00000000 /f
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto b
:15
title 随机数生成器 - %system%
set/a cs=0
cls
echo 说明:只能输入整数，随机数范围(0-32767)(e=返回菜单)
echo _______________________________________________________________________________
set zuidazhi=
set zuixiaozhi=
set/p zuidazhi=请输入随机数的最大值:
set/p zuixiaozhi=请输入随机数的最小值:
echo _______________________________________________________________________________
:15(1)
set/a cs+=1
set/a zdzcl=%zuidazhi%+1
set/a suijishu=%random%%%(%zdzcl%-%zuixiaozhi%)+%zuixiaozhi%
echo 第%cs%次产生的随机数:%suijishu%
:15(3)
set tuichusuijishu=
set/p tuichusuijishu=
set tuichusuijishu="%tuichusuijishu:|=%"
if /i !tuichusuijishu!=="e" goto b
if /i !tuichusuijishu!=="|=" goto 15(1)
goto 15(3)
:16
title 清除KHATRA病毒 - %system%
cls
echo 按任意键开始清除KHATRT病毒&pause>nul
cls
echo 正在结束KHATRA病毒进程...
ping/n 2 0.0>nul
:16(4)
set khatra=0
:16(4)(1)
taskkill /f /im xplorer.exe
attrib -s -h -r "%systemdrive%\windows\xplorer.exe"
del/f/q "%systemdrive%\windows\xplorer.exe"
md "%systemdrive%\windows\xplorer.exe"
taskkill /f /im ghost.exe
attrib -s -h -r "%systemdrive%\windows\system\ghost.exe"
del/f/q "%systemdrive%\windows\system\ghost.exe"
md "%systemdrive%\windows\system\ghost.exe"
taskkill /f /im khatra.exe
attrib -s -h -r "%systemdrive%\windows\system32\khatra.exe"
del/f/q "%systemdrive%\windows\system32\khatra.exe"
md "%systemdrive%\windows\system32\khatra.exe"
attrib -s -h -r "%systemdrive%\khatra.exe"
del/f/q "%systemdrive%\khatra.exe"
md "%systemdrive%\khatra.exe"
if not %khatra%==1 set/a khatra=%khatra%+1&goto 16(4)(1)
echo _______________________________________________________________________________
echo 正在删除KHATRA病毒...
echo _______________________________________________________________________________
ping/n 2 0.0>nul
rd/s/q "%systemdrive%\khatra.exe"
rd/s/q "%systemdrive%\windows\xplorer.exe"
rd/s/q "%systemdrive%\windows\system\ghost.exe"
rd/s/q "%systemdrive%\windows\system32\khatra.exe"
rd/s/q "%systemdrive%\windows\k.backup"
rd/s/q "%systemdrive%\windows\system32\ntmsdata"
del/f/q "%systemdrive%\windows\youtube.cab"
del/f/q "%systemdrive%\windows\supermodels.cab"
del/f/q "%systemdrive%\windows\new-screamsaver.com.cab"
del/f/q "%systemdrive%\windows\New WinZip File.cab"
del/f/q "%systemdrive%\windows\New WinRAR ZIP archive.cab"
del/f/q "%systemdrive%\windows\New WinRAR archive.cab"
del/f/q "%systemdrive%\windows\mario675.cab"
del/f/q "%systemdrive%\windows\kavSetupEng3857.cab"
del/f/q "%systemdrive%\windows\fh_antivirussetup6534.cab"
del/f/q "%systemdrive%\windows\CyberWar.cab"
del/f/q "%systemdrive%\windows\khatarnakh.exe"
del/f/q "%systemdrive%\windows\tasks\at1.job"
del/f/q "%systemdrive%\windows\system32\avphost.dll"
del/f/q "%systemdrive%\windows\inf\autoplay.inf"
echo _______________________________________________________________________________
echo 正在全盘扫描...
echo _______________________________________________________________________________
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for /f "delims=" %%a in ('"for %%b in (%sypf%) do dir/a/s/b %%b*.exe"') do if %%~za==486912 attrib -s -h -r "%%a"|del/f/q "%%a"|echo 已删除%%a
for /f "delims=" %%c in ('"for %%d in (%sypf%) do dir/a/s/b %%dautorun.inf"') do if %%~zc==234 attrib -s -h -r "%%c"|del/f/q "%%c"|echo 已删除%%c
for %%k in (%sypf%) do del/f/s/q %%k(Empty).lnk
echo [Version]>%systemdrive%\windows\temp\reg.inf
echo Signature="$CHICAGO$">>%systemdrive%\windows\temp\reg.inf
echo [DefaultInstall]>>%systemdrive%\windows\temp\reg.inf
echo DelReg=del>>%systemdrive%\windows\temp\reg.inf
echo [del]>>%systemdrive%\windows\temp\reg.inf
echo HKCU,Software\Microsoft\Windows\CurrentVersion\Policies\System,Disableregistrytools>>%systemdrive%\windows\temp\reg.inf
rundll32 syssetup,SetupInfObjectInstallAction DefaultInstall 128 %systemdrive%\windows\temp\reg.inf
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableRegistryTools /t reg_dword /d 00000000 /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\Current Version\Policies\Explorer" /v nosetfolders /t reg_dword /d 00000000 /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer" /v NoControlPanel /t reg_dword /d 00000000 /f
del/f/q %systemdrive%\windows\temp\reg.inf
if /i "%sypf%"=="c:\" goto shoudong
if /i "%sypf%"=="c:\ " goto shoudong
ping/n 2 0.0>nul
:16(1)
echo _______________________________________________________________________________
set zhucebiaoqingli=
set/p zhucebiaoqingli=注册表需要手动清理.是否打开注册表(y/n):
set zhucebiaoqingli="%zhucebiaoqingli:|=%"
if /i !zhucebiaoqingli!=="y" goto 16(2)
if /i !zhucebiaoqingli!=="n" goto 16(3)
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 16(1)
:16(2)
cls
regedit
:16(3)
cls
echo KHATRA病毒清除完成
echo 按任意键返回菜单&pause>nul
goto b
:shoudong
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for /f "delims=" %%a in ('"for %%b in (%sypf%) do dir/a/s/b %%b*.exe"') do if %%~za==486912 attrib -s -h -r "%%a"|del/f/q "%%a"|echo 已删除%%a
for /f "delims=" %%c in ('"for %%d in (%sypf%) do dir/a/s/b %%dautorun.inf"') do if %%~zc==234 attrib -s -h -r "%%c"|del/f/q "%%c"|echo 已删除%%c
for %%k in (%sypf%) do del/f/s/q %%k:\(Empty).lnk
goto 16(1)
:17
cls
start regedit
goto b
:18
cls
start control
goto b
:19
cls
start dxdiag
goto c
:20
cls
start compmgmt.msc
goto c
:21
title 用户管理 - %system%
cls
echo _______________________________________________________________________________
echo [1]显示所有的用户
echo [2]创建新用户
echo [3]删除用户
echo [4]提升用户为管理员
echo [5]强制修改用户密码
echo [6]查看用户信息
echo [7]激活账户
echo [8]停用账户
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 123456780 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 21(1)
if "%errorlevel%" equ "2" goto 21(2)
if "%errorlevel%" equ "3" goto 21(3)
if "%errorlevel%" equ "4" goto 21(4)
if "%errorlevel%" equ "5" goto 21(5)
if "%errorlevel%" equ "6" goto 21(6)
if "%errorlevel%" equ "7" goto 21(7)
if "%errorlevel%" equ "8" goto 21(8)
if "%errorlevel%" equ "9" goto c
goto 21
set yonghu=
set/p yonghu=请输入你的选择:
set yonghu="%yonghu:|=%"
if !yonghu!=="1" goto 21(1)
if !yonghu!=="2" goto 21(2)
if !yonghu!=="3" goto 21(3)
if !yonghu!=="4" goto 21(4)
if !yonghu!=="5" goto 21(5)
if !yonghu!=="6" goto 21(6)
if !yonghu!=="7" goto 21(7)
if !yonghu!=="8" goto 21(8)
if !yonghu!=="0" goto c
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 21
:21(1)
title 显示所有的用户 - %system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:21(2)
title 创建新用户 - %system%
cls
echo 注意:创建的用户类型为普通用户
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
set xinyonghuming=
set xinyonghumima=
set/p xinyonghuming=用户名:
set/p xinyonghumima=密码:
echo _______________________________________________________________________________
cls
net user %xinyonghuming% %xinyonghumima% /add
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:21(3)
title 删除用户 - %system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
set shanchuyonghu=
set/p shanchuyonghu=请输入要删除的用户:
cls
net user %shanchuyonghu% /del
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:21(4)
title 提升用户为管理员 - %system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
set/p tishengyonghu=
set/p tishengyonghu=请输入要提升的用户名:
cls
net localgroup administrators %tishengyonghu% /add
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:21(5)
title 强制修改用户密码 - %system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
set xiougaimima=
set xinmima=
set/p xiougaimima=请输入要修改的用户名:
set/p xinmima=请输入新密码:
cls
net user %xiougaimima% %xinmima%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:21(6)
title 查看用户信息 - %system%
cls
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
set chakanyonghuxinxi=
set/p chakanyonghuxinxi=请输入要查看的用户名:
cls
net user %chakanyonghuxinxi%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:21(7)
title 激活账户 - %system%
cls
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
set jhzh=
set/p jhzh=请输入要操作的用户名:
cls
net user %jhzh% /active:yes
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:21(8)
title 停用账户 - %system%
cls
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
set tyzh=
set/p tyzh=请输入要操作的用户名:
cls
net user %tyzh% /active:no
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:22
cls
start gpedit.msc
goto c
:guanji
title 关机选项 - %system%
color 0a
cls
echo _______________________________________________________________________________
echo [1]关机
echo [2]重启
echo [3]注销
echo [4]放弃系统关机
echo [5]开启休眠功能
echo [6]关闭休眠功能
echo [7]显示系统上可用的睡眠状态
echo [8]锁屏
echo [9]循环显示唤醒计时器与电源请求
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 1234567890 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto guanji(1)
if "%errorlevel%" equ "2" goto guanji(2)
if "%errorlevel%" equ "3" goto guanji(3)
if "%errorlevel%" equ "4" goto guanji(4)
if "%errorlevel%" equ "5" goto guanji(6)
if "%errorlevel%" equ "6" goto guanji(7)
if "%errorlevel%" equ "7" goto guanji(8)
::if "%errorlevel%" equ "8" tsdiscon
if "%errorlevel%" equ "8" rundll32.exe user32.dll LockWorkStation
if "%errorlevel%" equ "9" goto guanji-9
if "%errorlevel%" equ "10" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
goto guanji
set guanjixuanxiang=
set/p guanjixuanxiang=请输入你的选择:
set guanjixuanxiang="%guanjixuanxiang:|=%"
if !guanjixuanxiang!=="1" goto guanji(1)
if !guanjixuanxiang!=="2" goto guanji(2)
if !guanjixuanxiang!=="3" goto guanji(3)
if !guanjixuanxiang!=="4" goto guanji(4)
if !guanjixuanxiang!=="5" goto guanji(6)
if !guanjixuanxiang!=="6" goto guanji(7)
if !guanjixuanxiang!=="7" goto guanji(8)
if !guanjixuanxiang!=="0" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto guanji
:guanji(1)
title 关机 - %system%
cls
echo 请设置关机倒计时，有效范围(0-315360000)秒(e=返回)
set guanjidaojishi=
set/p guanjidaojishi=
set guanjidaojishi=%guanjidaojishi:|=%
if "!guanjidaojishi!"=="" shutdown /s /f&goto guanji
if /i !guanjidaojishi!==e goto guanji
if !guanjidaojishi! leq 315360000 goto guanji(1)(1)
echo 不是有效数字！
ping/n 2 0.0>nul
goto guanji(1)
:guanji(1)(1)
if !guanjidaojishi! geq 0 shutdown /s /f /t %guanjidaojishi%&goto guanji
echo 不是有效数字！
ping/n 2 0.0>nul
goto guanji(1)
:guanji(2)
title 重启 - %system%
cls
echo 请设置重启倒计时，有效范围(0-315360000)秒(e=返回)
set chongqidaojishi=
set/p chongqidaojishi=
set chongqidaojishi=%chongqidaojishi:|=%
if "!chongqidaojishi!"=="" shutdown /r /f&goto guanji 
if /i !chongqidaojishi!==e goto guanji
if !chongqidaojishi! leq 315360000 goto guanji(2)(1)
echo 不是有效数字！
ping/n 2 0.0>nul
goto guanji(2)
:guanji(2)(1)
if !chongqidaojishi! geq 0 shutdown /r /f /t %chongqidaojishi%&goto guanji
echo 不是有效数字！
ping/n 2 0.0>nul
goto guanji(2)
:guanji(3)
title 注销 - %system%
cls
set zhuxiao=
set/p zhuxiao=是否立即注销(y/n):
set zhuxiao="%zhuxiao:|=%"
if /i !zhuxiao!=="y" logoff&goto 00
if /i !zhuxiao!=="n" goto guanji
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto guanji(3)
:guanji(4)
title 放弃系统关机 - %system%
cls
shutdown /a
ping/n 2 0.0>nul
goto guanji
:guanji(6)
title 开启休眠 - %system%
cls
set size=
set/p size=设置休眠文件占用总内存比例(40~100)(默认100)(e=返回):
set size="%size:|=%"
if /i !size!=="e" goto guanji
if /i !size!=="|=" set size=100&goto xm
if "%size:~0,1%%size:~-1%" neq """" for /f "delims=" %%a in ('"echo %size%"') do (set %size%=%%~a)
set size=!size:"=!
if !size! geq 40 if !size! leq 100 goto xm
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto guanji(6)
:xm
powercfg /h /size %size%
echo 已开启休眠功能
ping/n 2 0.0>nul
goto guanji
:guanji(7)
title 关闭休眠 - %system%
cls
powercfg -h off
echo 已关闭休眠功能
ping/n 2 0.0>nul
goto guanji
:guanji(8)
title 显示系统上可用的睡眠状态 - %system%
cls
powercfg -a
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto guanji
:guanji-9
title 循环显示唤醒计时器与电源请求 - %system%
cls
powercfg /requests
powercfg /waketimers
echo _______________________________________________________________________________
echo 按e返回菜单
choice /c 1e /t 1 /d 1 >nul
if "%errorlevel%" equ ="2" goto guanji
goto guanji-9
:23
title DOS任务管理器 - %system%
cls
echo _______________________________________________________________________________
echo [1]显示所有进程
echo [2]显示每个进程的服务
echo [3]显示进程路径
echo [4]显示进程详细信息
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 12340 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 23(1)
if "%errorlevel%" equ "2" goto 23(2)
if "%errorlevel%" equ "3" goto 23(6)
if "%errorlevel%" equ "4" goto 23(10)
if "%errorlevel%" equ "5" goto c
goto 23
set dosjc=
set/p dosjc=请输入你的选择:
set dosjc="%dosjc:|=%"
if !dosjc!=="1" goto 23(1)
if !dosjc!=="2" goto 23(2)
if !dosjc!=="3" goto 23(6)
if !dosjc!=="4" goto 23(10)
if !dosjc!=="0" goto c
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 23
:23(1)
cls
tasklist
echo _______________________________________________________________________________
echo (e=返回)(f=刷新)
set jcjs=
set/p jcjs=输入要结束的进程PID或名称:
if not defined jcjs goto 23(1)
set jcjs="%jcjs:|=%"
if /i !jcjs!=="f" goto 23(1)
if /i !jcjs!=="e" goto 23
taskkill /f /im %jcjs%
ping/n 2 0.0>nul
goto 23(1)
:23(2)
cls
tasklist/svc
echo _______________________________________________________________________________
echo (e=返回)(f=刷新)
set jcfw=
set/p jcfw=输入要结束的进程PID或名称:
if not defined jcfw goto 23(2)
set jcfw="%jcfw:|=%"
if /i !jcfw!=="f" goto 23(2)
if /i !jcfw!=="e" goto 23
taskkill /f /im %jcfw%
ping/n 2 0.0>nul
goto 23(2)
:23(6)
title 显示进程路径 - %system%
cls
tasklist
echo _______________________________________________________________________________
echo (e=返回)(f=刷新)
set jclj=
set/p jclj=输入要显示的进程PID:
if not defined jclj goto 23(1)
set jclj="%jclj:|=%"
if /i !jclj!=="f" goto 23(1)
if /i !jclj!=="e" goto 23
tasklist /fi "pid eq %jclj%"|findstr /i "%jclj%"||echo 没有此进程&&timeout /t 2 /nobreak>nul&&goto 23(6)
cls
for /f "delims=" %%a in ('"wmic process where processid=!jclj! get /format:value|find /i "executablepath""') do set jclj1=%%a
echo 文件路径: %jclj1:~15%
echo _______________________________________________________________________________
echo (e=返回)(f=刷新)(d=打开文件位置)
choice /c efd /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 23(6)
if "%errorlevel%" equ "2" goto 23
if "%errorlevel%" equ "3" goto 23(8)
goto 23(7)
set jcljxs=
set/p jcljxs=请输入你的选择:
if not defined jcljxs goto 23(6)
set jcljxs="%jcljxs:|=%"
if /i !jcljxs!=="f" goto 23(6)
if /i !jcljxs!=="e" goto 23
if /i !jcljxs!=="d" goto 23(8)
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 23(7)
:23(8)
explorer/select,"%jclj1:~15%"
goto 23
:23(10)
title 显示进程详细信息 - %system%
cls
echo _______________________________________________________________________________
tasklist
echo _______________________________________________________________________________
echo (e=返回)(f=刷新)
set jcxq=
set/p jcxq=请输入要显示的进程的PID:
if not defined jcxq goto 23(10)
set jcxq="%jcxq:|=%"
if /i !jcxq!=="e" goto 23
if /i !jcxq!=="f" goto 23(10)
tasklist /fi "pid eq %jcxq%"|findstr /i "%jcxq%"||echo 没有此进程&&timeout /t 2 /nobreak>nul&&goto 23(10)
cls
echo _______________________________________________________________________________
set jcmz=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "caption""') do set jcmz=%%a
echo 进程名称: %jcmz:~8%
set jcmlh=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "commandline""') do set jcmlh=%%a
echo 进程命令行: %jcmlh:~12%
set jcrq=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "creationdate""') do set jcrq=%%a
echo 进程启动日期: %jcrq:~13,4%年%jcrq:~17,2%月%jcrq:~19,2%日 %jcrq:~21,2%:%jcrq:~23,2%:%jcrq:~25,2%
set jclj=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "executablepath""') do set jclj=%%a
echo 进程路径: "%jclj:~15%"
set jcpid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "processid""') do set jcpid=%%a
echo 进程PID: %jcpid:~10%
set jchx=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "kernelmodetime""') do set jchx=%%a
echo 进程核心模式时间: %jchx:~15%
echo 系统名称: %system% %bit%位
set jcymcw=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "pagefaults""') do set jcymcw=%%a
echo 进程页面错误: %jcymcw:~12%
set jctj=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "pagefileusage""') do set jctj=%%a
call :dwjs %jctj:~18% 1
echo 进程提交大小: %size% %dw%
set jcfid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "parentprocessid""') do set jcfid=%%a
echo 进程父系PID: %jcfid:~16%
set jcfzysy=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "peakpagefileusage""') do set jcfzysy=%%a
call :dwjs %jcfzysy:~18% 1
echo 进程峰值页面文件使用: %size% %dw%
set jcfzgz=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "peakworking""') do set jcfzgz=%%a
call :dwjs %jcfzgz:~19% 1
echo 进程峰值工作: %size% %dw%
set jcyxj=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "priority""') do set jcyxj=%%a
echo 进程优先级: %jcyxj:~9%
set jchhid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "sessionid""') do set jchhid=%%a
echo 进程回话ID: %jchhid:~10%
tasklist /fi "pid eq %jcxq%" /m
ver
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 23
:24
title 文件系统信息查询 - %system%
cls
echo _______________________________________________________________________________
echo [1]列出所有驱动器
echo [2]查询一个驱动器的类型
echo [3]查询卷信息
echo [4]查询NTFS卷信息
echo [5]查询REFS卷信息
echo [6]查询扇区信息
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 1234560 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 24(1)
if "%errorlevel%" equ "2" goto 24(2)
if "%errorlevel%" equ "3" goto 24(3)
if "%errorlevel%" equ "4" goto 24(4)
if "%errorlevel%" equ "5" goto 24(5)
if "%errorlevel%" equ "6" goto 24(6)
if "%errorlevel%" equ "7" goto c
goto 24
set wjsystem=
set/p wjsystem=请输入你的选择:
set wjsystem="%wjsystem:|=%"
if !wjsystem!=="1" goto 24(1)
if !wjsystem!=="2" goto 24(2)
if !wjsystem!=="3" goto 24(3)
if !wjsystem!=="4" goto 24(4)
if !wjsystem!=="5" goto 24(5)
if !wjsystem!=="6" goto 24(6)
if !wjsystem!=="0" goto c
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 24
:24(1)
titel 列出所有驱动器
cls
fsutil fsinfo drives
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 24
:24(2)
title 查询一个驱动器的类型 - %system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set qdqlx=
set/p qdqlx=请输入要查询的驱动器:
cls
fsutil fsinfo drivetype %qdqlx%:
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 24
:24(3)
title 查询卷信息 - %system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set juanxx=
set/p juanxx=请输入要查询的驱动器:
cls
fsutil fsinfo volumeinfo %juanxx%:
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 24
:24(4)
title 查询NTFS卷信息 - %system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set ntfsjxx=
set/p ntfsjxx=请输入要查询的驱动器:
cls
fsutil fsinfo ntfsinfo %ntfsjxx%:
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 24
:24(5)
title 查询REFS卷信息 - %system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set ntfsjxx=
set/p ntfsjxx=请输入要查询的驱动器:
cls
fsutil fsinfo refsinfo %ntfsjxx%:
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 24
:24(6)
title 查询扇区信息 - %system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set ntfsjxx=
set/p ntfsjxx=请输入要查询的驱动器:
cls
fsutil fsinfo sectorinfo %ntfsjxx%:
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 24
:25
title 创建指定大小的文件 - %system%
cls
echo 创建指定大小的文件(e=返回)
echo _______________________________________________________________________________
set cjlj=
set/p cjlj=请输入文件路径:
set cjlj="%cjlj:|=%"
if /i !cjlj!=="e" goto c
set cjdx=
set/p cjdx=请输入文件大小(单位:字节):
set cjdx="%cjdx:|=%"
if /i !cjdx!=="e" goto c
:24(6)
fsutil file createnew %cjlj% %cjdx%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 25
:26
title 免疫U盘病毒 - %system%
cls
echo 此功能针对U盘进行免疫，避免autorun类型的病毒自动启动
echo _______________________________________________________________________________
echo [1]启动U盘免疫
echo [2]取消U盘免疫
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 26(1)
if "%errorlevel%" equ "2" goto 26(2)
if "%errorlevel%" equ "3" goto c
goto 26
set upanmy=
set/p upanmy=请输入你的选择:
set upanmy="%upanmy:|=%"
if !upanmy!=="1" goto 26(1)
if !upanmy!=="2" goto 26(2)
if !upanmy!=="0" goto c
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 26
:26(1)
title 启动U盘免疫 - %system%
cls
echo 正在搜索可移动磁盘...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%l in (%sypf%) do (
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&goto 26-3)
cls
echo 没有找到可移动磁盘
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 26
:26-3
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%l in (%sypf%) do (
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&takeown/f %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&echo y|cacls %%lautorun.inf /t /c /p everyone:f
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&attrib -s -h -r %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&del/f/q %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&rd/s/q %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&md %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&md "%%lautorun.inf\免疫文件夹！请勿删除"
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&md "%%lautorun.inf\免疫文件夹！请勿删除 / "
fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&echo y|cacls %%lautorun.inf /t /c /p everyone:r) 2>nul
echo;
echo _______________________________________________________________________________
echo U盘免疫完成
echo 按任意键返回&pause>nul
goto 26
:26(2)
title 取消U盘免疫 - %system%
cls
echo 正在搜索可移动磁盘...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%m in (%sypf%) do (
fsutil fsinfo drivetype %%m|find /i "可移动驱动器"&&goto 26-4)
cls
echo 没有找到可移动磁盘
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 26
:26-4
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%m in (%sypf%) do (
fsutil fsinfo drivetype %%m|find /i "可移动驱动器"&&takeown/f %%mautorun.inf
fsutil fsinfo drivetype %%m|find /i "可移动驱动器"&&echo y|cacls %%mautorun.inf /t /c /p everyone:f
fsutil fsinfo drivetype %%m|find /i "可移动驱动器"&&attrib -s -h -r %%mautorun.inf
fsutil fsinfo drivetype %%m|find /i "可移动驱动器"&&del/f/q %%mautorun.inf
fsutil fsinfo drivetype %%m|find /i "可移动驱动器"&&rd/s/q %%mautorun.inf) 2>nul
echo _______________________________________________________________________________
echo 取消U盘免疫完成
echo 按任意键返回&pause>nul
goto 26
:27
title 磁盘碎片整理 - %system%
cls
echo _______________________________________________________________________________
echo [1]整理所有磁盘
echo [0]返回菜单
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set fenxi=
set/p fenxi=请输入需要分析的盘符:
set fenxi="%fenxi:|=%"
if !fenxi!=="1" goto 27(1)
if !fenxi!=="0" goto c
:27(4)
cls
defrag/a %fenxi%:
echo _______________________________________________________________________________
:27(3)
set zhengli=
set/p zhengli=是否开始磁盘碎片清理(y/n):
set zhengli="%zhengli:|=%"
if /i !zhengli!=="y" goto 27(2)
if /i !zhengli!=="n" goto 27
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 27(3)
:27(1)
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
if /i "%system:~18,2%"=="XP" for %%n in (%sypf%) do defrag/v/x %%n
for %%n in (%sypf%) do defrag/u/v/x %%n
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 27
:27(2)
cls
defrag/u/v/x %fenxi%:||defrag/v/x %fenxi%:
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 27
:28
title 一键删除空文件夹 - %system%
cls
echo 检测Everything的安装路径与运行状态...
set flag=
set flag1=::
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\voidtools\Everything" /v InstallLocation|find "InstallLocation""') do (set EverythingInstallPath=%%a)
if "%system:~8,2%"=="XP" (set EverythingInstallPath=%EverythingInstallPath:~27%) else (set EverythingInstallPath=%EverythingInstallPath:~33%)
if exist "%EverythingInstallPath%\Everything.exe" (tasklist /fi "status eq running" /fi "username eq "%username%"" /fi "imagename eq everything.exe"|find /i "Everything.exe"&&if exist "%EverythingInstallPath%\es.exe" set flag=::&set flag1=)
cls
echo 注意:如果对系统盘进行操作可能会被杀毒软件拦截
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set caozuo=
set/p caozuo=请输入需要操作的盘符或路径:
if not defined caozuo goto 28
set caozuo|findstr /i "\<[a-z]\>">nul
if "%errorlevel%" neq "0" goto 28-1
cls
echo 正在搜索空文件夹...     文件越多搜索时间越长
%flag%for /f "delims=" %%o in ('"dir/a/s/b/ad-l %caozuo%:|sort/r"') do rd/q "%%o"2>nul&&echo 已删除空文件夹%%o
::%flag1%for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" -sort path-descending /ad-l %caozuo%:"') do rd/q "%%o"2>nul&&echo 已删除空文件夹%%o
:loop1
%flag1%set empty=0
%flag1%for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" %caozuo%: empty: ^!attrib:l"') do (rd/q "%%o"2>nul&&set empty=1&&echo 已删除空文件夹%%o)
timeout /t 2 /nobreak>nul
%flag1%if "%empty%"=="1" goto loop1
goto 28(2)
:28-1
dir /ad "!caozuo!">nul 2>nul||echo 路径 !caozuo! 不是一个文件夹&&timeout /t 2 /nobreak>nul&&goto 28
echo 正在搜索空文件夹...     文件越多搜索时间越长
if "%caozuo:~0,1%%caozuo:~-1%" neq """" for /f "delims=" %%a in ('"echo %caozuo%"') do (set %caozuo%="%%~a")
%flag%for /f "delims=" %%o in ('"dir/a/s/b/ad-l %caozuo%|sort/r"') do rd/q "%%o"2>nul&&echo 已删除空文件夹%%o
::%flag1%for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" -sort path-descending /ad-l %caozuo%"') do rd/q "%%o"2>nul&&echo 已删除空文件夹%%o
:loop2
%flag1%set empty=0
%flag1%for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" %caozuo% empty: ^!attrib:l"') do (rd/q "%%o"2>nul&&set empty=1&&echo 已删除空文件夹%%o)
timeout /t 2 /nobreak>nul
%flag1%if "%empty%"=="1" goto loop2
:28(2)
echo _______________________________________________________________________________
echo 空文件夹删除完成
echo 按任意键返回菜单&pause>nul
goto d
:29
title ping测试网络延迟 - %system%
cls
set ping=
set pingcishu=
if exist %systemroot%\system32\curl.exe (ping /n 1 www.baidu.com>nul&&set /p =本机IPV4地址: <nul&curl 4.ipw.cn&echo;)
if exist %systemroot%\system32\curl.exe (ping /n 1 240c::6666>nul&&set /p =本机IPV6地址: <nul&curl 6.ipw.cn&echo;)
set/p ping=请输入目标IP或者网址:
set/p pingcishu=请输入ping次数:
cls
if exist %systemroot%\system32\curl.exe (ping /n 1 www.baidu.com>nul&&set /p =本机IPV4地址: <nul&curl 4.ipw.cn&echo;)
if exist %systemroot%\system32\curl.exe (ping /n 1 240c::6666>nul&&set /p =本机IPV6地址: <nul&curl 6.ipw.cn&echo;)
echo;
echo 正在测试%ping%的网络延迟...
ping/n %pingcishu% %ping% /a
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto d
:30
title 硬件检测 - %system%
cls
set cpu=,cpuid=,cpuzp=,cpuws=,cpuwp=,cpul1=,cpul2=,cpul3=,ch=,cpuhx=,cpuxc=
for /f "delims== tokens=2" %%a in ('"wmic cpu get name/value"') do set cpu=%%a
echo CPU: %cpu%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get processorid/value"') do set cpuid=%%a
echo CPU ID: %cpuid%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get numberofcores/value"') do set cpuhx=%%a
for /f "delims== tokens=2" %%a in ('"wmic cpu get numberOflogicalprocessors/value"') do set cpuxc=%%a
echo %cpuhx%核心%cpuxc%线程
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get currentclockspeed/value"') do set cpuzp=%%aMHz
echo 主频: %cpuzp%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get datawidth/value"') do set cpuws=%%abit
echo 数据宽度: %cpuws%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get extclock/value"') do set cpuwp=%%aMHz
echo 外频: %cpuwp%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_cachememory get maxcachesize/value"') do (set/a ch+=1
if !ch!==1 set cpul1=%%aKB
if !ch!==2 set cpul2=%%aKB)
echo 一级数据缓存: %cpul1%
echo;
echo 一级指令缓存: %cpul1%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get l2cachesize/value"') do set cpul2=%%a
set cpul2|findstr "\<[0-9]*\>">nul
if "%errorlevel%" equ "0" call :dwjs %cpul2% 1
echo 二级缓存: %size% %dw%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get l3cachesize/value"') do set cpul3=%%a
set cpul3|findstr "\<[0-9]*\>">nul
if "%errorlevel%" equ "0" call :dwjs %cpul3% 1
echo 三级缓存: %size% %dw%
echo _______________________________________________________________________________
set zhuban=,zhubanxh=
for /f "delims== tokens=2" %%a in ('"wmic baseboard get manufacturer/value"') do set zhuban=%%a
echo 主板制造商: %zhuban%
echo;
for /f "delims== tokens=2" %%a in ('"wmic baseboard get product/value"') do set zhubanxh=%%a
echo 主板型号: %zhubanxh%
echo;
set bioszzs=,biosbb=,bioszzrq
for /f "delims== tokens=2" %%a in ('"wmic bios get manufacturer/value"') do set bioszzs=%%a
echo BIOS制造商: %bioszzs%
echo;
for /f "delims== tokens=2" %%a in ('"wmic bios get smbiosbiosversion/value"') do set biosbb=%%a
echo BIOS版本: %biosbb%
echo;
for /f "delims== tokens=2" %%a in ('"wmic bios get releasedate/value"') do set bioszzrq=%%a
echo BIOS制造日期: %bioszzrq:~0,4%年%bioszzrq:~4,2%月%bioszzrq:~6,2%日
echo _______________________________________________________________________________
set xsqxh=,xsqzzs=,fbl1=,fbl2=
for /f "delims== tokens=2" %%a in ('"wmic desktopmonitor get name/value"') do set xsqxh=%%a
echo 显示器型号: %xsqxh%
echo;
for /f "delims== tokens=2" %%a in ('"wmic desktopmonitor get monitormanufacturer/value"') do set xsqzzs=%%a
echo 显示器制造商: %xsqzzs%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currenthorizontalresolution/value"') do set fbl1=%%a
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currentverticalresolution/value"') do set fbl2=%%a
echo 分辨率: %fbl1% x %fbl2%
echo _______________________________________________________________________________
set xkxc=,xsms=,sxl=,qdrq=,qdbb=
set /p =显卡: <nul&for /f "delims=" %%a in ('"wmic path win32_videocontroller get name|find /i /v "name""') do echo %%a|find /i /v "echo"
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get adapterram/value"') do set xkxc=%%a
call :dwjs %xkxc%
echo;
echo 显存容量: %size% %dw%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get videomodedescription/value"') do set xsms=%%a
echo 当前显示模式: %xsms%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currentrefreshrate/value"') do set sxl=%%aHz
echo 当前刷新率: %sxl%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get driverdate/value"') do set qdrq=%%a
echo 驱动日期: %qdrq:~0,4%年%qdrq:~4,2%月%qdrq:~6,2%日
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get driverversion/value"') do set qdbb=%%a
echo 驱动版本: %qdbb%
echo _______________________________________________________________________________
echo 硬盘型号:
for /f "delims=" %%a in ('"wmic diskdrive get model|find /i /v "model""') do echo %%a|find /i /v "echo"
echo 接口类型:
for /f "delims=" %%a in ('"wmic diskdrive get interfacetype|find /i /v "interfacetype""') do echo %%a|find /i /v "echo"
echo 硬盘容量:
for /f "delims=" %%a in ('"wmic diskdrive get size|find /i /v "size""') do (call :dwjs %%a
if "!dw!" neq "0" echo !size! !dw!)
echo 总扇区数:
for /f "delims=" %%a in ('"wmic diskdrive get totalsectors|find /i /v "totalsectors""') do echo %%a|find /i /v "echo"
echo 分区数:
for /f "delims=" %%a in ('"wmic diskdrive get partitions|find /i /v "partitions""') do echo %%a|find /i /v "echo"
fsutil fsinfo drives
wmic logicaldisk get name,volumename,description,filesystem,size,freespace
echo _______________________________________________________________________________
echo 打印机制造商:
for /f "delims== tokens=2" %%a in ('"Wmic Printer where "Default^='TRUE'" get caption /value"') do (echo %%a)
echo;
echo 打印机型号:
for /f "delims== tokens=2" %%a in ('"Wmic Printer where "Default^='TRUE'" get drivername /value"') do (echo %%a)
echo;
echo 声卡:
for /f "delims=" %%a in ('"wmic sounddev get name|find /i /v "name""') do echo %%a|find /i /v "echo"
echo;
echo 网卡:
for /f "delims== tokens=2" %%a in ('"Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled^='TRUE'" get description /value"') do (echo %%a)
echo;
echo 网关地址:
for /f "delims== tokens=2" %%a in ('"Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled^='TRUE'" get defaultipgateway /value"') do (set mrwg=%%a
set mrwg=!mrwg:~0,-1!
if "!mrwg!" equ "" goto mrwgtc
set mrwg=!mrwg:{=!
set mrwg=!mrwg:}=!
set mrwg=!mrwg:"=!
set mrwg=!mrwg:,=	!
echo !mrwg!)
:mrwgtc
echo;
echo IP:
::for /f "skip=12 tokens=4 delims=: " %%a in ('"netsh interface Teredo show state"') do (echo %%a)
if exist %systemroot%\system32\curl.exe (ping /n 1 www.baidu.com>nul&&curl 4.ipw.cn)
echo;
for /f "delims== tokens=2" %%a in ('"Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled^='TRUE'" get ipaddress /value"') do (set ipdz=%%a
set ipdz=!ipdz:{=!
set ipdz=!ipdz:}=!
set ipdz=!ipdz:"=!
set ipdz=!ipdz:,=	!
echo !ipdz!)
echo;
echo MAC:
for /f "delims== tokens=2" %%a in ('"Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled^='TRUE'" get macaddress /value"') do (set macdz=%%a
set macdz=!macdz:{=!
set macdz=!macdz:}=!
set macdz=!macdz:"=!
echo !macdz!)
echo _______________________________________________________________________________
echo 内存容量:
for /f "delims== tokens=2" %%a in ('"wmic memorychip get capacity /value"') do (call :dwjs %%a
if "!dw!" neq "0" echo !size! !dw!)
echo 内存频率:
for /f "delims== tokens=2" %%a in ('"wmic memorychip get speed /value"') do (set ncpl=%%a
echo !ncpl:~0,-1! MHz)
systeminfo|find /i "内存"
echo _______________________________________________________________________________
mode
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto d
:31
title 读心术 - %system%
cls
echo 想一个大于0且小于128的数(不包括128)
echo _______________________________________________________________________________
pause
cls
:d0c
for /l %%a in (1,2,127) do set/p=%%a   <nul
echo;
choice /c YN /n /m 请问这里有你想的数吗?(Y=有,N=没有)[1\7]
if "%errorlevel%" equ "1" set /a num=1
if "%errorlevel%" equ "2" set /a num=0
set a=2
set b=3
cls
:d1c
for /l %%a in (%a%,1,%b%) do (set/p=%%a   <nul
set/a a=a+2
set/a b=b+2)
if %b% lss 128 goto d1c
echo;
choice /c YN /n /m 请问这里有你想的数吗?(Y=有,N=没有)[2\7]
if "%errorlevel%" equ "1" set /a num=num+2
if "%errorlevel%" equ "2" set /a num=num
set c=4
set d=7
cls
:d2c
for /l %%a in (%c%,1,%d%) do (set/p=%%a   <nul
set/a c=c+2
set/a d=d+2)
if %d% lss 128 goto d2c
echo;
choice /c YN /n /m 请问这里有你想的数吗?(Y=有,N=没有)[3\7]
if "%errorlevel%" equ "1" set /a num=num+4
if "%errorlevel%" equ "2" set /a num=num
set e=8
set f=15
cls
:d3c
for /l %%a in (%e%,1,%f%) do (set/p=%%a   <nul
set/a e=e+2
set/a f=f+2)
if %f% lss 128 goto d3c
echo;
choice /c YN /n /m 请问这里有你想的数吗?(Y=有,N=没有)[4\7]
if "%errorlevel%" equ "1" set /a num=num+8
if "%errorlevel%" equ "2" set /a num=num
set g=16
set h=31
cls
:d4c
for /l %%a in (%g%,1,%h%) do (set/p=%%a   <nul
set/a g=g+2
set/a h=h+2)
if %g% lss 128 goto d4c
echo;
choice /c YN /n /m 请问这里有你想的数吗?(Y=有,N=没有)[5\7]
if "%errorlevel%" equ "1" set /a num=num+16
if "%errorlevel%" equ "2" set /a num=num
set i=32
set j=63
cls
:d5c
for /l %%a in (%i%,1,%j%) do (set/p=%%a   <nul
set/a i=i+2
set/a j=j+2)
if %j% lss 128 goto d5c
echo;
choice /c YN /n /m 请问这里有你想的数吗?(Y=有,N=没有)[6\7]
if "%errorlevel%" equ "1" set /a num=num+32
if "%errorlevel%" equ "2" set /a num=num
set k=64
set l=127
cls
:d6c
for /l %%a in (%k%,1,%l%) do (set/p=%%a   <nul
set/a k=k+2
set/a l=l+2)
if %l% lss 128 goto d6c
echo;
choice /c YN /n /m 请问这里有你想的数吗?(Y=有,N=没有)[7\7]
if "%errorlevel%" equ "1" set /a num=num+64
if "%errorlevel%" equ "2" set /a num=num
cls
echo 经过电脑复杂的计算后,得出你大脑里想的那个数是:!cswz!41;92m %num% !cswz!!ysbak!
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto d
:32
title DOS闹钟 - %system%
cls
echo _______________________________________________________________________________
echo [1]定时提醒指定内容
echo [2]定时运行指定文件
echo [3]显示已有的计划任务
echo [4]删除计划任务
echo [0]返回菜单
echo _______________________________________________________________________________
set nzxx=
set/p nzxx=请输入你的选择:
set nzxx="%nzxx:|=%"
if !nzxx!=="1" goto 32(1)
if !nzxx!=="2" goto 32(2)
if !nzxx!=="3" goto 32(3)
if !nzxx!=="4" goto 32(4)
if !nzxx!=="0" goto d
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 32
:32(1)
title 定时提醒指定内容 - %system%
cls
set txnrmc=
set/p txnrmc=请指定任务名称:
echo _______________________________________________________________________________
set txnr=
set/p txnr=请输入你需要提醒的内容:
echo _______________________________________________________________________________
set txnrrq=
set/p txnrrq=请设置提醒日期(格式: yyyy/mm/dd 例如2015/08/05):
echo _______________________________________________________________________________
set txnrsj=
set/p txnrsj=请设置提醒时间(格式: hh:mm:ss 例如09:03:05):
cls
md %systemdrive%\DOS工具箱临时目录>nul 2>nul
echo 该文件夹是DOS工具箱的临时文件夹,删除后将无法提醒已有的内容！>%systemdrive%\DOS工具箱临时目录\说明.txt
echo @echo off>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo title %txnrmc%>>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo color f1>>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo echo >>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo cls>>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo echo 提醒内容:"%txnr%">>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo echo _______________________________________________________________________________>>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo echo 该文件由DOS工具箱 - 定时提醒指定内容功能生成>>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo echo 生成时间:%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%>>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo echo _______________________________________________________________________________>>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo echo 按任意键退出^&pause^>nul>>"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
schtasks /create /tn "%txnrmc%" /tr "%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat" /st %txnrsj% /sd %txnrrq% /sc once&&echo 任务将在%txnrrq% %txnrsj%运行
echo 提醒文件已保存至"%systemdrive%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 32
:32(2)
title 定时运行指定文件 - %system%
cls
set dsyxmc=
set/p dsyxmc=请指定任务名称:
echo _______________________________________________________________________________
set dsyxlj=
set/p dsyxlj=请拖动需要定时运行的文件到此窗口:
if "%dsyxlj:~0,1%%dsyxlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %dsyxlj%"') do (set %dsyxlj%="%%~a")
echo _______________________________________________________________________________
set dsyxrq=
set/p dsyxrq=请设置提醒日期(格式: yyyy/mm/dd 例如2015/08/05):
echo _______________________________________________________________________________
set dsyxsj=
set/p dsyxsj=请设置提醒时间(格式: hh:mm:ss 例如09:03:05):
cls
md %systemdrive%\DOS工具箱临时目录>nul 2>nul
echo 该文件夹是DOS工具箱的临时文件夹,删除后将无法提醒已有的内容！>%systemdrive%\DOS工具箱临时目录\说明.txt
echo "%dsyxlj%">"%systemdrive%\DOS工具箱临时目录\%dsyxmc% - 定时运行文件.bat"
schtasks /create /tn "%dsyxmc%" /tr "%systemdrive%\DOS工具箱临时目录\%dsyxmc% - 定时运行文件.bat" /st %dsyxsj% /sd %dsyxrq% /sc once&&echo 任务将在%dsyxrq% %dsyxsj%运行
echo 启动文件已保存至"%systemdrive%\DOS工具箱临时目录\%dsyxmc% - 定时运行文件.bat"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 32
:32(3)
title 显示已有的计划任务 - %system%
cls
schtasks /query
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 32
:32(4)
title 删除计划任务 - %system%
cls
schtasks /query
echo _______________________________________________________________________________
set rwsc=
set/p rwsc=请输入要删除的任务名称:
cls
schtasks /delete /tn "%rwsc%" /f
del/f/q "%systemdrive%\DOS工具箱临时目录\%rwsc% - 定时提醒文件.bat"2>nul
del/f/q "%systemdrive%\DOS工具箱临时目录\%rwsc% - 定时运行文件.bat"2>nul
dir/a/s %systemdrive%\DOS工具箱临时目录\*.bat>nul 2>nul||rd/s/q %systemdrive%\DOS工具箱临时目录
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 32
:33
title 计时器 - %system%
cls
echo 计时器精确度0.01秒
echo _______________________________________________________________________________
echo 按任意键开始计时(不建议跨天计时)&pause>nul
set kssjbk=%time%
cls
echo 计时器已开始计时,按任意键停止计时.&pause>nul
set jssjbk=%time%
call :sjc "%kssjbk%" "%jssjbk%"
cls
echo 计时开始时间:%kssjbk%
echo 计时结束时间:%jssjbk%
echo _______________________________________________________________________________
echo 用时:%sjc:~0,2%时%sjc:~2,2%分%sjc:~4,2%.%sjc:~6,2%秒
echo 按任意键返回菜单&pause>nul
goto d
:34
title 随机密码生成器 - %system%
cls
setlocal enabledelayedexpansion
set mmws=
set mmxz=
set mmjg=
set mmjs=aA0bB1cC2dD3eE4fF5gG6hH7iI8jJ9kK0lL1mM2nN3oO4pP5qQ6rR7sS8tT9uU0vV1wW2xX3yY4zZ5
set/p mmws=请输入生成的密码位数:
:34(1)
cls
for /l %%a in (1,1,%mmws%) do (set/a mmxz=!random!%%63
for %%b in (!mmxz!) do set mmjg=!mmjg!!mmjs:~%%b,1!)
echo 已生成的随机密码:
echo %mmjg%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto d
:35
title 删除每个盘符下的System Volume Information文件夹 - %system%
cls
echo 按任意键开始删除System Volume Information文件夹&pause>nul
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%a in (%sypf%) do (
takeown/f "%%aSystem Volume Information" 2>nul
echo y|cacls "%%aSystem Volume Information" /t /c /p everyone:f 2>nul
rd/s/q "%%aSystem Volume Information"2>nul)
echo;
echo _______________________________________________________________________________
echo 删除完成
echo 按任意键返回菜单&pause>nul
goto d
:36
title 二进制转换器 - %system%
set shijinzhi=
set erjinzhi=
set shilioujinzhi=
set shijinzhibak=
set shijinzhibak2=
set shijinzhibak3=
set bajinzhi=
cls
echo 最大支持2147483647的十进制转换
echo _______________________________________________________________________________
echo [1]输入十进制转换
echo [2]输入二进制转换
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 10z
if "%errorlevel%" equ "2" goto 2z
if "%errorlevel%" equ "3" goto d
goto 36
set zhxz=
set/p zhxz=请输入你的选择:
set zhxz="%zhxz:|=%"
if !zhxz!=="1" goto 10z
if !zhxz!=="2" goto 2z
if !zhxz!=="0" goto d
echo 请输入正确的选择!
ping/n 2 0.0>nul
goto 36
:10z
cls
set shijinzhi=
set/p shijinzhi=请输入十进制整数:
for /f "delims=0123456789" %%a in ('echo %shijinzhi%') do goto shijinzhicw
set shijinzhibak=%shijinzhi%
set shijinzhibak2=%shijinzhibak%
set shijinzhibak3=%shijinzhibak2%
:36(1)
set/a e=shijinzhi%%2
set/a shijinzhi=shijinzhi/2
set erjinzhi=%e%%erjinzhi%
if %shijinzhi% neq 0 goto 36(1)
:36(2)
set/a b=%shijinzhibak%%%8
set/a shijinzhibak=%shijinzhibak%/8
set bajinzhi=%b%%bajinzhi%
if %shijinzhibak% neq 0 goto 36(2)
:36(3)
set/a s=%shijinzhibak3%%%16
if "%s%"=="10" set s=A
if "%s%"=="11" set s=B
if "%s%"=="12" set s=C
if "%s%"=="13" set s=D
if "%s%"=="14" set s=E
if "%s%"=="15" set s=F
set/a shijinzhibak3=%shijinzhibak3%/16
set shilioujinzhi=%s%%shilioujinzhi%
if %shijinzhibak3% neq 0 goto 36(3)
cls
echo 十进制:%shijinzhibak2%
echo 二进制:%erjinzhi%
echo 八进制:%bajinzhi%
echo 十六进制:%shilioujinzhi%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 36
:shijinzhicw
echo 不是十进制整数!
ping/n 2 0.0>nul
goto 10z
:2z
cls
set srejz=
set/p srejz=请输入二进制整数:
for /f "delims=01" %%a in ('echo %srejz%') do goto srejzcw
setlocal enabledelayedexpansion
set/a nnn=1
set/a num=0
set nn=
set "n=%srejz%"
set "n=!n:0= 0!"
set "n=!n:1= 1!"
for %%a in (!n!) do set "nn=%%a !nn!"
for %%a in (!nn!) do set /a num+=%%a*nnn,nnn*=2
set ejzjg=%num%
set ejzjgbak=%ejzjg%
set ejzjgbak2=%ejzjgbak%
set ejzjgbak3=%ejzjgbak2%
:ejzjg
set/a e=ejzjg%%2
set/a ejzjg=ejzjg/2
set erjinzhi=%e%%erjinzhi%
if %ejzjg% neq 0 goto ejzjg
:ejzjg1
set/a b=%ejzjgbak%%%8
set/a ejzjgbak=%ejzjgbak%/8
set bajinzhi=%b%%bajinzhi%
if %ejzjgbak% neq 0 goto ejzjg1
:ejzjg2
set/a s=%ejzjgbak3%%%16
if "%s%"=="10" set s=A
if "%s%"=="11" set s=B
if "%s%"=="12" set s=C
if "%s%"=="13" set s=D
if "%s%"=="14" set s=E
if "%s%"=="15" set s=F
set/a ejzjgbak3=%ejzjgbak3%/16
set shilioujinzhi=%s%%shilioujinzhi%
if %ejzjgbak3% neq 0 goto ejzjg2
cls
echo 十进制:%ejzjgbak2%
echo 二进制:%erjinzhi%
echo 八进制:%bajinzhi%
echo 十六进制:%shilioujinzhi%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 36
:srejzcw
echo 不是二进制整数!
ping/n 2 0.0>nul
goto 2z
:vbsjsq
title vbs计算器 - %system%
set vbsbds=
set vbsjieguo=
cls
echo e=返回菜单
set/p vbsbds=请输入表达式:
:for /f "delims=eE" %%a in ('echo %vbsbds%') do goto js
if /i "%vbsbds%"=="e" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:js
echo msgbox %vbsbds%,"65","VBS计算器">%systemdrive%\windows\temp.vbs
%systemdrive%\windows\temp.vbs
del/f/q %systemdrive%\windows\temp.vbs
goto vbsjsq
:guanyu
setlocal enabledelayedexpansion
title 关于DOS工具箱 - %system%%gxflag%
if %daxiao%==%versize% set daxiao1=%daxiao%字节
if %daxiao% neq %versize% set daxiao1=%daxiao%字节  (文件大小异常,可能已被修改)
set dosjssj=%time%
call :sjc "%dosqssj%" "%dosjssj%"
cls
echo 关于DOS工具箱
echo _______________________________________________________________________________
echo 版本: 1.8.8 (%ver%.%versize%)
echo 操作系统: %system% %bit%位
echo 版权所有 2012-2022 Administrator 保留所有权利
echo _______________________________________________________________________________
echo 本次已运行:%sjc:~0,2%时%sjc:~2,2%分%sjc:~4,2%.%sjc:~6,2%秒
echo DOS工具箱所在路径:%weizhi%
echo 文件大小:%daxiao1%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:37
title 文本浏览 - %system%
cls
echo _______________________________________________________________________________
echo 要显示多个文件,就用空格隔开路径,显示文件以后:
echo F=显示下个文件,Q=退出,等号显示行数,空格显示下一页,回车显示下一行
echo _______________________________________________________________________________
set wenben=
set/p wenben=拖动需要显示的文件到此窗口:
if "%wenben:~0,1%%wenben:~-1%" neq """" for /f "delims=" %%a in ('"echo %wenben%"') do (set %wenben%="%%~a")
echo _______________________________________________________________________________
more/e/p "%wenben%"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto e
:38
title 显示计算机与用户的设置 - %system%
cls
echo _______________________________________________________________________________
gpresult/z
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto e
:39
title NTFS压缩 - %system%
cls
echo 此功能只能用于NTFS分区,要压缩或者解压多个文件,就用空格隔开路径.
echo _______________________________________________________________________________
echo [1]NTFS压缩
echo [2]NTFS解压
echo [3]NTFS压缩文件夹
echo [4]NTFS解压文件夹
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 12340 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto yasuo
if "%errorlevel%" equ "2" goto jieya
if "%errorlevel%" equ "3" goto yasuowjj
if "%errorlevel%" equ "4" goto jieyawjj
if "%errorlevel%" equ "5" goto e
goto 39
set ntfsys=
set/p ntfsys=请输入你的选择:
set ntfsys="%ntfsys:|=%"
if !ntfsys!=="1" goto yasuo
if !ntfsys!=="2" goto jieya
if !ntfsys!=="3" goto yasuowjj
if !ntfsys!=="4" goto jieyawjj
if !ntfsys!=="0" goto e
echo 请输入正确的选择！
ping/n 2 0.0>nul
goto 39
:jieya
title NTFS解压 - %system%
cls
set jieya=
set/p jieya=拖动需要解压的文件到此窗口:
if "%jieya:~0,1%%jieya:~-1%" neq """" for /f "delims=" %%a in ('"echo %jieya%"') do (set %jieya%="%%~a")
echo _______________________________________________________________________________
compact /u /a /i /f "%jieya%"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 39
:yasuo
title NTFS压缩 - %system%
cls
set yasuo=
set/p yasuo=拖动需要压缩的文件到此窗口:
if "%yasuo:~0,1%%yasuo:~-1%" neq """" for /f "delims=" %%a in ('"echo %yasuo%"') do (set %yasuo%="%%~a")
echo _______________________________________________________________________________
compact /c /a /i /f "%yasuo%"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 39
:jieyawjj
title NTFS解压文件夹 - %system%
cls
set jieya=
set/p jieya=拖动需要解压的文件夹到此窗口:
if "%jieya:~0,1%" neq """" for /f "delims=" %%a in ('"echo %jieya%"') do (set %jieya%="%%~a")
echo _______________________________________________________________________________
compact /u /a /i /f /s:"%jieya%"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 39
:yasuowjj
title NTFS压缩文件夹 - %system%
cls
set jieya=
set/p jieya=拖动需要压缩的文件夹到此窗口:
if "%jieya:~0,1%%jieya:~-1%" neq """" for /f "delims=" %%a in ('"echo %jieya%"') do (set %jieya%="%%~a")
echo _______________________________________________________________________________
compact /c /a /i /f /s:"%jieya%"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 39
:40
title 获取文件所有权限 - %system%
cls
echo 此功能只能用于NTFS分区
echo _______________________________________________________________________________
set ntfswjqx=
set/p ntfswjqx=拖动需要获取所有权限的文件或者文件夹到此窗口:
if "%ntfswjqx:~0,1%%ntfsjqx:~-1%" neq """" for /f "delims=" %%a in ('"echo %ntfswjqx%"') do (set %ntfswjqx%="%%~a")
echo _______________________________________________________________________________
attrib -s -h -r "%ntfswjqx%" 2>nul
takeown/f "%ntfswjqx%" 2>nul
takeown/f "%ntfswjqx%" 2>nul
attrib -s -h -r "%ntfswjqx%" 2>nul
echo y|cacls "%ntfswjqx%" /t /c /g %username%:f 2>nul
attrib -s -h -r "%ntfswjqx%" 2>nul
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto e
:41
title 显示开机启动项 - %system%
cls
echo _______________________________________________________________________________
if /i "%system:~18,1%"=="x" dir/a/s/b "%systemdrive%\Documents and Settings\%username%\「开始」菜单\程序\启动"
if /i "%system:~18,1%"=="x" dir/a/s/b "%systemdrive%\Documents and Settings\all users\「开始」菜单\程序\启动"
if /i "%system:~18,1%" neq "x" dir/a/s/b "%systemdrive%\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"
if /i "%system:~18,1%" neq "x" dir/a/s/b "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp"
echo;
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\WindowsNT\CurrentVersion\Windows\load 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Winlogon\Userinit 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunServicesOnce 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServicesOnce 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunServices 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServices 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce\Setup 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\Setup 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnceEx 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v taskman 2>nul"') do if not "%%a"=="" echo %%a&echo;
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run 2>nul"') do if not "%%a"=="" echo %%a&echo;
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto e
:kcd
start mshta "javascript:new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0).Eject();window.close();"
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:gcd
start mshta "javascript:with (new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0)){Eject();Eject();}window.close();"
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:42
title 语音阅读器 - %system%
cls
echo 请输入要阅读的内容:
echo _______________________________________________________________________________
set ydnr=
set/p ydnr=
start mshta vbscript:createobject("sapi.spvoice").speak("%ydnr%")(window.close)
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto e
:43
title 批处理文件风险分析 - %system%
set dx=0
cls
set batfx=
set/p batfx=拖动要分析的文件到此窗口:
if "%batfx:~0,1%%batfx:~-1%" neq """" for /f "delims=" %%a in ('"echo %batfx%"') do (set %batfx%="%%~a")
echo _______________________________________________________________________________
find /n /i "del" "%batfx%"&&set/a dx=%dx%+1
find /n /i "rd" "%batfx%"&&set/a dx=%dx%+1
find /n /i "arp" "%batfx%"&&set/a dx=%dx%+1
find /n /i "assoc" "%batfx%"&&set/a dx=%dx%+1
find /n /i "attrib" "%batfx%"&&set/a dx=%dx%+1
find /n /i "cacls" "%batfx%"&&set/a dx=%dx%+1
find /n /i "format" "%batfx%"&&set/a dx=%dx%+1
find /n /i "ftype" "%batfx%"&&set/a dx=%dx%+1
find /n /i "taskkill" "%batfx%"&&set/a dx=%dx%+1
find /n /i "taskl" "%batfx%"&&set/a dx=%dx%+1
find /n /i "reg" "%batfx%"&&set/a dx=%dx%+1
find /n /i "ren" "%batfx%"&&set/a dx=%dx%+1
find /n /i "regsvr32" "%batfx%"&&set/a dx=%dx%+1
find /n /i "rd" "%batfx%"&&set/a dx=%dx%+1
find /n /i "schtask" "%batfx%"&&set/a dx=%dx%+1
find /n /i "shutdown" "%batfx%"&&set/a dx=%dx%+1
echo _______________________________________________________________________________
echo 批处理文件: %batfx%
echo 危险等级: %dx%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto e
:44
title 文件搜索 - %system%
cls
set sswjm=
set/p sswjm=输入你要搜索的文件名(默认在%systemdrive%\中搜索):
echo _______________________________________________________________________________
dir/a/s %sswjm%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto e
:45
title 修复已损坏的文件 - %system%
cls
set xfwj=
set/p xfwj=拖动要修复的文件到此窗口:
if "%xfwj:~0,1%%xfwj:~-1%" neq """" for /f "delims=" %%a in ('"echo %xwfj%"') do (set %xfwj%="%%~a")
echo _______________________________________________________________________________
recover %xfwj%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto e
:46
title 暴力破解压缩包密码 - %system%
cls
set rarazlj=
set yswjlj=
set pjzd=
set ppjm=
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\WinRAR.exe" /v path|find "path""') do (set rarazlj=%%a)
if "%system:~8,2%"=="XP" (set rarpd=%rarazlj:~16%\Rar.exe&set rarpd7z=%rarazlj:~16%\winrar.exe) else (set rarpd=%rarazlj:~22%\Rar.exe&set rarpd7z=%rarazlj:~22%\winrar.exe)
cls
if exist "%rarpd%" (goto rarjs) else (echo 没有安装WinRAR.按任意键返回菜单&pause>nul&goto f)
:rarjs
cls
set/p yswjlj=拖动要破解的压缩包到此窗口(e=返回菜单):
if "%yswjlj:~0,1%%yswjlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %yswjlj%"') do (set %yswjlj%="%%~a")
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.7z goto rarwjok1
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.rar goto rarwjok
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.zip goto rarwjok1
if /i "%yswjlj%"=="e" goto f
echo 无效的文件格式！&ping/n 2 0.0>nul
goto 46
:rarwjok
set/p pjzd=拖动字典文件到此窗口(e=返回菜单):
if "%pjzd:~0,1%%pjzd:~-1%" neq """" for /f "delims=" %%a in ('"echo %pjzd%"') do (set %pjzd%="%%~a")
for /f "delims=" %%a in ("%pjzd%") do if %%~xa==.txt goto kspj
if /i "%pjzd%"=="e" goto f
echo 不是txt文件！&ping/n 2 0.0>nul
goto 46
:rarwjok1
set/p pjzd=拖动字典文件到此窗口(e=返回菜单):
if "%pjzd:~0,1%%pjzd:~-1%" neq """" for /f "delims=" %%a in ('"echo %pjzd%"') do (set %pjzd%="%%~a")
for /f "delims=" %%a in ("%pjzd%") do if %%~xa==.txt goto kspj1
if /i "%pjzd%"=="e" goto f
echo 不是txt文件！&ping/n 2 0.0>nul
goto 46
:kspj
echo _______________________________________________________________________________
rd/s/q %systemdrive%windows\temp\DOS工具箱临时解压路径>nul 2>nul
md %systemdrive%windows\temp\DOS工具箱临时解压路径
for /f "delims=" %%a in ('type "%pjzd%"') do (
cls
echo 正在破解的压缩包:%yswjlj%
echo;
echo 正在使用的字典文件:%pjzd%
echo;
set pjmm=%%a
echo 正在尝试密码:%%a
"%rarpd%" x -y -inul -p%%a "%yswjlj%" "%systemdrive%windows\temp\DOS工具箱临时解压路径"
dir/s/b %systemdrive%windows\temp\DOS工具箱临时解压路径|find  /v "找不到文件"&&goto pjcg)
echo _______________________________________________________________________________
echo 破解失败！
echo;
echo 字典里没有正确的密码.
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto f
:pjcg
echo _______________________________________________________________________________
echo 破解成功！
echo;
echo 压缩包%yswjlj%
echo 解压密码是:%pjmm%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto f
:kspj1
echo _______________________________________________________________________________
rd/s/q %systemdrive%windows\temp\DOS工具箱临时解压路径>nul 2>nul
md %systemdrive%windows\temp\DOS工具箱临时解压路径
for /f "delims=" %%a in ('type "%pjzd%"') do (
cls
echo 正在破解的压缩包:%yswjlj%
echo;
echo 正在使用的字典文件:%pjzd%
echo;
set pjmm=%%a
echo 正在尝试密码:%%a
"%rarpd7z%" x -y -inul -p%%a "%yswjlj%" "%systemdrive%windows\temp\DOS工具箱临时解压路径"
dir/s/b %systemdrive%windows\temp\DOS工具箱临时解压路径|find  /v "找不到文件"&&goto pjcg1)
echo _______________________________________________________________________________
echo 破解失败！
echo;
echo 字典里没有正确的密码.
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto f
:pjcg1
echo _______________________________________________________________________________
echo 破解成功！
echo;
echo 压缩包%yswjlj%
echo 解压密码是:%pjmm%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto f
:47
title Wifi热点 - %system%
cls
echo _______________________________________________________________________________
echo [1]开启Wifi热点
echo [2]关闭Wifi热点
echo [3]查看网络配置
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 1230 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto kqwifi
if "%errorlevel%" equ "2" goto gbwifi
if "%errorlevel%" equ "3" goto wlpz
if "%errorlevel%" equ "4" goto f
goto 47
set wifixz=
set/p wifixz=请输入你的选择:
set wifixz="%wifixz:|=%"
if !wifixz!=="1" goto kqwifi
if !wifixz!=="2" goto gbwifi
if !wifixz!=="3" goto wlpz
if !wifixz!=="0" goto f
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 47
:kqwifi
title 开启Wifi热点 - %system%
cls
set wifissid=
set wifimiam=
set/p wifissid=请输入Wifi名称(SSID):
set/p wifimima=请输入Wifi密码(密码位数:8到63位):
cls
net start sharedaccess 2>nul
netsh wlan stop hostednetwork
netsh wlan set hostednetwork mode=allow ssid="%wifissid%" key=%wifimima%
netsh wlan start hostednetwork
echo _______________________________________________________________________________
echo 如果无法连接请手动获取IP地址(如果开启系统防火墙也会无法连接成功)
echo Wifi名称(SSID):%wifissid%
echo Wifi密码:%wifimima%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 47
:gbwifi
title 关闭Wifi热点 - %system%
cls
netsh wlan stop hostednetwork
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 47
:wlpz
title 查看网络配置 - %system%
cls
ipconfig /all
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 47
:48
title 反编译chm文件 - %system%
cls
set chmlj=
echo 拖动要反编译的chm文件到此窗口
set/p chmlj=反编译后的文件保存在桌面(e=返回):
set chmlj="%chmlj:|=%"
if /i !chmlj!=="e" goto f
if "%chmlj:~0,1%%chmlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %chmlj%"') do (set %chmlj%="%%~a")
for /f "delims=" %%a in ("%chmlj%") do (
if /i not %%~xa==.chm goto nochm
set chmcglj=
set chmcglj=%%~na
copy/y "%chmlj%" %systemdrive%\windows\temp\tmp.chm
hh -decompile %systemdrive%\windows\temp\chm %systemdrive%\windows\temp\tmp.chm
md "%zmlj%%%~na"
xcopy/c/e/y %systemdrive%\windows\temp\chm "%zmlj%%%~na"
rd/s/q %systemdrive%\windows\temp\chm
del/f/q %systemdrive%\windows\temp\tmp.chm)
:chmcg
cls
echo 反编译成功！
echo 以保存到%zmlj%%chmcglj%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto f
:nochm
echo _______________________________________________________________________________
echo 不是chm文件！
ping/n 2 0.0>nul
goto 48
:xz
title 卸载DOS工具箱 - %system%
cls
set xzgjx=
set/p xzgjx=是否卸载工具箱(Y/N)?
set xzgjx="%xzgjx:|=%"
if /i !xzgjx!=="y" goto xzgjx
if /i !xzgjx!=="n" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
echo 请输入正确的选择
ping/n 2 0.0>nul
goto xz
:xzgjx
reg delete HKEY_CURRENT_USER\System\DOS工具箱 /f>nul 2>nul
rd/s/q %systemdrive%\dos工具箱临时目录>nul 2>nul
cls
echo 卸载成功
ping/n 2 0.0>nul
del/f/q %0
:49
title 关闭无响应进程 - %system%
cls
taskkill /f /fi "status eq not responding"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:50
title 文件比较器 - %system%
cls
echo 拖动要比较的文件到此窗口(比较过程中连按 "Ctrl+C" 2次可结束比较)
echo _______________________________________________________________________________
set/p wj1=第一个要比较的文件:
set/p wj2=第二个要比较的文件:
echo _______________________________________________________________________________
fc/b %wj1% %wj2%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto f
:51
title 将文字写入剪切板 - %system%
set nz=
cls
set/p  nz=请输入要写入到剪切板的文字内容:
mshta vbscript:clipboardData.SetData("text","%nz%")(window.close)
if %errorlevel%==0 (set nz=0) else (set nz=1)
echo _______________________________________________________________________________
if %nz%==0 (echo 写入成功) else (echo 写入失败)
echo 按任意键返回菜单&pause>nul
goto f
:52
cls
start services.msc
goto f
:53
cls
title 已知年月日计算星期 - %system%
set jsxq=00000000
set/p jsxq=请输入年月日(例如20150605):
for /f "delims=0123456789" %%a in ('echo %jsxq%') do goto wstg3
for /l %%a in (0,1,1000) do if "!jsxq:~%%a,1!"=="" set b=%%a&&goto wstg2
:wstg2
if %b%==8 goto jsxq
:wstg3
echo 请输入正确的格式!
ping/n 2 0.0>nul
goto 53
:jsxq
set y=%jsxq:~0,4%
if %y% lss 10 set/a y=0x%y%
set m=%jsxq:~4,2%
if %m% lss 10 set/a m=0x%m%
if %m%==1 set m=13&set/a y=%y%-1
if %m%==2 set m=14&set/a y=%y%-1
set d=%jsxq:~6,2%
if %d% lss 10 set/a d=0x%d%
set/a d=%d%+1
set/a w=%d%+2*%m%+3*(%m%+1)/5+%y%+%y%/4-%y%/100+%y%/400
set/a w=%w%%%7
set/a rn1=%y%%%4
set/a rn2=%y%%%100
set/a rn3=%y%%%400
set rn=平年
if %rn1%==0 if %rn2% neq 0 set rn=闰年
if %rn2%==0 if %rn3%==0 set rn=闰年
if %w%==1 set w=一
if %w%==2 set w=二
if %w%==3 set w=三
if %w%==4 set w=四
if %w%==5 set w=五
if %w%==6 set w=六
if %w%==0 set w=天
echo;
echo %rn% %jsxq:~0,4%年%jsxq:~4,2%月%jsxq:~6,2%日是星期%w%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto f
:54
cls
title 查询系统激活状态 - %system%
echo 操作系统: %system% %bit%位
if "!system:~8,2!"=="XP" echo Windows XP系统无法使用此功能查询
echo _______________________________________________________________________________
echo [1]显示许可信息
echo [2]显示详细的许可信息
echo [3]显示当前许可状态的截止日期
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 1230 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" start slmgr.vbs -dli&goto 54
if "%errorlevel%" equ "2" start slmgr.vbs -dlv&goto 54
if "%errorlevel%" equ "3" start slmgr.vbs -xpr&goto 54
if "%errorlevel%" equ "4" goto f
goto 54
set cxxz=
set/p cxxz=请输入你的选择:
set cxxz="%cxxz:|=%"
if !cxxz!=="1" start slmgr.vbs -dli&goto 54
if !cxxz!=="2" start slmgr.vbs -dlv&goto 54
if !cxxz!=="3" start slmgr.vbs -xpr&goto 54
if !cxxz!=="0" goto f
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 54
:55
cls
title 创建指定文件的快捷方式到桌面 - %system%
set kjfs=
set/p kjfs=请拖动目标文件到此窗口:
if "!kjfs!"=="" goto 55(1)
if "%kjfs:~0,1%%kjfs:~-1%" neq """" for /f "delims=" %%a in ('"echo %kjfs%"') do (set %kjfs%="%%~a")
for /f "delims=" %%a in ("%kjfs%") do set kjfsmc=%%~na
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\%kjfsmc%.lnk""):b.TargetPath=""%kjfs%"":b.WorkingDirectory=""%~dp0"":b.Save:close")
:55(1)
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto g
:56
cls
start msconfig.exe
goto g
:57
cls
title 字数统计 - %system%
set zstj=
set/p zstj=请输入文字:
call :zfccd "%zstj%"
echo 总计%zfcgs%个字(包含标点符号)
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto g
:58
cls
title 创建符号链接 - %system%
set swjj=
set cwjj=
set/p swjj=输入要链接的文件夹路径:
set/p cwjj=输入链接文件夹的输出路径:
if "%swjj:~0,1%%swjj:~-1%" neq """" for /f "delims=" %%a in ('"echo %swjj%"') do (set %swjj%="%%~a")
if "%cwjj:~0,1%%cwjj:~-1%" neq """" for /f "delims=" %%a in ('"echo %cwjj%"') do (set %cwjj%="%%~a")
mklink /j %cwjj% %swjj%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto g
:59
title 打开管理控制台 - %system%
cls
start mmc
goto g
:60
cls
title 解除Streams文件锁定 - %system%
set jcwjsd=
set/p jcwjsd=拖动目标文件到此窗口:
if "%jcwjsd:~0,1%%jcwjsd:~-1%" neq """" for /f "delims=" %%a in ('"echo %jcwjsd%"') do (set %jcwjsd%="%%~a")
echo>"%jcwjsd%:Zone.Identifier"
echo 操作完成
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto g
:61
setlocal enabledelayedexpansion
title 创建、删除或列出卷装入点 - %system%
cls
echo _______________________________________________________________________________
echo [1]列出卷装入点
echo [2]删除不在系统中的、卷的装入点目录和注册表设置
echo [3]列出指定目录的已装入的卷名称
echo [4]创建盘符(创建卷装入点)
echo [5]删除盘符(删除卷装入点)
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 123450 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 61(1)
if "%errorlevel%" equ "2" goto 61(2)
if "%errorlevel%" equ "3" goto 61(3)
if "%errorlevel%" equ "4" goto 61(4)
if "%errorlevel%" equ "5" goto 61(5)
if "%errorlevel%" equ "6" goto g
goto 61
set gzxz=
set/p gzxz=请输入你的选择:
set gzxz="%gzxz:|=%"
if !gzxz!=="1" goto 61(1)
if !gzxz!=="2" goto 61(2)
if !gzxz!=="3" goto 61(3)
if !gzxz!=="4" goto 61(4)
if !gzxz!=="5" goto 61(5)
if !gzxz!=="0" goto g
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 61
:61(1)
title 列出卷装入点 - %system%
cls
for /f "skip=22" %%a in ('"mountvol"') do echo %%a
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 61
:61(2)
title 删除不在系统中的,卷的装入点目录和注册表设置 - %system%
cls
mountvol /r
echo 操作完成
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 61
:61(3)
title 列出指定目录的已装入的卷名称 - %system%
cls
fsutil fsinfo drives
echo _______________________________________________________________________________
set xszz=
set/p xszz=请输入需要显示的盘符:
cls
echo %xszz%:\&mountvol %xszz%: /l
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 61
:61(4)
title 创建盘符(创建卷装入点) - %system%
cls
set xx=0
for /f "delims=" %%a in ('"mountvol|find "\\?\Volume""') do (set/a xx=!xx!+1
set a!xx!=%%a
echo [!xx!]%%a)
echo [0]返回上级菜单
echo _______________________________________________________________________________
set cjpf=
set/p cjpf=选择装入点:
if "%cjpf%"=="" goto 61(4)
if !cjpf!==0 goto 61
set xzpf=
set/p xzpf=输入盘符:
mountvol %xzpf%: !a%cjpf%!
echo 操作完成
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 61
:61(5)
title 删除盘符(删除卷装入点) - %system%
cls
fsutil fsinfo drives
echo _______________________________________________________________________________
set scpf=
set/p scpf=请输入需要删除的盘符:
mountvol %scpf%: /d
echo 操作完成
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 61
:62
title 注册表搜索 - %system%
cls
set zcbss=
set/p zcbss=输入你要搜索的名称:
set zcbss="%zcbss:|=%"
echo _______________________________________________________________________________
echo (1/5)在HKEY_CLASSES_ROOT中搜索...
reg query hkcr /f !zcbss! /s
echo _______________________________________________________________________________
echo (2/5)在HKEY_CURRENT_USER中搜索...
reg query hkcu /f !zcbss! /s
echo _______________________________________________________________________________
echo (3/5)在HKEY_LOCAL_MACHINE中搜索...
reg query hklm /f !zcbss! /s
echo _______________________________________________________________________________
echo (4/5)在HKEY_USERS中搜索...
reg query hku /f !zcbss! /s
echo _______________________________________________________________________________
echo (5/5)在HKEY_CURRENT_CONFIG中搜索...
reg query hkcc /f !zcbss! /s
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto g
:63
title Base编解码 - %system%
cls
if exist %systemroot%\system32\certutil.exe (dir/ad %systemroot%\system32\certutil.exe>nul 2>nul||goto 63-0)
echo 没有找到certutil.exe
echo 不能继续Base编解码
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto g
:63-0
echo _______________________________________________________________________________
echo [1]Base解码
echo [2]Base编码
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 63-1
if "%errorlevel%" equ "2" goto 63-2
if "%errorlevel%" equ "3" goto g
goto 63
set basexx=
set/p basexx=请输入你的选择:
set basexx="%basexx:|=%"
if !basexx!=="1" goto 63-1
if !basexx!=="2" goto 63-2
if !basexx!=="0" goto g
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 63
:63-1
cls
del/f/q %temp%\codetmp>nul 2>nul
title Base解码 - %system%
set basebm=
set/p basebm=输入要解码的字符串或文件路径:
if "!basebm!"=="" goto 63-1
if not exist "!basebm!" (echo !basebm!>%temp%\tmp
certutil -decode -f %temp%\tmp %temp%\codetmp>nul&goto 63-11)
if "!basebm:~0,1!!basebm:~-1!" neq """" for /f "delims=" %%a in ('"echo !basebm!"') do (set !basebm!="%%~a")
dir/ad "!basebm!" >nul 2>nul&&echo 不能解码文件夹||goto 63-12
ping/n 2 0.0>nul
goto 63-1
:63-12
certutil -decode -f "!basebm!" %temp%\codetmp>nul
:63-11
cls
echo _______________________________________________________________________________
echo 输入内容: !basebm!
echo 解码内容:
if exist %temp%\codetmp (for /f "delims=" %%a in (%temp%\codetmp) do (if "%%a" neq "-----BEGIN CERTIFICATE-----" (if "%%a" neq "-----END CERTIFICATE-----" (echo %%a)))) else (echo 解码失败)
echo _______________________________________________________________________________
set bxz=
set/p bxz=输入"y"保存编码,其他输入返回上级菜单:
set bxz="%bxz:|=%"
if !bxz!=="y" goto 63(1)(2)
goto 63
:63(1)(2)
set basebc=
set/p basebc=输入保存路径:
echo _______________________________________________________________________________
copy/y/z %temp%\codetmp !basebc!
if %errorlevel% neq 0 (echo 保存失败) else (echo 保存成功)
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 63
:63-2
cls
del/f/q %temp%\codetmp>nul 2>nul
title Base编码 - %system%
set basebm=
set/p basebm=输入要编码的字符串或文件路径:
if "!basebm!"=="" goto 63-2
if not exist "!basebm!" (set /p =!basebm!<nul>%temp%\tmp
certutil -encode -f %temp%\tmp %temp%\codetmp>nul&goto 63-21)
if "!basebm:~0,1!!basebm:~-1!" neq """" for /f "delims=" %%a in ('"echo !basebm!"') do (set !basebm!="%%~a")
dir/ad "!basebm!" >nul 2>nul&&echo 不能编码文件夹||goto 63-22
ping/n 2 0.0>nul
goto 63-2
:63-22
certutil -encode -f "!basebm!" %temp%\codetmp>nul
:63-21
cls 
echo _______________________________________________________________________________
echo 输入内容: !basebm!
echo 编码内容:
for /f "delims=" %%a in (%temp%\codetmp) do (if "%%a" neq "-----BEGIN CERTIFICATE-----" (if "%%a" neq "-----END CERTIFICATE-----" (echo %%a)))
echo _______________________________________________________________________________
set bxz=
set/p bxz=输入"y"保存编码,其他输入返回上级菜单:
set bxz="%bxz:|=%"
if !bxz!=="y" goto 63(2)(2)
goto 63
:63(2)(2)
set basebc=
set/p basebc=输入保存路径:
echo _______________________________________________________________________________
copy/y/z %temp%\codetmp !basebc!
if %errorlevel% neq 0 (echo 保存失败) else (echo 保存成功)
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 63
:64
title 8.3短文件名管理 - %system%
cls
echo _______________________________________________________________________________
echo [1]查询8.3短文件名状态
echo [2]禁止8.3短文件名创建
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 64-1
if "%errorlevel%" equ "2" goto 64-2
if "%errorlevel%" equ "3" goto h
goto 64
set name83=
set/p name83=请输入你的选择:
set name83="%name83:|=%"
if !name83!=="1" goto 64-1
if !name83!=="2" goto 64-2
if !name83!=="0" goto h
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 64
:64-1
cls
fsutil fsinfo drives
set query83=
set/p query83=请输入要查询的盘符:
fsutil 8dot3name query %query83%:
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 64
:64-2
cls
fsutil 8dot3name set 1
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 64
:65
title 智能NTFS压缩 - %system%
cls
set url=
set/p url=请输入要压缩的文件夹:
set url="%url:|=%"
dir /ad !url!>nul 2>nul||echo 路径 !url! 不是一个文件夹&&timeout /t 2 /nobreak>nul&&goto 65
echo //5JAGYAIAAoAC0ATgBPAFQAIAAoAFsAUwBlAGMAdQByAGkAdAB5AC4AUAByAGkA>%temp%\base
echo bgBjAGkAcABhAGwALgBXAGkAbgBkAG8AdwBzAFAAcgBpAG4AYwBpAHAAYQBsAF0A>>%temp%\base
echo IABbAFMAZQBjAHUAcgBpAHQAeQAuAFAAcgBpAG4AYwBpAHAAYQBsAC4AVwBpAG4A>>%temp%\base
echo ZABvAHcAcwBJAGQAZQBuAHQAaQB0AHkAXQA6ADoARwBlAHQAQwB1AHIAcgBlAG4A>>%temp%\base
echo dAAoACkAKQAuAEkAcwBJAG4AUgBvAGwAZQAoAGAADQAKACAAIAAgACAAWwBTAGUA>>%temp%\base
echo YwB1AHIAaQB0AHkALgBQAHIAaQBuAGMAaQBwAGEAbAAuAFcAaQBuAGQAbwB3AHMA>>%temp%\base
echo QgB1AGkAbAB0AEkAbgBSAG8AbABlAF0AIAAiAEEAZABtAGkAbgBpAHMAdAByAGEA>>%temp%\base
echo dABvAHIAIgApACkADQAKAHsADQAKACAAIAAgACAAVwByAGkAdABlAC0AVwBhAHIA>>%temp%\base
echo bgBpAG4AZwAgABwgWQBvAHUAIABkAG8AIABuAG8AdAAgAGgAYQB2AGUAIABBAGQA>>%temp%\base
echo bQBpAG4AaQBzAHQAcgBhAHQAbwByACAAcgBpAGcAaAB0AHMAIAB0AG8AIAByAHUA>>%temp%\base
echo bgAgAHQAaABpAHMAIABzAGMAcgBpAHAAdAAhAGAAbgBQAGwAZQBhAHMAZQAgAHIA>>%temp%\base
echo ZQAtAHIAdQBuACAAdABoAGkAcwAgAHMAYwByAGkAcAB0ACAAYQBzACAAYQBuACAA>>%temp%\base
echo QQBkAG0AaQBuAGkAcwB0AHIAYQB0AG8AcgAhAB0gDQAKACAAIAAgACAAQgByAGUA>>%temp%\base
echo YQBrAA0ACgB9AA0ACgANAAoAJABTAG8AdQByAGMAZQAgAD0AIABAACIADQAKAHUA>>%temp%\base
echo cwBpAG4AZwAgAFMAeQBzAHQAZQBtADsADQAKAHUAcwBpAG4AZwAgAFMAeQBzAHQA>>%temp%\base
echo ZQBtAC4AQwBvAG0AcABvAG4AZQBuAHQATQBvAGQAZQBsADsADQAKAHUAcwBpAG4A>>%temp%\base
echo ZwAgAFMAeQBzAHQAZQBtAC4AUgB1AG4AdABpAG0AZQAuAEkAbgB0AGUAcgBvAHAA>>%temp%\base
echo UwBlAHIAdgBpAGMAZQBzADsADQAKAHUAcwBpAG4AZwAgAFMAeQBzAHQAZQBtAC4A>>%temp%\base
echo UwBlAGMAdQByAGkAdAB5AC4AUAByAGkAbgBjAGkAcABhAGwAOwANAAoADQAKAG4A>>%temp%\base
echo YQBtAGUAcwBwAGEAYwBlACAAQwBsAGUAYQByAFMAdABhAG4AZABiAHkATABpAHMA>>%temp%\base
echo dAANAAoAewANAAoAIAAgACAAIABwAHUAYgBsAGkAYwAgAGMAbABhAHMAcwAgAFAA>>%temp%\base
echo cgBvAGcAcgBhAG0ADQAKACAAIAAgACAAewANAAoAIAAgACAAIAAgACAAIAAgAGMA>>%temp%\base
echo bwBuAHMAdAAgAGkAbgB0ACAAUwBFAF8AUABSAEkAVgBJAEwARQBHAEUAXwBFAE4A>>%temp%\base
echo QQBCAEwARQBEACAAPQAgADIAOwANAAoAIAAgACAAIAAgACAAIAAgAGMAbwBuAHMA>>%temp%\base
echo dAAgAHMAdAByAGkAbgBnACAAUwBFAF8ASQBOAEMAUgBFAEEAUwBFAF8AUQBVAE8A>>%temp%\base
echo VABBAF8ATgBBAE0ARQAgAD0AIAAiAFMAZQBJAG4AYwByAGUAYQBzAGUAUQB1AG8A>>%temp%\base
echo dABhAFAAcgBpAHYAaQBsAGUAZwBlACIAOwANAAoAIAAgACAAIAAgACAAIAAgAGMA>>%temp%\base
echo bwBuAHMAdAAgAHMAdAByAGkAbgBnACAAUwBFAF8AUABSAE8ARgBJAEwARQBfAFMA>>%temp%\base
echo SQBOAEcATABFAF8AUABSAE8AQwBFAFMAUwBfAE4AQQBNAEUAIAA9ACAAIgBTAGUA>>%temp%\base
echo UAByAG8AZgBpAGwAZQBTAGkAbgBnAGwAZQBQAHIAbwBjAGUAcwBzAFAAcgBpAHYA>>%temp%\base
echo aQBsAGUAZwBlACIAOwANAAoAIAAgACAAIAAgACAAIAAgAGMAbwBuAHMAdAAgAGkA>>%temp%\base
echo bgB0ACAAUwB5AHMAdABlAG0ARgBpAGwAZQBDAGEAYwBoAGUASQBuAGYAbwByAG0A>>%temp%\base
echo YQB0AGkAbwBuACAAPQAgADAAeAAwADAAMQA1ADsADQAKACAAIAAgACAAIAAgACAA>>%temp%\base
echo IABjAG8AbgBzAHQAIABpAG4AdAAgAFMAeQBzAHQAZQBtAE0AZQBtAG8AcgB5AEwA>>%temp%\base
echo aQBzAHQASQBuAGYAbwByAG0AYQB0AGkAbwBuACAAPQAgADAAeAAwADAANQAwADsA>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIABjAG8AbgBzAHQAIABpAG4AdAAgAE0AZQBtAG8A>>%temp%\base
echo cgB5AFAAdQByAGcAZQBTAHQAYQBuAGQAYgB5AEwAaQBzAHQAIAA9ACAANAA7AA0A>>%temp%\base
echo CgANAAoAIAAgACAAIAAgACAAIAAgAFsARABsAGwASQBtAHAAbwByAHQAKAAiAGEA>>%temp%\base
echo ZAB2AGEAcABpADMAMgAuAGQAbABsACIALAAgAFMAZQB0AEwAYQBzAHQARQByAHIA>>%temp%\base
echo bwByACAAPQAgAHQAcgB1AGUAKQBdAA0ACgAgACAAIAAgACAAIAAgACAAaQBuAHQA>>%temp%\base
echo ZQByAG4AYQBsACAAcwB0AGEAdABpAGMAIABlAHgAdABlAHIAbgAgAGIAbwBvAGwA>>%temp%\base
echo IABMAG8AbwBrAHUAcABQAHIAaQB2AGkAbABlAGcAZQBWAGEAbAB1AGUAKABzAHQA>>%temp%\base
echo cgBpAG4AZwAgAGgAbwBzAHQALAAgAHMAdAByAGkAbgBnACAAbgBhAG0AZQAsACAA>>%temp%\base
echo cgBlAGYAIABsAG8AbgBnACAAcABsAHUAaQBkACkAOwANAAoADQAKACAAIAAgACAA>>%temp%\base
echo IAAgACAAIABbAEQAbABsAEkAbQBwAG8AcgB0ACgAIgBhAGQAdgBhAHAAaQAzADIA>>%temp%\base
echo LgBkAGwAbAAiACwAIABTAGUAdABMAGEAcwB0AEUAcgByAG8AcgAgAD0AIAB0AHIA>>%temp%\base
echo dQBlACkAXQANAAoAIAAgACAAIAAgACAAIAAgAGkAbgB0AGUAcgBuAGEAbAAgAHMA>>%temp%\base
echo dABhAHQAaQBjACAAZQB4AHQAZQByAG4AIABiAG8AbwBsACAAQQBkAGoAdQBzAHQA>>%temp%\base
echo VABvAGsAZQBuAFAAcgBpAHYAaQBsAGUAZwBlAHMAKABJAG4AdABQAHQAcgAgAGgA>>%temp%\base
echo dABvAGsALAAgAGIAbwBvAGwAIABkAGkAcwBhAGwAbAAsACAAcgBlAGYAIABUAG8A>>%temp%\base
echo awBQAHIAaQB2ADEATAB1AGkAZAAgAG4AZQB3AHMAdAAsACAAaQBuAHQAIABsAGUA>>%temp%\base
echo bgAsACAASQBuAHQAUAB0AHIAIABwAHIAZQB2ACwAIABJAG4AdABQAHQAcgAgAHIA>>%temp%\base
echo ZQBsAGUAbgApADsADQAKAA0ACgAgACAAIAAgACAAIAAgACAAWwBEAGwAbABJAG0A>>%temp%\base
echo cABvAHIAdAAoACIAbgB0AGQAbABsAC4AZABsAGwAIgApAF0ADQAKACAAIAAgACAA>>%temp%\base
echo IAAgACAAIABwAHUAYgBsAGkAYwAgAHMAdABhAHQAaQBjACAAZQB4AHQAZQByAG4A>>%temp%\base
echo IABVAEkAbgB0ADMAMgAgAE4AdABTAGUAdABTAHkAcwB0AGUAbQBJAG4AZgBvAHIA>>%temp%\base
echo bQBhAHQAaQBvAG4AKABpAG4AdAAgAEkAbgBmAG8AQwBsAGEAcwBzACwAIABJAG4A>>%temp%\base
echo dABQAHQAcgAgAEkAbgBmAG8ALAAgAGkAbgB0ACAATABlAG4AZwB0AGgAKQA7AA0A>>%temp%\base
echo CgAgACAAIAAgACAAIAAgACAAcAB1AGIAbABpAGMAIABzAHQAYQB0AGkAYwAgAGIA>>%temp%\base
echo bwBvAGwAIABJAHMANgA0AEIAaQB0AE0AbwBkAGUAKAApAA0ACgAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAewANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAcgBlAHQAdQByAG4A>>%temp%\base
echo IABNAGEAcgBzAGgAYQBsAC4AUwBpAHoAZQBPAGYAKAB0AHkAcABlAG8AZgAoAEkA>>%temp%\base
echo bgB0AFAAdAByACkAKQAgAD0APQAgADgAOwANAAoAIAAgACAAIAAgACAAIAAgAH0A>>%temp%\base
echo DQAKAA0ACgAgACAAIAAgACAAIAAgACAAcwB0AGEAdABpAGMAIAB2AG8AaQBkACAA>>%temp%\base
echo TQBhAGkAbgAoAHMAdAByAGkAbgBnAFsAXQAgAGEAcgBnAHMAKQANAAoAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgAHsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAEMAbABlAGEA>>%temp%\base
echo cgBGAGkAbABlAFMAeQBzAHQAZQBtAEMAYQBjAGgAZQAoAHQAcgB1AGUAKQA7AA0A>>%temp%\base
echo CgAgACAAIAAgACAAIAAgACAAfQANAAoADQAKACAAIAAgACAAIAAgACAAIABwAHUA>>%temp%\base
echo YgBsAGkAYwAgAHMAdABhAHQAaQBjACAAdgBvAGkAZAAgAEMAbABlAGEAcgBGAGkA>>%temp%\base
echo bABlAFMAeQBzAHQAZQBtAEMAYQBjAGgAZQAoAGIAbwBvAGwAIABDAGwAZQBhAHIA>>%temp%\base
echo UwB0AGEAbgBkAGIAeQBDAGEAYwBoAGUAKQANAAoAIAAgACAAIAAgACAAIAAgAHsA>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAHQAcgB5AA0ACgAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAB7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgAGkAZgAgACgAUwBlAHQASQBuAGMAcgBlAGEAcwBlAFAAcgBpAHYAaQBsAGUA>>%temp%\base
echo ZwBlACgAUwBFAF8ASQBOAEMAUgBFAEEAUwBFAF8AUQBVAE8AVABBAF8ATgBBAE0A>>%temp%\base
echo RQApACkADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAewANAAoA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAHUAaQBuAHQA>>%temp%\base
echo IABuAHUAbQAxADsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIABpAG4AdAAgAFMAeQBzAHQAZQBtAEkAbgBmAG8ATABlAG4AZwB0AGgA>>%temp%\base
echo OwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAEcA>>%temp%\base
echo QwBIAGEAbgBkAGwAZQAgAGcAYwBIAGEAbgBkAGwAZQA7AA0ACgAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAaQBmACAAKAAhAEkAcwA2ADQA>>%temp%\base
echo QgBpAHQATQBvAGQAZQAoACkAKQANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgAHsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgAFMAWQBTAFQARQBNAF8AQwBBAEMASABFAF8A>>%temp%\base
echo SQBOAEYATwBSAE0AQQBUAEkATwBOACAAYwBhAGMAaABlAEkAbgBmAG8AcgBtAGEA>>%temp%\base
echo dABpAG8AbgAgAD0AIABuAGUAdwAgAFMAWQBTAFQARQBNAF8AQwBBAEMASABFAF8A>>%temp%\base
echo SQBOAEYATwBSAE0AQQBUAEkATwBOACgAKQA7AA0ACgAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABjAGEAYwBoAGUASQBuAGYA>>%temp%\base
echo bwByAG0AYQB0AGkAbwBuAC4ATQBpAG4AaQBtAHUAbQBXAG8AcgBrAGkAbgBnAFMA>>%temp%\base
echo ZQB0ACAAPQAgAHUAaQBuAHQALgBNAGEAeABWAGEAbAB1AGUAOwANAAoAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAYwBhAGMA>>%temp%\base
echo aABlAEkAbgBmAG8AcgBtAGEAdABpAG8AbgAuAE0AYQB4AGkAbQB1AG0AVwBvAHIA>>%temp%\base
echo awBpAG4AZwBTAGUAdAAgAD0AIAB1AGkAbgB0AC4ATQBhAHgAVgBhAGwAdQBlADsA>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgAFMAeQBzAHQAZQBtAEkAbgBmAG8ATABlAG4AZwB0AGgAIAA9ACAATQBhAHIA>>%temp%\base
echo cwBoAGEAbAAuAFMAaQB6AGUATwBmACgAYwBhAGMAaABlAEkAbgBmAG8AcgBtAGEA>>%temp%\base
echo dABpAG8AbgApADsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgAGcAYwBIAGEAbgBkAGwAZQAgAD0AIABHAEMASABhAG4A>>%temp%\base
echo ZABsAGUALgBBAGwAbABvAGMAKABjAGEAYwBoAGUASQBuAGYAbwByAG0AYQB0AGkA>>%temp%\base
echo bwBuACwAIABHAEMASABhAG4AZABsAGUAVAB5AHAAZQAuAFAAaQBuAG4AZQBkACkA>>%temp%\base
echo OwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAbgB1AG0AMQAgAD0AIABOAHQAUwBlAHQAUwB5AHMAdABlAG0ASQBuAGYA>>%temp%\base
echo bwByAG0AYQB0AGkAbwBuACgAUwB5AHMAdABlAG0ARgBpAGwAZQBDAGEAYwBoAGUA>>%temp%\base
echo SQBuAGYAbwByAG0AYQB0AGkAbwBuACwAIABnAGMASABhAG4AZABsAGUALgBBAGQA>>%temp%\base
echo ZAByAE8AZgBQAGkAbgBuAGUAZABPAGIAagBlAGMAdAAoACkALAAgAFMAeQBzAHQA>>%temp%\base
echo ZQBtAEkAbgBmAG8ATABlAG4AZwB0AGgAKQA7AA0ACgAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABnAGMASABhAG4AZABsAGUA>>%temp%\base
echo LgBGAHIAZQBlACgAKQA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAfQANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgAGUAbABzAGUADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAB7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIABTAFkAUwBUAEUATQBfAEMAQQBDAEgARQBfAEkA>>%temp%\base
echo TgBGAE8AUgBNAEEAVABJAE8ATgBfADYANABfAEIASQBUACAAaQBuAGYAbwByAG0A>>%temp%\base
echo YQB0AGkAbwBuADYANABCAGkAdAAgAD0AIABuAGUAdwAgAFMAWQBTAFQARQBNAF8A>>%temp%\base
echo QwBBAEMASABFAF8ASQBOAEYATwBSAE0AQQBUAEkATwBOAF8ANgA0AF8AQgBJAFQA>>%temp%\base
echo KAApADsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgAGkAbgBmAG8AcgBtAGEAdABpAG8AbgA2ADQAQgBpAHQALgBNAGkA>>%temp%\base
echo bgBpAG0AdQBtAFcAbwByAGsAaQBuAGcAUwBlAHQAIAA9ACAALQAxAEwAOwANAAoA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo aQBuAGYAbwByAG0AYQB0AGkAbwBuADYANABCAGkAdAAuAE0AYQB4AGkAbQB1AG0A>>%temp%\base
echo VwBvAHIAawBpAG4AZwBTAGUAdAAgAD0AIAAtADEATAA7AA0ACgAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABTAHkAcwB0AGUA>>%temp%\base
echo bQBJAG4AZgBvAEwAZQBuAGcAdABoACAAPQAgAE0AYQByAHMAaABhAGwALgBTAGkA>>%temp%\base
echo egBlAE8AZgAoAGkAbgBmAG8AcgBtAGEAdABpAG8AbgA2ADQAQgBpAHQAKQA7AA0A>>%temp%\base
echo CgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IABnAGMASABhAG4AZABsAGUAIAA9ACAARwBDAEgAYQBuAGQAbABlAC4AQQBsAGwA>>%temp%\base
echo bwBjACgAaQBuAGYAbwByAG0AYQB0AGkAbwBuADYANABCAGkAdAAsACAARwBDAEgA>>%temp%\base
echo YQBuAGQAbABlAFQAeQBwAGUALgBQAGkAbgBuAGUAZAApADsADQAKACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAG4AdQBtADEA>>%temp%\base
echo IAA9ACAATgB0AFMAZQB0AFMAeQBzAHQAZQBtAEkAbgBmAG8AcgBtAGEAdABpAG8A>>%temp%\base
echo bgAoAFMAeQBzAHQAZQBtAEYAaQBsAGUAQwBhAGMAaABlAEkAbgBmAG8AcgBtAGEA>>%temp%\base
echo dABpAG8AbgAsACAAZwBjAEgAYQBuAGQAbABlAC4AQQBkAGQAcgBPAGYAUABpAG4A>>%temp%\base
echo bgBlAGQATwBiAGoAZQBjAHQAKAApACwAIABTAHkAcwB0AGUAbQBJAG4AZgBvAEwA>>%temp%\base
echo ZQBuAGcAdABoACkAOwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAZwBjAEgAYQBuAGQAbABlAC4ARgByAGUAZQAoACkA>>%temp%\base
echo OwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAH0A>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABpAGYA>>%temp%\base
echo IAAoAG4AdQBtADEAIAAhAD0AIAAwACkADQAKACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAHQAaAByAG8AdwAgAG4AZQB3ACAA>>%temp%\base
echo RQB4AGMAZQBwAHQAaQBvAG4AKAAiAE4AdABTAGUAdABTAHkAcwB0AGUAbQBJAG4A>>%temp%\base
echo ZgBvAHIAbQBhAHQAaQBvAG4AKABTAFkAUwBUAEUATQBDAEEAQwBIAEUASQBOAEYA>>%temp%\base
echo TwBSAE0AQQBUAEkATwBOACkAIABlAHIAcgBvAHIAOgAgACIALAAgAG4AZQB3ACAA>>%temp%\base
echo VwBpAG4AMwAyAEUAeABjAGUAcAB0AGkAbwBuACgATQBhAHIAcwBoAGEAbAAuAEcA>>%temp%\base
echo ZQB0AEwAYQBzAHQAVwBpAG4AMwAyAEUAcgByAG8AcgAoACkAKQApADsADQAKACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAfQANAAoAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIABpAGYAIAAoAEMAbABlAGEAcgBTAHQAYQBuAGQA>>%temp%\base
echo YgB5AEMAYQBjAGgAZQAgACYAJgAgAFMAZQB0AEkAbgBjAHIAZQBhAHMAZQBQAHIA>>%temp%\base
echo aQB2AGkAbABlAGcAZQAoAFMARQBfAFAAUgBPAEYASQBMAEUAXwBTAEkATgBHAEwA>>%temp%\base
echo RQBfAFAAUgBPAEMARQBTAFMAXwBOAEEATQBFACkAKQANAAoAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAB7AA0ACgANAAoAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgAGkAbgB0ACAAUwB5AHMAdABlAG0ASQBuAGYA>>%temp%\base
echo bwBMAGUAbgBnAHQAaAAgAD0AIABNAGEAcgBzAGgAYQBsAC4AUwBpAHoAZQBPAGYA>>%temp%\base
echo KABNAGUAbQBvAHIAeQBQAHUAcgBnAGUAUwB0AGEAbgBkAGIAeQBMAGkAcwB0ACkA>>%temp%\base
echo OwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAEcA>>%temp%\base
echo QwBIAGEAbgBkAGwAZQAgAGcAYwBIAGEAbgBkAGwAZQAgAD0AIABHAEMASABhAG4A>>%temp%\base
echo ZABsAGUALgBBAGwAbABvAGMAKABNAGUAbQBvAHIAeQBQAHUAcgBnAGUAUwB0AGEA>>%temp%\base
echo bgBkAGIAeQBMAGkAcwB0ACwAIABHAEMASABhAG4AZABsAGUAVAB5AHAAZQAuAFAA>>%temp%\base
echo aQBuAG4AZQBkACkAOwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgAHUAaQBuAHQAIABuAHUAbQAyACAAPQAgAE4AdABTAGUAdABTAHkA>>%temp%\base
echo cwB0AGUAbQBJAG4AZgBvAHIAbQBhAHQAaQBvAG4AKABTAHkAcwB0AGUAbQBNAGUA>>%temp%\base
echo bQBvAHIAeQBMAGkAcwB0AEkAbgBmAG8AcgBtAGEAdABpAG8AbgAsACAAZwBjAEgA>>%temp%\base
echo YQBuAGQAbABlAC4AQQBkAGQAcgBPAGYAUABpAG4AbgBlAGQATwBiAGoAZQBjAHQA>>%temp%\base
echo KAApACwAIABTAHkAcwB0AGUAbQBJAG4AZgBvAEwAZQBuAGcAdABoACkAOwANAAoA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAGcAYwBIAGEA>>%temp%\base
echo bgBkAGwAZQAuAEYAcgBlAGUAKAApADsADQAKACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIABpAGYAIAAoAG4AdQBtADIAIAAhAD0AIAAwACkA>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgAHQAaAByAG8AdwAgAG4AZQB3ACAARQB4AGMAZQBwAHQAaQBvAG4AKAAiAE4A>>%temp%\base
echo dABTAGUAdABTAHkAcwB0AGUAbQBJAG4AZgBvAHIAbQBhAHQAaQBvAG4AKABTAFkA>>%temp%\base
echo UwBUAEUATQBNAEUATQBPAFIAWQBMAEkAUwBUAEkATgBGAE8AUgBNAEEAVABJAE8A>>%temp%\base
echo TgApACAAZQByAHIAbwByADoAIAAiACwAIABuAGUAdwAgAFcAaQBuADMAMgBFAHgA>>%temp%\base
echo YwBlAHAAdABpAG8AbgAoAE0AYQByAHMAaABhAGwALgBHAGUAdABMAGEAcwB0AFcA>>%temp%\base
echo aQBuADMAMgBFAHIAcgBvAHIAKAApACkAKQA7AA0ACgAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgAH0ADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAH0A>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAGMAYQB0AGMAaAAgACgARQB4AGMA>>%temp%\base
echo ZQBwAHQAaQBvAG4AIABlAHgAKQANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo ewANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABDAG8AbgBzAG8A>>%temp%\base
echo bABlAC4AVwByAGkAdABlACgAZQB4AC4AVABvAFMAdAByAGkAbgBnACgAKQApADsA>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAH0ADQAKACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAB9AA0ACgANAAoAIAAgACAAIAAgACAAIAAgAHAAcgBpAHYAYQB0AGUAIABzAHQA>>%temp%\base
echo YQB0AGkAYwAgAGIAbwBvAGwAIABTAGUAdABJAG4AYwByAGUAYQBzAGUAUAByAGkA>>%temp%\base
echo dgBpAGwAZQBnAGUAKABzAHQAcgBpAG4AZwAgAHAAcgBpAHYAaQBsAGUAZwBlAE4A>>%temp%\base
echo YQBtAGUAKQANAAoAIAAgACAAIAAgACAAIAAgAHsADQAKACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgAHUAcwBpAG4AZwAgACgAVwBpAG4AZABvAHcAcwBJAGQAZQBuAHQA>>%temp%\base
echo aQB0AHkAIABjAHUAcgByAGUAbgB0ACAAPQAgAFcAaQBuAGQAbwB3AHMASQBkAGUA>>%temp%\base
echo bgB0AGkAdAB5AC4ARwBlAHQAQwB1AHIAcgBlAG4AdAAoAFQAbwBrAGUAbgBBAGMA>>%temp%\base
echo YwBlAHMAcwBMAGUAdgBlAGwAcwAuAFEAdQBlAHIAeQAgAHwAIABUAG8AawBlAG4A>>%temp%\base
echo QQBjAGMAZQBzAHMATABlAHYAZQBsAHMALgBBAGQAagB1AHMAdABQAHIAaQB2AGkA>>%temp%\base
echo bABlAGcAZQBzACkAKQANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAewANAAoA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABUAG8AawBQAHIAaQB2ADEA>>%temp%\base
echo TAB1AGkAZAAgAG4AZQB3AHMAdAA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgAG4AZQB3AHMAdAAuAEMAbwB1AG4AdAAgAD0AIAAxADsADQAKACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAbgBlAHcAcwB0AC4ATAB1AGkA>>%temp%\base
echo ZAAgAD0AIAAwAEwAOwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IABuAGUAdwBzAHQALgBBAHQAdAByACAAPQAgAFMARQBfAFAAUgBJAFYASQBMAEUA>>%temp%\base
echo RwBFAF8ARQBOAEEAQgBMAEUARAA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgAGkAZgAgACgAIQBMAG8AbwBrAHUAcABQAHIAaQB2AGkAbABlAGcA>>%temp%\base
echo ZQBWAGEAbAB1AGUAKABuAHUAbABsACwAIABwAHIAaQB2AGkAbABlAGcAZQBOAGEA>>%temp%\base
echo bQBlACwAIAByAGUAZgAgAG4AZQB3AHMAdAAuAEwAdQBpAGQAKQApAA0ACgAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAdABoAHIAbwB3ACAA>>%temp%\base
echo bgBlAHcAIABFAHgAYwBlAHAAdABpAG8AbgAoACIARQByAHIAbwByACAAaQBuACAA>>%temp%\base
echo TABvAG8AawB1AHAAUAByAGkAdgBpAGwAZQBnAGUAVgBhAGwAdQBlADoAIAAiACwA>>%temp%\base
echo IABuAGUAdwAgAFcAaQBuADMAMgBFAHgAYwBlAHAAdABpAG8AbgAoAE0AYQByAHMA>>%temp%\base
echo aABhAGwALgBHAGUAdABMAGEAcwB0AFcAaQBuADMAMgBFAHIAcgBvAHIAKAApACkA>>%temp%\base
echo KQA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAGkAbgB0ACAA>>%temp%\base
echo bgB1AG0AIAA9ACAAQQBkAGoAdQBzAHQAVABvAGsAZQBuAFAAcgBpAHYAaQBsAGUA>>%temp%\base
echo ZwBlAHMAKABjAHUAcgByAGUAbgB0AC4AVABvAGsAZQBuACwAIABmAGEAbABzAGUA>>%temp%\base
echo LAAgAHIAZQBmACAAbgBlAHcAcwB0ACwAIAAwACwAIABJAG4AdABQAHQAcgAuAFoA>>%temp%\base
echo ZQByAG8ALAAgAEkAbgB0AFAAdAByAC4AWgBlAHIAbwApACAAPwAgADEAIAA6ACAA>>%temp%\base
echo MAA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAGkAZgAgACgA>>%temp%\base
echo bgB1AG0AIAA9AD0AIAAwACkADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAB0AGgAcgBvAHcAIABuAGUAdwAgAEUAeABjAGUAcAB0AGkA>>%temp%\base
echo bwBuACgAIgBFAHIAcgBvAHIAIABpAG4AIABBAGQAagB1AHMAdABUAG8AawBlAG4A>>%temp%\base
echo UAByAGkAdgBpAGwAZQBnAGUAcwA6ACAAIgAsACAAbgBlAHcAIABXAGkAbgAzADIA>>%temp%\base
echo RQB4AGMAZQBwAHQAaQBvAG4AKABNAGEAcgBzAGgAYQBsAC4ARwBlAHQATABhAHMA>>%temp%\base
echo dABXAGkAbgAzADIARQByAHIAbwByACgAKQApACkAOwANAAoAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgACAAIAByAGUAdAB1AHIAbgAgAG4AdQBtACAAIQA9ACAA>>%temp%\base
echo MAA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAB9AA0ACgAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAfQANAAoAIAAgACAAIAB9AA0ACgANAAoAIAAgACAAIABbAFMAdAByAHUA>>%temp%\base
echo YwB0AEwAYQB5AG8AdQB0ACgATABhAHkAbwB1AHQASwBpAG4AZAAuAFMAZQBxAHUA>>%temp%\base
echo ZQBuAHQAaQBhAGwALAAgAFAAYQBjAGsAIAA9ACAAMQApAF0ADQAKACAAIAAgACAA>>%temp%\base
echo cwB0AHIAdQBjAHQAIABTAFkAUwBUAEUATQBfAEMAQQBDAEgARQBfAEkATgBGAE8A>>%temp%\base
echo UgBNAEEAVABJAE8ATgANAAoAIAAgACAAIAB7AA0ACgAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo cAB1AGIAbABpAGMAIAB1AGkAbgB0ACAAQwB1AHIAcgBlAG4AdABTAGkAegBlADsA>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAHUAaQBuAHQAIABQAGUA>>%temp%\base
echo YQBrAFMAaQB6AGUAOwANAAoAIAAgACAAIAAgACAAIAAgAHAAdQBiAGwAaQBjACAA>>%temp%\base
echo dQBpAG4AdAAgAFAAYQBnAGUARgBhAHUAbAB0AEMAbwB1AG4AdAA7AA0ACgAgACAA>>%temp%\base
echo IAAgACAAIAAgACAAcAB1AGIAbABpAGMAIAB1AGkAbgB0ACAATQBpAG4AaQBtAHUA>>%temp%\base
echo bQBXAG8AcgBrAGkAbgBnAFMAZQB0ADsADQAKACAAIAAgACAAIAAgACAAIABwAHUA>>%temp%\base
echo YgBsAGkAYwAgAHUAaQBuAHQAIABNAGEAeABpAG0AdQBtAFcAbwByAGsAaQBuAGcA>>%temp%\base
echo UwBlAHQAOwANAAoAIAAgACAAIAAgACAAIAAgAHAAdQBiAGwAaQBjACAAdQBpAG4A>>%temp%\base
echo dAAgAFUAbgB1AHMAZQBkADEAOwANAAoAIAAgACAAIAAgACAAIAAgAHAAdQBiAGwA>>%temp%\base
echo aQBjACAAdQBpAG4AdAAgAFUAbgB1AHMAZQBkADIAOwANAAoAIAAgACAAIAAgACAA>>%temp%\base
echo IAAgAHAAdQBiAGwAaQBjACAAdQBpAG4AdAAgAFUAbgB1AHMAZQBkADMAOwANAAoA>>%temp%\base
echo IAAgACAAIAAgACAAIAAgAHAAdQBiAGwAaQBjACAAdQBpAG4AdAAgAFUAbgB1AHMA>>%temp%\base
echo ZQBkADQAOwANAAoAIAAgACAAIAB9AA0ACgANAAoAIAAgACAAIABbAFMAdAByAHUA>>%temp%\base
echo YwB0AEwAYQB5AG8AdQB0ACgATABhAHkAbwB1AHQASwBpAG4AZAAuAFMAZQBxAHUA>>%temp%\base
echo ZQBuAHQAaQBhAGwALAAgAFAAYQBjAGsAIAA9ACAAMQApAF0ADQAKACAAIAAgACAA>>%temp%\base
echo cwB0AHIAdQBjAHQAIABTAFkAUwBUAEUATQBfAEMAQQBDAEgARQBfAEkATgBGAE8A>>%temp%\base
echo UgBNAEEAVABJAE8ATgBfADYANABfAEIASQBUAA0ACgAgACAAIAAgAHsADQAKACAA>>%temp%\base
echo IAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAGwAbwBuAGcAIABDAHUAcgByAGUA>>%temp%\base
echo bgB0AFMAaQB6AGUAOwANAAoAIAAgACAAIAAgACAAIAAgAHAAdQBiAGwAaQBjACAA>>%temp%\base
echo bABvAG4AZwAgAFAAZQBhAGsAUwBpAHoAZQA7AA0ACgAgACAAIAAgACAAIAAgACAA>>%temp%\base
echo cAB1AGIAbABpAGMAIABsAG8AbgBnACAAUABhAGcAZQBGAGEAdQBsAHQAQwBvAHUA>>%temp%\base
echo bgB0ADsADQAKACAAIAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAGwAbwBuAGcA>>%temp%\base
echo IABNAGkAbgBpAG0AdQBtAFcAbwByAGsAaQBuAGcAUwBlAHQAOwANAAoAIAAgACAA>>%temp%\base
echo IAAgACAAIAAgAHAAdQBiAGwAaQBjACAAbABvAG4AZwAgAE0AYQB4AGkAbQB1AG0A>>%temp%\base
echo VwBvAHIAawBpAG4AZwBTAGUAdAA7AA0ACgAgACAAIAAgACAAIAAgACAAcAB1AGIA>>%temp%\base
echo bABpAGMAIABsAG8AbgBnACAAVQBuAHUAcwBlAGQAMQA7AA0ACgAgACAAIAAgACAA>>%temp%\base
echo IAAgACAAcAB1AGIAbABpAGMAIABsAG8AbgBnACAAVQBuAHUAcwBlAGQAMgA7AA0A>>%temp%\base
echo CgAgACAAIAAgACAAIAAgACAAcAB1AGIAbABpAGMAIABsAG8AbgBnACAAVQBuAHUA>>%temp%\base
echo cwBlAGQAMwA7AA0ACgAgACAAIAAgACAAIAAgACAAcAB1AGIAbABpAGMAIABsAG8A>>%temp%\base
echo bgBnACAAVQBuAHUAcwBlAGQANAA7AA0ACgAgACAAIAAgAH0ADQAKAA0ACgAgACAA>>%temp%\base
echo IAAgAFsAUwB0AHIAdQBjAHQATABhAHkAbwB1AHQAKABMAGEAeQBvAHUAdABLAGkA>>%temp%\base
echo bgBkAC4AUwBlAHEAdQBlAG4AdABpAGEAbAAsACAAUABhAGMAawAgAD0AIAAxACkA>>%temp%\base
echo XQANAAoAIAAgACAAIABpAG4AdABlAHIAbgBhAGwAIABzAHQAcgB1AGMAdAAgAFQA>>%temp%\base
echo bwBrAFAAcgBpAHYAMQBMAHUAaQBkAA0ACgAgACAAIAAgAHsADQAKACAAIAAgACAA>>%temp%\base
echo IAAgACAAIABwAHUAYgBsAGkAYwAgAGkAbgB0ACAAQwBvAHUAbgB0ADsADQAKACAA>>%temp%\base
echo IAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAGwAbwBuAGcAIABMAHUAaQBkADsA>>%temp%\base
echo DQAKACAAIAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAGkAbgB0ACAAQQB0AHQA>>%temp%\base
echo cgA7AA0ACgAgACAAIAAgAH0ADQAKAH0ADQAKACIAQAANAAoADQAKAEEAZABkAC0A>>%temp%\base
echo VAB5AHAAZQAgAC0AVAB5AHAAZQBEAGUAZgBpAG4AaQB0AGkAbwBuACAAJABTAG8A>>%temp%\base
echo dQByAGMAZQAgAC0ATABhAG4AZwB1AGEAZwBlACAAQwBTAGgAYQByAHAAIAANAAoA>>%temp%\base
echo DQAKAFsAQwBsAGUAYQByAFMAdABhAG4AZABiAHkATABpAHMAdAAuAFAAcgBvAGcA>>%temp%\base
echo cgBhAG0AXQA6ADoAQwBsAGUAYQByAEYAaQBsAGUAUwB5AHMAdABlAG0AQwBhAGMA>>%temp%\base
echo aABlACgAJAB0AHIAdQBlACkA>>%temp%\base
certutil -decode -f "%temp%\base" %temp%\powershell.ps1>nul
net stop sysmain>nul 2>nul
if exist %temp%\listfile.log del/f/q %temp%\listfile.log
if exist %temp%\loadtime.log del/f/q %temp%\loadtime.log
if exist %temp%\uncompact.log del/f/q %temp%\uncompact.log
echo 记录文件列表...
for /f "delims=" %%a in ('"dir/a/s/b "%url%""') do (call :listfile "%%a" %%~za %%~xa)
echo 清空缓存...
call :powershell
echo 记录文件压缩前的读取时间...
for /f "tokens=*" %%a in (%temp%\listfile.log) do (call :loadfile %%a)
echo 压缩文件...
for /f "tokens=*" %%a in (%temp%\listfile.log) do (compact /c %%a)
echo 清空缓存...
call :powershell
echo 比较压缩前后的读取时间...
for /f "tokens=*" %%a in (%temp%\loadtime.log) do (call :ifloadfile %%a)
echo 解压不适合压缩的文件...
for /f "tokens=*" %%a in (%temp%\uncompact.log) do (compact /u %%a)
net start sysmain>nul 2>nul
del/f/q %temp%\powershell.ps1
del/f/q %temp%\listfile.log
del/f/q %temp%\loadtime.log
del/f/q %temp%\uncompact.log
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto h
:ifloadfile
set file=%1
set loadtime=%2
call :copyfile %file%
if 0x%sjc% geq 0x%loadtime% echo %file%>>%temp%\uncompact.log
goto :eof
:loadfile
set file=%1
call :copyfile %file%
echo %file% %sjc%>>%temp%\loadtime.log
goto :eof
:copyfile
set file=%1
set kssj=%time%
copy /z %file% nul
set jssj=%time%
call :sjc %kssj% %jssj%
echo 读取用时: %sjc:~4,2%.%sjc:~6,2%s
goto :eof
:listfile
set url=%1
set size=%2
set name=%3
dir/ad %url%>nul 2>nul&&goto :eof
if "%name%" equ ".zip" goto :eof
if "%name%" equ ".rar" goto :eof
if "%name%" equ ".7z" goto :eof
if "%name%" equ ".png" goto :eof
if "%name%" equ ".jpg" goto :eof
if "%name%" equ ".mp3" goto :eof
if "%name%" equ ".acc" goto :eof
if "%name%" equ ".m4a" goto :eof
if "%name%" equ ".flac" goto :eof
if "%name%" equ ".ape" goto :eof
if "%name%" equ ".mp4" goto :eof
if "%name%" equ ".avi" goto :eof
if "%name%" equ ".flv" goto :eof
if "%name%" equ ".f4v" goto :eof
if "%name%" equ ".mkv" goto :eof
if "%name%" equ ".3gp" goto :eof
if "%name%" equ ".cab" goto :eof
if "%name%" equ ".pdf" goto :eof
if %size% gtr 4096 if %size% leq 104857600 echo %url%>>%temp%\listfile.log
goto :eof
:66
title 计算文件哈希值 - %system%
cls
set url=
set /p url=输入文件路径(e=返回菜单):
if not defined url goto 66
if "%url:~0,1%%url:~-1%" neq """" for /f "delims=" %%a in ('"echo %url%"') do (set url="%%~a")
if /i !url! equ "e" goto h 
if not exist "!url!" echo 文件不存在&timeout /t 2 /nobreak>nul&goto 66
dir /ad !url!>nul 2>nul&&echo 路径 !url! 不是一个文件&&timeout /t 2 /nobreak>nul&&goto 66
cls
echo 文件: %url%
call :hash %url% md5
echo;
echo MD5:	 %hash%
call :hash %url% sha1
echo SHA-1:	 %hash%
call :hash %url% sha256
echo SHA-256: %hash%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto h
:67
cls
title 显示货币汇率 - %system%
set mainurl=https://api.coincap.io/v2/assets/
set mainurl1=https://api.coincap.io/v2/rates/
echo 下载汇率文件(总共12个文件)...
set xzflag=::
set xzflag1=
if exist %systemroot%\system32\curl.exe (set xzflag1=::&set xzflag=)
%xzflag%pushd %temp%
%xzflag%curl -# -o cny.json %mainurl1%chinese-yuan-renminbi -o doge.json %mainurl%dogecoin -o btc.json %mainurl%bitcoin -o eth.json %mainurl%ethereum -o au.json %mainurl1%gold-ounce -o ag.json %mainurl1%silver-ounce -o eur.json %mainurl1%euro -o gbp.json %mainurl1%british-pound-sterling -o jpy.json %mainurl1%japanese-yen -o hkd.json %mainurl1%hong-kong-dollar -o twd.json %mainurl1%new-taiwan-dollar -o xmr.json %mainurl%monero
%xzflag%popd
%xzflag1%bitsadmin /transfer 下载汇率文件... /priority FOREGROUND %mainurl1%chinese-yuan-renminbi %temp%\cny.json %mainurl%dogecoin %temp%\doge.json %mainurl%bitcoin %temp%\btc.json %mainurl%ethereum %temp%\eth.json %mainurl1%gold-ounce %temp%\au.json %mainurl1%silver-ounce %temp%\ag.json %mainurl1%euro %temp%\eur.json %mainurl1%british-pound-sterling %temp%\gbp.json %mainurl1%japanese-yen %temp%\jpy.json %mainurl1%hong-kong-dollar %temp%\hkd.json %mainurl1%new-taiwan-dollar %temp%\twd.json %mainurl%monero %temp%\xmr.json
cls
echo 处理汇率文件...
for /f "delims=:} tokens=7" %%a in (%temp%\cny.json) do (set cnytousd=%%a)
set cnytousd=%cnytousd:"=%
for /f "delims=:, tokens=19,21" %%a in (%temp%\doge.json) do (set dogetousd=%%a&&set doge24h=%%b)
set dogetousd=%dogetousd:"=%
set doge24h=%doge24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo %doge24h%"') do (set doge24h1=%%a&&set doge24h2=%%b)
set doge24h=%doge24h1%.%doge24h2:~0,3%
for /f "delims=:, tokens=19,21" %%a in (%temp%\btc.json) do (set btctousd=%%a&&set btc24h=%%b)
set btctousd=%btctousd:"=%
set btc24h=%btc24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo %btc24h%"') do (set btc24h1=%%a&&set btc24h2=%%b)
set btc24h=%btc24h1%.%btc24h2:~0,3%
for /f "delims=:, tokens=19,21" %%a in (%temp%\eth.json) do (set ethtousd=%%a&&set eth24h=%%b)
set ethtousd=%ethtousd:"=%
set eth24h=%eth24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo %eth24h%"') do (set eth24h1=%%a&&set eth24h2=%%b)
set eth24h=%eth24h1%.%eth24h2:~0,3%
for /f "delims=:} tokens=7" %%a in (%temp%\au.json) do (set autousd=%%a)
set autousd=%autousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\ag.json) do (set agtousd=%%a)
set agtousd=%agtousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\eur.json) do (set eurtousd=%%a)
set eurtousd=%eurtousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\gbp.json) do (set gbptousd=%%a)
set gbptousd=%gbptousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\jpy.json) do (set jpytousd=%%a)
set jpytousd=%jpytousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\hkd.json) do (set hkdtousd=%%a)
set hkdtousd=%hkdtousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\twd.json) do (set twdtousd=%%a)
set hkdtousd=%hkdtousd:"=%
for /f "delims=:, tokens=19,21" %%a in (%temp%\xmr.json) do (set xmrtousd=%%a&&set xmr24h=%%b)
set xmrtousd=%xmrtousd:"=%
set xmr24h=%xmr24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo %xmr24h%"') do (set xmr24h1=%%a&&set xmr24h2=%%b)
set xmr24h=%xmr24h1%.%xmr24h2:~0,3%
::if "!eth24h:~0,1!" equ "-" (set eth24h=%cswz%%ysbak:~0,3%92m!eth24h!%cswz%%ysbak%) else (set eth24h=%cswz%%ysbak:~0,3%91m!eth24h!%cswz%%ysbak%)
::if "!btc24h:~0,1!" equ "-" (set btc24h=%cswz%%ysbak:~0,3%92m!btc24h!%cswz%%ysbak%) else (set btc24h=%cswz%%ysbak:~0,3%91m!btc24h!%cswz%%ysbak%)
::if "!xmr24h:~0,1!" equ "-" (set xmr24h=%cswz%%ysbak:~0,3%92m!xmr24h!%cswz%%ysbak%) else (set xmr24h=%cswz%%ysbak:~0,3%91m!xmr24h!%cswz%%ysbak%)
::if "!doge24h:~0,1!" equ "-" (set doge24h=%cswz%%ysbak:~0,3%92m!doge24h!%cswz%%ysbak%) else (set doge24h=%cswz%ysbak:~0,3%91m!doge24h!%cswz%%ysbak%)
for /f "delims=" %%a in ('"powershell %dogetousd%/%cnytousd%"') do (set dogetocny=%%a)
for /f "delims=" %%a in ('"powershell %btctousd%/%cnytousd%"') do (set btctocny=%%a)
for /f "delims=" %%a in ('"powershell %ethtousd%/%cnytousd%"') do (set ethtocny=%%a)
for /f "delims=" %%a in ('"powershell %eurtousd%/%cnytousd%"') do (set eurtocny=%%a)
for /f "delims=" %%a in ('"powershell %gbptousd%/%cnytousd%"') do (set gbptocny=%%a)
for /f "delims=" %%a in ('"powershell %jpytousd%/%cnytousd%"') do (set jpytocny=%%a)
for /f "delims=" %%a in ('"powershell %hkdtousd%/%cnytousd%"') do (set hkdtocny=%%a)
for /f "delims=" %%a in ('"powershell %twdtousd%/%cnytousd%"') do (set twdtocny=%%a)
for /f "delims=" %%a in ('"powershell %xmrtousd%/%cnytousd%"') do (set xmrtocny=%%a)
for /f "delims=" %%a in ('"powershell 1/%cnytousd%"') do (set usdtocny=%%a)
for /f "delims=" %%a in ('"powershell %autousd%/31.1034768*%usdtocny%"') do (set autocny=%%a)
for /f "delims=" %%a in ('"powershell %agtousd%/31.1034768*%usdtocny%"') do (set agtocny=%%a)
cls
echo 黄金XAU    → 人民币CNY
echo 	1  → !autocny!
echo;
echo 白银XAG    → 人民币CNY
echo 	1  → !agtocny!
echo;
echo 以太坊ETH  → 人民币CNY
set /p =.!cswz1!        <nul
set /p =1  → !ethtocny!		24小时涨跌幅: <nul
if "%eth24h:~0,1%" equ "-" (call :colortxt a !eth24h!) else (call :colortxt c !eth24h!)
set /p =%% <nul
echo;
echo;
echo 比特币BTC  → 人民币CNY
set /p =.!cswz1!        <nul
set /p =1  → !btctocny!		24小时涨跌幅: <nul
if "%btc24h:~0,1%" equ "-" (call :colortxt a !btc24h!) else (call :colortxt c !btc24h!)
set /p =%% <nul
echo;
echo;
echo 门罗币XMR  → 人民币CNY
set /p =.!cswz1!        <nul
set /p =1  → !xmrtocny!		24小时涨跌幅: <nul
if "%xmr24h:~0,1%" equ "-" (call :colortxt a !xmr24h!) else (call :colortxt c !xmr24h!)
set /p =%% <nul
echo;
echo;
echo 狗狗币DOGE → 人民币CNY
set /p =.!cswz1!        <nul
set /p =1  → !dogetocny!		24小时涨跌幅: <nul
if "%doge24h:~0,1%" equ "-" (call :colortxt a !doge24h!) else (call :colortxt c !doge24h!)
set /p =%% <nul
echo;
echo;
echo 美元USD    → 人民币CNY
echo 	1  → !usdtocny!
echo;
echo 欧元EUR    → 人民币CNY
echo 	1  → !eurtocny!
echo;
echo 英镑GBP    → 人民币CNY
echo 	1  → !gbptocny!
echo;
echo 日元JPY    → 人民币CNY
echo 	1  → !jpytocny!
echo;
echo 港币HKD    → 人民币CNY
echo 	1  → !hkdtocny!
echo;
echo 新台币TWD  → 人民币CNY
echo 	1  → !twdtocny!
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto h
:68
cls
title 创建虚拟盘符 - %system%
echo [1]将路径与盘符关联
echo [2]删除虚拟盘符
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 68(1)
if "%errorlevel%" equ "2" goto 68(2)
if "%errorlevel%" equ "3" goto h
goto h
:68(1)
title 将路径与盘符关联 - %system%
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
echo 当前已有盘符: %sypf%
echo 虚拟盘符:
for /f "delims=" %%a in ('"subst"') do (echo %%a)
echo _______________________________________________________________________________
set newpf=
set /p newpf=输入要创建的新盘符:
if not defined newpf goto 68
set newpf|findstr /i "\<[a-z]\>">nul
if "%errorlevel%" neq "0" echo 无效输入&timeout /t 2 /nobreak>nul&goto 68(1)
set gllj=
set /p gllj=输入要关联的路径:
if not defined gllj goto 68
set gllj="%gllj:|=%"
if "%gllj:~0,1%%gllj:~-1%" neq """" for /f "delims=" %%a in ('"echo %gllj%"') do (set %gllj%="%%~a")
if /i !gglj! equ "" goto h 
if not exist "!gllj!" echo 路径不存在&timeout /t 2 /nobreak>nul&goto 68(1)
dir /ad !gllj!>nul 2>nul||echo 路径 !gllj! 不是一个文件夹&&timeout /t 2 /nobreak>nul&&goto 68(1)
subst %newpf%: %gllj%
if "%errorlevel%" equ "0" (echo 创建成功&timeout /t 2 /nobreak>nul&goto 68) else (echo 创建失败&timeout /t 2 /nobreak>nul&goto 68)
:68(2)
title 删除虚拟盘符 - %system%
cls
echo 虚拟盘符:
for /f "delims=" %%a in ('"subst"') do (echo %%a)
echo _______________________________________________________________________________
set xzxnp=
set /p xzxnp=输入要卸载的盘符:
if not defined xzxnp goto 68
set xzxnp|findstr /i "\<[a-z]\>">nul
if "%errorlevel%" neq "0" echo 无效输入&timeout /t 2 /nobreak>nul&goto 68(2)
subst %xzxnp%: /d
if "%errorlevel%" equ "0" (echo 卸载成功&timeout /t 2 /nobreak>nul&goto 68) else (echo 卸载失败&timeout /t 2 /nobreak>nul&goto 68)
:69
title 解压msi安装文件 - %system%
cls
set msiurl=
set /p msiurl=输入msi文件路径(e=返回菜单):
if not defined msiurl goto h
if "%msiurl:~0,1%%msiurl:~-1%" neq """" for /f "delims=" %%a in ('"echo %msiurl%"') do (set msiurl="%%~a")
if /i !msiurl! equ "e" goto h
if not exist "!msiurl!" echo 文件不存在&timeout /t 2 /nobreak>nul&goto h
dir /ad !msiurl!>nul 2>nul&&echo 路径 !msiurl! 不是一个文件&&timeout /t 2 /nobreak>nul&&goto h
for /f "delims=" %%a in ('"echo !msiurl!"') do (if /i "%%~xa" neq ".msi" echo 不是msi文件&&timeout /t 2 /nobreak>nul&&goto h)
set msidir=
set /p msidir=输入msi文件解压路径(默认路径为msi文件所在路径)(e=返回菜单):
if not defined msidir for /f "delims=" %%a in ('"echo !msiurl!"') do (set msidir="%%~dpna")
if "%msidir:~0,1%%msidir:~-1%" neq """" for /f "delims=" %%a in ('"echo %msidir%"') do (set msidir="%%~a")
if /i !msidir! equ "e" goto h
echo 开始解压...
if not exist "!msidir!" (msiexec /a !msiurl! /quiet /passive /qn targetdir=!msidir!) else (echo 不能解压到已存在的文件夹&&timeout /t 2 /nobreak>nul)
rd /s /q %systemdriver%\config.msi>nul 2>nul
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto h
:70
title 生成CMD控制台色彩表 - %system%
cls
color 07
set cs=0
for /l %%a in (40,1,47) do (for /l %%b in (90,1,97) do (
if %%a lss 10 (set xh1=0%%a) else (set xh1=%%a)
if %%b lss 10 (set xh2=0%%b) else (set xh2=%%b)
if !xh1! equ 40 set bj=0
if !xh1! equ 41 set bj=4
if !xh1! equ 42 set bj=2
if !xh1! equ 43 set bj=6
if !xh1! equ 44 set bj=1
if !xh1! equ 45 set bj=5
if !xh1! equ 46 set bj=3
if !xh1! equ 47 set bj=7
if !xh2! equ 90 set zt=8
if !xh2! equ 91 set zt=c
if !xh2! equ 92 set zt=a
if !xh2! equ 93 set zt=e
if !xh2! equ 94 set zt=9
if !xh2! equ 95 set zt=d
if !xh2! equ 96 set zt=b
if !xh2! equ 97 set zt=f
if !cs! lss 7 (set /p =!cswz!!xh2!;!xh1!m  !bj!!zt!  !cswz!0m<nul&set /a cs=!cs!+1) else (echo !cswz!!xh2!;!xh1!m  !bj!!zt!  !cswz!0m&set cs=0)))
set cs=0
for /l %%a in (40,1,47) do (for /l %%b in (90,1,97) do (
if %%a lss 10 (set xh1=0%%a) else (set xh1=%%a)
if %%b lss 10 (set xh2=0%%b) else (set xh2=%%b)
if !cs! lss 7 (set /p =!cswz!!xh2!;!xh1!m !xh2!;!xh1!!cswz!0m<nul&set /a cs=!cs!+1) else (echo !cswz!!xh2!;!xh1!m !xh2!;!xh1!!cswz!0m&set cs=0)))
for /l %%a in (90,1,97) do (for /l %%b in (40,1,47) do (
if %%a lss 10 (set xh1=0%%a) else (set xh1=%%a)
if %%b lss 10 (set xh2=0%%b) else (set xh2=%%b)
if !cs! lss 7 (set /p =!cswz!!xh2!;!xh1!m !xh2!;!xh1!!cswz!0m<nul&set /a cs=!cs!+1) else (echo !cswz!!xh2!;!xh1!m !xh2!;!xh1!!cswz!0m&set cs=0)))
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto h
:71
title KMS激活Windows 10 - %system%
cls
set Core=TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
set CoreCountrySpecific=PVMJN-6DFY6-9CCP6-7BKTT-D3WVR
set CoreN=3KHY7-WNT83-DGQKR-F7HPR-844BM
set CoreSingleLanguage=7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH
set ProfessionalStudent=YNXW3-HV3VB-Y83VG-KPBXM-6VH3Q
set ProfessionalStudentN=8G9XJ-GN6PJ-GW787-MVV7G-GMR99
set Professional=W269N-WFGWX-YVC9B-4J6C9-T83GX
set ProfessionalN=MH37W-N47XK-V7XM9-C7227-GCQG9
set ProfessionalSN=8Q36Y-N2F39-HRMHT-4XW33-TCQR4
set ProfessionalWMC=NKPM6-TCVPT-3HRFX-Q4H9B-QJ34Y
set Enterprise=NPPR9-FWDCX-D2C8J-H872K-2YT43
set EnterpriseN=DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4
set Education=NW6C2-QMPVW-D7KKK-3GKT6-VCFB2
set EducationN=2WH4N-8QGBV-H22JP-CT43Q-MDWWJ
set EnterpriseS=WNMTR-4C88C-JK8YV-HQ7T2-76DF9
set EnterpriseSN=2F77B-TNFGY-69QQF-B8YKP-D69TJ
for /f "tokens=3 delims= " %%a in ('reg QUERY "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v "EditionID"') do set sysid=%%a
set server=
if defined !sysid! (echo 系统名称: %system%) else (call :colortxt c 没有当前系统的激活密钥&echo;)
ping /n 1 www.baidu.com>nul||call :colortxt c 没有网络连接&echo;
echo 请选择KMS服务器
echo _______________________________________________________________________________
echo [1]xykz.f3322.org
echo [2]kms.03k.org
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" set server=xykz.f3322.org&goto 71.1
if "%errorlevel%" equ "2" set server=kms.03k.org&goto 71.1
if "%errorlevel%" equ "3" goto h
goto 71
:71.1
cls
set /p =KMS服务器: <nul
call :colortxt a !server!
echo;
set/p =系统名称: <nul
call :colortxt a %system%
echo;
cscript //Nologo %windir%\system32\slmgr.vbs /ipk !%sysid%!
cscript //Nologo %windir%\system32\slmgr.vbs /skms !server!
cscript //Nologo %windir%\system32\slmgr.vbs /ato
start slmgr.vbs -xpr
echo _______________________________________________________________________________
echo 如果显示激活失败[错误: 0xC004F074]，应更换KMS服务器.
echo 按任意键返回菜单&pause>nul
goto h
:hash
set url=%1
set shuanfa=%2
if "%shuanfa%" equ "" set shuanfa=sha256
for /f "skip=1 eol=C" %%a in ('"certutil -hashfile %url% %shuanfa%"') do (set hash=%%a)
::for /f "delims=" %%a in ('"powershell get-filehash %url% -algorithm %shuanfa%^|select-object hash^|format-list"') do (set hash=%%a)
::set hash=%hash:~7%
goto :eof
:powershell
powershell -mta -nologo -noprofile -executionpolicy bypass -file "%temp%\powershell.ps1"
goto :eof
:update
cls
title 更新DOS工具箱 - 当前版本: %ver% - %system%
if defined gxflag goto startupdate
echo 检查最新版本...
timeout /t 2 /nobreak>nul
if exist %temp%\dostoolupdate del /f /q %temp%\dostoolupdate>nul 2>nul
set xzflag=::
set xzflag1=
if exist %systemroot%\system32\curl.exe (set xzflag1=::&set xzflag=)
%xzflag%pushd %temp%
%xzflag%curl -# -o dostoolupdate https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js
%xzflag%popd
%xzflag1%certutil -urlcache -split -f https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js %temp%\dostoolupdate
::bitsadmin /transfer 检查最新版本... /priority FOREGROUND https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js %temp%\dostoolupdate
cls
for /f "delims=: tokens=2" %%a in (%temp%\dostoolupdate) do (set doshash="%%a")
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set /p =检查到更新版本: <nul
call :colortxt a %%a&echo;&goto startupdate) else (echo 没有检查到更新版本))
del /f /q %temp%\dostoolupdate>nul 2>nul
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:startupdate
echo 正在下载更新...
timeout /t 2 /nobreak>nul
if exist %temp%\dostoolupdate del /f /q %temp%\dostoolupdate>nul 2>nul
if exist %temp%\dostool del /f /q %temp%\dostool>nul 2>nul
set xzflag=::
set xzflag1=
if exist %systemroot%\system32\curl.exe (set xzflag1=::&set xzflag=)
%xzflag%pushd %temp%
%xzflag%curl -# -o dostool https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js
%xzflag%popd
%xzflag%call :hash %temp%\dostool sha1
%xzflag%if /i "%hash%" equ %doshash% copy /z /y %temp%\dostool %weizhi%&start cmd /c %0&exit
%xzflag1%certutil -urlcache -split -f https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js %temp%\dostool
%xzflag1%call :hash %temp%\dostool sha1
%xzflag1%if /i "%hash%" equ %doshash% copy /z /y %temp%\dostool %weizhi%&start cmd /c %0&exit
call :colortxt c 文件无效&echo;&timeout /t 2 /nobreak>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
::bitsadmin /transfer 下载更新中... /priority FOREGROUND https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js %weizhi%&start cmd /c %0&exit
:sjc
set kssj=%1
set jssj=%2
set kssj=%kssj:"=%
set kssj=%kssj: =0%
set kssj=%kssj::=%
set kssj=%kssj:.=%
set jssj=%jssj:"=%
set jssj=%jssj: =0%
set jssj=%jssj::=%
set jssj=%jssj:.=%
set xs=%kssj:~0,2%
set xs1=%jssj:~0,2%
set fen=%kssj:~2,2%
set fen1=%jssj:~2,2%
set miao=%kssj:~4,2%
set miao1=%jssj:~4,2%
set hm=%kssj:~6,2%
set hm1=%jssj:~6,2%
if %xs% lss 10 if %xs% gtr 07 set xs=%xs:0=%
if %xs1% lss 10 if %xs1% gtr 07 set xs1=%xs1:0=%
if %fen% lss 10 if %fen% gtr 07 set fen=%fen:0=%
if %fen1% lss 10 if %fen1% gtr 07 set fen1=%fen1:0=%
if %miao% lss 10 if %miao% gtr 07 set miao=%miao:0=%
if %miao1% lss 10 if %miao1% gtr 07 set miao1=%miao1:0=%
if %hm% lss 10 if %hm% gtr 07 set hm=%hm:0=%
if %hm1% lss 10 if %hm1% gtr 07 set hm1=%hm1:0=%
if %hm1% lss %hm% set/a miao1=%miao1%-1&set/a hm1=%hm1%+100
set/a jghm=%hm1%-%hm%
if %miao1% lss %miao% set/a fen1=%fen1%-1&set/a miao1=%miao1%+60
set/a jgm=%miao1%-%miao%
if %fen1% lss %fen% set/a jgxs1=%jgxs1%-1&set/a fen1=%fen1%+60
set/a jgfen=%fen1%-%fen%
set/a jgxs=%xs1%-%xs%
if %jghm% lss 10 set jghm=0%jghm%
if %jgm% lss 10 set jgm=0%jgm%
if %jgfen% lss 10 set jgfen=0%jgfen%
if %jgxs% lss 10 set jgxs=0%jgxs%
set sjc=
set sjc=%jgxs%%jgfen%%jgm%%jghm%
goto :eof
:zfccd
set zfc=
set zfc=%1
for /l %%a in (0,1,1000) do if "!zfc:~%%a,1!"=="" set/a zfcgs=%%a-2&&goto :eof
:ys
set ys=%1
set ysks=%time%
:jxjc
call :sjc "%ysks%" "%time%"
if not 0x%sjc% geq 0x%ys%00 goto jxjc
goto :eof
:dwjs
set dw=%2
if not defined dw set dw=0
set size=%1
if not defined size goto :eof
set size|findstr "\<[0-9]*\>">nul
if "%errorlevel%" neq "0" goto :eof
:renjs
for /f "delims=" %%a in ('"powershell %size%/1024"') do (set /a dw=%dw%+1&set size=%%a)
set size|findstr "\<0[.]">nul
if "%errorlevel%" equ "0" (set /a dw=%dw%-1
for /f "delims=" %%a in ('"powershell %size%*1024"') do (set size=%%a)
goto next
)
if "%size%" geq "1024" goto renjs
:next
if "%dw%" equ "0" set dw=
if "%dw%" equ "1" set dw=KB
if "%dw%" equ "2" set dw=MB
if "%dw%" equ "3" set dw=GB
if "%dw%" equ "4" set dw=TB
if "%dw%" equ "5" set dw=EB
if "%size%" equ "0" set size=
goto :eof
:list
set start=1
set a1=清除U盘里的lpk.dll病毒
set a2=清除U盘里的jwgkvsq.vmx病毒，并免疫该病毒
set a3=清理系统垃圾
set a4=显示系统信息
set a5=解除任务管理器被禁用
set a6=显示被隐藏文件(中了该类病毒后)
set a7=解除注册表被禁用
set a8=计算开平方
set a9=切换到命令提示符
set a10=将磁盘格式转换为NTFS
set a11=磁盘错误修复
set a12=格式化
set a13=DOS计算器
set a14=解除命令提示符被禁用
set a15=随机数生成器
set a16=清除KHATRA病毒
set a17=打开注册表
set a18=打开控制面板
set a19=打开DirectX诊断工具
set a20=打开计算机管理
set a21=用户管理
set a22=打开组策略
set a23=DOS任务管理器
set a24=文件系统信息查询
set a25=创建指定大小的文件
set a26=免疫U盘病毒
set a27=磁盘碎片整理
set a28=一键删除空文件夹
set a29=ping测试网络延迟
set a30=硬件检测
set a31=读心术
set a32=DOS闹钟
set a33=计时器
set a34=随机密码生成器
set a35=删除每个盘符下的System Volume Information文件夹
set a36=二进制转换器
set a37=文本浏览
set a38=显示计算机与用户的设置
set a39=NTFS压缩
set a40=修改文件权限
set a41=显示开机启动项
set a42=语音阅读器
set a43=批处理文件风险分析
set a44=文件搜索
set a45=修复已损坏的文件
set a46=暴力破解压缩包密码
set a47=Wifi热点
set a48=反编译chm文件
set a49=关闭无响应进程
set a50=文件比较器
set a51=将文字写入剪切板
set a52=打开系统服务设置
set a53=已知年月日计算星期
set a54=查询系统激活状态
set a55=创建指定文件的快捷方式到桌面
set a56=打开系统配置
set a57=字数统计
set a58=创建符号链接
set a59=打开管理控制台
set a60=解除Streams文件锁定
set a61=创建、删除或列出卷装入点
set a62=注册表搜索
set a63=Base64编解码
set a64=8.3短文件名管理
set a65=智能NTFS压缩
set a66=计算文件哈希值
set a67=显示货币汇率
set a68=创建虚拟盘符
set a69=解压msi安装文件
set a70=生成CMD控制台色彩表
set a71=KMS激活Windows 10
goto :eof
:colortxt
if !winv! equ 0 goto colortxt2
set bj=%1
if "!bj:~1,1!" equ "" (set bj1=!color!&set bj2=!bj!) else (set bj1=!bj:~0,1!&set bj2=!bj:~1,1!)
verify on
pushd %temp%
set /p =%cswz1%<nul>"%2"
findstr /v /a:!bj1!!bj2! /r "^$" "%2" nul
del /f "%2">nul 2>nul
popd
goto :eof
:colortxt2
set bj=%1
set zt=%2
if "!bj:~0,1!" equ "0" set bj1=40;
if "!bj:~0,1!" equ "4" set bj1=41;
if "!bj:~0,1!" equ "2" set bj1=42;
if "!bj:~0,1!" equ "6" set bj1=43;
if "!bj:~0,1!" equ "1" set bj1=44;
if "!bj:~0,1!" equ "5" set bj1=45;
if "!bj:~0,1!" equ "3" set bj1=46;
if "!bj:~0,1!" equ "7" set bj1=47;
if "!bj:~0,1!" equ "8" set bj2=90m
if "!bj:~0,1!" equ "c" set bj2=91m
if "!bj:~0,1!" equ "a" set bj2=92m
if "!bj:~0,1!" equ "e" set bj2=93m
if "!bj:~0,1!" equ "9" set bj2=94m
if "!bj:~0,1!" equ "d" set bj2=95m
if "!bj:~0,1!" equ "b" set bj2=96m
if "!bj:~0,1!" equ "f" set bj2=97m
if "!bj:~1,1!" equ "8" set bj2=90m
if "!bj:~1,1!" equ "c" set bj2=91m
if "!bj:~1,1!" equ "a" set bj2=92m
if "!bj:~1,1!" equ "e" set bj2=93m
if "!bj:~1,1!" equ "9" set bj2=94m
if "!bj:~1,1!" equ "d" set bj2=95m
if "!bj:~1,1!" equ "b" set bj2=96m
if "!bj:~1,1!" equ "f" set bj2=97m
if "!bj:~1,1!" equ "" set bj1=!ysbak:~0,3!
set /p =!cswz!!bj1!!bj2!!zt!!cswz!!ysbak!<nul
goto :eof
:00
exit