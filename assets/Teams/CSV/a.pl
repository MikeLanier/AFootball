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

print "export var ".$ARGV[1]." = {\n";
print "	name: '".$ARGV[1]."',\n";
print "	teams: [\n";

while( $line = <FILEHANDLE> )
{
   chomp $line;
   print "		\"".$line."\",\n";
}
close( FILEHANDLE );

print "		\"\"\n";
print "	]\n";
print "}\n";

__END__
:endofperl
@perl -S %0.bat %1 %2 %3 %4 %5 %6 %7 %8 %9