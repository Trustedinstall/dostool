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
title ��
color f1
setlocal enabledelayedexpansion
chcp 936>nul
goto qidongjs
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
if /i "%system%"=="Microsoft Windows XP Home  " set system=Windows XP ��ͥ��
if /i "%system%"=="Microsoft Windows XP Professional  " set system=Windows XP רҵ��
if /i "%system%"=="Microsoft Windows 7 Ultimate  " set system=Windows 7 �콢��
if /i "%system%"=="Microsoft Windows 7 Home Basic  " set system=Windows 7 ��ͥ��ͨ��
if /i "%system%"=="Microsoft Windows 7 Home Premium  " set system=Windows 7 ��ͥ�߼���
if /i "%system%"=="Microsoft Windows 7 Professional  " set system=Windows 7 רҵ��
if /i "%system%"=="Microsoft Windows 7 Enterprise  " set system=Windows 7 ��ҵ��
if /i "%system%"=="Microsoft Windows 8 Pro  " set system=Windows 8 רҵ��
if /i "%system%"=="Microsoft Windows 8 China  " set system=Windows 8 �й���
if /i "%system%"=="Microsoft Windows 8 Enterprise  " set system=Windows 8 ��ҵ��
if /i "%system%"=="Microsoft Windows 8.1 Pro  " set system=Windows 8.1 רҵ��
if /i "%system%"=="Microsoft Windows 8.1 China  " set system=Windows 8.1 �й���
if /i "%system%"=="Microsoft Windows 8.1 Enterprise  " set system=Windows 8.1 ��ҵ��
if /i "%system%"=="Microsoft Windows 10 Home  " set system=Windows 10 ��ͥ��
if /i "%system%"=="Microsoft Windows 10 Professional  " set system=Windows 10 רҵ��
if /i "%system%"=="Microsoft Windows 10 Education  " set system=Windows 10 ������
if /i "%system%"=="Microsoft Windows 10 Enterprise  " set system=Windows 10 ��ҵ��
if /i "%date:~11,2%"=="��һ" set xingqi=����һ
if /i "%date:~11,2%"=="�ܶ�" set xingqi=���ڶ�
if /i "%date:~11,2%"=="����" set xingqi=������
if /i "%date:~11,2%"=="����" set xingqi=������
if /i "%date:~11,2%"=="����" set xingqi=������
if /i "%date:~11,2%"=="����" set xingqi=������
if /i "%date:~11,2%"=="����" set xingqi=������
if /i "%date:~11,3%"=="����һ" set xingqi=����һ
if /i "%date:~11,3%"=="���ڶ�" set xingqi=���ڶ�
if /i "%date:~11,3%"=="������" set xingqi=������
if /i "%date:~11,3%"=="������" set xingqi=������
if /i "%date:~11,3%"=="������" set xingqi=������
if /i "%date:~11,3%"=="������" set xingqi=������
if /i "%date:~11,3%"=="������" set xingqi=������
set nx1=[+]��һҳ&set nx=[-]��һҳ   [+]��һҳ&set nx7=[-]��һҳ
for /f "tokens=2 delims=={}" %%a in ('wmic PATH Win32_SystemEnclosure get ChassisTypes/value') do (
if %%a==8 set nx1=[S]��һҳ&set nx=[A]��һҳ   [S]��һҳ&set nx7=[A]��һҳ
if %%a==9 set nx1=[S]��һҳ&set nx=[A]��һҳ   [S]��һҳ&set nx7=[A]��һҳ
if %%a==10 set nx1=[S]��һҳ&set nx=[A]��һҳ   [S]��һҳ&set nx7=[A]��һҳ)
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
if %errorlevel% neq 0 (echo ���ֹ����޷�����ʹ�ã����Թ���Ա�������
echo _______________________________________________________________________________
echo ���������������&pause>nul)
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
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\System\DOS������ /v ������ 2>nul|find "������""') do (set sfzc=%%a)
set sfzc=%sfzc:~21%
for /f "delims=" %%a in ('"reg query HKEY_CURRENT_USER\System\DOS������ /v ע���� 2>nul|find "ע����""') do (set sfzcm=%%a)
set sfzcm=%sfzcm:~21%
if /i %sfzc%==%jqm% if /i %sfzcm%==%zh% goto a
:ks
color f1
title ע������֤ - %system%
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
goto a
:mima
color f1
title ������֤ - %system%
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������ - %system%%gxflag%
cls
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
set /p =!cswz1!����������������������������������������<nul
call :colortxt 2f %nx7%
echo;))
set /a pd1=!start!-1
if !winv! equ 0 (if !pd1! lss 1 (echo [0]�˳�                                                         !cswz!42;97m%nx1%!cswz!!ysbak!)) else (
if !pd1! lss 1 (
set /p =[0]�˳�<nul
set /p =!cswz1!����������������������������������������<nul
call :colortxt 2f %nx1%
echo;))
if !winv! equ 0 (if defined a!pd! (if not !pd1! lss 1 echo [0]�˳�                                             !cswz!42;97m%nx1%   %nx7%!cswz!!ysbak!)) else (
if defined a!pd! (
if not !pd1! lss 1 (
set /p =[0]�˳�<nul
set /p =!cswz1!����������������������������������������<nul
call :colortxt 2f %nx1%
set /p =!cswz1!������<nul
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
title DOS������ - %system%%gxflag%
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������ - %system%%gxflag%
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������ - %system%%gxflag%
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������ - %system%%gxflag%
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������ - %system%%gxflag%
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������ - %system%%gxflag%
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������ - %system%%gxflag%
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
echo ��������ȷ��ѡ�
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
if !gxjg! gtr 0 (set gxflag= - ��鵽���°汾: %%a
for /f "delims=: tokens=2" %%b in (%temp%\dostoolupdate) do (set doshash="%%b")))
del /f /q %temp%\dostoolupdate)
title DOS������ - %system%%gxflag%
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
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto h
:01
title ���U�����lpk.dll���� - %system%
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
goto a
:01-1
cls
echo �������lpk.dll����...
for /f "delims=" %%a in ('"fsutil fsinfo drives"') do (set sypf=%%a)
set sypf=%sypf:~5%
for %%h in (%sypf%) do fsutil fsinfo drivetype %%h|find /i "���ƶ�������"&&for /f "delims=" %%i in ('"dir/a/s/b %%hlpk.dll"') do if %%~zi==44032 attrib -s -h -r "%%i"|del/f/q "%%i"|echo ��ɾ��%%i
echo _______________________________________________________________________________
echo ������
echo ����������ز˵�&pause>nul
goto a
:02
title ���U�����jwgkvsq.vmx�����������߸ò��� - %system%
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
goto a
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
goto a
:03
title ����ϵͳ���� - %system%
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
goto a
:04
title ��ʾϵͳ��Ϣ - %system%
cls
systeminfo
mode
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto a
:05
title ������������������ - %system%
cls
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskmgr /t reg_dword /d 00000000 /f
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto a
:06
title ��ʾ�������ļ�(���˸��ಡ����) - %system%
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto a
:07
title ���ע������� - %system%
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
goto a
:08
title ���㿪ƽ�� - %system%
cls
setlocal enabledelayedexpansion
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
goto a
:kpfcw
echo ������Ч����!
ping/n 2 0.0>nul
goto 08
:xswscw
echo ������Ч����!
ping/n 2 0.0>nul
goto 08
:09
title ������ʾ�� - %system%
cls
ver
if !winv! equ 0 (cmd /k prompt !cswz!!ysbak:~0,3!92m%username%!cswz!!ysbak!@%hostname%:$p#$s) else (cmd /k prompt %username%@%hostname%:$p#$s)
goto a
:10
title �����̸�ʽת��ΪNTFS - %system%
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
goto b
:11
title �����޸� - %system%
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
goto b
:12
color cf
title ��ʽ�� - %system%
echo 
cls
set geshihuaxuanxiang=
set/p geshihuaxuanxiang=��ʽ����һ����Σ���ԣ��Ƿ����(y/n):
set geshihuaxuanxiang="%geshihuaxuanxiang:|=%"
if /i !geshihuaxuanxiang!=="y" goto 12(1)
if /i !geshihuaxuanxiang!=="n" goto b
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
goto b
:batjiami
color 0a
title bat���� - %system%
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
title �ļ�����(����1) - %system%
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
title �ļ����� - %system%
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
title �ļ�����(����2) - %system%
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
copy/b %systemdrive%temp+%systendrive%temp.0 "%zmlj%�Ѽ��ܵ�%wjm%.%geshi%"
del/f/q %systemdrive%temp
del/f/q %systemdrive%temp.0
cls
echo _______________________________________________________________________________
echo �������
ping/n 2 0.0>nul
goto batjiami
:13
title DOS������ - %system%
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
if /i !biaodashi!=="e" goto b
:13(2)
set/a jieguo=%biaodashi%
echo ������:%biaodashi%=%jieguo%
echo _______________________________________________________________________________
goto 13(1)
:14
title ���������ʾ�������� - %system%
cls
reg add "HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\System" /v DisableCMD /t reg_dword /d 00000000 /f
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto b
:15
title ����������� - %system%
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
if /i !tuichusuijishu!=="e" goto b
if /i !tuichusuijishu!=="|=" goto 15(1)
goto 15(3)
:16
title ���KHATRA���� - %system%
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
goto b
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
title �û����� - %system%
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
if "%errorlevel%" equ "9" goto c
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
if !yonghu!=="0" goto c
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 21
:21(1)
title ��ʾ���е��û� - %system%
cls
echo _______________________________________________________________________________
net user
echo _______________________________________________________________________________
echo ��ǰ�ѵ�¼���û�:%username%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 21
:21(2)
title �������û� - %system%
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
title ɾ���û� - %system%
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
title �����û�Ϊ����Ա - %system%
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
title ǿ���޸��û����� - %system%
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
title �鿴�û���Ϣ - %system%
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
title �����˻� - %system%
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
title ͣ���˻� - %system%
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
goto c
:guanji
title �ػ�ѡ�� - %system%
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
title �ػ� - %system%
cls
echo �����ùػ�����ʱ����Ч��Χ(0-315360000)��(e=����)
set guanjidaojishi=
set/p guanjidaojishi=
set guanjidaojishi=%guanjidaojishi:|=%
if "!guanjidaojishi!"=="" shutdown /s /f&goto guanji
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
title ���� - %system%
cls
echo ��������������ʱ����Ч��Χ(0-315360000)��(e=����)
set chongqidaojishi=
set/p chongqidaojishi=
set chongqidaojishi=%chongqidaojishi:|=%
if "!chongqidaojishi!"=="" shutdown /r /f&goto guanji 
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
title ע�� - %system%
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
title ����ϵͳ�ػ� - %system%
cls
shutdown /a
ping/n 2 0.0>nul
goto guanji
:guanji(6)
title �������� - %system%
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
title �ر����� - %system%
cls
powercfg -h off
echo �ѹر����߹���
ping/n 2 0.0>nul
goto guanji
:guanji(8)
title ��ʾϵͳ�Ͽ��õ�˯��״̬ - %system%
cls
powercfg -a
echo _______________________________________________________________________________
echo �����������&pause>nul
goto guanji
:guanji-9
title ѭ����ʾ���Ѽ�ʱ�����Դ���� - %system%
cls
powercfg /requests
powercfg /waketimers
echo _______________________________________________________________________________
echo ��e���ز˵�
choice /c 1e /t 1 /d 1 >nul
if "%errorlevel%" equ ="2" goto guanji
goto guanji-9
:23
title DOS��������� - %system%
cls
echo _______________________________________________________________________________
echo [1]��ʾ���н���
echo [2]��ʾÿ�����̵ķ���
echo [3]��ʾ����·��
echo [4]��ʾ������ϸ��Ϣ
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 12340 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 23(1)
if "%errorlevel%" equ "2" goto 23(2)
if "%errorlevel%" equ "3" goto 23(6)
if "%errorlevel%" equ "4" goto 23(10)
if "%errorlevel%" equ "5" goto c
goto 23
set dosjc=
set/p dosjc=���������ѡ��:
set dosjc="%dosjc:|=%"
if !dosjc!=="1" goto 23(1)
if !dosjc!=="2" goto 23(2)
if !dosjc!=="3" goto 23(6)
if !dosjc!=="4" goto 23(10)
if !dosjc!=="0" goto c
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
title ��ʾ����·�� - %system%
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
title ��ʾ������ϸ��Ϣ - %system%
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
echo ��������: %jcmz:~8%
set jcmlh=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "commandline""') do set jcmlh=%%a
echo ����������: %jcmlh:~12%
set jcrq=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "creationdate""') do set jcrq=%%a
echo ������������: %jcrq:~13,4%��%jcrq:~17,2%��%jcrq:~19,2%�� %jcrq:~21,2%:%jcrq:~23,2%:%jcrq:~25,2%
set jclj=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "executablepath""') do set jclj=%%a
echo ����·��: "%jclj:~15%"
set jcpid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "processid""') do set jcpid=%%a
echo ����PID: %jcpid:~10%
set jchx=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "kernelmodetime""') do set jchx=%%a
echo ���̺���ģʽʱ��: %jchx:~15%
echo ϵͳ����: %system% %bit%λ
set jcymcw=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "pagefaults""') do set jcymcw=%%a
echo ����ҳ�����: %jcymcw:~12%
set jctj=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "pagefileusage""') do set jctj=%%a
call :dwjs %jctj:~18% 1
echo �����ύ��С: %size% %dw%
set jcfid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "parentprocessid""') do set jcfid=%%a
echo ���̸�ϵPID: %jcfid:~16%
set jcfzysy=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "peakpagefileusage""') do set jcfzysy=%%a
call :dwjs %jcfzysy:~18% 1
echo ���̷�ֵҳ���ļ�ʹ��: %size% %dw%
set jcfzgz=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "peakworking""') do set jcfzgz=%%a
call :dwjs %jcfzgz:~19% 1
echo ���̷�ֵ����: %size% %dw%
set jcyxj=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "priority""') do set jcyxj=%%a
echo �������ȼ�: %jcyxj:~9%
set jchhid=
for /f "delims=" %%a in ('"wmic process where processid=!jcxq! get /format:value|find /i "sessionid""') do set jchhid=%%a
echo ���̻ػ�ID: %jchhid:~10%
tasklist /fi "pid eq %jcxq%" /m
ver
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 23
:24
title �ļ�ϵͳ��Ϣ��ѯ - %system%
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
if "%errorlevel%" equ "7" goto c
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
if !wjsystem!=="0" goto c
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
title ��ѯһ�������������� - %system%
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
title ��ѯ����Ϣ - %system%
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
title ��ѯNTFS����Ϣ - %system%
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
title ��ѯREFS����Ϣ - %system%
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
title ��ѯ������Ϣ - %system%
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
title ����ָ����С���ļ� - %system%
cls
echo ����ָ����С���ļ�(e=����)
echo _______________________________________________________________________________
set cjlj=
set/p cjlj=�������ļ�·��:
set cjlj="%cjlj:|=%"
if /i !cjlj!=="e" goto c
set cjdx=
set/p cjdx=�������ļ���С(��λ:�ֽ�):
set cjdx="%cjdx:|=%"
if /i !cjdx!=="e" goto c
:24(6)
fsutil file createnew %cjlj% %cjdx%
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 25
:26
title ����U�̲��� - %system%
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
if "%errorlevel%" equ "3" goto c
goto 26
set upanmy=
set/p upanmy=���������ѡ��:
set upanmy="%upanmy:|=%"
if !upanmy!=="1" goto 26(1)
if !upanmy!=="2" goto 26(2)
if !upanmy!=="0" goto c
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 26
:26(1)
title ����U������ - %system%
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
title ȡ��U������ - %system%
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
title ������Ƭ���� - %system%
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
if !fenxi!=="0" goto c
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
title һ��ɾ�����ļ��� - %system%
cls
echo ���Everything�İ�װ·��������״̬...
set flag=
set flag1=::
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\voidtools\Everything" /v InstallLocation|find "InstallLocation""') do (set EverythingInstallPath=%%a)
if "%system:~8,2%"=="XP" (set EverythingInstallPath=%EverythingInstallPath:~27%) else (set EverythingInstallPath=%EverythingInstallPath:~33%)
if exist "%EverythingInstallPath%\Everything.exe" (tasklist /fi "status eq running" /fi "username eq "%username%"" /fi "imagename eq everything.exe"|find /i "Everything.exe"&&if exist "%EverythingInstallPath%\es.exe" set flag=::&set flag1=)
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
%flag%for /f "delims=" %%o in ('"dir/a/s/b/ad-l %caozuo%:|sort/r"') do rd/q "%%o"2>nul&&echo ��ɾ�����ļ���%%o
::%flag1%for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" -sort path-descending /ad-l %caozuo%:"') do rd/q "%%o"2>nul&&echo ��ɾ�����ļ���%%o
:loop1
%flag1%set empty=0
%flag1%for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" %caozuo%: empty: ^!attrib:l"') do (rd/q "%%o"2>nul&&set empty=1&&echo ��ɾ�����ļ���%%o)
timeout /t 2 /nobreak>nul
%flag1%if "%empty%"=="1" goto loop1
goto 28(2)
:28-1
dir /ad "!caozuo!">nul 2>nul||echo ·�� !caozuo! ����һ���ļ���&&timeout /t 2 /nobreak>nul&&goto 28
echo �����������ļ���...     �ļ�Խ������ʱ��Խ��
if "%caozuo:~0,1%%caozuo:~-1%" neq """" for /f "delims=" %%a in ('"echo %caozuo%"') do (set %caozuo%="%%~a")
%flag%for /f "delims=" %%o in ('"dir/a/s/b/ad-l %caozuo%|sort/r"') do rd/q "%%o"2>nul&&echo ��ɾ�����ļ���%%o
::%flag1%for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" -sort path-descending /ad-l %caozuo%"') do rd/q "%%o"2>nul&&echo ��ɾ�����ļ���%%o
:loop2
%flag1%set empty=0
%flag1%for /f "delims=" %%o in ('""%EverythingInstallPath%\es.exe" %caozuo% empty: ^!attrib:l"') do (rd/q "%%o"2>nul&&set empty=1&&echo ��ɾ�����ļ���%%o)
timeout /t 2 /nobreak>nul
%flag1%if "%empty%"=="1" goto loop2
:28(2)
echo _______________________________________________________________________________
echo ���ļ���ɾ�����
echo ����������ز˵�&pause>nul
goto d
:29
title ping���������ӳ� - %system%
cls
set ping=
set pingcishu=
if exist %systemroot%\system32\curl.exe (ping /n 1 www.baidu.com>nul&&set /p =����IPV4��ַ: <nul&curl 4.ipw.cn&echo;)
if exist %systemroot%\system32\curl.exe (ping /n 1 240c::6666>nul&&set /p =����IPV6��ַ: <nul&curl 6.ipw.cn&echo;)
set/p ping=������Ŀ��IP������ַ:
set/p pingcishu=������ping����:
cls
if exist %systemroot%\system32\curl.exe (ping /n 1 www.baidu.com>nul&&set /p =����IPV4��ַ: <nul&curl 4.ipw.cn&echo;)
if exist %systemroot%\system32\curl.exe (ping /n 1 240c::6666>nul&&set /p =����IPV6��ַ: <nul&curl 6.ipw.cn&echo;)
echo;
echo ���ڲ���%ping%�������ӳ�...
ping/n %pingcishu% %ping% /a
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto d
:30
title Ӳ����� - %system%
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
echo %cpuhx%����%cpuxc%�߳�
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get currentclockspeed/value"') do set cpuzp=%%aMHz
echo ��Ƶ: %cpuzp%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get datawidth/value"') do set cpuws=%%abit
echo ���ݿ��: %cpuws%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get extclock/value"') do set cpuwp=%%aMHz
echo ��Ƶ: %cpuwp%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_cachememory get maxcachesize/value"') do (set/a ch+=1
if !ch!==1 set cpul1=%%aKB
if !ch!==2 set cpul2=%%aKB)
echo һ�����ݻ���: %cpul1%
echo;
echo һ��ָ���: %cpul1%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get l2cachesize/value"') do set cpul2=%%a
set cpul2|findstr "\<[0-9]*\>">nul
if "%errorlevel%" equ "0" call :dwjs %cpul2% 1
echo ��������: %size% %dw%
echo;
for /f "delims== tokens=2" %%a in ('"wmic cpu get l3cachesize/value"') do set cpul3=%%a
set cpul3|findstr "\<[0-9]*\>">nul
if "%errorlevel%" equ "0" call :dwjs %cpul3% 1
echo ��������: %size% %dw%
echo _______________________________________________________________________________
set zhuban=,zhubanxh=
for /f "delims== tokens=2" %%a in ('"wmic baseboard get manufacturer/value"') do set zhuban=%%a
echo ����������: %zhuban%
echo;
for /f "delims== tokens=2" %%a in ('"wmic baseboard get product/value"') do set zhubanxh=%%a
echo �����ͺ�: %zhubanxh%
echo;
set bioszzs=,biosbb=,bioszzrq
for /f "delims== tokens=2" %%a in ('"wmic bios get manufacturer/value"') do set bioszzs=%%a
echo BIOS������: %bioszzs%
echo;
for /f "delims== tokens=2" %%a in ('"wmic bios get smbiosbiosversion/value"') do set biosbb=%%a
echo BIOS�汾: %biosbb%
echo;
for /f "delims== tokens=2" %%a in ('"wmic bios get releasedate/value"') do set bioszzrq=%%a
echo BIOS��������: %bioszzrq:~0,4%��%bioszzrq:~4,2%��%bioszzrq:~6,2%��
echo _______________________________________________________________________________
set xsqxh=,xsqzzs=,fbl1=,fbl2=
for /f "delims== tokens=2" %%a in ('"wmic desktopmonitor get name/value"') do set xsqxh=%%a
echo ��ʾ���ͺ�: %xsqxh%
echo;
for /f "delims== tokens=2" %%a in ('"wmic desktopmonitor get monitormanufacturer/value"') do set xsqzzs=%%a
echo ��ʾ��������: %xsqzzs%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currenthorizontalresolution/value"') do set fbl1=%%a
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currentverticalresolution/value"') do set fbl2=%%a
echo �ֱ���: %fbl1% x %fbl2%
echo _______________________________________________________________________________
set xkxc=,xsms=,sxl=,qdrq=,qdbb=
set /p =�Կ�: <nul&for /f "delims=" %%a in ('"wmic path win32_videocontroller get name|find /i /v "name""') do echo %%a|find /i /v "echo"
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get adapterram/value"') do set xkxc=%%a
call :dwjs %xkxc%
echo;
echo �Դ�����: %size% %dw%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get videomodedescription/value"') do set xsms=%%a
echo ��ǰ��ʾģʽ: %xsms%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get currentrefreshrate/value"') do set sxl=%%aHz
echo ��ǰˢ����: %sxl%
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get driverdate/value"') do set qdrq=%%a
echo ��������: %qdrq:~0,4%��%qdrq:~4,2%��%qdrq:~6,2%��
echo;
for /f "delims== tokens=2" %%a in ('"wmic path win32_videocontroller get driverversion/value"') do set qdbb=%%a
echo �����汾: %qdbb%
echo _______________________________________________________________________________
echo Ӳ���ͺ�:
for /f "delims=" %%a in ('"wmic diskdrive get model|find /i /v "model""') do echo %%a|find /i /v "echo"
echo �ӿ�����:
for /f "delims=" %%a in ('"wmic diskdrive get interfacetype|find /i /v "interfacetype""') do echo %%a|find /i /v "echo"
echo Ӳ������:
for /f "delims=" %%a in ('"wmic diskdrive get size|find /i /v "size""') do (call :dwjs %%a
if "!dw!" neq "0" echo !size! !dw!)
echo ��������:
for /f "delims=" %%a in ('"wmic diskdrive get totalsectors|find /i /v "totalsectors""') do echo %%a|find /i /v "echo"
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
echo �ڴ�����:
for /f "delims== tokens=2" %%a in ('"wmic memorychip get capacity /value"') do (call :dwjs %%a
if "!dw!" neq "0" echo !size! !dw!)
echo �ڴ�Ƶ��:
for /f "delims== tokens=2" %%a in ('"wmic memorychip get speed /value"') do (set ncpl=%%a
echo !ncpl:~0,-1! MHz)
systeminfo|find /i "�ڴ�"
echo _______________________________________________________________________________
mode
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto d
:31
title ������ - %system%
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
goto d
:32
title DOS���� - %system%
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
if !nzxx!=="0" goto d
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 32
:32(1)
title ��ʱ����ָ������ - %system%
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
title ��ʱ����ָ���ļ� - %system%
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
title ��ʾ���еļƻ����� - %system%
cls
schtasks /query
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto 32
:32(4)
title ɾ���ƻ����� - %system%
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
title ��ʱ�� - %system%
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
goto d
:34
title ������������� - %system%
cls
setlocal enabledelayedexpansion
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
goto d
:35
title ɾ��ÿ���̷��µ�System Volume Information�ļ��� - %system%
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
goto d
:36
title ������ת���� - %system%
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
if "%errorlevel%" equ "3" goto d
goto 36
set zhxz=
set/p zhxz=���������ѡ��:
set zhxz="%zhxz:|=%"
if !zhxz!=="1" goto 10z
if !zhxz!=="2" goto 2z
if !zhxz!=="0" goto d
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
title vbs������ - %system%
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
setlocal enabledelayedexpansion
title ����DOS������ - %system%%gxflag%
if %daxiao%==%versize% set daxiao1=%daxiao%�ֽ�
if %daxiao% neq %versize% set daxiao1=%daxiao%�ֽ�  (�ļ���С�쳣,�����ѱ��޸�)
set dosjssj=%time%
call :sjc "%dosqssj%" "%dosjssj%"
cls
echo ����DOS������
echo _______________________________________________________________________________
echo �汾: 1.8.8 (%ver%.%versize%)
echo ����ϵͳ: %system% %bit%λ
echo ��Ȩ���� 2012-2022 Administrator ��������Ȩ��
echo _______________________________________________________________________________
echo ����������:%sjc:~0,2%ʱ%sjc:~2,2%��%sjc:~4,2%.%sjc:~6,2%��
echo DOS����������·��:%weizhi%
echo �ļ���С:%daxiao1%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:37
title �ı���� - %system%
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
goto e
:38
title ��ʾ��������û������� - %system%
cls
echo _______________________________________________________________________________
gpresult/z
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto e
:39
title NTFSѹ�� - %system%
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
if "%errorlevel%" equ "5" goto e
goto 39
set ntfsys=
set/p ntfsys=���������ѡ��:
set ntfsys="%ntfsys:|=%"
if !ntfsys!=="1" goto yasuo
if !ntfsys!=="2" goto jieya
if !ntfsys!=="3" goto yasuowjj
if !ntfsys!=="4" goto jieyawjj
if !ntfsys!=="0" goto e
echo ��������ȷ��ѡ��
ping/n 2 0.0>nul
goto 39
:jieya
title NTFS��ѹ - %system%
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
title NTFSѹ�� - %system%
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
title NTFS��ѹ�ļ��� - %system%
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
title NTFSѹ���ļ��� - %system%
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
title ��ȡ�ļ�����Ȩ�� - %system%
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
goto e
:41
title ��ʾ���������� - %system%
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
goto e
:kcd
start mshta "javascript:new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0).Eject();window.close();"
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:gcd
start mshta "javascript:with (new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0)){Eject();Eject();}window.close();"
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:42
title �����Ķ��� - %system%
cls
echo ������Ҫ�Ķ�������:
echo _______________________________________________________________________________
set ydnr=
set/p ydnr=
start mshta vbscript:createobject("sapi.spvoice").speak("%ydnr%")(window.close)
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto e
:43
title �������ļ����շ��� - %system%
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
goto e
:44
title �ļ����� - %system%
cls
set sswjm=
set/p sswjm=������Ҫ�������ļ���(Ĭ����%systemdrive%\������):
echo _______________________________________________________________________________
dir/a/s %sswjm%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto e
:45
title �޸����𻵵��ļ� - %system%
cls
set xfwj=
set/p xfwj=�϶�Ҫ�޸����ļ����˴���:
if "%xfwj:~0,1%%xfwj:~-1%" neq """" for /f "delims=" %%a in ('"echo %xwfj%"') do (set %xfwj%="%%~a")
echo _______________________________________________________________________________
recover %xfwj%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto e
:46
title �����ƽ�ѹ�������� - %system%
cls
set rarazlj=
set yswjlj=
set pjzd=
set ppjm=
for /f "delims=" %%a in ('"reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\WinRAR.exe" /v path|find "path""') do (set rarazlj=%%a)
if "%system:~8,2%"=="XP" (set rarpd=%rarazlj:~16%\Rar.exe&set rarpd7z=%rarazlj:~16%\winrar.exe) else (set rarpd=%rarazlj:~22%\Rar.exe&set rarpd7z=%rarazlj:~22%\winrar.exe)
cls
if exist "%rarpd%" (goto rarjs) else (echo û�а�װWinRAR.����������ز˵�&pause>nul&goto f)
:rarjs
cls
set/p yswjlj=�϶�Ҫ�ƽ��ѹ�������˴���(e=���ز˵�):
if "%yswjlj:~0,1%%yswjlj:~-1%" neq """" for /f "delims=" %%a in ('"echo %yswjlj%"') do (set %yswjlj%="%%~a")
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.7z goto rarwjok1
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.rar goto rarwjok
for /f "delims=" %%a in ("%yswjlj%") do if %%~xa==.zip goto rarwjok1
if /i "%yswjlj%"=="e" goto f
echo ��Ч���ļ���ʽ��&ping/n 2 0.0>nul
goto 46
:rarwjok
set/p pjzd=�϶��ֵ��ļ����˴���(e=���ز˵�):
if "%pjzd:~0,1%%pjzd:~-1%" neq """" for /f "delims=" %%a in ('"echo %pjzd%"') do (set %pjzd%="%%~a")
for /f "delims=" %%a in ("%pjzd%") do if %%~xa==.txt goto kspj
if /i "%pjzd%"=="e" goto f
echo ����txt�ļ���&ping/n 2 0.0>nul
goto 46
:rarwjok1
set/p pjzd=�϶��ֵ��ļ����˴���(e=���ز˵�):
if "%pjzd:~0,1%%pjzd:~-1%" neq """" for /f "delims=" %%a in ('"echo %pjzd%"') do (set %pjzd%="%%~a")
for /f "delims=" %%a in ("%pjzd%") do if %%~xa==.txt goto kspj1
if /i "%pjzd%"=="e" goto f
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
goto f
:pjcg
echo _______________________________________________________________________________
echo �ƽ�ɹ���
echo;
echo ѹ����%yswjlj%
echo ��ѹ������:%pjmm%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto f
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
goto f
:pjcg1
echo _______________________________________________________________________________
echo �ƽ�ɹ���
echo;
echo ѹ����%yswjlj%
echo ��ѹ������:%pjmm%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto f
:47
title Wifi�ȵ� - %system%
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
if "%errorlevel%" equ "4" goto f
goto 47
set wifixz=
set/p wifixz=���������ѡ��:
set wifixz="%wifixz:|=%"
if !wifixz!=="1" goto kqwifi
if !wifixz!=="2" goto gbwifi
if !wifixz!=="3" goto wlpz
if !wifixz!=="0" goto f
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 47
:kqwifi
title ����Wifi�ȵ� - %system%
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
title �ر�Wifi�ȵ� - %system%
cls
netsh wlan stop hostednetwork
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 47
:wlpz
title �鿴�������� - %system%
cls
ipconfig /all
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 47
:48
title ������chm�ļ� - %system%
cls
set chmlj=
echo �϶�Ҫ�������chm�ļ����˴���
set/p chmlj=���������ļ�����������(e=����):
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
echo ������ɹ���
echo �Ա��浽%zmlj%%chmcglj%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto f
:nochm
echo _______________________________________________________________________________
echo ����chm�ļ���
ping/n 2 0.0>nul
goto 48
:xz
title ж��DOS������ - %system%
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
del/f/q %0
:49
title �ر�����Ӧ���� - %system%
cls
taskkill /f /fi "status eq not responding"
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:50
title �ļ��Ƚ��� - %system%
cls
echo �϶�Ҫ�Ƚϵ��ļ����˴���(�ȽϹ��������� "Ctrl+C" 2�οɽ����Ƚ�)
echo _______________________________________________________________________________
set/p wj1=��һ��Ҫ�Ƚϵ��ļ�:
set/p wj2=�ڶ���Ҫ�Ƚϵ��ļ�:
echo _______________________________________________________________________________
fc/b %wj1% %wj2%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto f
:51
title ������д����а� - %system%
set nz=
cls
set/p  nz=������Ҫд�뵽���а����������:
mshta vbscript:clipboardData.SetData("text","%nz%")(window.close)
if %errorlevel%==0 (set nz=0) else (set nz=1)
echo _______________________________________________________________________________
if %nz%==0 (echo д��ɹ�) else (echo д��ʧ��)
echo ����������ز˵�&pause>nul
goto f
:52
cls
start services.msc
goto f
:53
cls
title ��֪�����ռ������� - %system%
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
goto f
:54
cls
title ��ѯϵͳ����״̬ - %system%
echo ����ϵͳ: %system% %bit%λ
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
if "%errorlevel%" equ "4" goto f
goto 54
set cxxz=
set/p cxxz=���������ѡ��:
set cxxz="%cxxz:|=%"
if !cxxz!=="1" start slmgr.vbs -dli&goto 54
if !cxxz!=="2" start slmgr.vbs -dlv&goto 54
if !cxxz!=="3" start slmgr.vbs -xpr&goto 54
if !cxxz!=="0" goto f
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 54
:55
cls
title ����ָ���ļ��Ŀ�ݷ�ʽ������ - %system%
set kjfs=
set/p kjfs=���϶�Ŀ���ļ����˴���:
if "!kjfs!"=="" goto 55(1)
if "%kjfs:~0,1%%kjfs:~-1%" neq """" for /f "delims=" %%a in ('"echo %kjfs%"') do (set %kjfs%="%%~a")
for /f "delims=" %%a in ("%kjfs%") do set kjfsmc=%%~na
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\%kjfsmc%.lnk""):b.TargetPath=""%kjfs%"":b.WorkingDirectory=""%~dp0"":b.Save:close")
:55(1)
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto g
:56
cls
start msconfig.exe
goto g
:57
cls
title ����ͳ�� - %system%
set zstj=
set/p zstj=����������:
call :zfccd "%zstj%"
echo �ܼ�%zfcgs%����(����������)
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto g
:58
cls
title ������������ - %system%
set swjj=
set cwjj=
set/p swjj=����Ҫ���ӵ��ļ���·��:
set/p cwjj=���������ļ��е����·��:
if "%swjj:~0,1%%swjj:~-1%" neq """" for /f "delims=" %%a in ('"echo %swjj%"') do (set %swjj%="%%~a")
if "%cwjj:~0,1%%cwjj:~-1%" neq """" for /f "delims=" %%a in ('"echo %cwjj%"') do (set %cwjj%="%%~a")
mklink /j %cwjj% %swjj%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto g
:59
title �򿪹������̨ - %system%
cls
start mmc
goto g
:60
cls
title ���Streams�ļ����� - %system%
set jcwjsd=
set/p jcwjsd=�϶�Ŀ���ļ����˴���:
if "%jcwjsd:~0,1%%jcwjsd:~-1%" neq """" for /f "delims=" %%a in ('"echo %jcwjsd%"') do (set %jcwjsd%="%%~a")
echo>"%jcwjsd%:Zone.Identifier"
echo �������
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto g
:61
setlocal enabledelayedexpansion
title ������ɾ�����г���װ��� - %system%
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
if "%errorlevel%" equ "6" goto g
goto 61
set gzxz=
set/p gzxz=���������ѡ��:
set gzxz="%gzxz:|=%"
if !gzxz!=="1" goto 61(1)
if !gzxz!=="2" goto 61(2)
if !gzxz!=="3" goto 61(3)
if !gzxz!=="4" goto 61(4)
if !gzxz!=="5" goto 61(5)
if !gzxz!=="0" goto g
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 61
:61(1)
title �г���װ��� - %system%
cls
for /f "skip=22" %%a in ('"mountvol"') do echo %%a
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 61
:61(2)
title ɾ������ϵͳ�е�,���װ���Ŀ¼��ע������� - %system%
cls
mountvol /r
echo �������
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 61
:61(3)
title �г�ָ��Ŀ¼����װ��ľ����� - %system%
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
title �����̷�(������װ���) - %system%
cls
set xx=0
for /f "delims=" %%a in ('"mountvol|find "\\?\Volume""') do (set/a xx=!xx!+1
set a!xx!=%%a
echo [!xx!]%%a)
echo [0]�����ϼ��˵�
echo _______________________________________________________________________________
set cjpf=
set/p cjpf=ѡ��װ���:
if "%cjpf%"=="" goto 61(4)
if !cjpf!==0 goto 61
set xzpf=
set/p xzpf=�����̷�:
mountvol %xzpf%: !a%cjpf%!
echo �������
echo _______________________________________________________________________________
echo �����������&pause>nul
goto 61
:61(5)
title ɾ���̷�(ɾ����װ���) - %system%
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
title ע������� - %system%
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
goto g
:63
title Base����� - %system%
cls
if exist %systemroot%\system32\certutil.exe (dir/ad %systemroot%\system32\certutil.exe>nul 2>nul||goto 63-0)
echo û���ҵ�certutil.exe
echo ���ܼ���Base�����
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto g
:63-0
echo _______________________________________________________________________________
echo [1]Base����
echo [2]Base����
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 63-1
if "%errorlevel%" equ "2" goto 63-2
if "%errorlevel%" equ "3" goto g
goto 63
set basexx=
set/p basexx=���������ѡ��:
set basexx="%basexx:|=%"
if !basexx!=="1" goto 63-1
if !basexx!=="2" goto 63-2
if !basexx!=="0" goto g
echo ��������ȷ��ѡ�
ping/n 2 0.0>nul
goto 63
:63-1
cls
del/f/q %temp%\codetmp>nul 2>nul
title Base���� - %system%
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
if exist %temp%\codetmp (for /f "delims=" %%a in (%temp%\codetmp) do (if "%%a" neq "-----BEGIN CERTIFICATE-----" (if "%%a" neq "-----END CERTIFICATE-----" (echo %%a)))) else (echo ����ʧ��)
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
title Base���� - %system%
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
title 8.3���ļ������� - %system%
cls
echo _______________________________________________________________________________
echo [1]��ѯ8.3���ļ���״̬
echo [2]��ֹ8.3���ļ�������
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 64-1
if "%errorlevel%" equ "2" goto 64-2
if "%errorlevel%" equ "3" goto h
goto 64
set name83=
set/p name83=���������ѡ��:
set name83="%name83:|=%"
if !name83!=="1" goto 64-1
if !name83!=="2" goto 64-2
if !name83!=="0" goto h
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
title ����NTFSѹ�� - %system%
cls
set url=
set/p url=������Ҫѹ�����ļ���:
set url="%url:|=%"
dir /ad !url!>nul 2>nul||echo ·�� !url! ����һ���ļ���&&timeout /t 2 /nobreak>nul&&goto 65
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
title �����ļ���ϣֵ - %system%
cls
set url=
set /p url=�����ļ�·��(e=���ز˵�):
if not defined url goto 66
if "%url:~0,1%%url:~-1%" neq """" for /f "delims=" %%a in ('"echo %url%"') do (set url="%%~a")
if /i !url! equ "e" goto h 
if not exist "!url!" echo �ļ�������&timeout /t 2 /nobreak>nul&goto 66
dir /ad !url!>nul 2>nul&&echo ·�� !url! ����һ���ļ�&&timeout /t 2 /nobreak>nul&&goto 66
cls
echo �ļ�: %url%
call :hash %url% md5
echo;
echo MD5:	 %hash%
call :hash %url% sha1
echo SHA-1:	 %hash%
call :hash %url% sha256
echo SHA-256: %hash%
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto h
:67
cls
title ��ʾ���һ��� - %system%
set mainurl=https://api.coincap.io/v2/assets/
set mainurl1=https://api.coincap.io/v2/rates/
echo ���ػ����ļ�(�ܹ�12���ļ�)...
set xzflag=::
set xzflag1=
if exist %systemroot%\system32\curl.exe (set xzflag1=::&set xzflag=)
%xzflag%pushd %temp%
%xzflag%curl -# -o cny.json %mainurl1%chinese-yuan-renminbi -o doge.json %mainurl%dogecoin -o btc.json %mainurl%bitcoin -o eth.json %mainurl%ethereum -o au.json %mainurl1%gold-ounce -o ag.json %mainurl1%silver-ounce -o eur.json %mainurl1%euro -o gbp.json %mainurl1%british-pound-sterling -o jpy.json %mainurl1%japanese-yen -o hkd.json %mainurl1%hong-kong-dollar -o twd.json %mainurl1%new-taiwan-dollar -o xmr.json %mainurl%monero
%xzflag%popd
%xzflag1%bitsadmin /transfer ���ػ����ļ�... /priority FOREGROUND %mainurl1%chinese-yuan-renminbi %temp%\cny.json %mainurl%dogecoin %temp%\doge.json %mainurl%bitcoin %temp%\btc.json %mainurl%ethereum %temp%\eth.json %mainurl1%gold-ounce %temp%\au.json %mainurl1%silver-ounce %temp%\ag.json %mainurl1%euro %temp%\eur.json %mainurl1%british-pound-sterling %temp%\gbp.json %mainurl1%japanese-yen %temp%\jpy.json %mainurl1%hong-kong-dollar %temp%\hkd.json %mainurl1%new-taiwan-dollar %temp%\twd.json %mainurl%monero %temp%\xmr.json
cls
echo ��������ļ�...
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
echo �ƽ�XAU    �� �����CNY
echo 	1  �� !autocny!
echo;
echo ����XAG    �� �����CNY
echo 	1  �� !agtocny!
echo;
echo ��̫��ETH  �� �����CNY
set /p =.!cswz1!        <nul
set /p =1  �� !ethtocny!		24Сʱ�ǵ���: <nul
if "%eth24h:~0,1%" equ "-" (call :colortxt a !eth24h!) else (call :colortxt c !eth24h!)
set /p =%% <nul
echo;
echo;
echo ���ر�BTC  �� �����CNY
set /p =.!cswz1!        <nul
set /p =1  �� !btctocny!		24Сʱ�ǵ���: <nul
if "%btc24h:~0,1%" equ "-" (call :colortxt a !btc24h!) else (call :colortxt c !btc24h!)
set /p =%% <nul
echo;
echo;
echo ���ޱ�XMR  �� �����CNY
set /p =.!cswz1!        <nul
set /p =1  �� !xmrtocny!		24Сʱ�ǵ���: <nul
if "%xmr24h:~0,1%" equ "-" (call :colortxt a !xmr24h!) else (call :colortxt c !xmr24h!)
set /p =%% <nul
echo;
echo;
echo ������DOGE �� �����CNY
set /p =.!cswz1!        <nul
set /p =1  �� !dogetocny!		24Сʱ�ǵ���: <nul
if "%doge24h:~0,1%" equ "-" (call :colortxt a !doge24h!) else (call :colortxt c !doge24h!)
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
echo ����������ز˵�&pause>nul
goto h
:68
cls
title ���������̷� - %system%
echo [1]��·�����̷�����
echo [2]ɾ�������̷�
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" goto 68(1)
if "%errorlevel%" equ "2" goto 68(2)
if "%errorlevel%" equ "3" goto h
goto h
:68(1)
title ��·�����̷����� - %system%
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
if /i !gglj! equ "" goto h 
if not exist "!gllj!" echo ·��������&timeout /t 2 /nobreak>nul&goto 68(1)
dir /ad !gllj!>nul 2>nul||echo ·�� !gllj! ����һ���ļ���&&timeout /t 2 /nobreak>nul&&goto 68(1)
subst %newpf%: %gllj%
if "%errorlevel%" equ "0" (echo �����ɹ�&timeout /t 2 /nobreak>nul&goto 68) else (echo ����ʧ��&timeout /t 2 /nobreak>nul&goto 68)
:68(2)
title ɾ�������̷� - %system%
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
title ��ѹmsi��װ�ļ� - %system%
cls
set msiurl=
set /p msiurl=����msi�ļ�·��(e=���ز˵�):
if not defined msiurl goto h
if "%msiurl:~0,1%%msiurl:~-1%" neq """" for /f "delims=" %%a in ('"echo %msiurl%"') do (set msiurl="%%~a")
if /i !msiurl! equ "e" goto h
if not exist "!msiurl!" echo �ļ�������&timeout /t 2 /nobreak>nul&goto h
dir /ad !msiurl!>nul 2>nul&&echo ·�� !msiurl! ����һ���ļ�&&timeout /t 2 /nobreak>nul&&goto h
for /f "delims=" %%a in ('"echo !msiurl!"') do (if /i "%%~xa" neq ".msi" echo ����msi�ļ�&&timeout /t 2 /nobreak>nul&&goto h)
set msidir=
set /p msidir=����msi�ļ���ѹ·��(Ĭ��·��Ϊmsi�ļ�����·��)(e=���ز˵�):
if not defined msidir for /f "delims=" %%a in ('"echo !msiurl!"') do (set msidir="%%~dpna")
if "%msidir:~0,1%%msidir:~-1%" neq """" for /f "delims=" %%a in ('"echo %msidir%"') do (set msidir="%%~a")
if /i !msidir! equ "e" goto h
echo ��ʼ��ѹ...
if not exist "!msidir!" (msiexec /a !msiurl! /quiet /passive /qn targetdir=!msidir!) else (echo ���ܽ�ѹ���Ѵ��ڵ��ļ���&&timeout /t 2 /nobreak>nul)
rd /s /q %systemdriver%\config.msi>nul 2>nul
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
goto h
:70
title ����CMD����̨ɫ�ʱ� - %system%
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
echo ����������ز˵�&pause>nul
goto h
:71
title KMS����Windows 10 - %system%
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
if defined !sysid! (echo ϵͳ����: %system%) else (call :colortxt c û�е�ǰϵͳ�ļ�����Կ&echo;)
ping /n 1 www.baidu.com>nul||call :colortxt c û����������&echo;
echo ��ѡ��KMS������
echo _______________________________________________________________________________
echo [1]xykz.f3322.org
echo [2]kms.03k.org
echo [0]���ز˵�
echo _______________________________________________________________________________
choice /c 120 /n /m ���������ѡ��:
if "%errorlevel%" equ "1" set server=xykz.f3322.org&goto 71.1
if "%errorlevel%" equ "2" set server=kms.03k.org&goto 71.1
if "%errorlevel%" equ "3" goto h
goto 71
:71.1
cls
set /p =KMS������: <nul
call :colortxt a !server!
echo;
set/p =ϵͳ����: <nul
call :colortxt a %system%
echo;
cscript //Nologo %windir%\system32\slmgr.vbs /ipk !%sysid%!
cscript //Nologo %windir%\system32\slmgr.vbs /skms !server!
cscript //Nologo %windir%\system32\slmgr.vbs /ato
start slmgr.vbs -xpr
echo _______________________________________________________________________________
echo �����ʾ����ʧ��[����: 0xC004F074]��Ӧ����KMS������.
echo ����������ز˵�&pause>nul
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
title ����DOS������ - ��ǰ�汾: %ver% - %system%
if defined gxflag goto startupdate
echo ������°汾...
timeout /t 2 /nobreak>nul
if exist %temp%\dostoolupdate del /f /q %temp%\dostoolupdate>nul 2>nul
set xzflag=::
set xzflag1=
if exist %systemroot%\system32\curl.exe (set xzflag1=::&set xzflag=)
%xzflag%pushd %temp%
%xzflag%curl -# -o dostoolupdate https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js
%xzflag%popd
%xzflag1%certutil -urlcache -split -f https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js %temp%\dostoolupdate
::bitsadmin /transfer ������°汾... /priority FOREGROUND https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/update.js %temp%\dostoolupdate
cls
for /f "delims=: tokens=2" %%a in (%temp%\dostoolupdate) do (set doshash="%%a")
for /f "delims=: tokens=1" %%a in (%temp%\dostoolupdate) do (
set /a gxjg=%%a-!ver!
if !gxjg! gtr 0 (set /p =��鵽���°汾: <nul
call :colortxt a %%a&echo;&goto startupdate) else (echo û�м�鵽���°汾))
del /f /q %temp%\dostoolupdate>nul 2>nul
echo _______________________________________________________________________________
echo ����������ز˵�&pause>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
:startupdate
echo �������ظ���...
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
call :colortxt c �ļ���Ч&echo;&timeout /t 2 /nobreak>nul
if "!tzwz!" equ "!start!" (goto memuv2) else (goto !tzwz!)
::bitsadmin /transfer ���ظ�����... /priority FOREGROUND https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js %weizhi%&start cmd /c %0&exit
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
set a1=���U�����lpk.dll����
set a2=���U�����jwgkvsq.vmx�����������߸ò���
set a3=����ϵͳ����
set a4=��ʾϵͳ��Ϣ
set a5=������������������
set a6=��ʾ�������ļ�(���˸��ಡ����)
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
set a71=KMS����Windows 10
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