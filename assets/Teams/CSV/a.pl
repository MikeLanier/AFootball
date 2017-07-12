@rem = '-*- Perl -*-';
@rem = '
@goto endofperl
';

#($sec, $min, $hour, $mday, $mon, $year, $wday, $yday, $isdst) = localtime( time );
#$year = $year + 1900;
#$mon = $mon + 1;
#$dirname = "backup_".$mon."_".$mday."_".$year."_".$hour."_".$min."_".$sec;
#print "$dirname\n";
#system( "mkdir $dirname" );
#system( "copy * $dirname" );

require "c:\\mike\\tools\\splitpath.pl";

open( FILEHANDLE, $ARGV[0] );

while( $line = <FILEHANDLE> )
{
   chomp $line;
   print "call replace-string-in-file ".$line." \"export\" \"\"\n";
}
close( FILEHANDLE );


__END__
:endofperl
@perl -S %0.bat %1 %2 %3 %4 %5 %6 %7 %8 %9