using System;
using Xunit;

namespace Test.Test
{
    using System.Runtime.InteropServices;
    using System.Xml.Serialization;

    public class UnitTest1: PowerManagementProviderBase
    {
        [Fact]
        public void Test1()
        {
            var result = GetPowerInformationInt64Value(
                PowerInformationLevel.LastSleepTime);

            var milliseconds = GetMillisecondsFromNanosecondsTicks(result);

            var some = TimeSpan.FromMilliseconds(milliseconds);

            //IntPtr outputBuffer = new IntPtr();

            //var returnCode = Dlls.CallNtPowerInformation(
            //    PowerInformationLevel.LastWakeTime,
            //    (IntPtr)null,
            //    0,
            //    outputBuffer,
            //    10);
        }

        private long GetPowerInformationInt64Value(PowerInformationLevel level)
        {
            var outputBuffer = AllocateCoTaskBuffer<long>(out var outputBufferSize);
            try
            {
                // Result returned in count of 100 nanoseconds
                var returnCode = Dlls.CallNtPowerInformation(
                    15,
                    IntPtr.Zero, 
                    0,
                    outputBuffer,
                    24);
                EnsureWin32CallSucceeded(returnCode);

                return Marshal.ReadInt64(outputBuffer, 0);
            }
            finally
            {
                Marshal.FreeCoTaskMem(outputBuffer);
            }
        }

        private long GetMillisecondsFromNanosecondsTicks(long nanosecondsTicks)
        {
            return nanosecondsTicks / 100_000_000;
        }
    }
}
