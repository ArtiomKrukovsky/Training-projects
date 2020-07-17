using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    using System.Runtime.InteropServices;

    public enum PowerInformationLevel
    {
        SystemReserveHiberFile,
        SystemBatteryState,
        SystemPowerInformation,
        LastWakeTime,
        LastSleepTime = 15
    }

    public class Dlls
    {
        [DllImport("PowrProf.dll", SetLastError = true)]
        public static extern uint CallNtPowerInformation(
            int informaitonLevel,
            IntPtr inputBuffer,
            int inputBufSize,
            IntPtr outputBuffer,
            int outputBufferSize);
    }
}
