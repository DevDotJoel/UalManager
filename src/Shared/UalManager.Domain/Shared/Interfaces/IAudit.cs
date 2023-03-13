using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UalManager.Domain.Shared.Interfaces
{
    public interface IAudit
    {
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdateDate { get; set; }
    }
}