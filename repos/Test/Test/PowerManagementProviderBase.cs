using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    using System.ComponentModel;
    using System.Runtime.InteropServices;

    public class PowerManagementProviderBase
    {
        protected internal IntPtr AllocateCoTaskBuffer<T>(out int bufferSize)
        {
            bufferSize = Marshal.SizeOf(typeof(T));

            return Marshal.AllocCoTaskMem(bufferSize);
        }

        protected internal void EnsureWin32CallSucceeded(uint returnCode)
        {
            if (returnCode != (uint)0)
            {
                var error = Marshal.GetLastWin32Error();
                throw new Win32Exception($"Win32 function invocation returned with error code: '{error}'");
            }
        }
    }
}
